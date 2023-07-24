const express=require('express')
const server=express()


server.set("view engine","ejs")

const PORT= process.env.PORT || 8081
const conexion=require('./database/db.js')
const crud=require('./controler/crud.js')

server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use(express.static('./database'))
server.use(express.static('./views'))
server.use(express.static('./controller'))


server.get('/',crud.consultar)
server.get('/crear',(req,res)=>{
    res.render('create')
})
server.post('/salvar',crud.save)
server.get('/editar/:id',crud.consultaruno)
server.post('/actualizar',crud.update)
server.get('/borrar/:id',crud.delete)

//Rutas Api
server.get('/api/personas',crud.api_consultatodos)
server.get('/api/persona/:id',crud.api_consultaruno)
server.post('/api/agregar',crud.api_agregar)
server.put('/api/actualizar',crud.api_actualizar)
server.delete('/api/borrar/:id',crud.api_borrar)


server.listen(8081,()=>{
    console.log("servidor corriendo y funcionando en http://localhost:"+PORT)
})