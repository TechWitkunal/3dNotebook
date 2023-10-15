// References to DOM elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector('#book');
const paper = document.querySelectorAll(".paper");

const paper1 = document.querySelector('#p1');

// assigning zIndex property
// book.querySelectorAll(".paper")[0].style.zIndex = 1;

// Event listeners
window.addEventListener("load", setzIndex)
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

// Business Logic
let currentState = 1;
let numOfPapers = paper.length;
let maxState = numOfPapers + 1;

function setzIndex() {
    let i = 0;
    let numberOfZIndex = numOfPapers;
    for (j = 0; j < numOfPapers; j++) {
        book.querySelectorAll(".paper")[i].style.zIndex = numberOfZIndex;
        i++;
        numberOfZIndex--;
    }
}


function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isFirstPage) {
    if (isFirstPage) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

// let z_Index = 1;

function goNext() {
    if(currentState < maxState) { 
        if (currentState === 1) {
            openBook();
            book.querySelectorAll(".paper")[currentState - 1].classList.add("flipped");
            book.querySelectorAll(".paper")[currentState - 1].style.zIndex = currentState;
            currentState++;
        }else if (currentState == (maxState - 1)) {
            closeBook();
            book.querySelectorAll(".paper")[currentState - 1].classList.add("flipped");
            book.querySelectorAll(".paper")[currentState - 1].style.zIndex = currentState;
            currentState++;
        }else {
            book.querySelectorAll(".paper")[currentState - 1].classList.add("flipped");
            book.querySelectorAll(".paper")[currentState - 1].style.zIndex = currentState;
            currentState++;
        }
        // setzIndex()
    }
}

let ki = 1;
function goPrevious() {
    if(currentState > 1) {
        if (currentState == maxState) {
            openBook()
            book.querySelectorAll(".paper")[currentState - 2].classList.remove("flipped");
            currentState--;
            book.querySelectorAll(".paper")[maxState - 2].style.zIndex = 1;
            ki++;
        }else {

            if (currentState == 2) {
                closeBook(true)
                console.log("closeBook call")
            }
            
            currentState--;
            book.querySelectorAll(".paper")[currentState -1].classList.remove("flipped");
            book.querySelectorAll(".paper")[currentState -1].style.zIndex = ki;
            ki++;
            }
    }
}