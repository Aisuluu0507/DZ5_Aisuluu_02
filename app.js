/////////////////////////////DZ1
let countBlocks = document.querySelectorAll(".counter");
for(let i = 0; i < countBlocks.length; i++) {
countBlocks[i].onclick = function() {
let plusBtn = this.querySelector(".plus");
let minusBtn = this.querySelector('.minus');
let textField = this.querySelector('input');
let textFieldVal = +textField.value;
    plusBtn.onclick = function() {
        textField.value = textFieldVal + 1;
    }
    minusBtn.onclick = function() {
        textField.value = textFieldVal - 1;
    }
        }
    }   

    /////////////////////////////DZ2
    let books2 = ['Война и мир','Звук и ярость','Илиада и Одиссея','Дети полуночи','Вечный сон','Цвет пурпурный']

    function filterBooks(books2) {
    let filteredBooks = books2.filter(book => book.includes("у"))
    let otherBooks = books2.filter(book => !book.includes("у"))
    filteredBooks = filteredBooks.map(book => book + " книга с буквой \"у\"")
    for (let i = 0; i < filteredBooks.length; i++) {
        console.log(filteredBooks[i])
        }
        for (let i = 0; i < otherBooks.length; i++) {
            console.log(otherBooks[i])
            }
        
    }
    filterBooks(books2)
