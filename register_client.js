/**
 * Created by Panagiotis on 1/15/2016.
 */


/* When the DOM has been loaded a series of events occur when the register button is clicked.
 A list of checks take place regarding the fields of the username and the password.
 In each case an alert message is thrown to the user to notify about the process. */

$(document).ready(function () {

        $("#register_button").click(function() {

                var user = $('#userName').val();
                var pass = $('#userPassword').val();
                var repass = $('#repeatPassword').val();
                var fName = $('#firstName').val();
                var lName = $('#lastName').val();
                var email = $('#userEmail').val();
                var streetNumber = $('#userAddress1').val();
                var houseNumber = $('#userAddress2').val();
                var postcode = $('#userPostCode').val();
                var telephone = $('#userTelephone').val();

                $('#userPassword').removeClass("red_empty_borders");
                $('#repeatPassword').removeClass("red_empty_borders");


                if ( user && pass && repass && fName && lName && email && streetNumber && houseNumber && postcode && telephone ) {

                    if (pass == repass && pass != "" && repass != "") {

                        if ((telephone.match(/^\d+$/) && validateEmail(email) == true)) {

                            $('#userTelephone').removeClass("red_empty_borders");
                            $("#userEmail").removeClass("red_empty_borders");

                            alert("Details have passed successfully!!");

                            $.ajax({

                                type: "GET",
                                url: "register_server.php",
                                dataType: "json",
                                data: {
                                    userName: user, userPassword: pass, firstName: fName, lastName: lName,
                                    email: email, streetNumber: streetNumber, houseNumber: houseNumber,
                                    postcode: postcode, telephone: telephone
                                },

                                success: function (data) {

                                    var status = data.response[0].status;

                                    if (status == "OK") {

                                        alert("Register successfully!!!\n Welcome " + fName);
                                        window.location.href = "home_page.html";

                                    }

                                    else if (status == 'Failed') {
                                        alert("Register failed : The username already exists!!");

                                    }
                                },

                                error: function (xhr, ajaxOptions, thrownError) {
                                    alert(xhr.status);
                                    alert(thrownError);
                                }

                            });
                        }


                        else if( validateEmail(email) == false)
                        {
                                alert("Please enter a valid email address.");
                                $("#userEmail").addClass("red_empty_borders");
                                $('#userTelephone').removeClass("red_empty_borders");
                        }


                        else
                        {
                            alert ("Telephone number has to contain ony digits!!")
                            $('#userTelephone').val("").addClass("red_empty_borders")
                            $("#userEmail").removeClass("red_empty_borders");
                        }

                    }

                    else
                    {
                        alert("The passwords don't match. Please insert the same password in both fields.");
                        $('#userPassword').val("").addClass("red_empty_borders")
                        $('#repeatPassword').val("").addClass("red_empty_borders")
                    }
                }

                else
                {
                    alert("Please fill all the fields of the form!! ");
                }


        });


        function validateEmail(inputEmail)
        {

            var status = "";
            var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

            if (inputEmail.search(emailRegEx) == -1)
            {
                status = false;
            }


            else
            {
                status = true;
            }


            return status;
        }

});