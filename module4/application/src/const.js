const ARTICLE_COUNT = 3;

const ALERT_SHOW_TIME = 3000;

const Urls = {
  ABOUT: 'https://course.vue.panfilov.academy/rest/v1/about',
  ARTICLES: 'https://course.vue.panfilov.academy/rest/v1/blog/articles',
  ARTICLE: 'https://course.vue.panfilov.academy/rest/v1/blog/article/',
  FEATURED: 'https://course.vue.panfilov.academy/rest/v1/blog/featured',
};

const Pages = {
  HOME: 'home',
  ARTICLE: 'article',
  BLOG: 'blog',
}

const ArticlePositions = {
  TOP: 'TOP',
  BOTTOM: 'BOTTOM',
};

const isFullData = {
  YES: true,
  NO: false,
};

export {ARTICLE_COUNT, Urls, ALERT_SHOW_TIME, Pages, ArticlePositions, isFullData};
