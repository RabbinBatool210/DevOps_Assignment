function StartGame() {
    var object = document.getElementById("object");
    let pos = 0;
    let speed = 5;

    setInterval(()=>{
        pos += speed;
        if(pos>=360){
            pos=0;
        }
        object.style.top = pos + "px";
    }, 20);

}
