<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon">
	<link rel="icon" href="../images/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="../css/machine.css">
	<link href="../css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
	<?php
		$slots = array();
		array_push($slots, rand(0,7), rand(0,7), rand(0,7), rand(0,7), rand(0,7), rand(0,7), rand(0,7), rand(0,7), rand(0,7));
		$_SESSION["slots"] = $slots;
		$_SESSION["name"] = $_POST["inputName"];
		$_SESSION["bet"] = $_POST["inputBet"];
	?>
	<div id = "container">
		<div id="stats">
			<span id="name" ></span>
            <span id="money" ></span><br>
			<span id="bet" ></span>

		</div>
		<div id="canvas"></div>
	</div>


	<script src="../libraries/p5.js"></script>
	<script src="../js/preload.js"></script>
	<script src="../js/main.js"></script>

	<script>
		slots = <?php echo json_encode($_SESSION["slots"]); ?>;
		name = 	<?php echo json_encode($_SESSION["name"]); ?>;
		bet = 	<?php echo json_encode($_SESSION["bet"]); ?>;
	</script>
</body>
</html>