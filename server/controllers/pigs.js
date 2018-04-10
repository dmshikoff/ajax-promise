const model = require('../models/pigs')

function getAll(req, res, next){
  const pigs = model.getAll()
  return res.status(200).send({ data: pigs.data })
}

function getOne(req, res, next){
  const pig = model.getOne(req.params.id)
  if(pig.data){
    return res.status(200).send({ data: pig.data })
  }
  else if(pig.error){
    return next({ status: 404, message: pig.error })
  }
}

function create(req, res, next){
  if(!req.body.name){
    return next({ status: 400, message:'Bad Request'})
  }
  const pig = model.create(req.body.name)
  if(pig.data){
    return res.status(201).send({ data: pig.data })
  }
}

function update(req, res, next){
  if(!req.body.name){
    return next({ status: 400, message: "Bad Request" })
  }
  const pig = model.update(req.params.id, req.body.name)
  if(pig.data){
    return res.status(200).send({ data: pig.data })
  }
  else if(pig.error) {
    return next({ status: 404, message: pig.error })
  }
}

function remove(req, res, next){
  const pig = model.remove(req.params.id)
  if(pig.data){
    return res.status(200).send({ data: pig.data })
  }
  else if(pig.error){
      return next({ status: 404, message: pig.error })
  }
}

module.exports = { getAll, getOne, create, update, remove }
