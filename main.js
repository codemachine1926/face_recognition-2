Webcam.set({
    width:295,
    height:300,
    image_forat:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {

    Webcam.snap(function(data_uri) {

        document.getElementById("identify_image").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ddWM-40vC/model.json', modelLoaded);


