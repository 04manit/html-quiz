var score=0;
function changeQuestions(id){
    document.getElementById("score").innerHTML = score;
    document.getElementById("correct_wrong").innerHTML = ""
    if(id == "done"){
        alert("Quiz completed !! Your score = "+score);
    }else{
        for(var i=1;i<=10;i++){
            if(i==id){
                document.getElementById("div_"+String(i)).style.display = "block";
            }else{
                document.getElementById("div_"+String(i)).style.display = "none";
            }
        }
    }
}
function check(value, id, this_){
    var get_id = document.getElementById(id);
    console.log(get_id.checked)
    if(get_id.checked){
        console.log("correct");
        document.getElementById("correct_wrong").style.color = "green"
        document.getElementById("correct_wrong").innerHTML = "Correct !!"
        score+=1;
    }else{
        console.log("wrong");
        document.getElementById("correct_wrong").style.color = "red"
        document.getElementById("correct_wrong").innerHTML = "Wrong !!"
    }
    document.getElementById("score").innerHTML = score;
}