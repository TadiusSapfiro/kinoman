import {render, addClosePopupListener} from "./utils.js";
import {createProfileTemplate} from "./components/profile.js";
import {createNavTemplate} from "./components/nav.js";
import {createSortTemplate} from "./components/sort.js";
import {createContentTemplate} from "./components/content.js";
import {createFilmListTemplate} from "./components/film-list.js";
import {createFilmsExtraRatedTemplate} from "./components/films-extra-rated.js";
import {createFilmsExtraCommentedTemplate} from "./components/films-extra-commented.js";
import {createCardTemplate} from "./components/card.js";
import {createDetailsTemplate} from "./components/details.js";
import {createShowMoreButtonTemplate} from "./components/show-more-button.js";

import {generateFilters} from "./mock/nav.js";
import {generateSorts} from "./mock/sort.js";
import {generateCards} from "./mock/card.js";
// мок-данные
const filters = generateFilters();
const sorts = generateSorts();

import {Count} from "./const.js";
// рендеринг компонентов


// Рендеринг карточек
const cards = generateCards(Count.ALL_CARDS);
// const cards = generateCards(0);

const renderCards = (startIndex, endIndex) => {
  cards.slice(startIndex, endIndex).map((card) => {
    const index = cards.indexOf(card);
    render(filmListContainerElement, createCardTemplate(card, index));
  });
};


const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

render(siteHeaderElement, createProfileTemplate());
render(siteMainElement, createNavTemplate(filters));
render(siteMainElement, createSortTemplate(sorts));
render(siteMainElement, createContentTemplate());

const contentElement = siteMainElement.querySelector(`.films`);

render(contentElement, createFilmListTemplate());
render(contentElement, createFilmsExtraRatedTemplate());
render(contentElement, createFilmsExtraCommentedTemplate());

const filmListElement = contentElement.querySelector(`.films-list`);
const filmListContainerElement = contentElement.querySelector(`.films-list__container`);

let showingCardsCount = Count.CARD;
renderCards(0, showingCardsCount);

render(filmListElement, createShowMoreButtonTemplate());


// const filmListExtraContainerElement = contentElement.querySelectorAll(`.films-list--extra .films-list__container`);
//
// filmListExtraContainerElement.forEach((container) =>{
//   for (let i = 0; i < Count.EXTRA_CARD; i++) {
//     render(container, createCardTemplate());
//   }
// });

// обработчики событий

// событие по нажатию кнопки загрузить еще
const loadMoreButton = filmListElement.querySelector(`.films-list__show-more`);
const showMoreCards = () => {
  const prevCardCount = showingCardsCount;
  showingCardsCount += Count.SHOWING_BY_BUTTON;

  renderCards(prevCardCount, showingCardsCount);

  if (showingCardsCount >= cards.length) {
    loadMoreButton.remove();
  }
};
loadMoreButton.addEventListener(`click`, showMoreCards);

// открытие подробной информации о фильме принажатии на карточку
function onCardClick(evt) {
  // проверка для делегирования
  const showDetailsBtn = evt.target.closest(`.film-card__comments`);
  if (!showDetailsBtn && !filmListContainerElement.contains(showDetailsBtn)) {
    return;
  }
  const closestCard = evt.target.closest(`.film-card`);
  const index = closestCard.getAttribute(`data-index`);
  const siteBodyElement = document.querySelector(`body`);
  const siteHtmlElement = document.querySelector(`html`);
  siteHtmlElement.style.overflow = `hidden`;
  render(siteBodyElement, createDetailsTemplate(cards[index]));
  // добавляю обработчик закрытия модалки
  const detailsClose = document.querySelector(`.film-details__close-btn`);
  const detailsElement = document.querySelector(`.film-details`);
  addClosePopupListener(detailsClose, detailsElement);

}
filmListContainerElement.addEventListener(`click`, onCardClick);
