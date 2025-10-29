var messageArray = ["Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. <entry-1> leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Donec gravida luctus felis nec tempor. In at nisl eget nisi scelerisque dignissim. In ac maximus risus, in euismod augue. Fusce <entry-2> diam quis suscipit consequat. Donec in faucibus ligula. Donec facilisis ante quam, semper maximus est gravida at. Fusce laoreet congue neque, sit amet rhoncus augue convallis quis. Nam sed porta tortor. Praesent vehicula massa eros, nec fermentum lorem auctor lacinia. Aliquam velit lectus, fringilla at vulputate ut, vulputate et enim. Mauris cursus lacus a scelerisque sollicitudin. Duis placerat consequat nulla at tincidunt. Morbi commodo auctor elementum. Vestibulum ante ipsum primis in faucibus orci <entry-3>luctus et ultrices posuere cubilia curae; Maecenas lobortis, magna vitae malesuada volutpat, turpis augue iaculis risus, ut porta velit magna vitae libero. Proin condimentum efficitur velit, vitae convallis mi ullamcorper ut. Mauris mi ipsum, suscipit at pretium vitae, viverra sit amet metus. Aliquam imperdiet malesuada accumsan. Mauris <entry-4> vel ipsum sed rhoncus. Aenean sed elementum nunc. Praesent nec justo et lectus efficitur facilisis. Sed a risus sed tortor tincidunt varius vel ac tellus. Integer non viverra lorem, at sollicitudin ligula. In quis enim turpis. Curabitur ligula elit, molestie eget neque vestibulum, malesuada molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vulputate vel tellus non maximus. In purus felis, lacinia quis elit eu, faucibus rutrum libero. Integer a justo commodo, gravida velit <entry-5> amet, commodo nibh."];
var textPosition = 0;
var speed = 25;

typewriter = () => {
    document.querySelector("#message").
    innerHTML = messageArray [0].substring(0, textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != messageArray [0].length)
        setTimeout (typewriter, speed);
}

window.addEventListener("load", typewriter);