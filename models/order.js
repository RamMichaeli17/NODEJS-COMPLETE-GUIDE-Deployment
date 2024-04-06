const moongose = require('mongoose');

const Schema = moongose.Schema;

const orderSchema = new Schema({
    products: [{
        product: {
            type: Object,
            require: true
        },
        quantity: {
            type: Number,
            require: true
        }
    }],
    user: {
        email: {
            type: String,
            require: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true
        }
    }
});

module.exports = moongose.model('Order', orderSchema);