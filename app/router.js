import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('home');

    this.route('catalog', { path: 'catalog' });
    this.route('products', { path: '/:type' });

    this.route('contact');
});

export default Router;
