export const createCardTemplate = (card) => {
  const {title, rating, year, duration, genres, photo, description, comments, inWatchList, isWatched, isFavorite} = card;
  const watchListActive = inWatchList ? `film-card__controls-item--active"` : ``;
  const watchedActive = isWatched ? `film-card__controls-item--active"` : ``;
  const favoriteActive = isFavorite ? `film-card__controls-item--active"` : ``;
  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genres[0]}</span>
      </p>
      <img src="images/posters/${photo}.jpg" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchListActive}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedActive}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteActive}">Mark as favorite</button>
      </form>
    </article>`);
};
