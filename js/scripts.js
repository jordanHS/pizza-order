function Pizza (size, toppings, toppingCost) {
  this.size = size;
  this.toppings = toppings;

}

Pizza.prototype.cost = function() {
  if (size = "small") {
    return  "$10";
} else if (size = "medium") {
    return  "$12";
} else if (size = "large") {
  return  "$15";
} else if (size = "extra-large") {
  return  "$20"
  }
}

Toppings.prototype.cost = function() {
  if ("toppings".length[] = "1") {
    return "$1";
}  else  if (toppings.length[] = "2") {
  return "$2";
} else if (toppings.length)







$(document).ready(function() {
  $(".form-one").submit(function(event) {
    $(".form-one").hide();
})
  $(".form-two").submit(function(event) {
    $(".form-two").show();
      var inputtedSize = $("input#size").val();
        $("input#size").val("");
      var inputtedToppings = [];
      $("input:checkbox[name=toppings]:checked").each(function(){
        var Toppings = $(this).val();
        inputtedToppings.push(Toppings)
      });
})
});
