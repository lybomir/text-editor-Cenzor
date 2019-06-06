const worningWords = getE('.warning-words'),
    textArea = getE('.text-area');
let words = worningWords.textContent.split(' '),
    text = [];


function getE(element) {
    return document.querySelector(element);
}

getE('.button-add').addEventListener('click', function () {
    if (getE('.enter-words').value) {
        words.push(getE('.enter-words').value);
        worningWords.innerHTML = words.join(' ');
        getE('.enter-words').value = '';
        console.log(words);
    }
});


getE('.button-cenzor').addEventListener('click', function () {
    text = textArea.value.split(' ');
    words.forEach(function (word) {
        for (let i = 0; i < text.length; i++) {
            if (word === text[i]) {
                let sum = '';
                for (let j = 0; j < text[i].length; j++){
                    sum+='*';
                }
              text[i] = sum;
            }
        }
    });
    textArea.value = text.join(' ');
});