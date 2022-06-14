import { fetchProducts } from '@/parser/ProductParser';
import { Router } from 'express';

const router = Router();
export default router;

router.get('/' , fetchProducts)