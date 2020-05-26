import Controller from '@ember/controller';
import { catalog } from 'beejoyfullyyou/utils/catalog';

export default Controller.extend({

    reset: function() {
        this.set('activeProduct', null);
    },

    productType: null,

    productLine: function() {
        return catalog.findBy('name', this.get('productType'));
    }.property('productType'),

    activeProduct: null,

    disableScroll: function() {
        if (this.get('activeProduct')) {
            Ember.$('body').addClass('noscroll');
        }
        else {
            Ember.$('body').removeClass('noscroll');
        }
    }.observes('activeProduct'),

    actions: {
        previousProduct: function() {
            const currentIndex = this.get('productLine.products').indexOf(this.get('activeProduct'));
            const previousProduct = currentIndex === 0 ?
                  this.get('productLine.products').objectAt(this.get('productLine.products').length - 1) :
                  this.get('productLine.products').objectAt(currentIndex - 1);

            this.set('activeProduct', previousProduct);
        },

        nextProduct: function() {
            const currentIndex = this.get('productLine.products').indexOf(this.get('activeProduct'));
            const nextProduct = currentIndex >= this.get('productLine.products').length - 1 ?
                  this.get('productLine.products').objectAt(0) :
                  this.get('productLine.products').objectAt(currentIndex + 1);

            this.set('activeProduct', nextProduct);
        },
    },
});
