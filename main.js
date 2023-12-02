function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true,video:false
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',{probabilityThreshold: 0.7 } ,modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
var dog=0;
var cat=0;
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}    
