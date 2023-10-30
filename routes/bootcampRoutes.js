const express = require('express')
const bootcamModel = require("../models/bootcampModel")
const router = express.Router()


//uris del proyecto
router.get('/', async (req, res)=>{
    //Traer todos los bootcamps
    const bootcamps = await bootcamModel.find()
    res.json({
        success:true,
        data: bootcamps
    })
})

router.get('/:id', async (req, res)=>{
    //Traer bootcamp por ID
    const bootcamp = await bootcamModel.findById(req.params.id)
    res.json({
        success:true,
       data: bootcamp
    })
})

router.post('/', async (req, res)=>{
    //Registrar nuevo bootcamp
    const newBootcamp = await bootcamModel.create(req.body)

    res.json({
        success:true,
        data: newBootcamp
    })
})

router.put('/:id', function(req, res){
    res.json({
        success:true,
        msg: `aqui se editara el bootcamp: ${req.params.id}`
    })
})

router.delete('/:id', async (req, res)=>{
    //Eliminar bootcamp
    const deleteBootcamp = await bootcamModel.findByIdAndDelete(req.params.id)
    res.json({
        success:true,
        data:deleteBootcamp
    })
})

module.exports = router