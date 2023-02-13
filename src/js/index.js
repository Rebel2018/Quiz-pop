// The following code starts Mock Service Worker tool which allows you to simulate a backend (an API) for building your apps that talk to a remote service. You can visit https://mswjs.io for details on this utility and check src/api/routes.js for a sample API route that you can edit/create as needed to simulate a real world API. This simulated backend will not be part of the completed application (built edition) and you must use a real world backend built using Node.js + Express or Java + Spring Boot to provide such a service.

import data from "./dataset.json"

let quizBtn = document.querySelectorAll("button")



quizBtn.forEach((current) => {
current.onclick = (e) => {
        
  if(sessionStorage.getItem("query") === null) {
   
 
  let clickedBtn = e.target.innerText.toLowerCase()

  if (clickedBtn === "music") {
    sessionStorage.setItem("query", clickedBtn)
    window.location.href = 'music.html'

  } else if (clickedBtn === "modernart") {
    sessionStorage.setItem("query", clickedBtn)
    window.location.href = 'modernArt.html'

  } else {
    sessionStorage.setItem("query", clickedBtn)
    window.location.href = 'coding.html'
  }


}  else {


  let firstData = sessionStorage.getItem("query")  
  let clickedBtn = e.target.innerText.toLowerCase()

if(clickedBtn == firstData) {

  window.location.href = 'index.html'

} 


  else if (clickedBtn === "music") {
    sessionStorage.setItem("query", clickedBtn)
    window.location.href = 'music.html'

  } else if (clickedBtn === "modernart") {
    sessionStorage.setItem("query", clickedBtn)
    window.location.href = 'modernArt.html'

  } else {
    sessionStorage.setItem("query", clickedBtn)
    window.location.href = 'coding.html'
  }
 
  
}

}
})
 