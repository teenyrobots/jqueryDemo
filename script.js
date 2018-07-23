/* scripts for jquery demo */

$(document).ready(function(){

	$("img").hide();
	$(".specialImage").fadeIn("slow");
	
	let imgCycle = 1;
		
	$(".specialImage").click(function(){
//		$(this).css("background-color", "purple");
//		$(this).attr("src", "assets/4.png");
		
		if (imgCycle < 4) {
			$(this).attr("src","assets/"+imgCycle+".png");
			imgCycle++;
		} else {
			$(this).attr("src","assets/"+imgCycle+".png");
			imgCycle = 1;
		};
		
	});
	
	// $(".specialImage").hover(function(){
// 		$(this).attr("src", "assets/3.png");
// 	});
	
	$(".imgAdder").click(function(){
		$(".end").append("<img src='assets/1.png' class='specialImage'>");
	});

})

// if (imgCycle < 4){
// 			$(this).attr("src","assets/"+imgCycle+".png");
// 			imgCycle++;
// 		} else {
// 			$(this).attr("src","assets/"+imgCycle+".png");
// 			imgCycle = 1;
// 		};