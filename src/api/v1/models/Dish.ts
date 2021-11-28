import { Schema, model } from 'mongoose';

const DishSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add dish name'],
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  image: {
    type: String,
    trim: true,
    match: [
      /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
      'Please use a valid url',
    ],
    maxlength: [500, 'Image url cant be more than 500 characters'],
    default: '',
  },
  price: { type: Number, default: 0 },
  type: {
    type: String,
    trim: true,
    maxlength: [10, 'Type can not be more than 10 characters'],
  },
  ingredients: [
    {
      type: String,
      required: [true, 'Please add ingredient'],
      trim: true,
      maxlength: [50, 'Ingredient can not be more than 50 characters'],
    },
  ],
  tags: [
    {
      type: String,
      required: [true, 'Please add tag'],
      trim: true,
      maxlength: [50, 'Tag can not be more than 50 characters'],
    },
  ],
  icons: [
    {
      type: String,
      trim: true,
      match: [
        /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
        'Please use a valid url',
      ],
      maxlength: [500, 'Image url cant be more than 500 characters'],
      default: '',
    },
  ],
  restaurant: { type: Schema.Types.ObjectId, ref: 'rest', required: true },
});

export default model('dish', DishSchema);
