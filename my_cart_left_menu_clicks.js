/**
 * Created by Panagiotis on 1/21/2016.
 */
$(document).ready(function () {

    var previous_ord = $("#previous_orders");
    var shopping_cart =  $("#my_shopping_cart");



    $("#previous_orders").click(function () {

        $("#previous_orders_panel").css("visibility","visible");
        $("#my_shopping_cart_panel").css("visibility", "hidden");

        swapColorElements(previous_ord , shopping_cart);

    });


    $("#my_shopping_cart").click(function () {

        $("#previous_orders_panel").css("visibility", "hidden");
        $("#my_shopping_cart_panel").css("visibility", "visible");

        swapColorElements(shopping_cart , previous_ord);
    });



});


function swapColorElements(elementOne , elementTwo ){

    elementOne.css({"color": "#4adb7f"});
    elementTwo.css({"color": "black"});


}
