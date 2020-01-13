$("#dogForm").submit(function(Event){
    event.preventDefault();

    $("#dogImages").empty();

    var dogBreed = ($("#searchDog").val());
    var numImages = parseInt($("#numImgs").val());

    console.log(dogBreed);

    $.ajax({
        url: 'https://dog.ceo/api/breed/' + dogBreed + '/images/random/' + numImages,
        method: "GET",
        dataType: "json",
        success: function(responseJson){
            for (var i = 1; i <= numImages; i++) {
                $('#dogImages').append(`<li><img src="${responseJson.message}"</img></li>`)
            }
        },
        error: function(err){
            console.log(err);
        }
    });
    console.log("Success");
    
})


