import Route from '@ember/routing/route';

export default Route.extend({
    
    setupController: function(controller) {
        this._super(...arguments);

        window.scrollTo(0, 0);
    },
});
