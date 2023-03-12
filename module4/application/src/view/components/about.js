export const createAboutTemplate = (data) => {

  const {content, title} = data;

  return `<section class="about about__wrap">
  <h1 class="about__header">${title}</h1>
  <div class="about__text">${content}</div>
</section>`;
};
