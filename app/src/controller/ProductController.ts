import { ProductControllerInterface } from "@/interfaces/ProductInterfaces";
import {BadRequest, Unauthorized} from "@/libraries/libs/error/Errors";
import {CreateProductValidationSchema, SearchProductValidationSchema} from "@/schemas/ProductSchemas";
import {ProductService} from "@/service/ProductService";
import {S3Service} from "@/service/S3Service";

export const ProductController: ProductControllerInterface = {
    async fetchProductsController(query) {
      return await ProductService.fetchProductsService(query)
    },

    async fetchProductByIdController(pid) {
      return await ProductService.fetchProductByIdService(pid);
    },

    async feedsProductsController(user) {
      if(!user) throw new Unauthorized();
      return null;
    }, 

    async createProductsController(query) {
      if(query.tags && typeof query.tags == "string") { 
        query.tags = [query.tags];
      };
      const validRequest = await CreateProductValidationSchema.parseAsync(query);

      if(!validRequest) throw new BadRequest();

      if(!query.image) throw new BadRequest();

      const imageKey = await S3Service.uploadImageService(query.image);
      const product = {
        name: query.name,
        brand: query.brand,
        type: query.type,
        description: query.description,
        price:  query.price,
        quantity: query.quantity,
        uid: query.uid,
        image: imageKey,
        tags: query.tags
      }

      return await ProductService.createProductsService(product);
    },

    async searchProductsController(keyword, slug) {
      const query = {
        keyword, 
        slug
      }

      const validRequest = await SearchProductValidationSchema.parseAsync(query).catch();

      if(!validRequest) throw new BadRequest();
      return await ProductService.searchProductsService(query);
    }
}
