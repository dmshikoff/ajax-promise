const shortid = require('shortid')

// data store
let pigs = []

function getAll(){
  return { data: pigs }
}

function getOne(id){
  const pig = pigs.find(pig => pig.id === id)

  if(pig) {
    return { data: pig }
  }
  else {
    return { error: 'Pig Not Found'}
  }
}

function create(name){
  const pig = { id: shortid.generate(), name }
  pigs.push(pig)

  return { data: pig }
}

function update(id, name){
  const pig = pigs.find(pig => pig.id === id)

  if(pig){
    pig.name = name
    return { data: pig}
  }
  else {
    return { error: 'Pig Not Found'}
  }
}

function remove(id){
  const pig = pigs.find(pig => pig.id === id)
  
  if(pig){
    pigs = pigs.filter(pig => pig.id !== id)
    delete pig.id
    return { data: pig}
  }
  else {
    return { error: "Pig Not Found"}
  }
}

module.exports = { getAll, getOne, create, update, remove }
