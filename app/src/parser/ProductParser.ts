import { Request, Response } from 'express';
import ErrorWrapper from '@libraries/libs/ParserWrapper';
import { ProductController } from '../controller/ProductController';


export const fetchProducts = async (req: Request, res: Response) => {
    ErrorWrapper(res, 'fetch', async () => {
      const cursor: number = parseInt(req.query.cursor as string);
      return await ProductController.fetchProductsController({cursor});
    })
}

export const fetchProductById = async (req: Request, res: Response) => {
    ErrorWrapper(res, 'fetchId', async () => {
      const pid = parseInt(req.params.pid);
      return await ProductController.fetchProductByIdController(pid);
    })
}

export const fetchProductsByUid = async (req: Request, res: Response) => {
    ErrorWrapper(res, 'fetchByUid', async () => {
      return await ProductController.fetchProductsByUidController(res.locals.user.uid);
    })
}

export const editProduct = async (req: Request, res: Response) => {
    ErrorWrapper(res, 'editProduct', async () => {
      const query = { uid: res.locals['user'].uid, username: res.locals['user'].username, ...req.body, image: req.file }
      query.quantity = parseInt(query.quantity);
      query.price = parseInt(query.price);
      query.pid = parseInt(query.pid);
      return ProductController.editProductController(query);
    })
}


export const feedsProducts = async (req: Request, res: Response) => {
    ErrorWrapper(res, 'feeds', async () => {
      return await ProductController.feedsProductsController(res.locals.user);
    })
}

export const searchProducts = async (req: Request, res: Response) => {
    ErrorWrapper(res, 'search', async () => {
      return await ProductController.searchProductsController(req.body.keyword, req.params.slug);
    })
}

export const filterByTag = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'filterByTag', async() => {
    return await ProductController.filterProductsByTagController(req.params.slug)
  })
}

export const createProducts = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'create', async () => {
    const query = { uid: res.locals['user'].uid, username: res.locals['user'].username, ...req.body, image: req.file };
    query.quantity = parseInt(query.quantity);
    query.price = parseInt(query.price);
    return await ProductController.createProductsController(query);
    })
}

export const createComments = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'comment', async () => {
    const query = { uid: res.locals['user'].uid, username: res.locals['user'].username, ...req.body };
    return await ProductController.createCommentsController(query);
    })
}

export const fetchAlltags = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'fetchAllTags', async() => {
    return await ProductController.fetchAllTagsController();
  })
}

export const addLikes = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'addLikes', async() => {
    return await ProductController.addLikesController(parseInt(req.params.pid));
  })
}

export const addToCart = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'addToCart', async() => {
    const query = {uid: res.locals["user"].uid, pid: parseInt(req.params.pid)}
    return await ProductController.addProductToCartController(query);
  })
}

export const fetchUserCart = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'addToCart', async() => {
    return await ProductController.fetchUserCartController(res.locals['user'].uid);
  })
}

export const fetchUserCartProducts = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'addToCart', async() => {
    return await ProductController.fetchUserCartProductsController(res.locals['user'].uid);
  })
}
