import data from "./dataset.json";

let musicData = data.music; 
let qtn = document.querySelector(".question")
let userInputs = document.querySelectorAll('input')
let nextBtn = document.querySelector('.next');

console.log(musicData)

let index = 0;
let right = 0;
let wrong = 0;
let total = musicData.length


const loadQuestion = () => {
    if(index === total) {
       index--
        endQuiz() 
    }
    reset()


     let currentQtn = musicData[index]
    qtn.innerHTML = `${index + 1} ${currentQtn.question}` 

     userInputs[0].nextElementSibling.innerText = currentQtn.options[0]
     userInputs[1].nextElementSibling.innerText = currentQtn.options[1]
     userInputs[2].nextElementSibling.innerText = currentQtn.options[2]
     userInputs[3].nextElementSibling.innerText = currentQtn.options[3]

}



nextBtn.addEventListener("click", () => {
  submitQuiz();
})


const submitQuiz = () => {
    let currentQtn = musicData[index]
   let answer =  getAnswer()

   if(answer === currentQtn.answer) {
             right++
   } else {
             wrong++
   }

   index ++
   loadQuestion()
}



const getAnswer = () => {
   
    let ans = ''
    userInputs.forEach((input) => {
 
        if(input.checked) {
             ans = input.nextElementSibling.innerText
        }

        
    })
 
    return ans
}


const reset = () => {
    userInputs.forEach(
        (input) => {
             input.checked = false
          
    })
 
}



const endQuiz = () => {

   
    document.getElementById("box").innerHTML = `
    <div class = "submitQuiz">
    <h3> Congratulation You Played very well!</h3>
    <h3> Your score is ${right} out of ${total} </h3>
    <button class="playAgainBtn"> Play Again </button>
    </div>
`

let playbtn = document.querySelector('.playAgainBtn')
playbtn.addEventListener("click", () => {
    window.location.href = 'index.html'
})
}

 

loadQuestion();
