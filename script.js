let rightnumber = Math.floor((Math.random() * 10) + 1);
let guesses = 5;
const again = document.getElementById("again")
const form = document.getElementById("form")
const title = document.getElementById("title")
const button = document.getElementById("guessbutton")
const guessesTitle = document.getElementById("window__guesses")
const html = document.getElementById("html")
const actArr = [again, form, title]
let play = true
function handleGuess() {
    let number = document.getElementById('input').value;
    let msg = document.getElementById('str')
    //number is not equal 1-10
    if (number > 10 || number < 1) {
        document.getElementById('str').innerHTML = `Write a number between 1-10!`;
        msg.style.fontWeight = ('600')
        msg.style.color = ('red')
        setTimeout(() => {
            msg.style.fontWeight = ('400')
        }, 200);
        

    } else if (number == rightnumber && guesses > 0) {
        //number is right, win
        msg.style.color = ('black')
        document.getElementById('str').innerHTML = `${number} is a right number!`;
        document.getElementById('header1').innerHTML = `Congratulations`;
        document.getElementById('window__guesses').innerHTML = `Guessed right on the ${6 - guesses} try`;
        html.classList.add("active")


        actArr.forEach(ele => {
            ele.classList.add("active")
        })
        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                window.location.reload();
            }
        }
        )
    } else if (guesses > 1) {
        //number is not right
        msg.style.color = ('black')
        document.getElementById('str').innerHTML = `${number} is not a right number, try again!`;
        guesses--;

        document.getElementById('window__guesses').innerHTML = `You have ${guesses} guesses`;
        html.classList.add("lose")
        setTimeout(() => {
            html.classList.remove("lose")

        }, 200);

    }
    else {
        //losee
        document.getElementById('header1').innerHTML = `No more guesses :((`;
        html.style.backgroundColor='black'
        html.style.color = 'White'
        guessesTitle.classList.add("active")

        actArr.forEach(ele => {
            ele.classList.add("active")
        })

        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                window.location.reload();
            }
        }
        )
    }
    document.getElementById('input').value = ''
}

form.addEventListener("submit", function (event) {
    event.preventDefault()
    handleGuess()
})




button.addEventListener("click", function () {
    handleGuess()
})

again.addEventListener("click", function (event) {
        window.location.reload();

}
)


