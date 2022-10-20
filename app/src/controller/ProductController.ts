import { ProductControllerInterface } from "@/interfaces/ProductInterfaces";
import {BadRequest, Unauthorized} from "@/libraries/libs/error/Errors";
import {CreateProductValidationSchema} from "@/schemas/ProductSchemas";
import {ProductService} from "@/service/ProductService";
import {S3Service} from "@/service/S3Service";

export const ProductController: ProductControllerInterface = {
    async fetchProductsController() {
      return await ProductService.fetchProductsService();
    },

    async feedsProductsController(user) {
      if(!user) throw new Unauthorized();
      return null;
    }, 

    async createProductsController(query) {
      const validRequest = await CreateProductValidationSchema.parseAsync(query);
      if(!validRequest) throw new BadRequest();
      if(!query.image) throw new BadRequest();
      const upload = await S3Service.uploadImageService(query.image);
      return await ProductService.createProductsService(query);
    }
}
