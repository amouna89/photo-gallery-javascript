baguetteBox.run('.gallery');

// const search = new Filter('search', 'data-caption');

//search function 
var input = document.getElementById("search");


input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {//begin if
//variable locale elle n est pas visile en dehors de la fonction 

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

  if (result){
    console.log("valeur trouve");
    console.log(data);
    console.log(img);

  
  }

  else {//object.style.display = "none" pour cacher l'objet
    console.log("valeur non trouvé",img);
    img.style.display="none";

  }//end else
  
 

}//end for

  }//end if
});


 


