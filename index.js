//PART 1 =============================================================================================================================
(function() {
  'use strict';

  //RED LIGHT ****************************************************************************
  const stopButton = document.getElementById('stopButton');
  const stopLight = document.getElementById('stopLight');

  stopButton.addEventListener('click',function() {
    stopLight.classList.toggle("stop");   
  })
  //YELLOW LIGHT ************************************************************************
  const slowButton = document.getElementById('slowButton');
  const slowLight = document.getElementById('slowLight');

  slowButton.addEventListener('click',function() {
    slowLight.classList.toggle("slow");   
  })
   //GREEN LIGHT ************************************************************************
   const goButton = document.getElementById('goButton');
   const goLight = document.getElementById('goLight');
 
   goButton.addEventListener('click',function() {
    goLight.classList.toggle("go");   
   })

   //goLight.cassList.toggle("go");
  //COMPLETE*****************************************************************************
})();


//PART 2 =============================================================================================================================
(function() {

  stopButton.addEventListener("mouseenter",function(event) {
    console.log("Entered stop button");
  })
  stopButton.addEventListener("mouseleave",function(event) {
    console.log("Left stop button");
  })

  slowButton.addEventListener("mouseenter",function(event) {
    console.log("Entered slow button");
  })
  slowButton.addEventListener("mouseleave",function(event) {
    console.log("Left slow button");
  })

  goButton.addEventListener("mouseenter",function(event) {
    console.log("Entered go button");
  })
  goButton.addEventListener("mouseleave",function(event) {
    console.log("Left go button");
  })
  
})();

//BONUS =============================================================================================================================
