import { showAlert } from '../view/alerts.js';
import { ALERT_SHOW_TIME, Urls } from '../const.js';

const loadArticlesData = async (renderArticles, isFullData) => {
  try {
    const response = await fetch(Urls.ARTICLES);
    const data = await response.json();
    isFullData ? renderArticles(data) : renderArticles(data.slice(0, 3));
  } catch(e) {
    showAlert('Не удалось загрузить данные с сервера', ALERT_SHOW_TIME);
  }
};

const loadFeaturedData = async (renderFeaturedAticleTop, renderFeaturedAticleBottom = null) => {
  try {
    const response = await fetch(Urls.FEATURED);
    const data = await response.json();
    if (renderFeaturedAticleBottom) {
      renderFeaturedAticleTop(data);
      renderFeaturedAticleBottom(data);
    }
    renderFeaturedAticleTop(data);
  } catch(e) {
    showAlert('Не удалось загрузить данные с сервера', ALERT_SHOW_TIME);
  }
};

const loadAboutData = async (renderAboutPage) => {
  try {
    const response = await fetch(Urls.ABOUT);
    const data = await response.json();
    renderAboutPage(data);
  } catch(e) {
    showAlert('Не удалось загрузить данные с сервера', ALERT_SHOW_TIME);
  }
};

const loadArticleData = async (renderArticle, id) => {
  try {
    const response = await fetch(Urls.ARTICLE + id);
    const data = await response.json();
    const responsePrevData = await fetch(Urls.ARTICLE + data.prevId);
    const prevData = await responsePrevData.json();
    const responseNextData = await fetch(Urls.ARTICLE + data.nextId);
    const nextData = await responseNextData.json();
    renderArticle(data, prevData.title, nextData.title);
  } catch(e) {
    showAlert('Не удалось загрузить данные с сервера', ALERT_SHOW_TIME);
  }
};

export { loadArticlesData, loadFeaturedData, loadAboutData, loadArticleData };
