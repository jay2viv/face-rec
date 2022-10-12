Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 camera = document.getElementById("camera")
 Webcam.attach( '#camera' );
console.log("ml5,version:", ml5.version)

function take_picture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 Version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-6yMHUO5f/',modelLoaded);

function modelLoaded()
{
    console.log("yay it worked")
}


function classifier()
{

}

function check()
{
    
}