import * as Zod from 'zod';

const Image = Zod.object({
  fieldname: Zod.string(),
  originalname: Zod.string(),
  encoding: Zod.string(),
  mimetype: Zod.string(),
  destination: Zod.string(),
  filename: Zod.string(),
  path: Zod.string(),
  size: Zod.number()
})

export const CreateProductValidationSchema = Zod.object({
  uid: Zod.number(),
  name: Zod.string().min(1),
  brand: Zod.string().min(1),
  type: Zod.string().min(1),
  description: Zod.string().min(1),
  quantity: Zod.number(),
  price: Zod.number(),
  image: Image,
  tags: Zod.string().array().optional()
})

export const SearchProductValidationSchema = Zod.object({
  keyword: Zod.string(),
  slug: Zod.string()
})
