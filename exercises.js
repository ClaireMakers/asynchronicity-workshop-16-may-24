const array = [];
array.push("pikachu");

const addVulpix = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/vulpix")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      array.push(data.name);
      return fetch("https://pokeapi.co/api/v2/pokemon/venonat")
    }).then((response) => { 
      return response.json()
    }).then((data) => { 
      array.push(data.name)
      console.log(array)
    })
};

addVulpix();

// console.log(array);
