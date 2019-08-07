import Controller from '@ember/controller';

export default Controller.extend({

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
});
