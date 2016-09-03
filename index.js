$(document).ready(function(){
   
      if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position)
{
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;

  
  var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=fe1263b0d3cb26e76e3ba3de68c473d9";
  
  $.getJSON(api, function(data){
    var fTemp;
  var cTemp;
  var kTemp;
    var tempSwap=true;
    var weatherType = data.weather[0].description;
    var kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    cTemp = (kTemp-273).toFixed(1);
    
    console.log(city);
    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#fTemp").html(fTemp + " &#8457;");
     $("#fTemp").click(function(){
        if(tempSwap===false){
          $("#fTemp").html(fTemp + " &#8457;");
          tempSwap=true;
                      }  
           else{
            $("#fTemp").html(cTemp + " &#8451;");
          tempSwap=false;}
            });
    $("#windSpeed").html(windSpeed + " mps");
    
    if(fTemp>90){
     $("body").css("background-image", "url(http://www.supergoop.com/wp-content/uploads/2014/03/sunny-blue-sky.jpg)"); 
    }
    else if(fTemp>70){
      $("body").css("background-image", "url(http://img.wallpaperfolder.com/f/48910F485731/blue-sky-15-photos.jpg)"); 
    }
    else if(fTemp>50){
      $("body").css("background-image", "url(http://www.footwa.com/wp-content/uploads/2010/05/Solitary-bird-in-the-sky.jpg)"); 
    }
    else if(fTemp>30){
      $("body").css("background-image", "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTflV_pAycJFIIfvXKe7gUkoBJK9XBliQJ4EzLPwEngQafJz3u)"); 
    }
    
  });
  });
 }
  
});