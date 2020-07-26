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

    limitedEditionCollections: [
        {
            title: 'California Dreamin’ LipSense Collection',
            description: '<p>SeneGence Limited Edition ShadowSense Posh Pastels Collection includes:</p><ul><li>Boysenberry LipSenseSunshine LipSense</li><li>Citrus Grove Gloss</li><li>Ooops! Lip Color Remover – Free!</li><li>Mint Glitter Bag – Free!</li></ul><p>*All colors can be purchased for $25 individually</p>',
            imgName: 'california_dreaming',
            images: [ 'california_dreaming', 'CD', 'CD 1', 'CD 2', 'CD 3' ],
            price: 85,
        },
    ],

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
