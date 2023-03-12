import {createErrorTemplate} from '../components/error.js';
import {render} from '../../utils/utils.js';

const renderErrorPage = () => {
  const siteMainElement = document.querySelector('.page-main');
  render(siteMainElement, createErrorTemplate(), 'beforeend');
};

export {renderErrorPage};
