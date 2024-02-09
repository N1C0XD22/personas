Webcam.set({
    width:350,
    heigh:300,
    image_format:'png',
    png_quality:90
});

camara=document.getElementById("camara");

Webcam.attach('#camara');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_id" src="'+ data_uri+'"/>';
    })
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fR5aOZsuZ/model.json', modelLoaded);

function modelLoaded(){
    console.log('Modelo esta cargado');
}

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("results_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}