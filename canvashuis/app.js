class App
{
    runApplication()
    {
        
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
        


        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(800,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.moveTo(250,350);
        g.lineTo(550,425);
        g.lineTo(550,525);
        g.lineTo(250,450);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(250,350);
        g.lineTo(550,425);
        g.lineTo(550,525);
        g.lineTo(250,450);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(400,387);
        g.lineTo(400,487);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.moveTo(250,400);
        g.lineTo(550,475);
        g.closePath();
        g.stroke();

        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(650,435);
        g.lineTo(760,380);
        g.lineTo(760,520);
        g.lineTo(650,575);
        g.closePath();
        g.stroke();
        g.fill()
    


    }
}

let app = new App();
app.runApplication();