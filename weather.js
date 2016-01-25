$(function() {
  var handleWeatherResponse = function(data) {
    // "data" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(data);

    // We also set a window-level variable so we can use it in the console,
    // by typing data

    window.data = data;

    var str = data.timezone;
    var res = str.split("/");

    
    temp=data.currently.temperature;
    temp=Math.ceil(temp);

    // Put your code here. Don't change any other code in this file. You will be sad.

    var topleft = res[1]+", "+res[0];
    var outlook="<b> Outlook for the week: </b>"+data.daily.summary;
    var today_pic="<h3>Rest of Today</h3>"+"<img src="+data.daily.data[0].icon+".jpg>"
    var today_temp="Max Temperature: "+ data.daily.data[0].temperatureMax+" <sup>o</sup>F"+"<br>"+"Min Temperature :"+data.daily.data[0].temperatureMin+" <sup>o</sup>F";

    var topmid = "<img src="+data.currently.icon+".jpg>";
    var summary= data.currently.summary;
    var tom_pic="<h3>Tomorrow</h3>"+"<img src="+data.daily.data[1].icon+".jpg>"
    var tom_temp="Max Temperature: "+ data.daily.data[1].temperatureMax+" <sup>o</sup>F"+"<br>"+"Min Temperature :"+data.daily.data[1].temperatureMin+" <sup>o</sup>F";
    

    var topright = temp+" <sup>o</sup>F";
    var high="High: "+data.daily.data[0].temperatureMax+" <sup>o</sup>F";
    var low="Low: "+data.daily.data[0].temperatureMin+" <sup>o</sup>F";

    var dft_pic="<h3>Day After</h3>"+"<img src="+data.daily.data[2].icon+".jpg>"  
    var dft_temp="Max Temperature: "+ data.daily.data[2].temperatureMax+" <sup>o</sup>F"+"<br>"+"Min Temperature :"+data.daily.data[2].temperatureMin+" <sup>o</sup>F";

    // End of your code. No, really. Don't change anything below this, or above line 11.

    // Takes the contents of the "markup" variable (which should contain HTML) 
    // and write it out to the page.
    $('.weather-report').html(topleft);
    $('.weather-report1').html(outlook);
    $('.weather-report6').html(today_pic);
    $('.weather-report6_1').html(today_temp);

    $('.weather-report2').html(topmid);
    $('.weather-report2_1').html(summary);
    $('.weather-report7').html(tom_pic);
    $('.weather-report7_1').html(tom_temp);

    $('.weather-report3').html(topright);
    $('.weather-report4').html(high);
    $('.weather-report5').html(low);
    $('.weather-report8').html(dft_pic);
    $('.weather-report8_1').html(dft_temp);

  }

  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});