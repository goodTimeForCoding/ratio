import {secToMinConvert, convertSecToDate, convertSecToNewDate} from '../../utils/utils.js';

export const createArticleItemTemplate = (articleData) => {

  const {author, createdAt, description, id, readTime, tag, title} = articleData;
  const time = secToMinConvert(readTime);
  const createDate = convertSecToDate(createdAt);
  const createClientDate = convertSecToNewDate(createdAt);

  return `<li class="article articles__item">
    <div class="article__wrap articles__item-wrap"><a class="article__link" href="#article/${id}">
        <h3 class="article__header">${title}</h3>
      </a>
      <p class="article__tag">${tag}</p><small class="article__author">${author} &#8226; <time
          datetime="${createDate}">${createClientDate}</time>(${time} mins read)</small>
      <div class="article__text articles__text">${description}</div>
    </div><a class="articles__item-img-link" href="#article/${id}"><img class="articles__item-img" src="https://random.imagecdn.app/370/300"
        width="370" height="300" alt="Minimalism image"></a>
  </li>`;
};
