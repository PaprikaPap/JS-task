class Person {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  }
  
  class Apartment {
    constructor() {
      this.residents = [];
    }
  
    addResident(person) {
      this.residents.push(person);
    }
  }
  
  class Building {
    constructor(maxApartments) {
      this.apartments = [];
      this.maxApartments = maxApartments;
    }
  
    addApartment(apartment) {
      if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
      } else {
        console.log('Cannot add more apartments. Maximum limit reached.');
      }
    }
  }
  
  let person1 = new Person('Іван', 'чоловіча');
  let person2 = new Person('Марія', 'жіноча');
  let person3 = new Person('Петро', 'чоловіча');
  
  let apartment1 = new Apartment();
  let apartment2 = new Apartment();
  
  apartment1.addResident(person1);
  apartment1.addResident(person2);
  apartment2.addResident(person3);
  
  let building = new Building(2);
  
  building.addApartment(apartment1);
  building.addApartment(apartment2);
  
  console.log(building);