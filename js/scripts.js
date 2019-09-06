function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;

}

// //Pizza.prototype.size = function() {
//   if (this.size == "small") {
//     return  "$10";
//   } else if (this.size == "medium") {
//     return  "$12";
//   } else if (this.size == "large") {
//     return  "$15";
//   }
// }

Pizza.prototype.toppings = function() {
  if ("toppings".length = 1) {
    return "$1";
  }  else  if ("toppings".length = 2) {
    return "$2";
  }
}

Pizza.prototype.total = function() {
  return this.size + 2;
}







$(document).ready(function() {
  $(".pizza").submit(function(event) {

    event.preventDefault();
    var inputtedSize = $("input:radio[name=size]:checked").val();
    console.log(inputtedSize);
    var inputtedToppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppings = $(this).val();
      inputtedToppings.push(toppings)
    })
    var newPizza = new Pizza(inputtedSize, inputtedToppings);
      if (newPizza.size == "small") {
          $("#price-one").show();
      } else if (newPizza.size == "medium") {
        $("#price-two").show();
      } else {
        $("#price-three").show();
      }
  });
});
