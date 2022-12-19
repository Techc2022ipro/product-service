import { ProductServiceInterface } from "@/interfaces/ProductInterfaces";
import {BadRequest} from "@/libraries/libs/error/Errors";
import { ProductRepositories } from '../repositories/ProductRepository';

export const ProductService: ProductServiceInterface = {

  async fetchProductsService(query) {
    if(!query.cursor) return await ProductRepositories.fetch();
    return await ProductRepositories.fetchByCursor(query);
  },

  async fetchProductByIdService(pid) {
    return await ProductRepositories.fetchById(pid);
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
  }
}
