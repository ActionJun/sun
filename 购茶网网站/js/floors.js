$.ajax({
	url:"js/floor.json",
	type:"get"
}).done(function(res){
	console.log(res)
	console.log($(".floor .iswitchpul"))
	var strfloorsone="";
	$.each(res.floorsone,function(index,ele){
		strfloorsone+='<ul pid="'+ele.pid+'"><li class="switchbox"><ul pid="'+ele.pid+'">'
								+'<li><img src="img/精选/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="javacript:void(0);" pid="'+ele.pid+'">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
	})
	
	$(".floor .iswitchpul").eq(0).html(strfloorsone)
	var strfloorstwo="";
	$.each(res.floorstwo,function(index,ele){
		strfloorstwo+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/floor/floorstwo/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
	})
	
	$(".floor .iswitchpul").eq(1).html(strfloorstwo)
	var strfloorsthree="";
	$.each(res.floorsthree,function(index,ele){
		strfloorsthree+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/floor/floorsthree/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
	})
	
	$(".floor .iswitchpul").eq(2).html(strfloorsthree)
	var strfloorsfour="";
	$.each(res.floorsfour,function(index,ele){
		strfloorsfour+='<ul pid="'+ele.pid+'"><li class="switchbox"><ul pid="'+ele.pid+'">'
								+'<li><img src="img/floor/floorsfour/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
	})
	$(".floor .iswitchpul").eq(3).html(strfloorsfour)
	var strfloorfive="";
	$.each(res.floorsfive,function(index,ele){
		strfloorfive+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/floor/floorsfive/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
	})
	$(".floor .iswitchpul").eq(4).html(strfloorfive)
	var strfloorsix="";
	$.each(res.floorsix,function(index,ele){
		strfloorsix+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/floor/floorssix/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
	})
	$(".floor .iswitchpul").eq(5).html(strfloorsix)
	var strfloorseven='';
	$.each(res.floorsseven,function(index,ele){
		strfloorseven+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/floor/floorsseven/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
	})
	$(".floor .iswitchpul").eq(6).html(strfloorseven)
	var strfloorseight='';
	$.each(res.floorseight,function(index,ele){
		strfloorseight+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/floor/floorseight/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
	})
	console.log(strfloorseight)
	$(".floor .iswitchpul").eq(7).html(strfloorseight)
	$(".floor .iswitchpul ul").click(function(){
		window.location.href="goods.html?pid="+$(this).attr("pid");
		
		
		
	})
});
$("#Csc #csc").on("click",function(){
	
		$("#Csc").css("left",0);

});


