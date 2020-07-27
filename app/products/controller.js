import Controller from '@ember/controller';
import { catalog } from 'beejoyfullyyou/utils/catalog';

export default Controller.extend({

    reset: function() {
        this.set('activeProduct', null);
        this.set('activeCollection', null);
        this.set('activeCollectionImage', null);
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

    resetActiveCollectionImage: function() {
        this.set('activeCollectionImage', null);
    }.observes('activeCollection'),

    limitedEditionCollections: [
        {
            title: 'California Dreamin’ LipSense Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Sunshine LipSense</li><li>Boysenberry LipSense</li><li>Citrus Grove Gloss</li><li>Ooops! Lip Color Remover – Free!</li><li>Mint Glitter Bag – Free!</li></ul><p>*All colors can be purchased individually (LipSense $25, gloss $20)</p>',
            imgName: 'california_dreaming',
            images: [ 'california_dreaming', 'description', 'sunshine', 'boysenberry', 'citrus_grove' ],
            price: 70,
            value: 85,
        },
        {
            title: 'California Dreamin’ ShadowSense Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Desert Rose ShadowSense</li><li>Sunbaked Shimmer ShadowSense</li><li>Sea Breeze Shimmer ShadowSense</li><li>Mint Glitter Bag – Free!</li></ul><p>*All colors can be purchased individually for $22</p>',
            imgName: 'cd_shadowsense',
            images: [ 'cd_shadowsense', 'description', 'desert_rose', 'sunbaked_shimmer', 'sea_breeze_shimmer' ],
            price: 66,
        },
        {
            title: 'Satin Matte Nude Gloss Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Bella Matte Gloss</li><li>Cream Matte Gloss</li><li>Hazel Matte Gloss</li><li>Praline Matte Gloss</li><li>Brown Glitter Bag – Free!</li></ul><p>*All colors can be purchased for $20 individually</p>',
            imgName: 'satin_matte',
            images: [ 'satin_matte', 'description', 'bella_matte', 'cream_matte', 'hazel_matte', 'praline_matte' ],
            price: 80,
        },
        {
            title: 'In Bloom Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Red Lantern LipSense</li><li>Cherry Blossom Gloss</li><li>Moonbeam Shimmer ShadowSense</li><li>Ooops! Lip Color Remover – Free!</li><li>Metallic White Bag – Free!</li></ul><p>*All items can be purchased individually</p>',
            imgName: 'in_bloom',
            images: [ 'in_bloom', 'red_lantern', 'cherry_blossom', 'moonbeam_shimmer' ],
            price: 67,
            value: 82,
        },
        {
            title: 'Mini Pearlizer Get Glowing Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Moonstone Mini Pearlizer</li><li>Firefly Mini Pearlizer</li><li>Ember Mini Pearlizer</li><li>Clear Holographic Bag – Free!</li></ul><p>*All colors can be purchased for $30 individually</p>',
            imgName: 'get_glowing',
            images: [ 'get_glowing', 'moonstone', 'firefly', 'ember' ],
            price: 90,
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
