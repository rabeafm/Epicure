import { Schema, model } from 'mongoose';

const RestSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add resturant name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Resturant name can not be more than 50 characters'],
  },
  thumb: {
    type: String,
    trim: true,
    match: [
      /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
      'Please use a valid url',
    ],
    maxlength: [500, 'Image url cant be more than 500 characters'],
    default: '',
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
  chef: { type: Schema.Types.ObjectId, ref: 'chef', required: true },
  opens: { type: String, trim: true },
  closes: { type: String, trim: true },
  dateOpened: { type: Date },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'dish', required: true }],
});

export default model('rest', RestSchema);
