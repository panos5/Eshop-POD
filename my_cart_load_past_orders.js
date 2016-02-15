/**
 * Created by Panagiotis on 1/20/2016.
 */


$("#previous_orders").click(function() {

 var userName = document.getElementById('user_name_tag').innerHTML.trim();

    $.ajax({

        type: "GET",
        url: "my_cart_load_past_orders.php",
        dataType: "json",
        data: {userName: userName},
        success: function (data) {

            var status = data.response[0].status;
            var orders_history = data.response[0].orders;

            if (status == "OK")
            {

                var new_orders_list = document.createElement('ul');
                new_orders_list.setAttribute("style" , "width: 1200px; height:450px;");

                for(var i=0; i<orders_history.length;i++)
                {
                        var product_panel = document.createElement('div');

                        var new_product_details = document.createElement('ul');
                        new_product_details.setAttribute("style" , "border:2px dotted salmon; box-shadow:10px 10px 5px #888888;  " +
                                                         "display:inline-block; float:left; margin:35px; padding:20px; border-radius:10px;");

                        var product = document.createElement('li');
                        var price = document.createElement('li');
                        var order_date = document.createElement('li');

                        product.appendChild(document.createTextNode('Product ID : '  + orders_history[i][0]));
                        price.appendChild(document.createTextNode('Product price : ' + orders_history[i][1] + '£'));
                        order_date.appendChild(document.createTextNode('Purchase date: ' + orders_history[i][2]));

                        new_product_details.appendChild(order_date);
                        new_product_details.appendChild(product);
                        new_product_details.appendChild(price);
                        product_panel.appendChild(new_product_details);
                        new_orders_list.appendChild(product_panel);


                }

                $("#previous_orders_panel ul").replaceWith(new_orders_list);

            }

            else if (status == "Failed")
            {
                console.log("Hello error.This is an error message!!");
                $("#previous_orders_panel ul").replaceWith('<p class="right_list_elem" style=" text-align: center; color:red; margin-top:100px;">' +
                    'No orders have been placed yet</p>');
            }
        },

        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }

    });

});
