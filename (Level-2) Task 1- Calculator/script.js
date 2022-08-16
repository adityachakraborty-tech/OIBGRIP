document.getElementById('button').addEventListener('click', function (event) {
    const btnValue = event.target.innerText;
    const inputValue = document.getElementById('mainInput').value;



    if (btnValue == 'clear') {
        document.getElementById('mainInput').value = ' ';
        document.getElementById('resInput').value = ' ';

    }
    else if (btnValue == 'del') {
        document.getElementById('mainInput').value = inputValue.slice(0,inputValue.length-1);

    }
    else if (btnValue == 'ans') {
        document.getElementById('resInput').value = inputValue
        document.getElementById('mainInput').value = eval(inputValue);
        

    }
    else if (btnValue == 'ENTER') {
        document.getElementById('resInput').value = inputValue
        document.getElementById('mainInput').value = eval(inputValue);

    }
    else {
        document.getElementById('mainInput').value = inputValue + btnValue;
    }
})
