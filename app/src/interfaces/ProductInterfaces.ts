import { CreateProductQuery, EditedProduct, EditProductQuery, FetchProductQuery, FetchQuery, Product, ProductCommentQuery, SearchQuery, User } from "@/entities/product";

// have to clean the "null" 
// have to write the interfaces in such a way that we catch the errors early on

export type ProductControllerInterface = {
  fetchProductsController(query: FetchQuery): Promise<Product[] | null>;
  fetchProductByIdController(query: FetchProductQuery): Promise<Product>;
  fetchProductsByUidController(uid: number): Promise<Product[] | null>;
  feedsProductsController(user: User): Promise<Product[] | null>;
  searchProductsController(keyword: string, slug: string): Promise<Product[] | null>;
  createProductsController(query: CreateProductQuery): Promise<Product>;
  editProductController(query: EditProductQuery): Promise<Product>;
  createCommentsController(query: ProductCommentQuery): Promise<{message: string}>;
  filterProductsByTagController(query: string): Promise<Product[]>
}

//service interface 

export type ProductServiceInterface = {
  fetchProductsService(query: FetchQuery): Promise<Product[] | null>;
  fetchProductByIdService(pid: number): Promise<Product | null>;
  fetchProductsByUidService(uid: number): Promise<Product[] | null>;
  createProductsService(query: Product): Promise<Product>;
  searchProductsService(query: SearchQuery): Promise<Product[] | null>
  editProductService(query: EditedProduct): Promise<Product>;
  createCommentsService(query: ProductCommentQuery): Promise<ProductCommentQuery>;
  filterProductsByTagService(query: string): Promise<Product[]>;
}

//repositories interface 
export type ProductRepositoryInterface = {
  fetch(): Promise<Product[] | null>;
  fetchById(pid: number): Promise<Product | null>;
  fetchByUid(uid: number): Promise<Product[] | null>;
  fetchByCursor(query: FetchQuery): Promise<Product[] | null>
  create(query: Product): Promise<Product>;
  searchByName(name: string): Promise<Product[] | null>
  searchByBrand(brand: string): Promise<Product[] | null>
  searchByType(type: string): Promise<Product[] | null>
  edit(query: EditedProduct): Promise<Product>
  createComment(query: ProductCommentQuery): Promise<ProductCommentQuery | null>
  filterByTag(query: string): Promise<Product[] | null>
}
