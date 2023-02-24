$(document).ready(function () {


  function loadingmytable(data)
  {
    console.log("in func")
    console.log("in here")
    let tablepassingvalue= "<tr>";
    for(var i = 0; i< data.length; i++)
    {
      tablepassingvalue += "<td>" + data[i].address + "</td>";
      tablepassingvalue += "<td>" + data[i].postal_code + "</td>";
      tablepassingvalue += "<td>" + data[i].city + "</td>";
      tablepassingvalue += "<td>" + data[i].community + "</td>";
      tablepassingvalue += "<td>" + data[i].province + "</td>";
      tablepassingvalue += "<td>" + data[i].price  + "</td>";
      tablepassingvalue += "<td>" + data[i].bedrooms + "</td>";
      tablepassingvalue += "<td>" + data[i].bathrooms + "</td>";
      tablepassingvalue += "<td>" + '<img src="' +data[i].img + '">' +"</td>";
      tablepassingvalue += "<td>" + data[i].description + "</td>";
      tablepassingvalue += "</tr>";

    }
    $("#tabledataoutputpassed").html(tablepassingvalue);

  }

  $("#Allbtn").click(function () {
    console.log("in ehere laoding")
    $.get({
        url: "http://localhost:3000/all",
        success: loadingmytable,
        dataType: "json",
    });
});

function community(community) {
  $.get({
      url: "http://localhost:3000/community_search?community=" + community,
      success: loadingmytable,
      dataType: "json",
  });
}

$("#Ancasterbtn").click(function () {
  community("Ancaster");
});

$("#Dundasbtn").click(function () {
  community("Dundas");
});

$("#Mountainbtn").click(function () {
  community("Mountain");
});

$("#Stoney_Creekbtn").click(function () {
  community("Stoney Creek");
});

$("#Waterdownbtn").click(function () {
  community("Waterdown");
});

$("#Number_of_BedroomsBtn").click(function () {
  console.log("loading my bed")
  var Bedrooms = $("#bedroom option:selected").val();
  if (Bedrooms >= 0) {
      $.get({
          url: "http://localhost:3000/bed_search?bedrooms=" + Bedrooms,
          success: loadingmytable,
          dataType: "json",
      });
  }

});

$("#Number_of_BathroomsBtn").click(function () {
  console.log("loading my bathroom")
  Bathrooms = $("#bathroom option:selected").val();
  if (Bathrooms >= 0) {
      $.get({
          url: "http://localhost:3000/bed_search?bedrooms=" + Bathrooms,
          success: loadingmytable,
          dataType: "json",
      });
  }

});


$("#fitlerpricebtn").click(function () {
   min = $("#MinPrice").val();
   max = $("#MaxPrice").val();
  $.get({
      url: "http://localhost:3000/price_search?min=" + min + "&max=" + max,
      success: loadingmytable,
      dataType: "json",
  });
});




});