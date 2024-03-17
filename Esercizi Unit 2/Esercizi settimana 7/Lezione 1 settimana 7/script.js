class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    confrontaEta(altraPersona) {
      if (this.age > altraPersona.age) {
        return `${this.firstName} è più vecchio di ${altraPersona.firstName}`;
      } else if (this.age < altraPersona.age) {
        return `${this.firstName} è più giovane di ${altraPersona.firstName}`;
      } else {
        return `${this.firstName} ha la stessa età di ${altraPersona.firstName}`;
      }
    }
  }
  
  const utente1 = new User("Mario", "Rossi", 30, "Milano");
  const utente2 = new User("Luca", "Verdi", 35, "Roma");
  
  const confrontoEtà = utente1.confrontaEta(utente2);
  console.log(confrontoEtà);
  
