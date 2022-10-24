import { CreateProductQuery, FetchQuery, Product, SearchQuery, User } from "@/entities/product";

export type ProductControllerInterface = {
  fetchProductsController(query: FetchQuery): Promise<Product[] | null>;
  fetchProductByIdController(pid: number): Promise<Product | null>;
  feedsProductsController(user: User): Promise<Product[] | null>;
  searchProductsController(keyword: string, slug: string): Promise<Product[] | null>;
  createProductsController(query: CreateProductQuery): Promise<Product>;
}

//service interface 

export type ProductServiceInterface = {
  fetchProductsService(query: FetchQuery): Promise<Product[] | null>;
  fetchProductByIdService(pid: number): Promise<Product | null>;
  createProductsService(query: Product): Promise<Product>;
  searchProductsService(query: SearchQuery): Promise<Product[] | null>
}

//repositories interface 
export type ProductRepositoryInterface = {
  fetch(): Promise<Product[] | null>;
  fetchById(pid: number): Promise<Product | null>;
  fetchByCursor(query: FetchQuery): Promise<Product[] | null>
  create(query: Product): Promise<Product>;
  searchByName(name: string): Promise<Product[] | null>
  searchByBrand(brand: string): Promise<Product[] | null>
  searchByType(type: string): Promise<Product[] | null>
}
