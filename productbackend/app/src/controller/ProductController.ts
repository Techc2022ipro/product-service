import { ProductControllerInterface } from "@/interfaces/ProductInterfaces";
import {Unauthorized} from "@/libraries/libs/error/Errors";
import { ProductService } from '../service/ProductService';

export const ProductController: ProductControllerInterface = {
    async fetchProducts() {
        let products = await ProductService.fetchUserService();
        if(!products) return null;
        return products;
    },

    async feedsProducts(user) {
      if(!user) throw new Unauthorized();
      return null;
    }
}
