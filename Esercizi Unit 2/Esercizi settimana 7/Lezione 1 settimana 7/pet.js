class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    stessoProprietario(altroPet) {
        if (this.ownerName === altroPet.ownerName) {
            return true
        } else {
            false
        }
    }
  
}
let pet1= new Pet ('jack', 'kevin', 'cane', 'pastore tedesco')
let pet2= new Pet ('nick', 'kevin', 'cane', 'pastore tedesco')

console.log(pet1.stessoProprietario(pet2));
function creaPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const pet = new Pet(petName, ownerName, species, breed);
    aggiungiPetToList(pet);
    document.getElementById('petForm').reset();
}

function aggiungiPetToList(pet) {
    const petList = document.getElementById('petList');
    const listItem = document.createElement('li');
    listItem.textContent = `Nome Animale: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(listItem);
}