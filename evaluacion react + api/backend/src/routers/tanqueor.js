const express = require('express');
const tanSchema = require('../models/tanqueo');

const router = express.Router();

router.post('/tanqueo', async (req, res) => {
    // res.send("Ruta para crear usuario");

    try {
        const nuevotanqueo = await tanSchema.create(req.body);
        res.status(201).json({ message: 'se agrego la infromacion del taqueo', data: nuevotanqueo });
      } catch (error) {
        console.error('Error al crear la infromacion del carro:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
    });
  

module.exports =router;
//BUSCAR GENERAL
router.get('/tanqueo', (req,res)=>{
    tanSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error, query:"selectAll"}));
});

//BUSCAR ESPECIFICO
router.get('/tanqueo/:id',(req,res)=>{
    const {id} = req.params;
    tanSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"selectOne"}));
});

//Actualizar
router.put('/tanqueo/:id',(req,res)=>{
    const {id} = req.params;
    const {idc,feche,Bomba,valortanqueo} = req.body;
    tanSchema
    .updateOne({_id:id},{$set:{idc,feche,Bomba,valortanqueo}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"updateOne"}));
});

//DELETE

router.delete('/tanqueo/:id',(req,res)=>{
    const {id} = req.params;
    tanSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"deleteOne"}));
});