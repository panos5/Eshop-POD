/**
 * Created by Panagiotis on 1/15/2016.
 */


$(document).ready(function () {

    $("#send_message_button").click(function() {

        var user    = $('#userName').val();
        var email   = $('#userEmail').val();
        var message = $('#userMessage').val();

        if (user && email && message)
        {
            console.log("Details passed correctly!! User:" + user + "  Email : " + email );

            $.ajax({

                type: "GET",
                url: "send_email_to_server.php",
                dataType: 'text',
                data: {userName: user , userEmail : email, userMessage: message},

                success: function (status) {


                console.log(status);

                    if (status == "OK")
                    {
                        alert("Success.mail send successfully!!!");

                    }

                    else if (status == 'Failed')
                    {

                        console.log("No Success.Please try again!!");
                    }

                },


                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }

            });

        }


        else if(user == "" || email == "")
        {

            alert("Either your email or name fields are empty!!")

            $('#userName').addClass("red_field");
            $('#userEmail').addClass("red_field");

        }

        else if(email == "" && user)
        {

            $('#userName').removeClass("red_field");
            $('#userEmail').addClass("red_field");

        }

        else if(user == "")
        {

            $('#userName').addClass("red_field");
            $('#userEmail').removeClass("red_field");

        }



        else if( message == "")
        {

            alert("Your message is empty")
            $('#userMessage').addClass("red_field");

        }


    });

});