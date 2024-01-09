
const contenitore = document.createElement("div");
document.body.appendChild(contenitore);

for (let i = 1; i <= 100; i++){
    const numBox = document.createElement("span");
    numBox.textContent = `${i}`;
    contenitore.append(numBox);
    if (i % 3 === 0 && i % 5 === 0){
        numBox.textContent = "FizzBuzz"
        numBox.style.backgroundColor = "#0B132B"
    }
    else if (i % 3 === 0){
        numBox.textContent = "Fizz"
        numBox.style.backgroundColor = "#39A2AE"
    } 
    else if (i % 5 === 0){
        numBox.textContent = "Buzz"
        numBox.style.backgroundColor = "#561F37"
    } 
    else {
    console.log(i)
    numBox.style.backgroundColor = "#CBEF43"
    }    
}

