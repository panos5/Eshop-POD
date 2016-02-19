/**
 * Created by Panagiotis on 1/15/2016.
 */


$(document).ready(function () {


    $("#log_in_button").click(function() {

         log_in()

    });



    $("#toggle_password").click(function() {


        var checked = $("#toggle_password").is(':checked');

        if(checked == true)
        {
            $('#userPassword').attr('type','text');
        }

        else
        {
            $('#userPassword').attr('type','password');
        }


    });

});

    function log_in()
    {


        var user = $('#userName').val();
        var pass = $('#userPassword').val();

        $('#userName').removeClass("red_empty_borders");
        $('#userPassword').removeClass("red_empty_borders");


        if (user && pass)
        {

            console.log("Details passed correctly!! User:" + user + "  Pass : " + pass );

            $.ajax({

                type: "GET",
                url: "login_server.php",
                dataType: "json",
                data: { userName : user , userPassword : pass},
                success: function(data) {

                    var status = data.response[0].status;

                    if (status == "OK")
                    {

                        /*alert("Login successfully!!!\n Welcome " + user);*/
                        window.location.href = "home_page.html";
                    }

                    else if (status == 'Failed')
                    {
                        alert("Login failed : Check your details again!!");
                    }

                },

                error: function (xhr, ajaxOptions, thrownError){
                    alert(xhr.status);
                    alert(thrownError);
                }

            });
        }


        else
        {
            checkFields(user,pass);

        }


    }



    // Checks if input fields are empty or not and notify users with relevant alert messages
    function checkFields(userName,password)

    {

        if(userName=="" && password=="")
        {
            alert("Username and password fields are empty");
            $('#userName').addClass("red_empty_borders");
            $('#userPassword').addClass("red_empty_borders");
        }


        else if(userName=="")
        {
            alert("Username is empty!!");
            $('#userName').addClass("red_empty_borders");

        }


        else if(password=="")
        {
            alert("Password is empty!!");
            $('#userPassword').addClass("red_empty_borders");
        }

    }



