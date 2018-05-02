$(document).ready(function(){

    $('.devourButton').on('click', function(){
        var id=$(this).attr('id');
        
        $.ajax("/api/burger/" + id, {
            type:"PUT"
        }).then(function(){
            console.log('changed')
            location.reload();
        })
    
    })

    $('.addBurger').on('click', function(){
        var newBurger = $('#newBurger').val().trim();
        $.post('/api/burger', {burger:newBurger}, function(data){
            if(data){
                location.reload();
            }
        })
    })

});