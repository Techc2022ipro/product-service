import VerifyToken from '@/libraries/middlewares/VerifyToken';
import { feedsProducts, fetchProducts } from '@/parser/ProductParser';
import { Router } from 'express';

const router = Router();
export default router;

router.get('/' , fetchProducts)
router.get('/feeds', VerifyToken, feedsProducts)
