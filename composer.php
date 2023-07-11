<?php

// include composer autoload
require "vendor/autoload.php";

//import the Intervention image manager class file
use Intervention\Image\ImageManagerStatic as Image;

$Image = Image ::make("upload/imag.jpg")->resize(200,200)->save ("img/thumbnail.jpg",100);