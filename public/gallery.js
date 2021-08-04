
var modal = document.getElementById("myModal");
var i;

var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

 for(i=0;i< img.length;i++)
   {    
    img[i].onclick = function(){

    modal.style.display = "block";
       modalImg.src = this.src;
       captionText.innerHTML = this.alt;
 }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}