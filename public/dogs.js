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
