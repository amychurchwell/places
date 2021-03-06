//back-end logic//
function Name (firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

function Place (city, country) {
  this.city = city;
  this.country = country;
}

Name.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Place.prototype.fullPlace = function() {
  return this.city + ", " + this.country;
}


//front end logic//
$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();

    var firstNameInput = $("input#firstname").val();
    var lastNameInput = $("input#lastname").val();
    var cityInput = $("input#city").val();
    var countryInput = $("input#country").val();
    var notes = $("#notes").val();

    var newName = new Name (firstNameInput, lastNameInput);
    var newPlace = new Place (cityInput, countryInput);

    $("ul#names").append("<li><span class='clickable'>" + newName.fullName() + "</span></li>");

    $(".clickable").last().click(function() {
      $("#show-names").toggle();
      $(".full-name").text(newName.fullName());
      $(".place").text(newPlace.fullPlace());
      $(".notes").text(notes);


    });
  });
});
