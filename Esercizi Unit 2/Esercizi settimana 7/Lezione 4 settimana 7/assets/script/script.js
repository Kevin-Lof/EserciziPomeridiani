let loadButton = document.querySelector('.load-button')
let loadButton2 = document.querySelector('.load-button2')
async function chiamata(query){

    const apiKey = 'lU4I7mvQkqeXowAR4u6DaRkCmpCh65X3pyW9oWMRXtOiaA0Irvivt8jo';
    
    return await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        method: 'GET',
        headers: {
            Authorization: apiKey
        }
    }).then(dati => dati.json())
}

loadButton.addEventListener('click', function(){
    chiamata('mountains').then((dati) =>{
        let image = document.querySelectorAll('.card-img-top')
        dati.photos.forEach((foto, i) => {
        
                image[i].src = foto.src.medium
            
        })
    })
})

loadButton2.addEventListener('click', function(){
    chiamata('sunset').then((dati) =>{
        let image = document.querySelectorAll('.card-img-top')
        dati.photos.forEach((foto, i) => {
        
                image[i].src = foto.src.medium
            
        })
    })
})

async function loadSearch() {
    try {
        let response = await fetch((baseURL + searchText.value), {
            headers: {
                "Authorization": 'lU4I7mvQkqeXowAR4u6DaRkCmpCh65X3pyW9oWMRXtOiaA0Irvivt8jo'
            }
        })
        immagini = await response.json();
        console.log(immagini.photos);

    }
    catch(error){
        console.log('Error:', error);

    }
}
