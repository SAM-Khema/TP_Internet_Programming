<?php

// include composer autoload
require "vendor/autoload.php";

//import the Intervention image manager class file
use Intervention\Image\ImageManagerStatic as Image;

$Image = Image ::make("upload/image.jpg")->resize(200,200)->save ("img/thumbnail.jpg",100);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data" name="form1">
        <input type="file" name="resume" id="resume">
        <input type="submit" name="SubmitBtn" value="upload Resume">
    </form>
</body>
</html>
<?php
if (isset($_POST["SubmitBtn"])) {
    $fileName = $_FILES["resume"]["name"];
    $fileSize = $_FILES["resume"]["size"] / 1024;
    $fileType = $_FILES["resume"]["type"];
    $fileTmpName = $_FILES["resume"]["tmp_name"];

    if ($fileType == "application/msword") {
        if ($fileSize <= 200){
            $random = rand(1111, 9999);
            $newFileName = $random . $fileName;

            $uploadPath = "testUpload/" . $newFileName;

            if(move_uploaded_file($fileTmpName, $uploadPath)) {
                echo "Successful";
                echo "File name: " . $newFileName;
                echo "File Size: " . $fileSize . "kb";
                echo "File type: " . $fileType;
            }else{
                echo "Maximum upload file size limit is 200kb";
            }
        }else{
                echo "You can only upload a word Doc file";
            }
        }
    }