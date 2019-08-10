$( document ).ready(function() {

var buttonDefault = {"background-color" : "rgba(1, 33, 80, 0.733)", "color" : "rgba(240, 255, 255, 0.733)"}

    $("#aboutButton").click(function() {
        console.log("clicked");
        $("#contentTitle").html(
        "<div class='col-md-12' id='AboutMeTitleDiv'><h1 class='animated zoomIn AboutMeTitle'>About Me</h1></div>"
        );
        $("#content").html(
            "<div class='col-md-12' class='AboutMeContent'><img src='assets/headshot.jpg' alt='Christian and his cat, Blue' class='animated fadeInLeft AboutMePic'><p class='animated fadeInRight'>My name is Christian Livick. I am 28 years old and currently reside on Milwaukee's east side. For the past 5 years I have been a high school social studies teacher at the Alliance School, which is part of Milwaukee Public Schools. Due to changing interests and life goals, I've recently decided to exit the public sector for a time and focus on in-demand job skills related to web development and web design. <br><br>I have been married to my wife, Samantha, for just over a year and we live together with a fat cat, Blue, and a short dog, Gray. When I am not working my hobbies include going to the movies, going to local metal and punk shows, and lifting weights. I once had aspirations to compete professionally as a mixed martial artist, but gave that up due to injuries and to pursue my education career. I am hoping to one day get back into martial arts, but for the time being, getting set up with a long-term career is my main priority. <br><br>In terms of technical skills, I am more than proficient in several key languages including the core HTML, CSS, and JavaScript. In my current UW-Extension Coding Bootcamp program, I've developed a liking for JavaScript, particularly using jQuery, as well as MySQL and Node. Currently I am working on several command line applications to further my skills with these languages and I'm enjoying every minute of it. My skills are ever-growing and I have a lot of interest in new technologies and development techniques.</p></div>");
        $("#aboutButton").css({"background-color" : "rgba(192, 124, 47, 0.829)", "color" : "rgb(252, 252, 252)"});
        $("#contButton, #portButton").css(buttonDefault);
    });

    $("#portButton").click(function() {
        $("#contentTitle").html(
            "<div class='col-md-12' id='AboutMeTitleDiv'><h1 class='animated zoomIn AboutMeTitle'>Portfolio</h1></div>"
            );
        $("#content").load("assets/html-storage/portfolio.html");
        $("#portButton").css({"background-color" : "rgba(116, 31, 155, 0.829)", "color" : "rgb(252, 252, 252)"});
        $("#contButton, #aboutButton").css(buttonDefault);
    });

    $("#contButton").click(function() {
        console.log("clicked");
        $("#contentTitle").html(
            "<div class='col-md-12' id='AboutMeTitleDiv'><h1 class='animated zoomIn AboutMeTitle'>Profiles</h1></div>"
        );
        $("#content").load("assets/html-storage/contact.html")
        $("#contButton").css({"background-color" : "rgba(16, 153, 50, 0.829)", "color" : "rgb(252, 252, 252)"});
        $("#aboutButton, #portButton").css(buttonDefault);
    })
})

