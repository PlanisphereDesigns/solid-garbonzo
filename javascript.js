//p5.js : you style the Canvas tag.
$(document).ready(function () {


    let isHidden = false;
    let isHidden2 = false;
    let hideText = "Hide";
    let hideText2 = "Hide";

    document.getElementById("hideWords").innerHTML = hideText;

    $("#buttonOne").click(function () {
        $("#showHide").slideToggle(800, function () {
            if (isHidden === false) {
                isHidden = true;
                hideText = "Show";
                document.getElementById("hideWords").innerHTML = hideText;
            }
            else {
                isHidden = false;
                hideText = "Hide";
                document.getElementById("hideWords").innerHTML = hideText;
            }
        });


    });

    let worksCitedVar = "Show";
    let hiddenWorks = true;


    document.getElementById("worksWords").innerHTML = worksCitedVar;
    $("#worksCited").css("width", "100%");
    $("#hideWorks").hide();

    $("#worksCited").click(function () {
     
     $("#hideWorks").slideToggle(800, function () {
         if (hiddenWorks === false) {
             hiddenWorks = true;
             worksCitedVar = "Show";
             document.getElementById("worksWords").innerHTML = worksCitedVar;
         }
         else {
             hiddenWorks = false;
             worksCitedVar = "Hide";
             document.getElementById("worksWords").innerHTML = worksCitedVar;
         }
      
      


    });



    });


});