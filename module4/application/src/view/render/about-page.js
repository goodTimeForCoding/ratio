import {createAboutTemplate} from '../components/about.js';
import {render} from '../../utils/utils.js';

const renderAboutPage = (aboutDatum) => {
  const siteMainElement = document.querySelector('.page-main');
  render(siteMainElement, createAboutTemplate(aboutDatum), 'beforeend');
};

export {renderAboutPage};
