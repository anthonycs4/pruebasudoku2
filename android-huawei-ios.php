<?php
	$tmpUserAgent = strtoupper($_SERVER["HTTP_USER_AGENT"]);
	//echo $tmpUserAgent;
	
	$iPod    = stripos($_SERVER['HTTP_USER_AGENT'],"iPod");
	$iPhone  = stripos($_SERVER['HTTP_USER_AGENT'],"iPhone");
	$iPad    = stripos($_SERVER['HTTP_USER_AGENT'],"iPad");
	$Mac    = stripos($_SERVER['HTTP_USER_AGENT'],"Mac");
	
	if (strpos($tmpUserAgent, 'HMSCORE') != false) {
		header("Location: https://play.google.com/store/apps/details?id=pe.netdreams.sudoku");
	} else if ($iPod || $iPhone || $iPad || $Mac){
		header("Location: https://apps.apple.com/us/app/netdreams-sudoku/id1667344101");
	} else {
		header("Location: https://play.google.com/store/apps/details?id=pe.netdreams.sudoku");
	}
	die();
?>