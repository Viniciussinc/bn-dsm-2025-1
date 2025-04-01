import { Router } from 'express'
import controller from '../controller/categorias.js'


const router = Router()

router.post('/', controller.create)
router.get('/',controller.retrieveAll)
router.get ('/:id', controller.retrieveOne)



export default router