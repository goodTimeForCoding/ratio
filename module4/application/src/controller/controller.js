import {loadArticlesData, loadFeaturedData, loadAboutData, loadArticleData} from '../model/fetch.js';
import {renderFeaturedArticleBottom} from '../view/render/featured-article-bottom.js';
import {renderFeaturedArticleTop} from '../view/render/featured-article-top.js';
import {renderHomeArticles} from '../view/render/home-articles.js';
import {renderArticlesContainer} from '../view/render/articles-container.js';
import {renderErrorPage} from '../view/render/error-page.js';
import {renderAboutPage} from '../view/render/about-page.js';
import {renderArticlePage} from '../view/render/article-page.js';
import {removeElements} from '../utils/utils.js';
import {isFullData} from '../const.js';

const homeNavNode = document.querySelector('[data-role=nav-home]');
const blogNavNode = document.querySelector('[data-role=nav-blog]');
const aboutNavNode = document.querySelector('[data-role=nav-about]');
const siteMainElement = document.querySelector('.page-main');

let activeNavNode;

const setActiveNavNode = (node) => {
  if (activeNavNode) {
    activeNavNode.classList.remove('site-list__item--active');
  }
  activeNavNode = node;
  activeNavNode.classList.add('site-list__item--active');
};

const homeRoute = () => {
  siteMainElement.classList.add('page__body--main');
  removeElements(siteMainElement);
  renderArticlesContainer();
  loadFeaturedData(renderFeaturedArticleTop, renderFeaturedArticleBottom);
  loadArticlesData(renderHomeArticles, isFullData.NO);
  setActiveNavNode(homeNavNode);
};

const blogRoute = () => {
  siteMainElement.classList.remove('page__body--main');
  removeElements(siteMainElement);
  renderArticlesContainer();
  loadFeaturedData(renderFeaturedArticleTop);
  loadArticlesData(renderHomeArticles, isFullData.YES);
  setActiveNavNode(blogNavNode);
};

const aboutRoute = () => {
  removeElements(siteMainElement);
  loadAboutData(renderAboutPage);
  setActiveNavNode(aboutNavNode);
};

const articleRoute = (params) => {
  siteMainElement.classList.remove('page__body--main');
  removeElements(siteMainElement);
  if (activeNavNode) {
    activeNavNode.classList.remove('site-list__item--active');
  }
  loadArticleData(renderArticlePage, params);
};

const errorRoute = () => {
  removeElements(siteMainElement);
  renderErrorPage();
};

export {homeRoute, blogRoute, aboutRoute, articleRoute, errorRoute};
