var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
if(content=="take my selfie"){
speak();
}
}

function speak(){
   var synth=window.speechSynthesis;
   speak_data="taking your selfie in 5 seconds";
   var utter_This=new SpeechSynthesisUtterance(speak_data);
   synth.speak(utter_This);
   Webcam.attach(camera);
   setTimeout(function (){
    take_snap_shot();
    save();
   },5000);
}


Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90,


});
camera=document.getElementById("camera");

function take_snap_shot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
        document.getElementById("result1").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
        document.getElementById("result2").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").scr;
    link.href=image;
    link.click();
}



