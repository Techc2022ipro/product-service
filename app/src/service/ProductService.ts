import {Product} from "@/entities/product";
import { ProductServiceInterface } from "@/interfaces/ProductInterfaces";
import {BadRequest, BaseError, InternalServerError, NotFound} from "@/libraries/libs/error/Errors";
import {fetchUserCart} from "@/parser/ProductParser";
import { ProductRepositories } from '../repositories/ProductRepository';

export const ProductService: ProductServiceInterface = {

  async fetchProductsService(query) {
    if(!query.cursor) return await ProductRepositories.fetch();
    return await ProductRepositories.fetchByCursor(query);
  },

  async fetchProductByIdService(pid) {

    const product = await ProductRepositories.fetchById(pid);

    if(!product) throw new BadRequest();

    return product;
  },

  async fetchProductsByUidService(uid) {
    return await ProductRepositories.fetchByUid(uid);
  },

  async createProductsService(query) {
    return await ProductRepositories.create(query);
  },

  async searchProductsService(query) {
    if(query.slug === "name") {
      return await ProductRepositories.searchByName(query.keyword);
    }

    else if(query.slug === "brand") {
      return await ProductRepositories.searchByBrand(query.keyword);
    } 

    else if(query.slug === "type") {
      return await ProductRepositories.searchByType(query.keyword);
    } 

    else {
      throw new BadRequest();
    }
  },

  async editProductService(query) {
    return await ProductRepositories.edit(query);
  },

  async createCommentsService(query) {
    const createdComment = await ProductRepositories.createComment(query);
    if (!createdComment) throw new BadRequest();
    return createdComment;
  }, 

  async filterProductsByTagService(slug) {
    const products = await ProductRepositories.filterByTag(slug);
    if (!products) throw new NotFound();
    return products;
  },

  async createTagService(query) {
    const tag = await ProductRepositories.createTag(query);
    if(!tag) throw new InternalServerError();
    return {message: 'Tag Created'};
  },

  async fetchTagByNameService(query) {
    return await ProductRepositories.fetchTagByName(query);
  },

  async fetchAllTagsService() {
    return await ProductRepositories.fetchAllTags();
  },

  async addLikesService(query) {
    const product = await ProductRepositories.fetchById(query);
    if(!product) throw new BadRequest();
    const addedLikes = product.likes + 1;
    if(!product.pid) throw new BadRequest();
    return await ProductRepositories.addLikes({pid: product.pid, likes: addedLikes});
  },

  async addProductToCartService(query) {
    const product = await ProductRepositories.fetchById(query.pid);
    if(!product) throw new BadRequest();
    const productIsInCart = await ProductRepositories.fetchCartProductWithId(query);
    if(productIsInCart) throw new BaseError(400, "You already have this product in your cart.")
    return ProductRepositories.addProductToCart(query)
  },

  async fetchUserCartService(query) {
    const cart = await ProductRepositories.fetchUserCart(query);
    if(!cart) return {message: "Nothing to see here 🐔"};
    return cart;
  },

  async fetchUserCartProductsService(query) {
    const cart = await ProductRepositories.fetchUserCart(query);
    if(!cart) {
      return {message: "You have no cart products🐔."};
    } 

    const products: Product[] = await Promise.all(cart.map(async product => {
     const prod = await ProductRepositories.fetchById(product.pid);
     if(!prod) throw new BadRequest();
     return prod;
    }))
    if(!products) {
      return {message: "You have no cart products🐔."};
    } 
    return products;
  }
}
