


function city(){
   
    const cityArray = [
        "London",
        "Roma",
        "Oslo",
        "Paris",
        "New york",
        "Istanbul",
        "Larvik",
    ];
    
    console.log(cityArray);

    const tilfeldig = Math.floor(Math.random()* cityArray.length)
    const hvor = cityArray[tilfeldig];

document.getElementById("randomElementOutPut").textContent = hvor
console.log([])
}

console.log(city())
