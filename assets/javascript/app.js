
window.onload = function() {
    $("#start").on("click", showNextQues);
    $(".game").hide();
    // $("#gameover").hide();
  };

var questions = [
    q1 = {
        ques : "1. Which country has won the most FIFA World Cups?",
        a1 : "Brazil",
        a2 : "Italy",
        a3 : "Argentina",
        a4 : "Spain",
        correctAnswer : "a1"
    },
    q2 = {
        ques : "2. Which country has won the most penalty shootouts in their football World Cup history?",
        a1: "Italy",
        a2: "Argentina",
        a3: "Germany",
        a4: "France",
        correctAnswer : "a3"
    },
    q3 = {
        ques : "3. Who is the only player to have won the World Cup three times?",
        a1: "Diego Maradona",
        a2: "Pele",
        a3: "Iker Casillas",
        a4: "Franz Beckenbauer",
        correctAnswer : "a2"
    },
    q4 = {
        ques : "4. Which is the only country to have appeared in every World Cup tournament so far ?",
        a1: "Brazil",
        a2: "England",
        a3: "Germany",
        a4: "Brazil, 1934",
        correctAnswer : "a2"
    },
    q5 = {
        ques : "5. In what year was the first World Cup held, and in which country ?",
        a1: "Uruguay, 1928",
        a2: "Uruguay, 1930",
        a3: "Italy, 1930",
        a4: "France",
        correctAnswer : "a3"
    },
    q6 = {
        ques : "6. Who is the youngest goalscorer at the World Cup?",
        a1: "Diego Maradona",
        a2: "Pele",
        a3: "Lionel Messi",
        a4: "Michael Owen",
        correctAnswer : "a2"
    },
    q7 = {
        ques : "7. Which are the only two countries to have reached three consecutive World Cup finals ?",
        a1: "Spain and Brazil",
        a2: "Italy and Germany",
        a3: "Germany and Brazil",
        a4: "Brazil and Italy",
        correctAnswer : "a3"
    },
    q8 = {
        ques : "8. In which World Cup did players first wear jerseys with their surname on the back ?",
        a1: "1998",
        a2: "1990",
        a3: "1986",
        a4: "1994",
        correctAnswer : "a4"
    },
    q9 = {
        ques : "9. What is the highest number of total goals scored in a single World Cup final ?",
        a1: "5",
        a2: "8",
        a3: "7",
        a4: "6",
        correctAnswer : "a3"
    },
    q10 = {
        ques : "10. Which is the only team to be eliminated from the World Cup without conceding a single goal? ?",
        a1: "France",
        a2: "Germany",
        a3: "Italy",
        a4: "Switzerland",
        correctAnswer : "a4"
    }

]

quesNum = 0;
var intervalId;
var clockRunning = false;
var correct = 0;
var incorrect = 0;
var isAnswered = false;
var missed = 0;

function showNextQues () {
    console.log(quesNum)
    $("#start").hide();
    $(".game").show();
    $("#sol").removeClass("bg-danger bg-warning bg-success text-dark");
    $("#sol").empty();
    time = 30;
    if (!clockRunning && (questions.length > quesNum)){
        intervalId = setInterval(showTimer, 1000);
        clockRunning = true;
        displayQuestion(quesNum);
        evaluateAnswer(quesNum);
        quesNum++;

    }
    else{
        $("#start").off("click");
        $("#timer").html("Game Over");
        $(".game").hide();
        // $("#gameover").show();
        restartGame();


    }
}

function evaluateAnswer(quesNum){
    $(".answer").one("click", function(){
        if (this.id == questions[quesNum].correctAnswer){
            isAnswered = true;
            $("#id").html("<img >")
            correct++;
            $("#correct").html(correct);
            $(".answer").off("click");
            $("#sol").addClass("bg-success");
            $("#sol").html("Wohoo ! You picked Correct Answer : " + questions[quesNum][questions[quesNum].correctAnswer])
        }
        else{
            isAnswered = true;
            incorrect++;
            $("#incorrect").html(incorrect);
            $(".answer").off("click");
            $("#sol").addClass("bg-danger");
            $("#sol").text("Boo ! You picked Wrong Answer , Correct Answer is " + questions[quesNum][questions[quesNum].correctAnswer])

        }
    })
}

function stopTimer(){
    clearInterval(intervalId);
    clockRunning = false;
}

function showTimer(){
    time--;
    if (time == 0){
        missed ++ ;
        $("#late").html(missed);
        stopTimer();
        $("#sol").addClass("bg-warning text-dark");
        console.log(quesNum);
        $("#sol").html("Alas ! You missed it , Correct Answer is " + questions[quesNum-1][questions[quesNum-1].correctAnswer])
        setTimeout(showNextQues, 2000);

    }
    else if (isAnswered === true){
        stopTimer();
        setTimeout(showNextQues, 3000);
    }
    $("#timer").text(time);  
}


function displayQuestion(index){
        isAnswered = false;
        $("#ques").html(questions[index].ques);
        $("#a1").html(questions[index].a1);
        $("#a2").html(questions[index].a2);
        $("#a3").html(questions[index].a3);
        $("#a4").html(questions[index].a4);
        $("#sol").html("");
    }

function restartGame(){
    quesNum = 0;
    correct = 0;
    incorrect = 0;
    isAnswered = false;
    missed = 0;
    console.log("inrestart method" + quesNum);
    $("#start").show();
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
    $("#late").html(missed);

    $("#start").on("click", showNextQues);

}