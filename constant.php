<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        define("EMAIL", "me@example.com");
        echo EMAIL;

        define("mycon", true);
        if (mycon) { }
        define("ONECONSTANT", "some value");
        define("CONSTANT", "Hello world");
        echo CONSTANT;
    ?>
</body>
</html>