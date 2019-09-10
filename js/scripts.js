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

// Pizza.prototype.toppings = function() {
//   if ("toppings".length = 1) {
//     return value;
//   }  else  if ("toppings".length = 2) {
//     return ";
//   }
// }

Pizza.prototype.total = function() {
  var value = parseInt(this.size) + parseInt(this.toppings);
  return value


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

    console.log(parseInt(inputtedToppings))
    var newPizza = new Pizza(inputtedSize, inputtedToppings.length);


      $(".total").text("Your pizza costs $"  + newPizza.total() + "!")
  });
});
