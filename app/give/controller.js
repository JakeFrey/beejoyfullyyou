import Controller from '@ember/controller';
import { catalog } from 'beejoyfullyyou/utils/catalog';

export default Controller.extend({

    /**
       Ember overridden method to initialize __.
       @method init
       @return {void}
    */
    init: function() {
        this._super(...arguments);

        this.set('catalog', catalog);
    },
});
