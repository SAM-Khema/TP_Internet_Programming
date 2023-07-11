<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Welcome <?php echo $_POST["name"]; ?>! ;
    Your number is <?php echo $_POST["email"]; ?> 
    Your email address is <?php echo $_POST["email"]; ?>  -->
    <form action = "registration.php" method="post">
        Name: <input type="text" name = "name">
        Number: <input type="text" name = "number">
        Email: <input type="text" name = "email">
        <input type="submit">
    </form>
</body>
</html>
<?php
if (isset($_POST['Submit'])) {
    $emp_name = trim($_POST["emp_name"]);
    $emp_number = trim($_POST["emp_number"]);
    $emp_email = trim($_POST["emp_email"]);

    if($emp_name == ""){
        $errorMsg = "error : You did not enter a name.";
        $code = "1";
    }elseif ($emp_number == ""){
        $errorMsg = "error: Please enter number: ";
        $code = "2";
    }
    //check if the number field is numeric
    elseif (is_numeric(trim($emp_number)) == false){
        $errorMsg = "error : please enter numeric value";
        $code = "2";
    }elseif (strlen($emp_number) < 10){
        $errorMsg = "error : number should be ten digits";
        $code = "2";
    }
    elseif($emp_email == ""){
        $errorMsg = "error: You did not enter a email";
        $code = "3";
    }elseif (!preg_match("/^[_\.0-9a-z-A-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $emp_email)){
        $errorMsg = "error: You did not enter a email";
        $code = "3";
    }else {
        echo "Success";
    }
}