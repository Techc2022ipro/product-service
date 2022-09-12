import { Request, Response } from 'express';
import ErrorWrapper from '@libraries/libs/ParserWrapper';
import { ProductController } from '../controller/ProductController';


export const fetchProducts = async (req: Request, res: Response) => {
    ErrorWrapper(res, 'fetch', async () => {
        return await ProductController.fetchProducts();
    })
}
export const feedsProducts = async (req: Request, res: Response) => {
    ErrorWrapper(res, 'feeds', async () => {
      return await ProductController.feedsProducts(res.locals.user);
    })
}
