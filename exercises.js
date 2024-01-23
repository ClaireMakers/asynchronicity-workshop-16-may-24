// const firstFunction = () => { 
//     console.log(1)
// }

// const secondFunction = () => { 
//     return new Promise((resolve, reject) => { 
//         resolve(2)
//     }).then((number) => { 
//         console.log(2);
//     })
// }

// const thirdFunction = () => { 
//     console.log(3)
// }

// firstFunction()
// secondFunction()
// thirdFunction()

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
