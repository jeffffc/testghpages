function getTime() {
    $().ready(function(){
        $.getJSON( "https://www.timeapi.io/api/Time/current/zone?timezone=Asia:Hong_Kong", function( data ) {
        console.log(data);
        $("#text").html(data["dateTime"]);
      });
    });
}

setTimeout(getTime, 1000);