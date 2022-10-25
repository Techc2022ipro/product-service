import VerifyToken from '@/libraries/middlewares/VerifyToken';
import { createProducts, feedsProducts, fetchProductById, fetchProducts, searchProducts} from '@/parser/ProductParser';
import { Router } from 'express';
import multer from 'multer';

const store = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "../../../uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
})

const upload = multer({storage: store});
const router = Router();
export default router;

router.get('/' , fetchProducts);
router.get('/:pid', fetchProductById);
router.get('/feeds', VerifyToken, feedsProducts);
router.post('/search/:slug', searchProducts);
router.post('/create', [VerifyToken, upload.single('image')], createProducts);
