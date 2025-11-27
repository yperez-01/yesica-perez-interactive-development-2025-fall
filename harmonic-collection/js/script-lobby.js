let MyString = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. LinkMark<a href="harmonic-collection-entry-1.html">entry-1</a>LinkMark leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Donec gravida luctus felis nec tempor. In at nisl eget nisi scelerisque dignissim. In ac maximus risus, in euismod augue. Fusce LinkMark<a href="harmonic-collection-entry-2.html">entry-2</a>LinkMark diam quis suscipit consequat. Donec in faucibus ligula. Donec facilisis ante quam, semper maximus est gravida at. Fusce laoreet congue neque, sit amet rhoncus augue convallis quis. Nam sed porta tortor. Praesent vehicula massa eros, nec fermentum lorem auctor lacinia. Aliquam velit lectus, fringilla at vulputate ut, vulputate et enim. Mauris cursus lacus a scelerisque sollicitudin. Duis placerat consequat nulla at tincidunt. Morbi commodo auctor elementum. Vestibulum ante ipsum primis in faucibus orci LinkMark<a href="harmonic-collection-entry-3.html">entry-3</a>LinkMark luctus et ultrices posuere cubilia curae; Maecenas lobortis, magna vitae malesuada volutpat, turpis augue iaculis risus, ut porta velit magna vitae libero. Proin condimentum efficitur velit, vitae convallis mi ullamcorper ut. Mauris mi ipsum, suscipit at pretium vitae, viverra sit amet metus. Aliquam imperdiet malesuada accumsan. Mauris LinkMark<a href="harmonic-collection-entry-4.html">entry-4</a>LinkMark vel ipsum sed rhoncus. Aenean sed elementum nunc. Praesent nec justo et lectus efficitur facilisis. Sed a risus sed tortor tincidunt varius vel ac tellus. Integer non viverra lorem, at sollicitudin ligula. In quis enim turpis. Curabitur ligula elit, molestie eget neque vestibulum, malesuada molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vulputate vel tellus non maximus. In purus felis, lacinia quis elit eu, faucibus rutrum libero. Integer a justo commodo, gravida velit amet, commodo nibh.';


let MyStringArray = MyString.split("LinkMark");
console.log(MyStringArray);
MyStringArray.forEach(function(individualString, MyStringArrayindex){
    /* console.log(individualString); */
    if(individualString.startsWith("<a ") && individualString.endsWith("</a>")){
        console.log(individualString);
        let separators = ['</a>', '<a ', 'href="', '"', '>'];
        
        let AElement = individualString;
       
        console.log(AElement);
        separators.forEach(function(separator, index){
            console.log(AElement);
            AElement = AElement.replace(separator, "/Separator/");
            console.log(AElement);
        });
        
        let AElementArray = AElement.split("/Separator/");
        console.log(AElementArray); 
        
        AElementArray = AElementArray.filter(function(el){
            return el !== "";
        });
        
        console.log(AElementArray);
        
        MyStringArray[MyStringArrayindex] = AElementArray;
        console.log(MyStringArray);
    }; /* */
    
});


let PartsIteration = 0;
let CharactersIteration = 0;
let PartsArrayLength = MyStringArray.length;
let CurrentPartTotalCharacterNumber;
function typenext(){
    // console.log(MyStringArray[PartsIteration]); 
    let partType = typeof(MyStringArray[PartsIteration]);
    if(partType == "string"){
        CurrentPartTotalCharacterNumber = MyStringArray[PartsIteration].length;
        // console.log("string"); 
        $("#float-box").append(MyStringArray[PartsIteration][CharactersIteration]);
        CharactersIteration = CharactersIteration + 1;
        if(CharactersIteration == CurrentPartTotalCharacterNumber){
            PartsIteration = PartsIteration + 1;
            CharactersIteration = 0;
        }
    }else if(partType == "object"){
        if(CharactersIteration == 0){
            CurrentPartTotalCharacterNumber = MyStringArray[PartsIteration][1].length;
            console.log(MyStringArray[PartsIteration][0]);
            console.log("appdendlink");
            $("#float-box").append('<a href="' + MyStringArray[PartsIteration][0] + '" class="link' + PartsIteration + '"></a>');
            $(".link" + PartsIteration).append(MyStringArray[PartsIteration][1][CharactersIteration]);
            CharactersIteration = CharactersIteration + 1;
            if(CharactersIteration == CurrentPartTotalCharacterNumber){
                PartsIteration = PartsIteration + 1;
                CharactersIteration = 0;
            }
        }else{
            $(".link" + PartsIteration).append(MyStringArray[PartsIteration][1][CharactersIteration]);
            CharactersIteration = CharactersIteration + 1;
            if(CharactersIteration == CurrentPartTotalCharacterNumber){
                PartsIteration = PartsIteration + 1;
                CharactersIteration = 0;
            }
        }
        console.log("object");
    }
    
    if(PartsIteration < PartsArrayLength){
        let typeTimeout = setTimeout(function(){typenext()},10);
    }
    
    console.log("one iteration finished");
};
typenext();
