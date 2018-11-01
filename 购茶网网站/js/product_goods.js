//		获取pid

		function GetQueryString(name) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		    var r = decodeURI(window.location.search.substr(1)).match(reg);
		    if (r != null)return unescape(r[2]);
		    return null;
		}
		//获取商品id
		var pid=GetQueryString("pid"); 
		//发送详情页面数据请求   发送pid给后台 后台返回商品的所有信息

		
$.ajax({
	url:"js/productGoods.json",
	type:"get"
}).done(function(res){
	var nowdata=null;
	$.each(res,function(index,ele){
		if(ele.base.pid==pid){
			nowdata=res[index];
		}
	});
	var strimg="";
	$.each(nowdata.img,function(index,ele){
		strimg+='<li><img src="img/goodsinfo/'+ele+'"></li>'
	})

	var strsmall="";
	$.each(nowdata.smallimg,function(index,ele){
		strsmall+='<li><img src="img/goodsinfo/'+ele+'"></li>'
	})
	var str_img='<img src="img/goodsinfo/'+nowdata.base.img+'"><div id="mark"></div>'
	var str_Img='<img src="img/goodsinfo/'+nowdata.base.img+'">'
	$("#big_img").html(str_Img);
	$("#small_img").html(str_img);
	$("#thumbnail_img ul").html(strimg);
	var strproduct_goods="";
	$.each(nowdata.product_goods,function(index,ele){
		strproduct_goods+='<li pid="'+ele.pid+'">'
						+'<div class="bigimg" >'
							+'<a href="javascript:void()"><img src="img/精选/'+ele.img+'" ></a>'
						+'</div>'
						+'<a href="">'+ele.commondity+'</a>'
						+'<p>售价：<font size="" color="" class="f1">￥'+ele.money+'</font></sp>'
					+'</li>'
	})
	$("#goodsInfo #fr_gd ul").html(strproduct_goods)
	var strinfo="";
	$.each(nowdata.info,function(index,ele){
		strinfo+='<img src="img/goodsinfo/'+ele+'">';
	})
	
	$(".infoimg").html(strinfo);
	$("#product_info ul .gd_name .goodName").html(nowdata.base.commondity);
	$("#product_info ul .gd_name .goodPrice span b").html(nowdata.base.money);
	$("#product_info ul li .weight").html('商品重量：'+nowdata.base.weight+'&nbsp;&nbsp;');
	$("#product_info ul li .number").html('商品库存：'+nowdata.base.number);
	$(".wid_fr_gd .swich_tab table .weights").html(nowdata.base.weight);
	$("#goodsInfo #thumbnail_img ul li img").click(function(){
				//把小图的src设置给大图
	 			$("#small_img img").attr("src",$(this).attr("src"));
				$("#big_img img").attr("src",$(this).attr("src"))	 			//外部轮廓
	 			$(this).css("outline","1px solid #333").siblings().css("outline","none");
				
			});
	
	
	
	$("#product_info ul li a .shoppingcart").click(function(){
		var obj=new Object;
		obj.goodsname=$("#product_info .gd_name .goodName").html();
		obj.goodsprice=$("#product_info .gd_name .goodPrice span b").html();
		obj.goodspicture=$("#small_img img").attr("src");
		obj.goodsnumber=$("#product_info ul .goodsAction div input").val();
		
		if(localStorage.getItem("cc")!==null){
			var ccstring=localStorage.getItem("cc");
			var ccarr=JSON.parse(ccstring);
			ccarr.push(obj);
			var ccstr=JSON.stringify(ccarr);
			localStorage.setItem("cc",ccstr);
		}else{
			var carr=[];
			carr.push(obj);
			var cstr=JSON.stringify(carr)
			localStorage.setItem("cc",cstr)
		}
		
	})  
	$("#small_img").mouseenter(function(){
				
				$("#mark").show();
				$("#big_img").show();		
			}).mouseleave(function(){
				$("#mark").hide();
				$("#big_img").hide();
				
			}).mousemove(function(e){
	//			e.pageX--e.pageY--鼠标相对于整个页面的距离
	
				//遮罩x，y
				var mx=e.pageX-$(this).offset().left-$("#mark").width()/2;
				var my=e.pageY-$(this).offset().top-$("#mark").height()/2;
				
				//限制边界
				mx<0?mx=0:mx;
				my<0?my=0:my;
				var maxX=$("#small_img").width()-$("#mark").width();
				var maxY=$("#small_img").height()-$("#mark").height();
				mx>maxX?mx=maxX:mx;
				my>maxY?my=maxY:my;
				
				$("#mark").css("left",mx);
				$("#mark").css("top",my);
				//算出比例
				var bilix=$("#big_img img").width()/$(this).width();
				var biliy=$("#big_img img").height()/$(this).height();
			
				$("#big_img").scrollLeft(bilix*mx);
				$("#big_img").scrollTop(biliy*my);
			
			})
})
console.log($("#Csc").offset().left);
$("#Csc #csc").on("click",function(){
	if($("#Csc").offset().left==0){
		$("#Csc").css("left",-80+"px");
	}else{
		$("#Csc").css("left",0);
	}
});

