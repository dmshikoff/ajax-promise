const model = require('../models/dogs')

function getAll(req, res, next){
  const dogs = model.getAll()
  return res.status(200).send({ data: dogs.data })
}

function getOne(req, res, next){
  const dog = model.getOne(req.params.id)
  if(dog.data){
    return res.status(200).send({ data: dog.data })
  }
  else if(dog.error){
    return next({ status: 404, message: dog.error })
  }
}

function create(req, res, next){
  if(!req.body.name){
    return next({ status: 400, message:'Bad Request'})
  }
  const dog = model.create(req.body.name)
  if(dog.data){
    return res.status(201).send({ data: dog.data })
  }
}

function update(req, res, next){
  if(!req.body.name){
    return next({ status: 400, message: "Bad Request" })
  }
  const dog = model.update(req.params.id, req.body.name)
  if(dog.data){
    return res.status(200).send({ data: dog.data })
  }
  else if(dog.error) {
    return next({ status: 404, message: dog.error })
  }
}

function remove(req, res, next){
  const dog = model.remove(req.params.id)
  if(dog.data){
    return res.status(200).send({ data: dog.data })
  }
  else if(dog.error){
      return next({ status: 404, message: dog.error })
  }
}

module.exports = { getAll, getOne, create, update, remove }
