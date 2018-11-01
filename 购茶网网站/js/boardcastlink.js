$.ajax({
			url:"js/boardcastjson.json",
			type:'get'
		}).done(function(res){
			console.log(res)
			var	strcup="";
			$.each(res.cupdata,function(index,ele){
				strcup+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/茶具/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
			})
			$(".Broadcastbox").eq(6).html(strcup);
			var strweek="";
			$.each(res.week,function(index,ele){
				strweek+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/精选/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
			})
			$(".Broadcastbox").eq(0).html(strweek);
			$(".Broadcastbox").eq(2).html(strweek);
			var strnews="";
			$.each(res.news,function(index,ele){
				strnews+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/news/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
			})
			$(".Broadcastbox").eq(1).html(strnews);
			var strsparea="";
			$.each(res.sparea,function(index,ele){
				strsparea+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/sparea/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
			})
			$(".Broadcastbox").eq(3).html(strsparea);
			var strsingle_product="";
			$.each(res.single_product,function(index,ele){
				strsingle_product+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/single_product/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
			})
			$(".Broadcastbox").eq(4).html(strsingle_product);
			var strspring_tea="";
			$.each(res.Spring_tea,function(index,ele){
				strspring_tea+='<ul><li class="switchbox"><ul>'
								+'<li><img src="img/springtea/'+ele.img+'" ></li>'
								+'<li class="money">¥'+ele.money+'</li>'
								+'<li class="commondity"><a href="">'+ele.commondity+'</a></li>'
								+'<li class="solnum">已被关注<span>'+ele.solnumber+'</span>次</li>'
								+'</ul></li></ul>'
			})
			$(".Broadcastbox").eq(5).html(strspring_tea);
})

