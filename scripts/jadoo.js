var str="";
var flag=false;
var btn=document.querySelectorAll(".btn");
console.log(btn);
//Common function for the program 
function handleInput(k){
    str=str+k;
    console.log("str",str);
    if(flag){
        var disp=document.querySelector(".disp");
        disp.innerHTML="";
        flag=false;
    }
    switch (k){
        case "b":
           let  b=new Audio('audio/b.mp3');
            b.play();
            break;
        case "c":
           let  c=new Audio('audio/c.mp3');
            c.play();
            break;
        case "e":
           let  e=new Audio('audio/e.mp3');
            e.play();
            break;
        case "f":
                let  f=new Audio('audio/f.mp3');
                 f.play();
                 break;
        
    }

    if (str.length === 4) {
        if (str === "bcef") {
            var disp = document.querySelector(".disp");
            var img = document.createElement('img');
            img.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2FqZ2IybnoyNTZsNmFha3Qzajhkd2NqeXc2MHhxaDJvbWYwdGNpaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GIxFdDHZIve57kakln/giphy.gif";
            img.alt = "jadoo.gif";
            var p = document.createElement('p');
            p.innerHTML="<b>WooHOO!</b> you called jadoo <img src='images\\confetti.gif'> ";

            // Clear the display before adding the new image
            disp.innerHTML = "";
            disp.appendChild(img);
            disp.appendChild(p);
            flag=true;
        }

        // Reset the string after evaluating the pattern
        str = "";
    
}
}

//event listener calling handle input function
document.addEventListener('keypress',function (evt){
    console.log("evt",evt);
    handleInput(String(evt.key));
});


btn.forEach(function(button){
    button.addEventListener('click',function(){
        handleInput(this.getAttribute('value'));
        
    })
})
    
