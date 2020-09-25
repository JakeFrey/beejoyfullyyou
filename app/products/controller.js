import Controller from '@ember/controller';
import { catalog } from 'beejoyfullyyou/utils/catalog';
import { limitedEditions } from 'beejoyfullyyou/utils/limited-edition';

export default Controller.extend({

    reset: function() {
        this.set('activeProduct', null);
        this.set('activeCollection', null);
        this.set('activeCollectionImage', null);

        window.scrollTo(0, 0);
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

    limitedEditionCollections: null,

    resetActiveCollectionImage: function() {
        window.scrollTo(0, 0);
        this.set('activeCollectionImage', null);
    }.observes('activeCollection'),

    init: function() {
        this._super(...arguments);

        this.set('limitedEditionCollections', limitedEditions);
    },

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

        previousCollectionImage: function() {
            const activeCollectionImage = this.activeCollectionImage || this.activeCollection.images[0];
            const currentIndex = this.get('activeCollection.images').indexOf(activeCollectionImage);
            const previousProduct = currentIndex === 0 ?
                  this.get('activeCollection.images').objectAt(this.get('activeCollection.images').length - 1) :
                  this.get('activeCollection.images').objectAt(currentIndex - 1);

            this.set('activeCollectionImage', previousProduct);
        },

        nextCollectionImage: function() {
            const activeCollectionImage = this.activeCollectionImage || this.activeCollection.images[0];
            const currentIndex = this.get('activeCollection.images').indexOf(activeCollectionImage);
            const nextProduct = currentIndex >= this.get('activeCollection.images').length - 1 ?
                  this.get('activeCollection.images').objectAt(0) :
                  this.get('activeCollection.images').objectAt(currentIndex + 1);

            this.set('activeCollectionImage', nextProduct);
        },
    },
});
