class App
{
    runApplication()
    {
        console.log("hello world");
        let arr = ["Nancy Ajram", "Assala", "Kadim", "Hussain Al Jassmi"];
        console.log(arr);

        let headers = document.getElementsByClassName("bandName")

        headers[0].innerHTML = arr[0];
        headers[1].innerHTML = arr[1];
        headers[2].innerHTML = arr[2];
        headers[3].innerHTML = arr[3];

        for(let i= 0; i < headers.length; i++){
            headers[i].innerHTML = [i];
        }
    }
}

let app = new App();
app.runApplication();