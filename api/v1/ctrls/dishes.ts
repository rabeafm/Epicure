import { Router, Request, Response, NextFunction } from 'express';
import dishHandler from '../service/dishes.js';
const dishRouter = Router();

const responder = async (
  hndlr: Function,
  sucmsg: string,
  failmsg: string,
  req: Request,
  res: Response
) => {
  try {
    const data = await hndlr(req);
    if (!data) res.status(400).json({ success: false, msg: failmsg });
    else
      res
        .status(200)
        .json({ success: true, msg: sucmsg, count: data.length, data: data });
  } catch (err: unknown) {
    res.status(400).json({ success: false, msg: err });
  }
};

// @desc    Get all dishess
// @route   GET /api/v1/dishes
// @access  Public
dishRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  await responder(
    dishHandler.getAll,
    `Show all dishes.`,
    `No Dishes in database.`,
    req,
    res
  );
  next();
});

// @desc    Get single dish
// @route   GET /api/v1/dishes/:id
// @access  Public
dishRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(dishHandler.get, `Show dish.`, `Dish not found.`, req, res);
    next();
  }
);

// @desc    Create new dish
// @route   POST /api/v1/dishes/
// @access  Private
dishRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(
      dishHandler.add,
      `Dish created.`,
      `Dish not created.`,
      req,
      res
    );
    next();
  }
);

// @desc    Update dish
// @route   PUT /api/v1/dishes/:id
// @access  Private
dishRouter.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(
      dishHandler.set,
      `Dish updated.`,
      `Dish not updated.`,
      req,
      res
    );
    next();
  }
);

// @desc    Delete chef
// @route   DELETE /api/v1/dishes/:id
// @access  Private
dishRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(
      dishHandler.delete,
      `Dish deleted.`,
      `Dish not deleted.`,
      req,
      res
    );
    next();
  }
);

export default dishRouter;