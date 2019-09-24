$(document).ready(function() {
    //When input is clicked, move input title up and increase size
    $(".form-entry").focus(function() {
        $(this).prev().css({
            "margin-bottom": "0px",
            "font-size": "1em"
        });
        //Stops it from bubbling to the rest of the inputs
        event.stopPropagation();
    });

//if localstorage item IS NOT EQUAL TO "shown", then there isnt anything in local storage
    //so go ahead and show the popup
    if (localStorage.getItem('popState') != 'shown') {
        $("#popup").delay(500).fadeIn();
        //clicked yes on popup, add the item to localStorage
localStorage.setItem('popState','shown');
}
//Fade the local storage out, now when the page is reloaded, the local storage item
    // WILL BE EQUAL TO "Shown" so the item will be hidden by default, until changed.
    $('#popup-close').click(function(){
        $('#popup').fadeOut(); // Now the pop up is hidden.
});

    //JSON call starts
$.getJSON( "reference.json", function( data ) {
    //Empty variable to print the form data into
    var items = [];
    //Iterates over each JSON object, and prints it as HTML elements
    $.each( data, function( data, value ) {
        items.push("<div class='form-entry__wrap'>" + "<p class='form-entry__title'>" + data + "</p>" + '<input type="text" class="form-entry" value = "' + value + '"/>' + "</div>");
    });
        //Creates div for the JSON objects to live inside
    $( "<div/>", {
        "class": "resultWrap-inner",
        html: items.join( "" )
    }).appendTo( ".resultWrap" );

        //Creates submit button at the bottom of the page
    $( "<button/>", {
        "class": "form-entry__button",
        "id": "save-changes",
        "type": "submit",
        html:( "Submit Changes" )
    }).appendTo( ".resultWrap" );

    //Reloads page once button is clicked
    $('#save-changes').click(function() {
       location.reload();
    });
});

//Validation for reference search, checks to see if the value matches the one specified
$('#search-submit').click(function() {
        if( $('#referenceInput').val() == 26) {
            //IF it does specify, display the loading animation, if not, throw the error
            $(".invalidWrap").append("<img id='truck' class='truck' src='../../src/images/truckLoad.gif'/>");
            $(".invalidWrap").append("<p class='loading-text'>Please Wait while we gather your information</pclass>");
            setTimeout(function() {
                $('.invalidWrap').remove();
            }, 1995);
            //Truck animation ends, and is removed, then the delay for the actual results ends, and they are presented
            $(".resultWrap").delay( 2000 ).fadeIn("slow");
            $(".reference-invalid").css("display", "none");
        } else {
            $( "<div/>", {
                "class": "reference-invalid",
                html:( "Please enter a valid reference number" )
            }).appendTo( ".invalidWrap" );
            event.stopPropagation();
        }
    });
});