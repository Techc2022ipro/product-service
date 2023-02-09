import { ProductControllerInterface } from "@/interfaces/ProductInterfaces";
import {BadRequest, NotFound, Unauthorized} from "@/libraries/libs/error/Errors"; import {CommentsValidationSchema, CreateProductValidationSchema, FilterByTagValidationSchema, SearchProductValidationSchema} from "@/schemas/ProductSchemas";
import {ProductService} from "@/service/ProductService";
import {S3Service} from "@/service/S3Service";

export const ProductController: ProductControllerInterface = {
    async fetchProductsController(query) {
      return await ProductService.fetchProductsService(query)
    },

    async fetchProductByIdController(query) {
      if(!query && typeof query !== "number") throw new BadRequest(); 

      const product = await ProductService.fetchProductByIdService(query);

      return product;
    },

    async fetchProductsByUidController(uid) {

      if(!uid) throw new Unauthorized();

      return await ProductService.fetchProductsByUidService(uid);
    },

    async feedsProductsController(user) {
      if(!user) throw new Unauthorized();
      return null;
    }, 

    async createProductsController(query) {

      if(query.tags && typeof query.tags == "string") { 
        query.tags = [query.tags];
      };

      if(query.tags) {
        query.tags.map(async tag => {
          const hasTag = await ProductService.fetchTagByNameService(tag);
          if(!hasTag) {
            ProductService.createTagService(tag);
          }
        })
      }

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
        username: query.username,
        image: imageKey,
        tags: query.tags,
        likes: 0,
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
    },

    async editProductController(query) {
      const product = await ProductService.fetchProductByIdService(query.pid);

      if(!product) throw new NotFound();

      if(query.uid !== product.uid) throw new Unauthorized();

      const editedProduct = {
        pid: query.pid,
        name: query.name,
        brand: query.brand,
        type: query.type,
        description: query.description,
        price:  query.price,
        quantity: query.quantity,
        uid: query.uid,
        username: query.username,
        image: query.image ? await S3Service.uploadImageService(query.image) : product.image, 
        tags: query.tags
      }

      return await ProductService.editProductService(editedProduct);
    },

    async createCommentsController(query) {
      const hasIssues = await CommentsValidationSchema.parseAsync(query).catch(err => {return err});
      if(hasIssues.issues) throw new BadRequest();
      await ProductService.createCommentsService(query);
      return {message: "Comment Added"}
    },

    async filterProductsByTagController(slug) {
      const hasIssues = await FilterByTagValidationSchema.parseAsync(slug).catch(err => {return err});
      if(hasIssues.Issues) throw new BadRequest();
      return await ProductService.filterProductsByTagService(slug);
    },

    async fetchAllTagsController() {
      const tags = await ProductService.fetchAllTagsService();
      if(!tags) throw new NotFound();
      return tags;
    },

    async addLikesController(query) {
      return await ProductService.addLikesService(query);
    }
}
