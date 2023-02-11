import VerifyToken from '@/libraries/middlewares/VerifyToken';
import { addToCart, createComments, createProducts, 
  editProduct, 
  feedsProducts, 
  fetchAlltags, 
  fetchProductById, 
  fetchProducts, 
  fetchProductsByUid, 
  filterByTag, 
  fetchUserCart,
  searchProducts,
  fetchUserCartProducts} from '@/parser/ProductParser';
import { Router } from 'express';
import multer from 'multer';
import { addLikes } from '../parser/ProductParser';

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
router.get('/product/:pid', fetchProductById);
router.get('/product/addlikes/:pid', addLikes);
router.get('/cart/add/:pid', VerifyToken, addToCart);
router.get('/cart', VerifyToken, fetchUserCart);
router.get('/cart/products', VerifyToken, fetchUserCartProducts);
router.post('/search/:slug', searchProducts);
router.post('/create', [VerifyToken, upload.single('image')], createProducts);
router.post('/comment', VerifyToken, createComments);
router.patch('/edit/:id', [VerifyToken, upload.single('image')], editProduct);

