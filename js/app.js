baguetteBox.run('.gallery');

// const search = new Filter('search', 'data-caption');

//search function 
var input = document.getElementById("search");


//define the function logkey due to hoisting :javascript engine loqds the function declaration first then calls the function 
function logKey(e) {
  var input = document.getElementById("search").value;
    var inputLower = input.toLowerCase();
     const nodeList = document.querySelectorAll("a");
  

for (let i = 0; i < nodeList.length; i++) {//begin for
  //retourner le data-caption de chaque anchor <a>
  let data = nodeList[i].getAttribute("data-caption");

  var dataLower = data.toLowerCase();  
  var result = dataLower.includes(inputLower);

  if(result){
    nodeList[i].style.display="";
  }
  else{
    nodeList[i].style.display="none";
  }
  

}//end for

}//end logkey function
  


  document.addEventListener('keyup', logKey);//CALL the function logkey
