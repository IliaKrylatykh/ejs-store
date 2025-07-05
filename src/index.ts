import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import path from 'path'
import indexRouter from './routes/index'
import productRouter from './routes/product'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.set('layout', 'layouts/main')

app.use(expressLayouts)

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/', indexRouter)
app.use('/product', productRouter)

const port = 8080

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
