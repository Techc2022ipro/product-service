import { Router } from 'express';

const router = Router();
export default router;

router.get('/' , () => {
    console.log('you are at product')
})