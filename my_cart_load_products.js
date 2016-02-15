/**
 * Created by Panagiotis on 1/20/2016.
 */

/*When the page loads immediately an ajax request will be sent to the server in order the products of the database to be
displayed on the screen*/
$(document).ready(function () {


    $.ajax({

        type: "GET",
        url: "my_cart_load_products.php",
        dataType: "json",
        success: function (data) {


            var status = data.response[0].status;
            var products = data.response[0].products;

            if (status == "OK")
            {

                var new_products_list = document.createElement('ul');
                new_products_list.setAttribute("style" , "margin:auto; padding-top:20px; width:1400px; height:450px;");

                for(var i=0; i<products.length;i++)
                {

                    // Create a div that will hold all the details of each product in alist format
                    var new_products_panel = document.createElement('div');

                    // Create an unordered list that all the details of each product will be sorted
                    var new_products_details = document.createElement('ul');
                    new_products_details.classList.add('list_details');

                    // Details of price and name of the product will be assigned to new li elements
                    var name = document.createElement('li');
                    var price = document.createElement('li');
                    var add_button = document.createElement('BUTTON');
                    add_button.classList.add('add_product');

                    name.appendChild(document.createTextNode('Product name : '  + products[i][1]));
                    price.appendChild(document.createTextNode('Product price : ' + products[i][2] + '£'));

                    add_button.appendChild(document.createTextNode('Add to cart'));

                    // All new element that have been created above placed on the right containers in order to display on the screen
                    new_products_details.appendChild(name);
                    new_products_details.appendChild(price);
                    new_products_details.appendChild(add_button);
                    new_products_panel.appendChild(new_products_details);
                    new_products_list.appendChild(new_products_panel);
                }

                // Products panel which have been created above and contains all the relevant info replaces the existent panel on the screen in order for the products to
                // be displayed to the user
                $("#products_panel ").replaceWith(new_products_list);

            }

            /* If the status returns from the server is Failed then a message will be displayed on the existent product panel informing
               the user that no products available at the moment
             */
            else if (status == "Failed")
            {

                $("#previous_orders_panel ul").replaceWith('<p class="right_list_elem" style=" text-align: center; color:#6effdf; margin-top:100px;">' +
                                                           'No products to be displayed at the moment</p>');
            }

        },

        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }

    });

});
