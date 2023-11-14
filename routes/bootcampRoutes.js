const express = require('express')
const bootcamModel = require("../models/bootcampModel")
const router = express.Router()
const mongoose = require('mongoose')


//uris del proyecto
router.get('/', async (req, res)=>{
    //Traer todos los bootcamps
    try{
    const bootcamps = await bootcamModel.find()
    if(bootcamps.length ===0){
        res.
            status(400).
            json({
                siccess:false,
                msg: 'No hay bootacams'
            })
    }else{
        res.
            status(200).
            json({
                success: true,
                data: bootcamps
            })
    }
    }catch(error) {
        res.
            status(500).
            json({
                success: false,
                msg: `Error interno del servidor ${error.message}`
            })
    }
})

router.get('/:id', async (req, res)=>{
    try {
        //validar id para mongoose
        if(!mongoose.
            Types.
            ObjectId.
            isValid(req.params.id)){
                res.
                    status(400).
                    json({
                        success: false,
                        msg: `id invalido`
                    })
            }else{
                //Traer bootcamp por ID
            const bootcamp = await bootcamModel.findById(req.params.id)
        if (!bootcamp){
            //Si no existe el bootcamp
            res.
            status(400).
            json({
                success:false,
                msg: `No existe el bootacams ${req.params.id}`
            })
        }else{
            //Si existe el bootcamp
            res.status(200).
                json({
                success:true,
                data: bootcamp
            })
        }
    }

    } catch (error) { 
        res.status(500).
            json({
            success:false,
            msg: `Error interno del servidor ${error.message}`
            })
    }
})

router.post('/', async (req, res)=>{
    try {
        const newBootcamp = await bootcamModel.create(req.body)

        res.status(201).json({
            success:true,
            data: newBootcamp
        })
        
    } catch (error) {
        res.
        status(500).
        json({
            success: false,
            msg: `${error.message}`
        })
    }
  
})

router.put('/:id', async function(req, res){
    try {
         //validar id para mongoose
         if(!mongoose.
            Types.
            ObjectId.
            isValid(req.params.id)){
                res.
                    status(400).
                    json({
                        success: false,
                        msg: `id invalido`
                    })
            }else{
                const bootcamp = 
                        await bootcamModel.
                            findByIdAndUpdate(req.params.id,
                                            req.body,
                                            {
                                            new:true
                                            })
        if (!bootcamp) {
            res.
            status(400).
            json({
                success:false,
                msg: `No existe el bootacams ${req.params.id}`
            })
        } else {
            //Si existe el bootcampo
            res.status(200).
            json({
            success:true,
            data: bootcamp
            })
        }
    }   
    }catch (error) {
        res.
        status(500).
        json({
            success: false,
            msg: `Error interno del servidor ${error.message}`
        })
    }
})

router.delete('/:id', async (req, res)=>{
    //Eliminar bootcamp
    try {
         //validar id para mongoose
         if(!mongoose.
            Types.
            ObjectId.
            isValid(req.params.id)){
                res.
                    status(400).
                    json({
                        success: false,
                        msg: `id invalido`
                    })
            }else{
                const bootcamp = 
                        await bootcamModel.
                            findByIdAndDelete(req.params.id,)
            if (!bootcamp) {
                res.
                status(400).
                json({
                success:false,
                msg: `No existe el bootacams ${req.params.id}`
            })
        } else {
        //Si existe el bootcampo
            res.status(200).
            json({
            success:true,
            data: bootcamp
        })
    }
}   
    } catch (error) {
        res.
        status(500).
        json({
            success: false,
            msg: `Error interno del servidor ${error.message}`
        })
    }
})

module.exports = router