/**
 * Created by Panagiotis on 1/20/2016.
 */

$(document).ready(function () {


    var userName = document.getElementById('user_name_tag').innerHTML.trim();

    $.ajax({

        type: "GET",
        url: "my_cart_load_details.php",
        dataType: "json",
        data: {userName: userName},
        success: function (data) {

            var status    = data.response[0].status;
            var user_name = data.response[0].user_name;
            var password  = data.response[0].password;
            var first_name= data.response[0].first_name;
            var last_name = data.response[0].last_name;
            var email     = data.response[0].email;
            var street_add= data.response[0].street_address;
            var home_add  = data.response[0].home_address;
            var postcode  = data.response[0].postcode;
            var telephone = data.response[0].telephone;


            if (status == "OK")
            {

                $("#userName").val(user_name);
                $("#userPassword").val(password);
                $("#firstName").val(first_name);
                $("#lastName").val(last_name);
                $("#userEmail").val(email);
                $("#userAddress1").val(street_add);
                $("#userAddress2").val(home_add);
                $("#userPostcode").val(postcode);
                $("#userTelephone").val(telephone);

            }

            else if (status == 'Failed')
            {

            }

        },


        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }

    });

});


function previewFile(){

    var preview = document.getElementById('profile_image'); //selects the query named img
    var file    = document.getElementById('image_file_to_upload').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }

}

