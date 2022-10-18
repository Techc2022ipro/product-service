import * as Zod from 'zod';

export const CreateProductValidationSchema = Zod.object({
  uid: Zod.number(),
  name: Zod.string().min(1),
  brand: Zod.string().min(1),
  type: Zod.string().min(1),
  description: Zod.string().min(1),
  quantity: Zod.number(),
  price: Zod.number(),
})
