// check if there is a color in local storage

let colorOption = localStorage.getItem("color-option");

let backgroundImageOption = true;

let backgroundInterval;

if(colorOption !== null){
    document.documentElement.style.setProperty("color-option" , colorOption)

    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");
    
        // Add Active Class On Element With Data-Color === Local Storage Item
        if (element.dataset.color === colorOption) {
    
          // Add Active Class
          element.classList.add("active");
    
        }
    
      });


}

// check if there is a random background in local storage


let backgroundOption = localStorage.getItem("background-option");

if(backgroundOption !== null) {

    if(backgroundOption === "true") {
      
        backgroundOption=true;
    }else{

        backgroundOption=false;
    }

    document.querySelectorAll(".random-backgrounds span").forEach(element =>
        element.classList.remove("active")
        );

        if(backgroundOption === "true"){

            document.querySelector(".random-backgrounds .yes").classList.add("active");


        }else {

            document.querySelector(".random-backgrounds .no").classList.add("active");

        }

        
}


 

// opening setting box

document.querySelector(".toggle-setting").onclick = function(){
 
    document.querySelector(".setting-box").classList.toggle("open")
}

// changing colors

const colorLi = document.querySelectorAll(".colors-list li");

colorLi.forEach(li => {
    li.addEventListener("click" , (e) => {
        document.documentElement.style.setProperty("--main-color" , e.target.dataset.color);
   
        localStorage.setItem("color-option",e.target.dataset.color );

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");

        } );

        e.target.classList.add("active");
   
    });
});

    // random background

    const randomBackEL = document.querySelectorAll(".random-backgrounds span");

    randomBackEL.forEach(span => {
    span.addEventListener("click" , (e) => {
        

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");

        } );

        e.target.classList.add("active");


        if(e.target.dataset.background == "yes"){

            backgroundImageOption = true;

            randomize ();

            localStorage.setItem("background-option", true);

        }else{

            backgroundImageOption = false;


            clearInterval(backgroundInterval)

            localStorage.setItem("background-option", false);


        }




   
    });
});




//    changing backgroundImage

let landingPage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg" ,"02.jpg" ,"03.jpg" ,"04.jpg" , "05.jpg"];

// setInterval(()=>{
//     let randomNumber = Math.floor(Math.random() * imgsArray.length)
//     landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")'
// },1000);



// random backgroundImage option


function randomize (){

  if(backgroundImageOption == true) {


    backgroundInterval = setInterval(()=>{
        let randomNumber = Math.floor(Math.random() * imgsArray.length)
        landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")'
    },5000);
  }

}




// creato popup


let gallery = document.querySelectorAll(".gallery img");

gallery.forEach(img => {
    img.addEventListener("click",(e) =>{

        let overlay = document.createElement("div");

        overlay.className= "popup-overlay";

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");


        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            let imgHeading = document.createElement("h3");
      
            let imgText = document.createTextNode(img.alt);
      
            imgHeading.appendChild(imgText);
      
            popupBox.appendChild(imgHeading);
      
        }


        let popupImage = document.createElement("img");


        popupImage.src = img.src;
    

        popupBox.appendChild(popupImage);

        
        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");
    
        closeButton.appendChild(closeButtonText);
    
        closeButton.className = 'close-button';
    
        popupBox.appendChild(closeButton);


    });
});


// Close Popup


document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {
  
      e.target.parentNode.remove();
  
      document.querySelector(".popup-overlay").remove();
  
    }
  
  });




//   navige to bullet section


const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet =>
   {
    bullet.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        });
    });

   });




    //    show bullets


    let bulletsSpan = document.querySelectorAll(".bullets-option span");

    let bulletsContainer = document.querySelector(".nav-bullets");

    let bulletLocalItem = localStorage.getItem("bullet-option");

    if(bulletLocalItem !== null){

        bulletsSpan.forEach(span =>{
            span.classList.remove("active")
        });

        if(bulletLocalItem === "block") {
            bulletsContainer.style.display = "block";

            document.querySelector(".bullets-option .yes").classList.add("active");
        
        }else{
            bulletsContainer.style.display =" none ";

            document.querySelector(".bullets-option .no").classList.add("active");

        }
    }

    bulletsSpan.forEach(span=>{

        span.addEventListener("click",(e)=>{

            if(e.target.dataset.display === "show"){

                bulletsContainer.style.display = "block";

                localStorage.setItem("bullet-option","block");


            }else{
                bulletsContainer.style.display = "none";

                localStorage.setItem("bullet-option","none");


            }


            e.target.parentElement.querySelectorAll(".active").forEach(element=>{

                element.classList.remove("active");
            });

            e.target.classList.add("active");


        });

    });


    //    reset options

document.querySelector(".reset-option").onclick = function () {
localStorage.clear();
location.reload();

}



//         Toggle Menu 



let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

  e.stopPropagation();

  this.classList.toggle("menu-active");

  tLinks.classList.toggle("open");

};


// Click Anywhere Outside Menu And Toggle Button


document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {
  
      if (tLinks.classList.contains("open")) {
  
        toggleBtn.classList.toggle("menu-active");
  
        tLinks.classList.toggle("open");
  
      }
  
    }
  
  });
  
  // Stop Propagation On Menu 
  tLinks.onclick = function (e) {
    e.stopPropagation();
  }
