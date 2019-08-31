function Pizza (size, toppings, toppingCost) {
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

Pizza.prototype.total = function() {
  return this.size + 2;
}







$(document).ready(function() {
  $(".form-one").submit(function(event) {
      var inputtedSize = $("input#size").val();
        $("input#size").val("");
      var inputtedToppings = [];
      $("input:checkbox[name=toppings]:checked").each(function(){
        var Toppings = $(this).val();
        inputtedToppings.push(Toppings)
      });
    })
  })
}
