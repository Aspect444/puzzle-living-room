var canvas = new fabric.Canvas("myCanvas");
var block_height = 150;
var block_width = 150;
var player_x = 20;
var player_y = 20;
var block_object = "";

function blockUpdate(getimage){
    fabric.Image.fromURL(getimage, function(Img) {
        block_object = Img;
       
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
           top:player_y,
           left:player_x
       });
       canvas.add(block_object);
    });
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e){
    keypress = e.keyCode;

    if(keypress == "81"){
        blockUpdate("3.jpeg");
    }

    if(keypress == "87"){
        blockUpdate("image.jpeg");
    }

    if(keypress == "69"){
        blockUpdate("5.jpeg");
    }

    if(keypress == "82"){
        blockUpdate("7.jpeg");
    }

    if(keypress == "84"){
        blockUpdate("14.jpeg");
    }

    if(keypress == "89"){
        blockUpdate("6.jpeg");
    }

    if(keypress == "85"){
        blockUpdate("13.jpeg");
    }

    if(keypress == "73"){
        blockUpdate("2.jpeg");
    }

    if(keypress == "79"){
        blockUpdate("9.jpeg");
    }
    
    if(keypress == "80"){
        blockUpdate("4.jpeg");
    }

    if(keypress == "65"){
        blockUpdate("10.jpeg");
    }

    if(keypress == "83"){
        blockUpdate("12.jpeg");
    }

    if(keypress == "68"){
        blockUpdate("11.jpeg");
    }

    if(keypress == "70"){
        blockUpdate("16.jpeg");
    }

    if(keypress == "71"){
        blockUpdate("15.jpeg");
    }

    if(keypress == "72"){
        blockUpdate("8.jpeg");
    }
}
