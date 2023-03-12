import {createArticleTemplate} from '../components/article-detail.js';
import {render} from '../../utils/utils.js';

const renderArticlePage = (articleDatum) => {
  const siteMainElement = document.querySelector('.page-main');
  render(siteMainElement, createArticleTemplate(articleDatum), 'beforeend');
};

export {renderArticlePage};
