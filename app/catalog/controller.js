import Controller from '@ember/controller';

export default Controller.extend({

    /**

     */
    productGroupLinks: [
        {
            imgUrl: 'lipsense.png',
            type: 'lipsense',
        },
        {
            imgUrl: 'shadow-sense.png',
            type: 'shadow-sense',
        },
        {
            imgUrl: 'cctm.png',
            type: 'color-correcting-tinted-moisturizer',
        },
    ],
});
