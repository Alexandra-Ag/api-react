const express = require('express');
const carSchema=require('../models/carro');

const router = express.Router();

router.post('/carro', async (req, res) => {
    try {
      const nuevoCarro = await carSchema.create(req.body);
      res.status(201).json({ message: 'se agrego la infromacion del carro', data: nuevoCarro });
    } catch (error) {
      console.error('Error al crear la infromacion del carro:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });

module.exports =router;
//BUSCAR GENERAL
router.get('/carro', (req,res)=>{
    carSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error, query:"selectAll"}));
});

//BUSCAR ESPECIFICO
router.get('/carro/:id',(req,res)=>{
    const {id} = req.params;
    carSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"selectOne"}));
});

//Actualizar
router.put('/carro/:id',(req,res)=>{
    const {id} = req.params;
    const {Placa,Marca,Color} = req.body;
    carSchema
    .updateOne({_id:id},{$set:{Placa,Marca,Color}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"updateOne"}));
});

//DELETE

router.delete('/carro/:id',(req,res)=>{
    const {id} = req.params;
    carSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"deleteOne"}));
});