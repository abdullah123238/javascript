document.addEventListener("DOMContentLoaded", function(){
    // Retrivr the save count from local storage or initialize to 0 if not present
    let count = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;
    const counterElement = document.getElementById("counter");

    //display the current count
    counterElement.textContent = count;

    // Add a click event listenner to the button

  document.getElementById("increament").addEventListener("click", function(){
    count++;
    counterElement.textContent = count;

    //save updated count back to local storage

    localStorage.setItem("clickCount", count)

  })  
})