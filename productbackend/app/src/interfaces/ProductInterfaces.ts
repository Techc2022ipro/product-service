import { Product as ResponseProduct } from "@/request-response/request-response"
import { Product } from "@/entities/product";
export type ProductControllerInterface = {
    fetchProducts(): Promise<ResponseProduct[] | null>
}

//service interface 

export type ProductServiceInterface = {
    fetchUserService(): Promise<Product[] | null>
}

//repositories interface 
export type ProductRepositoryInterface = {
    fetch(): Promise<Product[] | null>
}