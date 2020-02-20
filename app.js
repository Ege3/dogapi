fetch('https://dog.ceo/api/breeds/image/random')
.then(response => {
    return response.json()
})

.then(data => {
    const container = document.getElementById('container')

    let img = document.createElement('img')
    img.setAttribute('src', data.message)

    container.append(img)
})