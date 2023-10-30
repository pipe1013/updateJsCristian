const express = require('express')
const router = express.Router()


// uri de cursos
router.get('/', function(req, res){
    res.json({
        success:true,
        msg: "aqui se traeran todos las vista"
    })
})

router.get('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se traera la vistas: ${req.params.id}`
    })
})

router.post('/', function(req, res){
    res.json({
        success:true,
        msg: `aqui se creara una vistas`
    })
})

router.put('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se editara la vistas: ${req.params.id}`
    })
})

router.delete('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se eliminara la vistas: ${req.params.id}`
    })
})

module.exports = router