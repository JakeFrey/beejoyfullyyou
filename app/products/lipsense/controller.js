import Controller from '@ember/controller';

export default Controller.extend({

    /**

     */
    category: {
        name: 'Lipsense',
        description: 'This is my description. No smudge or budge!',
        products: [
            {
                imgUrl: 'lipsense.png',
                routeName: 'lipsense',
            },
        ],
    },
});
