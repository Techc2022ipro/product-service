import { Product as ResponseProduct } from "@/request-response/request-response"
import { Product, User } from "@/entities/product";
export type ProductControllerInterface = {
    fetchProducts(): Promise<ResponseProduct[] | null>
    feedsProducts(user: User): Promise<Product[] | null>
}

//service interface 

export type ProductServiceInterface = {
    fetchUserService(): Promise<Product[] | null>
}

//repositories interface 
export type ProductRepositoryInterface = {
    fetch(): Promise<Product[] | null>
}
