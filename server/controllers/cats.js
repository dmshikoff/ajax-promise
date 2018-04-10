const model = require('../models/cats')

function getAll(req, res, next){
  const cats = model.getAll()
  return res.status(200).send({ data: cats.data })
}

function getOne(req, res, next){
  const cat = model.getOne(req.params.id)
  if(cat.data){
    return res.status(200).send({ data: cat.data })
  }
  else if(cat.error){
    return next({ status: 404, message: cat.error })
  }
}

function create(req, res, next){
  if(!req.body.name){
    return next({ status: 400, message:'Bad Request'})
  }
  const cat = model.create(req.body.name)
  if(cat.data){
    return res.status(201).send({ data: cat.data })
  }
}

function update(req, res, next){
  if(!req.body.name){
    return next({ status: 400, message: "Bad Request" })
  }
  const cat = model.update(req.params.id, req.body.name)
  if(cat.data){
    return res.status(200).send({ data: cat.data })
  }
  else if(cat.error) {
    return next({ status: 404, message: cat.error })
  }
}

function remove(req, res, next){
  const cat = model.remove(req.params.id)
  if(cat.data){
    return res.status(200).send({ data: cat.data })
  }
  else if(cat.error){
      return next({ status: 404, message: cat.error })
  }
}

module.exports = { getAll, getOne, create, update, remove }
