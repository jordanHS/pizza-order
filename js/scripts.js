function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}





$(document).ready(function() {
  $("form#size").submit(function(event) {
  var Size = $("input#size").val();
})
$("form#toppings").submit(function(event) {
    var Toppings = $("input#toppings").val();
})
});
