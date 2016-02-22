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

            var status = data.status;

            if (status == "OK")
            {

                var products_size = data.past_orders.length;

                console.log(products_size);

                var table = document.createElement('table');
                table.classList.add("black_border")

                var th1 = document.createElement('TH');
                var th2 = document.createElement('TH');
                var th3 = document.createElement('TH');

                th1.appendChild(document.createTextNode("Order ID"));
                th2.appendChild(document.createTextNode("Order Date"));
                th3.appendChild(document.createTextNode("Price"));
                th1.classList.add("table_config" ,"header_color");
                th2.classList.add("table_config" ,"header_color");
                th3.classList.add("table_config" ,"header_color");

                table.appendChild(th1);
                table.appendChild(th2);
                table.appendChild(th3);

                console.log("ID  "  + " Date Ordered   " + "  Price" +  "\n");

                for (var i = 0; i < products_size; i++)
                {

                    var tr = document.createElement('tr');

                    var td1 = document.createElement('td');
                    var td2 = document.createElement('td');
                    var td3 = document.createElement('td');

                    td1.appendChild(document.createTextNode(data.past_orders[i]["order_id"]));
                    td2.appendChild(document.createTextNode(data.past_orders[i]["order_date"]));
                    td3.appendChild(document.createTextNode(data.past_orders[i]["price"] + " £ "));

                    td1.classList.add("table_config");
                    td2.classList.add("table_config");
                    td3.classList.add("table_config");

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);

                    table.appendChild(tr);

                    console.log(data.past_orders[i]["order_id"] + "     " + data.past_orders[i]["order_date"] +   "     " + data.past_orders[i]["price"] + " £ " +  "\n");
                }


                $("#table_details").css({"visibility":'visible'});
                $("#table_details table").replaceWith(table);

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
