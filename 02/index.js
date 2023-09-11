const container = document.getElementById('container'); 

const inputIntLength = document.createElement('input');
inputIntLength.type = 'number';
container.appendChild(inputIntLength);

const buttonCreateLength = document.createElement('button');
buttonCreateLength.type = 'submit';
buttonCreateLength.innerHTML = "ok";
container.appendChild(buttonCreateLength);

const array = [];  // Initialize an empty array to store input values

buttonCreateLength.onclick = () => {
    let num = inputIntLength.value;
    let i = 0;
    
    while (num > 0) {
        console.log(num);
        const inputNum = document.createElement('input'); 
        inputNum.type = 'number';
        inputNum.setAttribute('class', 'array-element');
        container.appendChild(inputNum);
        num--;
        i++;
    }
};

const buttonGo = document.createElement('button');
buttonGo.type = 'submit';
buttonGo.innerHTML = 'Go';
container.appendChild(buttonGo);

buttonGo.onclick = () => {
    // Collect the input values and save them in the array
    const arrayElements = document.querySelectorAll('input.array-element');
    arrayElements.forEach((input) => {
        array.push(input.value);
    });

    // Sort the array
    array.sort();
    console.log(array);
}
