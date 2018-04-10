
document.querySelector('form.getAll').addEventListener('submit', function(event){
  event.preventDefault()

  const display = document.querySelector('.displayallcats')

  axios.get('http://localhost:3000/cats')
  .then(function(response){
    const cats = response.data.data

    display.innerHTML = `<code>${JSON.stringify(cats)}</code>`
  })

})

document.querySelector('form.getOne').addEventListener('submit', function(event){
  event.preventDefault()

  const catId = event.target.catId.value
  const display = document.querySelector('.displayonecat')

  axios.get(`http://localhost:3000/cats/${catId}`)
  .then(function(response){
    const cat = response.data.data

    display.innerHTML = `<code>${JSON.stringify(cat)}</code>`
  })
  .catch(function(error){
    const { status, message } = error.response.data
    display.innerHTML = `<code>${status} - ${message}</code>`
  })
})

document.querySelector('form.create').addEventListener('submit', function(event){
  event.preventDefault()

  const catName = event.target.catName.value
  const display = document.querySelector('.createcat')

  axios.post('http://localhost:3000/cats',{name: catName})
  .then(function(response){
    const cat = response.data.data

    display.innerHTML = `<code>${JSON.stringify(cat)}</code>`
  })
  .catch(function(error){
    const { status, message } = error.response.data
    display.innerHTML = `<code>${status} - ${message}</code>`
  })
})

document.querySelector('form.update').addEventListener('submit', function(event){
  event.preventDefault()

  const catId = event.target.catId.value
  const catName = event.target.catName.value
  const display = document.querySelector('.updatecat')

  axios.put(`http://localhost:3000/cats/${catId}`,{name: catName})
  .then(function(response){
    const cat = response.data.data

    display.innerHTML = `<code>${JSON.stringify(cat)}</code>`
  })
  .catch(function(error){
    const { status, message } = error.response.data

    display.innerHTML = `<code>${status} - ${message}</code>`
  })
})

document.querySelector('form.delete').addEventListener('submit', function(event){
  event.preventDefault()

  const catId = event.target.catId.value
  const display = document.querySelector('.deletecat')

  axios.delete(`http://localhost:3000/cats/${catId}`)
  .then(function(response){
    const cat = response.data.data

    display.innerHTML = `<code>${JSON.stringify(cat)}</code>`
  })
  .catch(function(error){
    const { status, message } = error.response.data

    display.innerHTML = `<code>${status} - ${message}</code>`
  })
})
