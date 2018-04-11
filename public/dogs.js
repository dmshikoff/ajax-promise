document.querySelector('form.create').addEventListener('submit', function(event){
  event.preventDefault()

  const dogName = event.target.dogName.value
  const display = document.querySelector('.createdog')

  axios.post('http://localhost:3000/dogs',{name: dogName})
  .then(function(response){
    const dog = response.data.data

    display.innerHTML = `<code>${JSON.stringify(dog)}</code>`
  })
  .catch(function(error){
    const { status, message } = error.response.data
    display.innerHTML = `<code>${status} - ${message}</code>`
  })
})

document.querySelector('form.getAll').addEventListener('submit', event => {
  event.preventDefault()

  const display = document.querySelector('.displayalldogs')

  axios.get('http://localhost:3000/dogs')
    .then( response => {
      const dogs = response.data.data

      display.innerHTML = `<code>${JSON.stringify(dogs)}</code>`
    })
})

document.querySelector('form.getOne').addEventListener('submit', event => {
  event.preventDefault()

  const display = document.querySelector('.displayonedog')
  const dogId = event.target.dogId.value

  axios.get(`http://localhost:3000/dogs/${dogId}`)
    .then( response => {
      const dog = response.data.data

      display.innerHTML = `<code>${JSON.stringify(dog)}</code>`
    })
    .catch( error => {
      const { status, message } = error.response.data
      display.innerHTML = `<code>${status} - ${message}</code>`
    })
})

document.querySelector('form.delete').addEventListener('submit', event => {
  event.preventDefault()

  const display = document.querySelector('.deletedog')
  const dogId = event.target.dogId.value

  axios.delete(`http://localhost:3000/dogs/${dogId}`)
    .then( response => {
      const dog = response.data.data

      display.innerHTML = `<code>${JSON.stringify(dog)}</code>`
    })
    .catch( error => {
      const { status, message } = error.response.data
      display.innerHTML = `<code>${status} - ${message}</code>`
    })
})

document.querySelector('form.update').addEventListener('submit', event => {
  event.preventDefault()

  const display = document.querySelector('.updatedog')
  const dogId = event.target.dogId.value
  const dogName = event.target.dogName.value

  axios.put(`http://localhost:3000/dogs/${dogId}`, {name: dogName})
    .then( response => {
      const dog = response.data.data

      display.innerHTML = `<code>${JSON.stringify(dog)}</code>`
    })
    .catch( error => {
      const { status, message } = error.response.data
      display.innerHTML = `<code>${status} - ${message}</code>`
    })
})


