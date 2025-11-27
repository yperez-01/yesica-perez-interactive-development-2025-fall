// $("#btn").click(function(){
//   setTimeout(function(){$("body").css({"background-color":"red"}, 10000);
// }, 10000)})

$(".effect").on("click", function(){
    if($(".effect").hasClass("effect-show")){
        $(".effect").removeClass("effect-show");}else{
            $(".effect").addClass("effect-show");
    }
})