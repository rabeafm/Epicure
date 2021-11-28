import { Request } from 'express';
import BaseCRUD from './basecrud';
import ChefSchema from '../models/Chef';
import DishSchema from '../models/Dish';

class RestCRUD extends BaseCRUD {
  // Override functions

  public async getAll(req: any) {
    let response = { data: [], pages: 0 };
    let limit = 6;
    let toskip = 0;
    if (req.query && req.query.limit !== undefined)
      limit = parseInt(req.query.limit);
    if (req.query && req.query.page !== undefined)
      toskip = (parseInt(req.query.page) - 1) * limit;
    let cat: string = req.query.cat;

    switch (cat) {
      case 'new':
        response.pages =
          (await this.model.count({
            dateOpened: { $gte: new Date('Jan 01, 2020, 00:00:00') },
          })) / limit;
        response.data = await this.model
          .find({ dateOpened: { $gte: new Date('Jan 01, 2020, 00:00:00') } })
          .skip(toskip)
          .limit(limit)
          .select('-__v')
          .populate('chef', '-__v -descr')
          .populate('dishes', '-__v -resturant -ingredients -tags')
          .exec();
        break;
      case 'most-popular':
        response.pages = (await this.model.count()) / limit;
        response.data = await this.model
          .find()
          .skip(toskip)
          .limit(limit)
          .select('-__v')
          .populate('chef', '-__v -descr')
          .populate('dishes', '-__v -resturant -ingredients -tags')
          .exec();
        break;
      case 'open-now':
        const currentdate = new Date();
        const currenttime =
          (currentdate.getHours() < 10
            ? '0' + currentdate.getHours()
            : currentdate.getHours()) +
          ':' +
          currentdate.getMinutes();
        response.pages =
          (await this.model.count({
            opens: { $lte: currenttime },
            closes: { $gte: currenttime },
          })) / limit;
        response.data = await this.model
          .find({ opens: { $lte: currenttime }, closes: { $gte: currenttime } })
          .skip(toskip)
          .limit(limit)
          .select('-__v')
          .populate('chef', '-__v -descr')
          .populate('dishes', '-__v -resturant -ingredients -tags')
          .exec();
        break;
      default:
        response.pages = (await this.model.count()) / limit;
        response.data = await this.model
          .find()
          .skip(toskip)
          .limit(limit)
          .select('-__v')
          .populate('chef', '-__v -descr')
          .populate('dishes', '-__v -resturant -ingredients -tags')
          .exec();
    }
    return response;
  }

  public async get({ params: { id } }: Request) {
    return await this.model
      .findById(id)
      .select('-__v')
      .populate('chef', '-__v -descr')
      .populate('dishes', '-__v -resturant')
      .exec();
  }

  public async add({ body }: Request) {
    let rest = await this.model.create(body);
    await ChefSchema.findOneAndUpdate(
      { _id: body.chef },
      { $push: { rests: rest } }
    );
    return rest;
  } // Add resturant & Update chef

  public async delete({ params: { id }, body }: Request) {
    await ChefSchema.findOneAndUpdate(
      { _id: body.chef },
      { $pull: { rests: id } }
    );
    let rest = await this.model.findByIdAndDelete(id);
    await DishSchema.deleteMany({ resturant: id });
    return rest;
  } // Delete resturant & update chef
}

export default RestCRUD;
