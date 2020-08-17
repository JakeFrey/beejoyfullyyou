import Controller from '@ember/controller';
import { catalog } from 'beejoyfullyyou/utils/catalog';

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

    resetActiveCollectionImage: function() {
        window.scrollTo(0, 0);
        this.set('activeCollectionImage', null);
    }.observes('activeCollection'),

    limitedEditionCollections: [
        {
            title: 'Everyday beauty LipSense Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Velvet LipSense</li><li>Milk Rose LipSense</li><li>Beige Cream LipSense</li><li>Matte Gloss – Free!</li><li>Ivory Organza Bag – Free!</li></ul><p>*All colors can be purchased individually for $25</p>',
            imgName: 'everyday_beauty',
            images: [ 'everyday_beauty', 'description', 'velvet', 'milk_rose', 'beige_cream' ],
            price: 75,
            value: 100,
        },
        {
            title: 'Big City ShadowSense Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Brownstone Shimmer ShadowSense</li><li>Brights Lights Glitter ShadowSense</li><li>Burgundy ShadowSense</li><li>Burgundy Metallic Bag – Free!</li></ul><p>*All colors can be purchased individually for $22</p>',
            imgName: 'big_city_shadowsense',
            images: [ 'big_city_shadowsense', 'description', 'brownstone_shimmer', 'bright_lights_glitter', 'burgundy' ],
            price: 66,
        },
        {
            title: 'Big City LipSense Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Big Apple LipSense ($25)</li><li>Broadway Bronze LipSense ($25)</li><li>Manhattan Mauve LipSense ($25)</li><li>Brooklyn Gloss ($20)</li><li>Ooops! Lip Color Remover – Free!</li><li>Burgundy Metallic Bag – Free!</li></ul><p>*All colors can be purchased individually</p>',
            imgName: 'big_city',
            images: [ 'big_city', 'description', 'big_apple', 'broadway_bronze', 'manhattan_mauve', 'brooklyn' ],
            price: 95,
            value: 110,
        },
        {
            title: 'Color Surge ShadowSense Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Fiery Coral Shimmer ShadowSense</li><li>Plasma Pink ShadowSense</li><li>Amped Up Orange ShadowSense</li><li>Neon Green Shimmer ShadowSense</li><li>Neon Green Bag – Free!</li></ul><p>*All colors can be purchased individually for $22</p>',
            imgName: 'color_surge',
            images: [ 'color_surge', 'fiery_coral_shimmer', 'plasma_pink', 'amped_up_orange', 'neon_green_shimmer' ],
            price: 88,
        },
        {
            title: 'California Dreamin’ LipSense Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Sunshine LipSense ($25)</li><li>Boysenberry LipSense ($25)</li><li>Citrus Grove Gloss ($20)</li><li>Ooops! Lip Color Remover – Free!</li><li>Mint Glitter Bag – Free!</li></ul><p>*All colors can be purchased individually</p>',
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
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Bella Matte Gloss</li><li>Cream Matte Gloss</li><li>Hazel Matte Gloss</li><li>Praline Matte Gloss</li><li>Brown Glitter Bag – Free!</li></ul><p>*All colors can be purchased individually for $20</p>',
            imgName: 'satin_matte',
            images: [ 'satin_matte', 'description', 'bella_matte', 'cream_matte', 'hazel_matte', 'praline_matte' ],
            price: 80,
        },
        {
            title: 'In Bloom Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Red Lantern LipSense ($25)</li><li>Cherry Blossom Gloss ($20)</li><li>Moonbeam Shimmer ShadowSense ($22)</li><li>Ooops! Lip Color Remover – Free!</li><li>Metallic White Bag – Free!</li></ul><p>*All items can be purchased individually</p>',
            imgName: 'in_bloom',
            images: [ 'in_bloom', 'red_lantern', 'cherry_blossom', 'moonbeam_shimmer' ],
            price: 67,
            value: 82,
        },
        {
            title: 'Mini Pearlizer Get Glowing Collection',
            description: '<p>This Limited Edition Collection includes:</p><ul><li>Moonstone Mini Pearlizer</li><li>Firefly Mini Pearlizer</li><li>Ember Mini Pearlizer</li><li>Clear Holographic Bag – Free!</li></ul><p>*All colors can be purchased individually for $30</p>',
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
