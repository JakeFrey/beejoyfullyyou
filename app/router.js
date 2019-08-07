import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('senegence');

    // TODO make these sub routes??
    this.route('products');

    this.route('products/lipsense');
    this.route('products/shadow-sense');
    this.route('products/color-correcting-tinted-moisturizer');

    this.route('arbonne');
});

export default Router;
