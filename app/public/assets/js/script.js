$(document).ready(function () {

    //Materalize initiation
    $('.slider').slider({
        'interval': 3000
    });
    $('select').material_select();
    $('.modal').modal();

    $("#submit-user").on("click", (event) => {
            event.preventDefault();
            let userName = $("#name").val().trim();
            let photoLink = $("#photo").val().trim();
    
            let qOne = $("#qOne").val();
            let qTwo = $("#qTwo").val();
            let qThree = $("#qThree").val();
            let qFour = $("#qFour").val();
            let qFive = $("#qFive").val();
            let qSix = $("#qSix").val();
            let qSeven = $("#qSeven").val();
            let qEight = $("#qEight").val();
            let qNine = $("#qNine").val();
            let qTen = $("#qTen").val();
    
            //Create user object
            let newFriend = {
                "name": userName,
                "photo": photoLink,
                "scores": [
                    parseInt(qOne),
                    parseInt(qTwo),
                    parseInt(qThree),
                    parseInt(qFour),
                    parseInt(qFive),
                    parseInt(qSix),
                    parseInt(qSeven),
                    parseInt(qEight),
                    parseInt(qNine),
                    parseInt(qTen)
                ]
            }
    
            console.log(newFriend);
    
            let currentURL = window.location.origin;
    
            $.post(currentURL + "/api/friends", newFriend, (data) => {
                console.log(data.photo);
                $(".modal-content").html(`<h1>Your new friend is <span class="friend-name">${data.name}</span></h1>
                <img class="friend-photo" src=${data.photo}>`);
                $("#modal1").modal("open");
            })
    
        });

});