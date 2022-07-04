const { Router } = require('express')
const router = Router()

const IndexController = require('./controllers/IndexController')
const ProdutoController = require('./controllers/ProdutoController')

router.get('/', IndexController.index)
router.get('/produto', ProdutoController.index)
router.get('/produto/create', ProdutoController.create)
router.post('/produto/store', ProdutoController.store)
router.get('/produto/edit/:id', ProdutoController.edit)
router.post('/produto/update/:id', ProdutoController.update)
router.get('/produto/destroy/:id', ProdutoController.destroy)

module.exports = router