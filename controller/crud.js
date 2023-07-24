exports.api_consultatodos=(req,res)=>{
    conexion.query('select * from persona',(error,consulta)=>{
     if(error){
         console.log("error consultando la tabla persona"+error)
     }
    res.send(consulta)
     })
}
exports.api_consultaruno=(req,res)=>{
    const id=req.params.id
    conexion.query('select * from persona where id='+id,(error,consulta)=>{
        if(error){
            console.log("error consultando la tabla persona"+error)
     }
    res.send(consulta)
     })
}
exports.api_agregar=(req,res)=>{
    const nombre=req.query.nombre
    const edad=req.query.edad
    const genero=req.query.genero
    const email=req.query.email
    //console.log(req.body,nombre,edad,genero,email)
    var comando='insert into persona (nombre,edad,genero,email) values ("'
    comando += nombre + '",'+edad+','+genero+',"'+email+'")'
    conexion.query(comando,(error,resultado)=>{
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro agregado correctamente')
        }
    })
}
exports.api_actualizar=(req,res)=>{
    const id=req.query.id
    const nombre=req.query.nombre
    const edad=req.query.edad
    const genero=req.query.genero
    const email=req.query.email
    //console.log(req.body,nombre,edad,genero,email)
    var comando='update persona set nombre="'+nombre+'",edad='+edad
    comando += ',email="'+email+'",genero='+genero
    comando += ' where id='+id
    conexion.query(comando,(error,resultado)=>{
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro actualizado correctamente')
        }
})
}
exports.api_borrar=(req,res)=>{
    const id=req.query.id
    var comando='delete from persona where id='+id
    conexion.query(comando,(error,resultado)=>{
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro borrrado correctamente')
        }
})
}