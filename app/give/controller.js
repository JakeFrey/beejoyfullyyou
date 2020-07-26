import Controller from '@ember/controller';
import { catalog } from 'beejoyfullyyou/utils/catalog';

export default Controller.extend({

    actions: {
        goToGiftCard: function() {
            window.location.replace('https://squareup.com/gift/DGMS7GE5KYQ6J/order');
        },
    },
});
