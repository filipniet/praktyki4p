function Fibonacci(n) {
    if(n < 2) return n;
    return (Fibonacci(n - 1) + Fibonacci(n - 2));
}
for(i = 0; i < 30; i++) console.log(Fibonacci(i));