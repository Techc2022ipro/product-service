import VerifyToken from '@/libraries/middlewares/VerifyToken';
import { feedsProducts, fetchProducts, getCreds } from '@/parser/ProductParser';
import { Router } from 'express';

const router = Router();
export default router;

router.get('/' , fetchProducts)
router.get("/getCreds", VerifyToken, getCreds)
router.get('/feeds', VerifyToken, feedsProducts)
