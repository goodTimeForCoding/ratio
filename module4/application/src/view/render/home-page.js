import {createBoardTemplate} from '../components/board.js';
import {createArticleTopTemplate} from './components/article-top';
import {createArticleItemTemplate} from './components/article-item';
import {createArticleBottomTemplate} from './components/article-bottom';
import {render} from '../../utils/utils.js';
import {ARTICLE_COUNT} from '../../const.js';

const renderHomePage = (articleDatum, featuredDatum) => {
  const siteMainElement = document.querySelector('.page-main');

  render(siteMainElement, createArticleTopTemplate(featuredDatum), 'beforeend');
  render(siteMainElement, createBoardTemplate(), 'beforeend');

  const articleListElement = siteMainElement.querySelector('.articles__list');

  for (let i = 0; i < ARTICLE_COUNT; i++) {
    render(articleListElement, createArticleItemTemplate(articleDatum), 'beforeend');
  }

  render(siteMainElement, createArticleBottomTemplate(featuredDatum), 'beforeend');
};

export {renderHomePage};
