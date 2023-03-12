import {secToMinConvert, convertSecToDate, convertSecToNewDate} from '../../utils/utils.js';

export const createFeaturedArticleTemplate = (data, position) => {

  const {image, title, tag, author, readTime, createdAt, description, id} = data;
  const time = secToMinConvert(readTime);
  const sectionAtr = (position === 'TOP') ? '<section class="article article__custom">' : '<section class="article article__custom article__bottom">';
  const createDate = convertSecToDate(createdAt);
  const createClientDate = convertSecToNewDate(createdAt);

  return `
  <style id="bg-img">
  @media (min-width: 768px) {
    .article__custom {
      background-image: url(${image});
    }
  }
  </style>
  ${sectionAtr}
  <h2 class="visually-hidden">Top article</h2>
  <div class="article__wrap">
    <a class="article__link" href="#article/${id}">
      <h3 class="article__header">${title.slice(17)}</h3>
    </a>
    <p class="article__tag">${tag}</p><small class="article__author">${author} &#8226; <time
        datetime="${createDate}">${createClientDate}</time> (${time} mins read)</small>
    <p class="article__text">${description}</p>
  </div>
</section>`;
};
