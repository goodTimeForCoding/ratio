import {createArticleItemTemplate} from '../components/article-temp.js';
import {render} from '../../utils/utils.js';

const renderHomeArticles = (articlesDatum) => {
  const siteMainElement = document.querySelector('.page-main');
  const articlesListElement = siteMainElement.querySelector('.articles__list');
  const articlesItemElement = siteMainElement.querySelector('.articles__item');

  if (articlesItemElement != null) {
    while (articlesListElement.firstChild) {
      articlesListElement.removeChild(articlesListElement.firstChild);
    }
  }

  articlesDatum.forEach((articleData) => {
    render(articlesListElement, createArticleItemTemplate(articleData), 'beforeend');
  });

};

export {renderHomeArticles};
