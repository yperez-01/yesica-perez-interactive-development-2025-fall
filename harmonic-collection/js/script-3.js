
$("#text2").on("mousemove", function(){
    if($("#text2").hasClass("text-show2")){
        $("#text2").removeClass("text-show2");}else{
            $("#text2").addClass("text-show2");
    }
})

$("#text4").on("mouseenter", function(){
    if($("#text4").hasClass("text-show4")){
        $("#text4").removeClass("text-show4");}else{
            $("#text4").addClass("text-show4");
    }
})

$("#text3").on("click", function(){
    if($("#text3").hasClass("text-show3")){
        $("#text3").removeClass("text-show3");}else{
            $("#text3").addClass("text-show3");
    }
})



// document.getElementById('text').addEventListener('click', function() {
//     const body = document.body;
//     body.style.backgroundColor = '#000000';
// });