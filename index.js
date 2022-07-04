const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const helpers = require('./helpers/handlebars')
const routes = require('./routes')


require('dotenv').config()



app.use(express.static('public'))
app.engine('handlebars', engine({
    helpers: helpers,
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', routes)

app.listen(8080, () => {
    console.log('Server Start')

})
