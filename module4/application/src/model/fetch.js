import {showAlert} from '../view/alerts.js';
import {ALERT_SHOW_TIME, Urls} from '../const.js';

const loadArticlesData = (renderArticles, isFullData) => {
  fetch(Urls.ARTICLES)
    .then((response) => response.json())
    .then((data) => {
      isFullData ? renderArticles(data) : renderArticles(data.slice(0, 3));
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные с сервера', ALERT_SHOW_TIME);
    });
};

const loadFeaturedData = (renderFeaturedAticleTop, renderFeaturedAticleBottom = null) => {
  fetch(Urls.FEATURED)
    .then((response) => response.json())
    .then((data) => {
      if (renderFeaturedAticleBottom) {
        renderFeaturedAticleTop(data);
        renderFeaturedAticleBottom(data);
      }
      renderFeaturedAticleTop(data);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные с сервера', ALERT_SHOW_TIME);
    });
};

const loadAboutData = (renderAboutPage) => {
  fetch(Urls.ABOUT)
    .then((response) => response.json())
    .then((data) => {
      renderAboutPage(data);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные с сервера', ALERT_SHOW_TIME);
    });
};

const loadArticleData = (renderArticle, id) => {
  fetch(Urls.ARTICLE + id)
    .then((response) => response.json())
    .then((data) => {
      renderArticle(data);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные с сервера', ALERT_SHOW_TIME);
    });
};

export {loadArticlesData, loadFeaturedData, loadAboutData, loadArticleData};
