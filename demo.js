function getTime() {
    $().ready(function(){
        $.getJSON( "https://worldtimeapi.org/api/timezone/Asia/Hong_Kong", function( data ) {
        console.log(data);
        $("#text").html(data["datetime"]);
      });
    });
}

setTimeout(getTime, 1000);