import VerifyToken from '@/libraries/middlewares/VerifyToken';
import { createComments, createProducts, 
  editProduct, 
  feedsProducts, 
  fetchAlltags, 
  fetchProductById, 
  fetchProducts, 
  fetchProductsByUid, 
  filterByTag, 
  searchProducts} from '@/parser/ProductParser';
import { Router } from 'express';
import multer from 'multer';

const store = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
})

const upload = multer({storage: store});
const router = Router();
export default router;

router.get('/' , fetchProducts);
router.get('/feeds', VerifyToken, feedsProducts);
router.get('/products', VerifyToken, fetchProductsByUid);
router.get('/tags', fetchAlltags);
router.get('/tag/:slug', filterByTag);
router.get('/:pid', VerifyToken, fetchProductById);
router.post('/search/:slug', searchProducts);
router.post('/create', [VerifyToken, upload.single('image')], createProducts);
router.post('/comment', VerifyToken, createComments);
router.patch('/edit/:id', [VerifyToken, upload.single('image')], editProduct);

