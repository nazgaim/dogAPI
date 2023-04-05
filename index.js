
fetch('https://dog.ceo/api/breed/affenpinscher/images/random')
    .then(function(value) { 
        return value.json() 
    })
    .then(function (json) {
        const image = document.querySelector('img')
        image.src = json.message
    })
    