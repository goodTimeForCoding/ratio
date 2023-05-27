import {createArticleTemplate} from '../components/article-detail.js';
import {render} from '../../utils/utils.js';

const renderArticlePage = (articleDatum, prevArticleDatum, nextArticleDatum) => {
  const siteMainElement = document.querySelector('.page-main');
  render(siteMainElement, createArticleTemplate(articleDatum, prevArticleDatum, nextArticleDatum), 'beforeend');
};

export {renderArticlePage};
