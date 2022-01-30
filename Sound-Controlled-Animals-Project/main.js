function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LYa9kXK07/model.json', modelReady);
 }
 
 function modelReady(){
     classifier.classify(gotResults);
 }
 
 var dog=0;
var cat=0;
var cow=0;
var lion=0;
 function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    r=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    document.getElementById("result_confidence").innerHTML='Detected Dog-'+dog+" "+'Dectected Cat-'+cat+" "+'Dectected Cow-'+cow+" "+'Dectected Lion-'+lion;
    document.getElementById("result_label").innerHTML='Detected voice is of-'+results[0].label;
    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
    img=document.getElementById("alien1");

    if(results[0].label=="Mooing"){
        img.src='OIP.jfif';
        cow=cow+1;
    }
    else if(results[0].label=="Meowing"){
        img.src='R.png';
        cat=cat+1;
    }
    else if(results[0].label=="Barking"){
        img.src='OIP (1).jfif';
        dog=dog+1;
    }
    else if(results[0].label=="Roaring"){
        img.src='OIP (2).jfif';
        lion=lion+1;
    }
}
}