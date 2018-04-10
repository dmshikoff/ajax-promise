const shortid = require('shortid')

// data store
let dogs = []

function getAll(){
  return { data: dogs }
}

function getOne(id){
  const dog = dogs.find(dog => dog.id === id)

  if(dog) {
    return { data: dog }
  }
  else {
    return { error: 'Dog Not Found'}
  }
}

function create(name){
  const dog = { id: shortid.generate(), name }
  dogs.push(dog)

  return { data: dog }
}

function update(id, name){
  const dog = dogs.find(dog => dog.id === id)

  if(dog){
    dog.name = name
    return { data: dog}
  }
  else {
    return { error: 'Dog Not Found'}
  }
}

function remove(id){
  const dog = dogs.find(dog => dog.id === id)
  
  if(dog){
    dogs = dogs.filter(dog => dog.id !== id)
    delete dog.id
    return { data: dog}
  }
  else {
    return { error: "Dog Not Found"}
  }
}

module.exports = { getAll, getOne, create, update, remove }
