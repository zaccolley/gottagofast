<?php
	// Edit this ->
	define( 'MQ_SERVER_ADDR', 'minecraft.thegamingsociety.co.uk' );
	define( 'MQ_SERVER_PORT', 25565);
	define( 'MQ_TIMEOUT', 1 );
	// Edit this <-
	
	// Display everything in browser, because some people can't look in logs for errors
	// Error_Reporting( E_ALL | E_STRICT );
	// Ini_Set( 'display_errors', true );
	
	require __DIR__ . '/minecraftquery/MinecraftQuery.class.php';
	
	$Timer = MicroTime( true );
	
	$Query = new MinecraftQuery( );
	
	try
	{
		$Query->Connect( MQ_SERVER_ADDR, MQ_SERVER_PORT, MQ_TIMEOUT );
	}
	catch( MinecraftQueryException $e )
	{
		$Exception = $e;
	}
	
	$Timer = Number_Format( MicroTime( true ) - $Timer, 4, '.', '' );

	$data = array(
			"info" => $info = $Query->GetInfo(),
			"players" => $players = $Query->GetPlayers()
		);



	echo json_encode($data);

?>