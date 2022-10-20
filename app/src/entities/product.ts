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
    image: string 
}

export type CreateProductQuery = {
  name: string
  brand: string
  type: string
  description: string
  price: number
  quantity: number
  uid: number
  image: Image
}

export type User = {
  uid: number,
  username: string,
  email: string,
  role: string
}

