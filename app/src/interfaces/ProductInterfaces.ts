import { CreateProductQuery, Image, Product, User } from "@/entities/product";
export type ProductControllerInterface = {
  fetchProductsController(): Promise<Product[] | null>;
  feedsProductsController(user: User): Promise<Product[] | null>;
  createProductsController(query: CreateProductQuery): Promise<Product>;
}

//service interface 

export type ProductServiceInterface = {
  fetchProductsService(): Promise<Product[] | null>;
  createProductsService(query: Product): Promise<Product>;
}

//repositories interface 
export type ProductRepositoryInterface = {
  fetch(): Promise<Product[] | null>;
  create(query: Product): Promise<Product>;
}
