class Country {
    constructor (names, city) {
      this.name = name;
      this.city = city;
    }
  
  
    describe(){
      return `${this.name} plays ${this.location}`;
    }
  } 


  class city {
    constructor(name) {
      this.name = name;
      this.countrys = [];
  }


  addCountry(country){
    if (country instanceof country) {
      this.countrys.push(country);
    }else {
      throw new Error(`You can only add an instance of country. Argument is not a country: ${country}`);
    }
}


describe() {
    return `${this.name} has ${this.countrys.length} countrys.`;
  }
}

class Menu {
    constructor () {
      this.country = [];
      this.selectedCountry = null;
    }


    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
          switch (selection) {
            case '1':
              this.createCountry();
                break;
              case '2':
                this.viewCountry();
                break;
              case '3':
                this.deleteCountry();
                break;
              case '4':
              default:
                selection = 0;
          }
          selection = this.showMainMenuOptions();
        }


        alert (`Goodbye!`);
      }

      showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new country
        2) view all Countries
        3) delete country
        `);
      }


      showCountryMenuOptions(countryInfo) {
        return prompt (`
        0) back
        1) create city
        2) delete city
        -----------------
        ${countryInfo}
        `)
      }


      displayCountry() {
        let countrySting = '';
        for (let i = 0; i < this.country.length; i++) {
          countryting += i + ')' + this.country[i].name + `\n`;
        }
        alert (countrySting);
      }

      
      createCountry() {
        let name = prompt (`Enter name for new country:`);
         this.country.push(new Country(name));
      }


      viewCountry() {
        let index = prompt ('Enter the index of the country you wish to view:');
        if (index > -1 && index < this.country.length) {
          this.selectedCountry = this.city[index];
          let description = 'Country Name: ' + this.selectedCountry.name + '\n';
      


          for (let i = 0; i < this.selectedCountry.city.length; i++){
            description += i + ') ' + this.selectedCountry.city[i].name
            + ' - ' + this.selectedCountry.city[i].location + '\n';
          }
        }


        let selection = this.showCountryMenuOptions(description);
        switch (selection) {
          case '1':
            this.createC4ountry();
            break;
          case '2':
          this.deleteCountry();
        }
    
}

deleteCountry() {
    let index = prompt('Enter the index of the country you wish to delete:');
    if (index > -1 && index < this.city.length) {
      this.city.splice(index, 1);
    }
  }

  createCountry() {
    let name = prompt('Enter name for country');
    let city = prompt ('Enter city for new country');
    this.Country.city.push(new Country(name, city));
  }
  deleteCountry() {
    let index = prompt('Enter the index of the country you wish to delete:');
    if (index > -1 && index < this.selectedCountry.city.length) {
      this.selectedCountry.city.splice(index, 1);
    }
  }
  }

  let menu = new Menu();
menu.start();

  
  
  

