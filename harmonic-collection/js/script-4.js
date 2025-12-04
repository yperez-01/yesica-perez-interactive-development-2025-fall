// $("#button").on("click", function(){
//     $(".content").css("margin-left : 100px" );})

$("#button").on("click", function(){
    $(".content").toggleClass("more-margin");})


$("#text").on("mouseover", function(){
    if($("#text").hasClass("text-show")){
        $("#text").removeClass("text-show");}else{
            $("#text").addClass("text-show");
    }
})

$("#text2").on("mouseover", function(){
    if($("#text2").hasClass("text-show2")){
        $("#text2").removeClass("text-show2");}else{
            $("#text2").addClass("text-show2");
    }
})

$("#text4").on("mouseover", function(){
    if($("#text4").hasClass("text-show4")){
        $("#text4").removeClass("text-show4");}else{
            $("#text4").addClass("text-show4");
    }
})

$("#text5").on("mouseover", function(){
    if($("#text5").hasClass("text-show5")){
        $("#text5").removeClass("text-show5");}else{
            $("#text5").addClass("text-show5");
    }
})