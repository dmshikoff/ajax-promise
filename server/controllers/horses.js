const model = require('../models/horses')

function getAll(req, res, next){
  const horses = model.getAll()
  return res.status(200).send({ data: horses.data })
}

function getOne(req, res, next){
  const horse = model.getOne(req.params.id)
  if(horse.data){
    return res.status(200).send({ data: horse.data })
  }
  else if(horse.error){
    return next({ status: 404, message: horse.error })
  }
}

function create(req, res, next){
  if(!req.body.name){
    return next({ status: 400, message:'Bad Request'})
  }
  const horse = model.create(req.body.name)
  if(horse.data){
    return res.status(201).send({ data: horse.data })
  }
}

function update(req, res, next){
  if(!req.body.name){
    return next({ status: 400, message: "Bad Request" })
  }
  const horse = model.update(req.params.id, req.body.name)
  if(horse.data){
    return res.status(200).send({ data: horse.data })
  }
  else if(horse.error) {
    return next({ status: 404, message: horse.error })
  }
}

function remove(req, res, next){
  const horse = model.remove(req.params.id)
  if(horse.data){
    return res.status(200).send({ data: horse.data })
  }
  else if(horse.error){
      return next({ status: 404, message: horse.error })
  }
}

module.exports = { getAll, getOne, create, update, remove }
