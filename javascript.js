
const input = document.getElementById('number_input')
const select = document.getElementById('select_input')
const result = document.getElementById('result')
function enter_number() {
    if (input.value < 0) {
        input.value = 1
    }
    input.value = Math.round(input.value);
}

function check_input() {
    if (input.value == "" || input.value == null || select.value == "" || select.value == null) {
        return;
    }
}

function is_result() {
    check_input();
    if (select.value == "prime") {
        result.innerHTML = isPrime(input.value);
    } else if (select.value == "fibanacci") {
        result.innerHTML = isFibonacci(input.value);
    }
}

function isFibonacci(n) {
    return isPerfectSquare(5 * n * n + 4) ||
        isPerfectSquare(5 * n * n - 4);
}
function isPerfectSquare(x) {
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}
result.innerHTML = "false";

function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0) return false;
    return true;
}

input.addEventListener('change', function (e) {
    is_result()
})

select.addEventListener('change', function (e) {
    is_result()
    if(select.value == ''){
        result.innerHTML = "";
    }
})