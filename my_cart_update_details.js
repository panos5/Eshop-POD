/**
 * Created by Panagiotis on 1/20/2016.
 */

$(document).ready(function () {


    $("#update_button").click(function() {


        if(userConfirmation() == true) {

            var oldUserName = document.getElementById('user_name_tag').innerHTML.trim();
            var newUserName = document.getElementById('userName').value;
            var userFirstName = document.getElementById('firstName').value;
            var userLastName = document.getElementById('lastName').value;
            var userPassword = document.getElementById('userPassword').value;
            var userEmail = document.getElementById('userEmail').value;
            var userStreetAddress = document.getElementById('userAddress1').value;
            var userHomeAddress = document.getElementById('userAddress2').value;
            var userPostcode = document.getElementById('userPostcode').value;
            var userTelephone = document.getElementById('userTelephone').value;

            var img = $('#image_file_to_upload').src;

            console.log(img);


            $.ajax({

                type: "GET",
                url: "my_cart_update_details.php",
                dataType: "json",
                data: {

                    userName: oldUserName,
                    newUserName: newUserName,
                    firstName: userFirstName,
                    lastName: userLastName,
                    password: userPassword,
                    email: userEmail,
                    streetAddress: userStreetAddress,
                    homeAddress: userHomeAddress,
                    postcode: userPostcode,
                    telephone: userTelephone
                },
                success: function (data) {

                    var status = data.response[0].status;

                    if (status == "OK") {

                        alert("Details updated successfully!!!");
                        location.reload();
                    }


                    else if (status == 'Failed') {

                        alert("Details couldn't manage to update !!!");

                    }

                    else if (status == 'nameFailed') {

                        alert(" Username already exists!!!");

                    }

                },

                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }

            });

        }

        else
        {

        }


        function userConfirmation(){

            var userAnswer = confirm("Are you sure you want to update your details?" );

            if( userAnswer  == true )
            {
                return true;
            }

            else
            {
                return false;
            }
        }



        function move() {

            var elem = document.getElementById("myBar");
            var width = 0;
            var id = setInterval(frame, 10);
            function frame() {
                if (width == 100) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + '%';
                }
            }
        }

    });

});
