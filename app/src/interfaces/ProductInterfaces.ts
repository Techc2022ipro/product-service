import { CartDetail, CreateProductQuery, EditedProduct, EditProductQuery, FetchProductQuery, FetchQuery, Product, ProductCommentQuery, SearchQuery, Tags, User } from "@/entities/product";

// have to clean the "null" 
// have to write the interfaces in such a way that we catch the errors early on

export type ProductControllerInterface = {
  fetchProductsController(query: FetchQuery): Promise<Product[] | null>;
  fetchProductByIdController(query: number): Promise<Product>;
  fetchProductsByUidController(uid: number): Promise<Product[] | null>;
  feedsProductsController(user: User): Promise<Product[] | null>;
  searchProductsController(keyword: string, slug: string): Promise<Product[] | null>;
  createProductsController(query: CreateProductQuery): Promise<Product>;
  editProductController(query: EditProductQuery): Promise<Product>;
  createCommentsController(query: ProductCommentQuery): Promise<{message: string}>;
  filterProductsByTagController(query: string): Promise<Product[]>;
  fetchAllTagsController(): Promise<Tags[]>;
  addLikesController(query: number): Promise<null>;
  addProductToCartController(query: {uid: number, pid: number}): Promise<{message: string}>;
  fetchUserCartController(query: number): Promise<CartDetail[] | {message: string}>;
  fetchUserCartProductsController(query: number): Promise<Product[] | {message:string}>;
}

//service interface 

export type ProductServiceInterface = {
  fetchProductsService(query: FetchQuery): Promise<Product[] | null>;
  fetchProductByIdService(pid: number): Promise<Product>;
  fetchProductsByUidService(uid: number): Promise<Product[] | null>;
  createProductsService(query: Product): Promise<Product>;
  searchProductsService(query: SearchQuery): Promise<Product[] | null>
  editProductService(query: EditedProduct): Promise<Product>;
  createCommentsService(query: ProductCommentQuery): Promise<ProductCommentQuery>;
  filterProductsByTagService(query: string): Promise<Product[]>;
  createTagService(query:string): Promise<{message: string}>;
  fetchTagByNameService(query:string): Promise<Tags | null>;
  fetchAllTagsService(): Promise<Tags[] | null>
  addLikesService(query: number): Promise<null>;
  addProductToCartService(query: {uid: number, pid: number}): Promise<{message: string}>;
  fetchUserCartService(query: number): Promise<CartDetail[] | {message: string}> 
  fetchUserCartProductsService(query: number):Promise<Product[] | {message: string}>
}

//repositories interface 
export type ProductRepositoryInterface = {
  fetch(): Promise<Product[] | null>;
  fetchById(pid: number): Promise<Product | null>;
  fetchByUid(uid: number): Promise<Product[] | null>;
  fetchByCursor(query: FetchQuery): Promise<Product[] | null>;
  create(query: Product): Promise<Product>;
  searchByName(name: string): Promise<Product[] | null>;
  searchByBrand(brand: string): Promise<Product[] | null>;
  searchByType(type: string): Promise<Product[] | null>;
  edit(query: EditedProduct): Promise<Product>;
  createComment(query: ProductCommentQuery): Promise<ProductCommentQuery | null>;
  filterByTag(query: string): Promise<Product[] | null>;
  createTag(query:string): Promise<Tags | null>;
  fetchTagByName(query: string): Promise<Tags | null>;
  fetchAllTags(): Promise<Tags[] | null>;
  addLikes(query: {pid: number, likes: number}): Promise<null>
  addProductToCart(query: {uid: number, pid: number}): Promise<{message: string}>;
  fetchCartProductWithId(query: {pid:number, uid: number}): Promise<CartDetail | null>;
  fetchUserCart(query: number): Promise<CartDetail[] | null>
}
