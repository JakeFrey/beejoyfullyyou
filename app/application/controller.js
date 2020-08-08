import $ from 'jquery';
import { bind, next } from '@ember/runloop';
import Controller from '@ember/controller';

export default Controller.extend({


    /**
       Ember overridden method to initialize __.
       @method init
       @return {void}
    */
    init: function() {
        this._super(...arguments);

        $(window).on('resize', bind(this, this.handleResize));
        this.handleResize();
    },

    mobileScreen: false,

    /**
       Function called when the window is resized. Checks if the menu items need to be collapsed
       @event handleResize
       @return {void}
    */
    handleResize: function() {
        const mobileWidth = 1000;

        if (!(this.get('isDestroyed') || this.get('isDestroying'))) {
            this.set('mobileScreen', $(window).width() <= mobileWidth);
        }
    },

    showNavMenu: false,

    /**
       Computed property that generates a class name for the main HTML tag
       defined by the current route.
       @event mainClassName
       @param {String} currentRouteName Injected into controller by Ember.
       @return {Boolean}
    */
    mainClassName: function() {
        const dashedRouteName = this.get('currentRouteName').replace(/[._]/g, '-');

        return `${dashedRouteName}-page`;
    }.property('currentRouteName'),

    actions: {

        linkClicked: function(route) {
            this.set('showNavMenu', false);

            this.transitionToRoute(route);
        },
    }
});
