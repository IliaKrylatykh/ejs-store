import { Router, Request, Response } from 'express'

const router = Router()

const list = [
	{ id: 1, name: 'Odin', number: Math.random() },
	{ id: 2, name: 'Dva', number: Math.random() },
	{ id: 3, name: 'Three', number: Math.random() },
]

router.get('/', (req: Request, res: Response) => {
	res.render('pages/list', { list, title: 'Список' })
})

router.get('/:id', (req: Request<{ id: string }>, res: Response): void => {
	const id = Number(req.params.id)
	const item = list.find(item => item.id === id)
	if (!item) {
		res.status(404).send('Not found')
		return
	}
	res.render('pages/product', { item })
})

export default router
