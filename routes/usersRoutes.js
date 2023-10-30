const express = require('express')
const router = express.Router()


// uri de cursos
router.get('/', function(req, res){
    res.json({
        success:true,
        msg: "aqui se traeran todos los usuarios"
    })
})

router.get('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se traera el usuario: ${req.params.id}`
    })
})

router.post('/', function(req, res){
    res.json({
        success:true,
        msg: `aqui se creara un usuarios`
    })
})

router.put('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se editara un usuarios: ${req.params.id}`
    })
})

router.delete('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se eliminara un usuarios: ${req.params.id}`
    })
})

module.exports = router