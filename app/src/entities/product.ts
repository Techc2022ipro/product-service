export type Image = {
  fieldname: string 
  originalname: string 
  encoding: string 
  mimetype: string 
  destination: string 
  filename: string 
  path: string
  size: number 
}

export type Product = {
    pid?: number
    name: string
    brand: string
    type: string
    description: string
    price: number
    quantity: number
    uid: number
    username: string
    image: string 
    tags?: string[]
}

export type CreateProductQuery = {
  name: string
  brand: string
  type: string
  description: string
  price: number
  quantity: number
  uid: number
  username: string
  image: Image
  tags?: string[]
}

export type EditedProduct = {
  pid: number 
  uid: number 
  username: string
  name: string
  type: string
  brand: string
  description: string
  price: number
  quantity: number
  image: string 
  tags?: string[]
}

export type EditProductQuery = {
  pid: number 
  uid: number 
  username: string
  name: string
  type: string
  brand: string
  description: string
  price: number
  quantity: number
  image?: Image
  tags?: string[]
}

export type FetchProductQuery = {
  pid: number
  uid: number
}

export type User = {
  uid: number,
  username: string,
  email: string,
  role: string
}

export type SearchQuery = {
  keyword: string
  slug: string
}

export type FetchQuery = {
  cursor: number | undefined 
}

export type ProductCommentQuery = {
  uid: number
  pid: number
  comment: string
}

export type Tags = {
  tagid: number,
  tag: string
}
