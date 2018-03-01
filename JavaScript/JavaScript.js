var slides =['#so','#video'];

function slide() {
    console.log(who);
    var div = $(who);
    div.slideToggle("slow");
};

function checkClick(id){
    who = id;
    slide();
}

$(document).ready(function(){
  up();

  var $element = $('#autobus');
  $("#stop").click(function(){
         $element.stop();
          $element = '';
     });

 setInterval(function () {
     $element.fadeIn(1500, function () {
         $element.fadeOut(1000, function () {
             $element.fadeIn(1500)
         });
     });
 }, 2000);


})

function up(){
  var i =0;
  for(i=0; i<= slides.length; i++){
    var div = $(slides[i]);
      div.slideUp('fast');
  }
}
function comprar(){
  alert("Compra realitzada correctament");
}
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
