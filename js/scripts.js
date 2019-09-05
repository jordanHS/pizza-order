function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;

}

Pizza.prototype.size = function() {
  if (size = "small") {
    return  "$10";
  } else if (size = "medium") {
    return  "$12";
  } else if (size = "large") {
    return  "$15";
  }
}

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
    $("#price-one").show();
    $("#price-two").show();
    $("#price-three").show();
    event.preventDefault();
    var inputtedSize = $("input:radio[name=size]").val();
    $("input:radio[name=size]").val("");
    console.log(inputtedSize);
    var inputtedToppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var Toppings = $(this).val();
      inputtedToppings.push(Toppings)
    })
    var newPizza = new Pizza(inputtedSize, inputtedToppings);
  });
});
