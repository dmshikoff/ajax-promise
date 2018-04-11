const fs = require('fs')
const path = require('path')
const shortid = require('shortid')
const file = path.join(__dirname, 'db.json')

function getAll(){
  const contents = fs.readFileSync(file, 'utf-8')
  const cats = JSON.parse(contents)
  
  return { data: cats }
}

function getOne(id){
  const contents = fs.readFileSync(file, 'utf-8')
  const cats = JSON.parse(contents)

  const cat = cats.find(cat => cat.id === id)

  if(cat) {
    return { data: cat }
  }
  else {
    return { error: 'Cat Not Found'}
  }
}

function create(name){
  const contents = fs.readFileSync(file, 'utf-8')
  const cats = JSON.parse(contents)

  const cat = { id: shortid.generate(), name }
  cats.push(cat)
  fs.writeFileSync(file, JSON.stringify(cats))

  return { data: cat }
}

function update(id, name){
  const contents = fs.readFileSync(file, 'utf-8')
  let cats = JSON.parse(contents)
  const cat = cats.find(cat => cat.id === id)

  if(cat){
    cat.name = name
    fs.writeFileSync(file, JSON.stringify(cats))
    return { data: cat}
  }
  else {
    return { error: 'Cat Not Found'}
  }
}

function remove(id){
  const contents = fs.readFileSync(file, 'utf-8')
  let cats = JSON.parse(contents)
  const cat = cats.find(cat => cat.id === id)
  
  if(cat){
    cats = cats.filter(cat => cat.id !== id)
    delete cat.id
    fs.writeFileSync(file, JSON.stringify(cats))
    return { data: cat}
  }
  else {
    return { error: "Cat Not Found"}
  }
}

module.exports = { getAll, getOne, create, update, remove }
