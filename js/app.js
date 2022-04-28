baguetteBox.run('.gallery');

// const search = new Filter('search', 'data-caption');

//search function 
var input = document.getElementById("search");

document.addEventListener('keyup', logKey);

function logKey(e) {
  var input = document.getElementById("search").value;
    var inputLower = input.toLowerCase();
     const nodeList = document.querySelectorAll("a");
     const imgList =document.querySelectorAll("img");

for (let i = 0; i < nodeList.length; i++) {//begin for
  //retourner le data-caption de chaque anchor <a>
  let data = nodeList[i].getAttribute("data-caption");
  var img = imgList[i];
  var dataLower = data.toLowerCase();  
  var result = dataLower.includes(inputLower);

  if (result === false){
   //object.style.display = "none" pour cacher l'objet
   console.log("valeur non trouvé",img);
   var altimg=img.getAttribute("alt");
   console.log(altimg);
   if (altimg!="icon"){//pour ne pas cacher l'icon car c'est une image aussi
   img.style.display="none";
   }//endif altimg

  }//end if result

  
  
 

}//end for

  }//end logkey function
  




// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {//begin if
// //variable locale elle n est pas visile en dehors de la fonction 

//     var input = document.getElementById("search").value;
//     var inputLower = input.toLowerCase();
//      const nodeList = document.querySelectorAll("a");
//      const imgList =document.querySelectorAll("img");

// for (let i = 0; i < nodeList.length; i++) {//begin for
//   //retourner le data-caption de chaque anchor <a>
//   let data = nodeList[i].getAttribute("data-caption");
//   var img = imgList[i];
//   var dataLower = data.toLowerCase();  
//   var result = dataLower.includes(inputLower);

//   if (result){
//     // console.log("valeur trouve");
//     // console.log(data);

//   }

//   else {//object.style.display = "none" pour cacher l'objet
//     console.log("valeur non trouvé",img);
//     var altimg=img.getAttribute("alt");
//     console.log(altimg);
//     if (altimg!="icon"){//pour ne pas cacher l'icon car c'est une image aussi
//     img.style.display="none";
//     }//endif altimg

//   }//end else
  
 

// }//end for

//   }//end if
// });


 


