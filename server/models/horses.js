const shortid = require('shortid')

// data store
let horses = []

function getAll(){
  return { data: horses }
}

function getOne(id){
  const horse = horses.find(horse => horse.id === id)

  if(horse) {
    return { data: horse }
  }
  else {
    return { error: 'Horse Not Found'}
  }
}

function create(name){
  const horse = { id: shortid.generate(), name }
  horses.push(horse)

  return { data: horse }
}

function update(id, name){
  const horse = horses.find(horse => horse.id === id)

  if(horse){
    horse.name = name
    return { data: horse}
  }
  else {
    return { error: 'Horse Not Found'}
  }
}

function remove(id){
  const horse = horses.find(horse => horse.id === id)
  
  if(horse){
    horses = horses.filter(horse => horse.id !== id)
    delete horse.id
    return { data: horse}
  }
  else {
    return { error: "Horse Not Found"}
  }
}

module.exports = { getAll, getOne, create, update, remove }
