import { Router, Request, Response } from 'express'
import { products } from '../db/products'

const router = Router()

router.get('/:id', (req: Request, res: Response) => {
	const { id } = req.params
	const product = products.find(p => p.id === id)

	if (!product) {
		return res.status(404).render('pages/404', { id })
	}

	res.render('pages/product', { product })
})

export default router
