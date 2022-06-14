export type Product = {
    pid: number
    name: string //change to item name
    brand: string
    description: string
    seller: string
}

export type ProductQuery = {
    name: string
    brand: string
    description: string
}