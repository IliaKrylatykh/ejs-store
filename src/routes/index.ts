import { Router, Request, Response } from 'express'
import { products } from '../db/products'

const router = Router()

router.get('/', (req: Request, res: Response) => {
	res.render('pages/index', { products })
})

export default router
