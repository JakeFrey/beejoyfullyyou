import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('catalog', { path: 'catalog' });
    this.route('products', { path: '/:type' });
    this.route('learn-more', { path: '/:type/learn_more' });

    this.route('contact');
    this.route('about');
    this.route('links');
    this.route('give');
});

export default Router;
