import Controller from '@ember/controller';

export default Controller.extend({

    /**

     */
    productGroupLinks: [
        {
            imgUrl: 'lipsense.png',
            routeName: 'lipsense',
        },
        {
            imgUrl: 'shadow-sense.png',
            routeName: 'shadow-sense',
        },
        {
            imgUrl: 'cctm.png',
            routeName: 'color-correcting-tinted-moisturizer',
        },
    ],
});
