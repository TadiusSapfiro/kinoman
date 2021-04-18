import {createProfileTemplate} from "./view/profile.js";
import {createNavTemplate} from "./view/nav.js";
import {createSortTemplate} from "./view/sort.js";
import {createContentTemplate} from "./view/content.js";
import {createFilmListTemplate} from "./view/film-list.js";
import {createFilmsExtraRatedTemplate} from "./view/films-extra-rated.js";
import {createFilmsExtraCommentedTemplate} from "./view/films-extra-commented.js";
import {createCardTemplate} from "./view/card.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";

import {generateFilters} from "./mock/nav.js";
import {generateSorts} from "./mock/sort.js";
import {generateCards} from "./mock/card.js";
// мок-данные
const filters = generateFilters();
const sorts = generateSorts();

import {Count} from "./const.js";
// рендеринг компонентов
const render = (container, template, place = `beforeend`) =>{
  container.insertAdjacentHTML(place, template);
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
for (let i = 0; i < Count.CARD; i++) {
  render(filmListContainerElement, createCardTemplate());
}
render(filmListElement, createShowMoreButtonTemplate());


const filmListExtraContainerElement = contentElement.querySelectorAll(`.films-list--extra .films-list__container`);

filmListExtraContainerElement.forEach((container) =>{
  for (let i = 0; i < Count.EXTRA_CARD; i++) {
    render(container, createCardTemplate());
  }
});


