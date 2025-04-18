import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'

const app = express()

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

app.use('/users', usersRouter)

import categoriasRouter from './routes/categorias.js'
import fornecedoresRouter from './routes/fornecedores.js'

app.use('/fornecedores', fornecedoresRouter)

app.use('/categorias',categoriasRouter)

export default app
