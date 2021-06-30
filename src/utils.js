// вернуть рандомный элемент из массива и удалить этот элемент
export const getUniqueArrayItem = (arr) => {
  let arrLength = arr.length - 1;
  let get = arr.splice(getRandomInteger(0, arrLength), 1);
  return get[0];
};

export const getRandomInteger = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomDate = (yearsOld = 80) => {
  const MINUTES_IN_YEAR = 525600;
  const MINUTES_OLD = MINUTES_IN_YEAR * yearsOld;
  const targetDate = new Date();
  const diffValue = getRandomInteger(0, MINUTES_OLD);

  targetDate.setMinutes(targetDate.getMinutes() - diffValue);

  return targetDate;
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length);
  return array[randomIndex];
};

// Возвращает массив состоящий от min до max уникальных имен из определенного массива
export const getSetOfItemsFromArray = (arr, min = 2, max = 4) => {
  const length = getRandomInteger(min, max);
  const newArr = arr.slice();
  let names = [];
  for (let i = 0; i < length; i++) {
    names.push(getUniqueArrayItem(newArr));
  }
  return names;
};

export const addClosePopupListener = (closeBtnElement, popupElement) => {
  const closePopup = () => {
    popupElement.remove();
  };
  closeBtnElement.addEventListener(`click`, closePopup);
  closeBtnElement.addEventListener(`keyup`, function (evt) {
    if (evt.code === `Enter`) {
      closePopup();
    }
  });
  document.addEventListener(`keyup`, function (evt) {
    if (evt.code === `Escape`) {
      closePopup();
    }
  });
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const render = (container, element, place = `beforeend`) => {
  switch (place) {
    case `afterbegin`:
      container.prepend(element);
      break;
    case `beforeend`:
      container.append(element);
      break;
  }
};
