import { Request, Response } from 'express';
import ErrorWrapper from '@libraries/libs/ParserWrapper';
import { ProductController } from '../controller/ProductController';


export const fetchProducts = async (req: Request, res: Response) => {
    ErrorWrapper(res, 'fetch', async () => {
      return await ProductController.fetchProductsController();
    })
}

export const feedsProducts = async (req: Request, res: Response) => {
    ErrorWrapper(res, 'feeds', async () => {
      return await ProductController.feedsProductsController(res.locals.user);
    })
}

export const createProducts = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'create', async () => {
    const query = { uid: res.locals['user'].uid, ...req.body };
    return await ProductController.createProductsController(query);
    })
}
