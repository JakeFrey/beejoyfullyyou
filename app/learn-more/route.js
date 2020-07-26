import Route from '@ember/routing/route';

export default Route.extend({

    /**
        Ember hook called when the controller is set up.
        If a content_resource query param is provided, schedule an event
        to scroll to that resource once rendered.
        @method setupController
        @param {ZybookSectionController} controller The controller.
        @return {void}
    */
    setupController: function(controller) {
        this._super(...arguments);

        window.scrollTo(0, 0);
    },

    model: function(params) {
        this.controllerFor('learn-more').set('productType', params.type);
    },
});
