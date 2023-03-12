import {homeRoute, blogRoute, aboutRoute, articleRoute, errorRoute} from '../controller/controller.js';
import {addBurgerFunction} from '../view/burger.js';

const getRouteInfo = () => {
  const hash = location.hash ? location.hash.slice(1) : '';
  const [name, id] = hash.split('/');

  return {name, params: {id}};
};

const handleHash = () => {
  //информация о текущем маршруте
  const {name, params} = getRouteInfo();

  if (name) {
    const routeName = name;
    const id = params.id;
    switch (routeName) {
      case '':
        homeRoute();
        break;
      case 'home':
        homeRoute();
        break;
      case 'blog':
        blogRoute();
        break;
      case 'about':
        aboutRoute();
        break;
      case 'article':
        articleRoute(id);
        break;
      default:
        errorRoute();
        break;
    }
  }
};

const init = () => {
  if (getRouteInfo().name === '') {
    document.location = '#home';
  }
  addBurgerFunction();
  addEventListener('hashchange', handleHash);
  handleHash();
};

export {init};
