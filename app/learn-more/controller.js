import Controller from '@ember/controller';
import { catalog } from 'beejoyfullyyou/utils/catalog';

export default Controller.extend({

    productLine: function() {
        return catalog.findBy('name', this.get('productType'));
    }.property('productType'),
});
