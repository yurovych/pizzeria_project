import { Schema, model, models  } from 'mongoose';

const PizzaSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        ingredients: {
            type: Array,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        }
    },
    {
        collection: 'pizza_data',
    }
)

const Pizza = models.Pizza || model('Pizza', PizzaSchema);

export default Pizza;