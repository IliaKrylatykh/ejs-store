import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
	res.render('pages/index', {
		title: 'Главная',
		numberOfIterations: 42,
	})
})

export default router
