import {createFeaturedArticleTemplate} from '../components/featured-article.js';
import {render} from '../../utils/utils.js';
import {ArticlePositions} from '../../const.js';

const renderFeaturedArticleTop = (featuredDatum) => {
  const siteMainElement = document.querySelector('.page-main');
  const articlesContainerElement = siteMainElement.querySelector('.articles');
  const featuredArticleElementTop = siteMainElement.querySelector('.article__custom');
  const bgStyleElement = siteMainElement.querySelector('#bg-img');
  if (featuredArticleElementTop != null) {
    featuredArticleElementTop.remove();
    bgStyleElement.remove();
  }
  render(articlesContainerElement, createFeaturedArticleTemplate(featuredDatum, ArticlePositions.TOP), 'beforebegin');
};

export {renderFeaturedArticleTop};
