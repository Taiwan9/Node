const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 5050

//Criar novo arquivo
// fs.writeFile('home.txt', 'teste home', (err)=>{
//     if(err) throw err

//     console.log('arquivo criado')
// })

//Criar novo arquivo ou insere o conteudo depois do que já existe
fs.appendFile('home.txt', '\n Outro Conteúdo', (err)=>{
    if(err) throw err

    console.log('arquivo criado')
})

const server = http.createServer((req,res)=>{

    if(req.url == '/home'){
        fs.readFile('index.html', (err,data)=>{
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }
})

server.listen(port,hostname), ()=>{
    console.log("Servidor Rodando")
}