const express = require('express')
const router = express.Router()


//uris del proyecto
router.get('/', function(req, res){
    res.json({
        success:true,
        msg: "aqui se traeran todos los bootcamps"
    })
})

router.get('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se traera el bootcamp: ${req.params.id}`
    })
})

router.post('/', function(req, res){
    res.json({
        success:true,
        msg: `aqui se creara un bootcamp`
    })
})

router.put('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se editara el bootcamp: ${req.params.id}`
    })
})

router.delete('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se eliminara el bootcamp: ${req.params.id}`
    })
})

module.exports = router