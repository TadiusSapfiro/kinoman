const createSortMarkup = (filter, isChecked) => {
  const {name} = filter;
  const activeClass = isChecked ? `sort__button--active` : ``;
  return (
    `<li><a href="#" class="sort__button ${activeClass}">Sorted by ${name}</a></li>`
  );
};
export const createSortTemplate = (sort) => {
  const sortMarkup = sort.map((it, i) => createSortMarkup(it, i === 0)).join(`\n`);
  return (
    `<ul class="sort">
        ${sortMarkup}
    </ul>`);
};

