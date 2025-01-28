<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
</head>
<body>


<script>

    console.log('Hello world!');

    const solution = Math.floor(Math.random() * 99) + 1;

    function attempt(guess) {
        console.log('Du gættede: ' + guess);

        if (guess === solution) {
            console.log('Sådan! Du har gættet korrekt!');
        } else if (guess > solution) {
            console.log('For højt, prøv et lavere tal.');
        } else {
            console.log('For lavt, prøv et højere tal.');
        }
    }

    function timestable(number) {
        for (let t = 1; t <= 10; t++) {
            console.log(`${number} x ${t} = ${number * t}`);
        }
    }

    function timestable2(number) {
        for (let i = 10; i >= 1; i--) {
            console.log(`${number} x ${i} = ${number * i}`);
        }
    }

    function timestable3(number) {
        for (let t = 1; t <= 10; t++) {
            console.log(`${number} - ${t} = ${number - t}`);
        }
    }













</script>
</body>
</html>