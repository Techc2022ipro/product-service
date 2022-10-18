import { ProductControllerInterface } from "@/interfaces/ProductInterfaces";
import {BadRequest, Unauthorized} from "@/libraries/libs/error/Errors";
import {CreateProductValidationSchema} from "@/schemas/ProductSchemas";
import {ProductService} from "@/service/ProductService";

export const ProductController: ProductControllerInterface = {
    async fetchProductsController() {
      const products = await ProductService.fetchProductsService();
      return products;
    },

    async feedsProductsController(user) {
      if(!user) throw new Unauthorized();
      return null;
    }, 

    async createProductsController(query, image) {
      const validRequest = await CreateProductValidationSchema.parseAsync(query);
      if(!validRequest) throw new BadRequest();
      return await ProductService.createProductsService(query, image);
    }
}
