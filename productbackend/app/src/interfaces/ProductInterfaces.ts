import { Product, User } from "@/entities/product";
export type ProductControllerInterface = {
  fetchProductsController(): Promise<string>
  feedsProductsController(user: User): Promise<Product[] | null>
  createProductsController(query: Product): Promise<Product>
  fetchUserProductsController(query: number): Promise<Product[] | null>
}

//service interface 

export type ProductServiceInterface = {
  createProductsService(query: Product): Promise<Product>
  fetchUserProductsService(query: number): Promise<Product[] | null>
}

//repositories interface 
export type ProductRepositoryInterface = {
  create(query: Product): Promise<Product>
  userProducts(query: number): Promise<Product[] | null>
}
