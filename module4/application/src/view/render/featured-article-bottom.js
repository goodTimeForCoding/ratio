import {createFeaturedArticleTemplate} from '../components/featured-article.js';
import {render} from '../../utils/utils.js';
import {ArticlePositions} from '../../const.js';

const renderFeaturedArticleBottom = (featuredDatum) => {
  const siteMainElement = document.querySelector('.page-main');
  const articlesContainerElement = siteMainElement.querySelector('.articles');
  const featuredArticleElement = siteMainElement.querySelector('.article__bottom');
  const bgStyleElement = siteMainElement.querySelector('#bg-img');
  if (featuredArticleElement != null) {
    featuredArticleElement.remove();
    bgStyleElement.remove();
  }
  render(articlesContainerElement, createFeaturedArticleTemplate(featuredDatum, ArticlePositions.BOTTOM), 'afterend');
};

export {renderFeaturedArticleBottom};
