$(document).ready(function () {

  //Materalize initiation
  $('.slider').slider();
  $('select').material_select();

  //Grab info from survey
  $("#submit-user").on("click", (event) => {
    event.preventDefault();
    let userName = $("#name").val().trim();
    let photoLink = $("#photo").val().trim();

    let qOne = $("#qOne").val();
    console.log(qOne);
    let qTwo = $("#qTwo").val();
    console.log(qTwo);
    let qThree = $("#qThree").val();
    console.log(qThree);
    let qFour = $("#qFour").val();
    console.log(qFour);
    let qFive = $("#qFive").val();
    console.log(qFive);
    let qSix = $("#qSix").val();
    console.log(qSix);
    let qSeven = $("#qSeven").val();
    console.log(qSeven);
    let qEight = $("#qEight").val();
    console.log(qEight);
    let qNine = $("#qNine").val();
    console.log(qNine);
    let qTen = $("#qTen").val();
    console.log(qTen);

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

  });


});

