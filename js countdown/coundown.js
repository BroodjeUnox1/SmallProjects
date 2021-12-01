function timer(sec) {
	var timeleft = sec;
	var totalTime = timeleft;
	var downloadTimer = setInterval(function(){
  		if(timeleft <= 0){
    		clearInterval(downloadTimer);
  		}
 		$("#test").html(timeleft);
  		timeleft -= 1;
	}, 1000);
}