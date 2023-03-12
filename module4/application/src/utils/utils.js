const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const remove = (component) => {
  if (component === null) {
    return;
  }
  component.remove();
};

const secToMinConvert = (secTime) => {
  return Math.round(secTime / 60);
};

const removeElements = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const convertSecToDate = (createdDate) => {
  const newDate = new Date(createdDate * 1000);
  const year = newDate.getFullYear();
  let month = newDate.getMonth();
  let date = newDate.getMonth();
  if (month < 10) {
    month = '0' + month;
  }
  if (date < 10) {
    date = '0' + date;
  }
  return year + '-' + month + '-' + date;
};

const convertSecToNewDate = (createdDate) => {
  const newDate = new Date(createdDate * 1000);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const date = newDate.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[month - 1] + ' ' + date + ', ' + year;
};

export {render, remove, secToMinConvert, removeElements, convertSecToDate, convertSecToNewDate};
