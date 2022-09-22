import VerifyToken from '@/libraries/middlewares/VerifyToken';
import { createProducts, feedsProducts, fetchProducts, getUserProducts} from '@/parser/ProductParser';
import { Router } from 'express';

const router = Router();
export default router;

router.get('/' , fetchProducts);
router.get('/products', VerifyToken, getUserProducts);
router.get('/feeds', VerifyToken, feedsProducts);
router.post('/create', VerifyToken, createProducts);
