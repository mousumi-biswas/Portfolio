<?php

$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$phone=$_REQUEST['phone-number'];
$subject=$_REQUEST['subject'];
$message=$_REQUEST['message'];

if(empty($name) || empty($email) || empty($phone) || empty($subject)|| empty($message))
{
        echo "Please fill all the fields";
}
else {
        mail("optimistic.leo2020@gmail.com", "Web Message", $message, "From: $name <$email>");
        echo "<script type='text/javascript'> alert('Your message sent successfully');
        window.history.log(-1);
        </script>";
}






?>