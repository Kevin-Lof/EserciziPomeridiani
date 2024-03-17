document.addEventListener('DOMContentLoaded', function() {
    const savedName = localStorage.getItem('userName');
    const nameInput = document.getElementById('nameInput');
    const saveButton = document.getElementById('saveButton');
    const removeButton = document.getElementById('removeButton');

    
    if (savedName) {
      nameInput.value = savedName;
      displaySavedName(savedName);
    }

    
    saveButton.addEventListener('click', function() {
      const newName = nameInput.value;
      localStorage.setItem('userName', newName);
      displaySavedName(newName);
    });

    
    removeButton.addEventListener('click', function() {
      localStorage.removeItem('userName');
      nameInput.value = '';
      displaySavedName('');
    });

   
    function displaySavedName(name) {
      const savedNameDisplay = document.getElementById('savedNameDisplay');
      savedNameDisplay.textContent = `Valore precedentemente salvato: ${name}`;
    }
  })

  /*esercizio2*/
  let intervalId;

  function startCounter() {
    let counterValue = sessionStorage.getItem('counterValue') || 0;

    document.getElementById('counterValue').innerText = counterValue + ' secondi';

    intervalId = setInterval(function () {
      counterValue++;
      document.getElementById('counterValue').innerText = counterValue + ' secondi';

      sessionStorage.setItem('counterValue', counterValue);
    }, 1000);
  }

  function resetCounter() {
    clearInterval(intervalId);

    sessionStorage.removeItem('counterValue');
    document.getElementById('counterValue').innerText = '0 secondi';
  }