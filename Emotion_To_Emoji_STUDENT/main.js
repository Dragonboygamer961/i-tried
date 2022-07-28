Webcam.set({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality: 100
});

my_cam = document.getElementById("be_happy_about_it");

Webcam.attach(my_cam);

function Capture_Image(){

Webcam.snap(
    function(picture){
        document.getElementById("result").innerHTML = "<img src= '"+picture+"' id = 'cap_picture' >"
    }
);
    
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FO3Ect0fx/model.json", model_Loaded);

function model_Loaded(){

    console.log("model is loaded")
}