//function watchForm(){
    $('#dogForm').on('submit', function(e){
        e.preventDefault();


        $.ajax({
            url: "https://dog.ceo/api/breeds/image/random",
            method: "GET",
            dataType: "json",
            success: function(responseJson){
                $('#dogImages').append(`<li><img src="${responseJson.message}"</img></li>`)
            },
            error: function(err){
                console.log(err);
            }
        });
    });

    $('#dogImages').on('click', 'li', function(e){
        e.preventDefault();
        console.log(e.target);
    })
//}


//watchForm();


/*
function watchForm(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function(response){
            if(response.ok){
                return response.json();
            }
            throw new Error("Something went wrong");
        })
        .then(function(responseJSON){
            console.log(responseJSON);
        })
        .catch(function(err){
            console.log(err);
        });
}

watchForm();
*/