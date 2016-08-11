function mathpractice(){
    var name;
    name = prompt("Hi welcome to the Math Random game. What is your name?");
    switch (name) {
        case "Pat Clawson" || "Pat" || "pat" || "Clawson" || "clawson" || "Mr.Clawson":
            alert("Your a teacher. Keep teaching");
            break;
        default:
            alert("lets play a game");
    }
            var win = 0;
            var guess;
            var answer = Math.random() * 100;
            answer = Math.floor(answer);
        function retry2() {

            guess = prompt("Guess a number between 1-100");
            win++;
            if (guess == answer) {

                alert("Congrats " + name + " win it took " + win + " to win")
            }
            else if (guess > answer) {
                alert("Your answer was too high");
                retry2();
            }
            else if (guess < answer) {
                alert("Your answer is less than the number");
                retry2();
            }
            else if (guess > 100) {
                alert("That answer is too high for than the range 1-100");
                retry2();
            }
            else if (guess < 0) {
                alert("The answer is not negative. It is between 1-100");
                retry2();

            }
            else {
                alert("That is not a correct answer or even a number");
                retry2();

            }

            //}
        }

            retry2();

}