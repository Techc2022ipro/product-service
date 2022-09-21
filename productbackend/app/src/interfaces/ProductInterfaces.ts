import { Product, User } from "@/entities/product";
export type ProductControllerInterface = {
  fetchProductsController(): Promise<string>
  feedsProductsController(user: User): Promise<Product[] | null>
  createProductsController(query: Product): Promise<Product>
}

//service interface 

export type ProductServiceInterface = {
  createProductsService(query: Product): Promise<Product>
}

//repositories interface 
export type ProductRepositoryInterface = {
  create(query: Product): Promise<Product>;
}
