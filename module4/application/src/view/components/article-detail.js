import {convertSecToDate, convertSecToNewDate} from '../../utils/utils.js';

export const createArticleTemplate = (data) => {

  const {author, createdAt, description, nextId, prevId, readTime, title, tag} = data;
  const {name, about, nick} = author;
  const nextItem = nextId ? nextId : 1;
  const prevItem = prevId ? prevId : 9;
  const createDate = convertSecToDate(createdAt);
  const createNewDate = convertSecToNewDate(createdAt);

  return `<section class="article-detail">
  <h1 class="visually-hidden">Full info about article</h1>
    <div class="article-detail__banner">
      <picture>
        <source media="(min-width: 1366px)" srcset="assets/Article-top-Image(desktop).jpg">
        <source media="(min-width: 768px)" srcset="assets/Article-top-Image(tablet).jpg"><img
          class="article-detail__img" src="assets/Article-top-Image(mobile).jpg" alt="Article banner image">
      </picture>
    </div>
    <div class="article-detail__info">
      <h2 class="article-detail__header">${title}</h2>
      <small class="article-detail__brief-inform">${name} &#8226; <time datetime="${createDate}">${createNewDate}</time>(${readTime}
        mins read)<br></small><small class="article-detail__tag">#${tag.name}</small>
        <div class="article-detail__text">${description}</div>
    </div>
    <div class="article-detail__author author">
      <h2 class="author__header">ABOUT THE AUTHOR</h2>
      <div class="author__wrap">
        <div class="author__avatar">
            <img class="author__img" src="assets/Profile-Picture.png" alt="${name} avatar">
        </div>
        <div class="author__info">
          <p class="author__name">${name}</p><small class="author__email">@${nick}</small>
        </div>
        <p class="author__text">${about}</p>
      </div>
    </div>
  </section>
  <div class="article-slider article-slider__wrap">
    <a class="article-slider__link" href="#article/${prevItem}">
      <span class="article-slider__btn-text article-slider__back-btn-text">Go back: <b>Boom boom pow is et Letstrade.</b></span>
    </a>
    <form action="#article/${prevItem}" style="position:absolute">
      <button class="button article-slider__button article-slider__button-back"
      type="submit"><img src="assets/Back-Button.svg" alt="back button"></button>
    </form>
    <a class="article-slider__link" href="#article/${nextItem}">
      <span class="article-slider__btn-text article-slider__next-btn-text">Next up: <b>Lorem ipsum so Ceat Riak.</b></span>
    </a>
    <form action="#article/${nextItem}" style="position:absolute; right:0px">
      <button class="button article-slider__button article-slider__button-next" type="submit"><img
      src="assets/Next-Button.svg" alt="next button"></button>
    </form>
  </div>`;
};
