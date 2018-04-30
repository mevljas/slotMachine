<!doctype html>
<html >
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <title>Login</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/signin.css" rel="stylesheet">
  </head>

  <body class="text-center">
    <div class="text-center" id ="login">
      <form class="form-signin"  action="pages/machine.php" method="POST">
        <img class="mb-4" src="images/logo.png" alt="" width="200" height="200">
        <h1 class="h3 mb-3 font-weight-normal">Please enter your name and desired bet.</h1>
        <label for="inputName" class="sr-only">Name</label>
        <input type="text" id="inputName" name = "inputName" maxlength="10" class="form-control" placeholder="Name" required autofocus>
        <label for="inputBet" class="sr-only">Bet</label>
        <input type="number" id="inputBet" name = "inputBet" min="50" max="5000000" class="form-control" placeholder="Bet" required autofocus>
        <input type="submit" class="btn btn-lg btn-primary btn-block" id="play" value="Play">
        <p class="mt-5 mb-3 text-muted">&copy; Sebastjan Mevlja, 2018</p>
      </form>
    </div>
  </body>
</html>
