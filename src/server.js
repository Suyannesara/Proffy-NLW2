//Servidor
// express é uma function que está retornando um objeto.
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses, loadingPage} = require('./pages')
//Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,

    //Ter cache ou não? Buscar coisas guardadas.
    noCache: true,
})

//inicialização e configuração do servidor
server
//Receber os dados do req.body
.use(express.urlencoded({extended: true}))



//.use() = configurações do servidor, configurar arquivos estáticos(css, scripts, imagens).
.use(express.static("public"))

//Rotas da aplicação
    //() =>, function simplificada // req e res = requesição(o que acompanha o meu pedido, vai trazer mais dados), resp(o que ele me retorna(return) em tela).
    // Estou dando a ele a rota que ele não estava achando, no caso= "/.....".
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/loading-page", loadingPage)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)
