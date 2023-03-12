import {createBoardTemplate} from '../components/board.js';
import {render} from '../../utils/utils.js';

const renderArticlesContainer = () => {
  const siteMainElement = document.querySelector('.page-main');
  const articlesContainerElement = siteMainElement.querySelector('.articles');
  if (articlesContainerElement != null) {
    articlesContainerElement.remove();
  }
  render(siteMainElement, createBoardTemplate(), 'beforeend');
};

export {renderArticlesContainer};
