var SpeechRecognition = window.webkitSpeechRecognition;        //It is an API which is used to convert speech into text// 
var recognition= new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start() 
    recognition.onresult = function(event) {
     console.log(event);
     var Content = event.results[0][0].transcript;           //It is used to translate speech into text// 
     document.getElementById("textbox").innerHTML = Content; 
     console.log(Content);  
     if(Content == "take my selfie")
     {
         console.log("Taking your selfie") 
         speak();     //Calling a function speak//
     }


    }
}

function speak() 
{
    var synth=window.speechSynthesis;                     //It is an API that helps to convert text to speech//
    var speak_data="Taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);  //It is a function of API which covertes text into speech//
    synth.speak(utterThis);

Webcam.attach(camera);     // It is a function that triggers the webcam to start// 

setTimeout(function() {
take_snapshot();     //Calling the take snapshoot function// 
}, 5000);          //5000 milliseconds = 5 seconds// 
}

Webcam.set({      //It is a function of Webcam.js to see the properties for the live view of webcam// 
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

var camera=document.getElementById("camera");


function take_snapshot() 
{
    Webcam.snap(function(data_uri)
    {
     document.getElementById("result").innerHTML='<img id="selfie_image" src="'+ data_uri+'">'  
    }) 
}


function save()
{
    var link = document.getElementById("link")
    var img = document.getElementById("selie_image").src;
    link.href = img 
    link.click()
}