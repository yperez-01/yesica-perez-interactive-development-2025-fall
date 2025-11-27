// document.addEventListener('DOMContentLoaded', (event)) , () => {
//    const content = document.querySelector('.content');
// }


//  $(".text").on("click", function(){
//         $(".text").addClass("text-show");
//     });


//     $("filler").on("click", function(){
//     $("filler").css({"width": "900px" , "background-color": "green"});
// })example



   //  $("p").on("click", function(){
   //      $("p").toggleClass("colored-text");
   //  })example

$(".text").on("click", function(){
    if($(".text").hasClass("text-show")){
        $(".text").removeClass("text-show");}else{
            $(".text").addClass("text-show");
    }
})

$(".text2").on("click", function(){
    if($(".text2").hasClass("text-show")){
        $(".text2").removeClass("text-show");}else{
            $(".text2").addClass("text-show");
    }
})