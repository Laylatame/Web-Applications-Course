$("#submitItem").submit(function(Event){
    event.preventDefault();

    var shopItem = ($("#inputItem").val());
    $('#inputItem').val("");

    console.log(shopItem);

    $(".shopping-list").append("<div class='listItem'><li>" + shopItem + "</li><button type='submit' class='checkButton'> check </button><button type='delete' class='deleteButton'> delete </button></div>");
});


$(".shopping-list").on("click", "button", function(Event){
    event.preventDefault();

    if($(this).hasClass("checkButton")){
        $(this).parent().toggleClass("crossItem");
    }
    else {
        $(this).parent().remove();
        //console.log("delete")
    }
});