const shortid = require('shortid')

// data store
let cats = []

function getAll(){
  return { data: cats }
}

function getOne(id){
  const cat = cats.find(cat => cat.id === id)

  if(cat) {
    return { data: cat }
  }
  else {
    return { error: 'Cat Not Found'}
  }
}

function create(name){
  const cat = { id: shortid.generate(), name }
  cats.push(cat)

  return { data: cat }
}

function update(id, name){
  const cat = cats.find(cat => cat.id === id)

  if(cat){
    cat.name = name
    return { data: cat}
  }
  else {
    return { error: 'Cat Not Found'}
  }
}

function remove(id){
  const cat = cats.find(cat => cat.id === id)
  
  if(cat){
    cats = cats.filter(cat => cat.id !== id)
    delete cat.id
    return { data: cat}
  }
  else {
    return { error: "Cat Not Found"}
  }
}

module.exports = { getAll, getOne, create, update, remove }
