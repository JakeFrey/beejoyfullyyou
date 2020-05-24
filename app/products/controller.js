import Controller from '@ember/controller';

export default Controller.extend({

    /**

     */
    category: {
        name: 'Lipsense',
        description: 'This is my description. No smudge or budge!',
        products: [
            {
                name: 'bombshell',
            },
            {
                name: 'cappuccino',
            },
            {
                name: 'first_love',
            },
            {
                name: 'nude_pink',
            },
        ],
    },

    activeProduct: null,

    actions: {
        previousProduct: function() {
            const currentIndex = this.get('category.products').indexOf(this.get('activeProduct'));
            const previousProduct = currentIndex === 0 ?
                  this.get('category.products').objectAt(this.get('category.products').length - 1) :
                  this.get('category.products').objectAt(currentIndex - 1);

            this.set('activeProduct', previousProduct);
        },

        nextProduct: function() {
            const currentIndex = this.get('category.products').indexOf(this.get('activeProduct'));
            const nextProduct = currentIndex >= this.get('category.products').length - 1 ?
                  this.get('category.products').objectAt(0) :
                  this.get('category.products').objectAt(currentIndex + 1);

            this.set('activeProduct', nextProduct);
        },
    },
});
