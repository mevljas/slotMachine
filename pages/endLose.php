<?php
// Start the session
session_start();
?>
<!doctype html>
<html >
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../css/end.css">
    <title>End</title>
    <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon">
	  <link rel="icon" href="../images/favicon.ico" type="image/x-icon">
  </head>

  <body>
    <div id="container">
      <div id="stats">
        <p id="text">
          Hello <?php echo	$_SESSION["name"];?>,<br>
          Sadly you lost all of your money. <br>
          <br>
          Money lost: <?php echo	$_SESSION["bet"];?>€<br>
          Better luck next time!<br>
          <br>
          <span id="timer"></span>
      
      </p>
      </div>
    </div>
    


  </body>
</html>
<script>
  time = 20;

  function timer(){
    if(time == 0){
      clearInterval(myinterval);
      window.location = "../index.php";
    }
    document.getElementById("timer").innerHTML = "You will be redirected back to the login page in  "+time+" seconds.";
    time --;
  }

  myinterval = setInterval(timer,1000)
</script>
