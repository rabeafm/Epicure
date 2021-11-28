import { Request } from 'express';
import BaseCRUD from './basecrud';
import RestSchema from '../models/Rest';

class DishCRUD extends BaseCRUD {
  // Override functions

  public async getAll(req: any) {
    return await this.model
      .find()
      .select('-__v')
      .populate('restaurant', '-__v');
  }
  public async get({ params: { id } }: Request) {
    return await this.model
      .findById(id)
      .select('-__v')
      .populate('restaurant', '-__v -chef');
  }

  public async add({ body }: Request) {
    let dish = await this.model.create(body);
    await RestSchema.findOneAndUpdate(
      { _id: body.restaurant },
      { $push: { dishes: dish } }
    );
    return dish;
  } // Add Dish & Update Resturant

  public async delete({ params: { id }, body }: Request) {
    await RestSchema.findOneAndUpdate(
      { _id: body.restaurant },
      { $pull: { dishes: id } }
    );
    return await this.model.findByIdAndDelete(id);
  } // Delete Dish & Update Resturant
}

export default DishCRUD;
