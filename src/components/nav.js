const createNavMarkup = (filter, isChecked) => {
  const {name, count} = filter;
  const href = name.split(` `, 1)[0].toLowerCase();
  const activeClass = isChecked ? `main-navigation__item--active"` : ``;
  return (
    `<a href="#${href}" class="main-navigation__item ${activeClass}" >${name} <span class="main-navigation__item-count">${count}</span></a>`
  );
};
export const createNavTemplate = (filter) => {
  const navMarkup = filter.map((it, i) => createNavMarkup(it, i === 0)).join(`\n`);
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${navMarkup}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`);
};
