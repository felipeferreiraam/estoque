const { Produto } = require('../models')
class ProdutoController {
    static async index(req, res) {
    const produtos = await Produto.findAll();

        res.render('produto/index', {
            produtos: produtos
        })
}

static create(req, res) {
    res.render('produto/create')
}


static async store(req, res) {
    await Produto.create({
        nome: req.body.nome,
        categoria: req.body.categoria,
        quantidade: req.body.quantidade,
        valor: req.body.valor,
        data_entrada: req.body.data_entrada
    })
    res.redirect('/produto')
}

static async edit(req, res) {
    const produto = await Produto.findByPk(req.params.id)

        res.render('produto/edit', {
            produto:produto
        })

    } 

        static async update(req, res) {
            const produto = await Produto.findByPk(req.params.id)
            await produto.update({
                nome: req.body.nome,
                categoria: req.body.categoria,
                quantidade: req.body.quantidade,
                valor: req.body.valor,
                data_entrada: req.body.data_entrada
            })

            res.redirect('/produto')
        }

        static async destroy(req, res) {
            const produto = await Produto.findByPk(req.params.id)
                await produto.destroy()

        

                res.redirect('/produto')
            }
        
        }



module.exports = ProdutoController