function fact() {
    var num = 5;
    var factorial = 1;
    while (num >= 1) {
        factorial = factorial * num;
        num--;
    }
    document.getElementById("f").innerHTML = "The Factorial of 5 is " + factorial;
}
