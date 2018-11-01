var ccstr=localStorage.getItem("cc");
console.log(ccstr);
var ccjson=JSON.parse(ccstr);
console.log(ccjson);
var strinfo="";
$.ajax({}).done(function(){
$.each(ccjson,function(index,ele){
	var x=parseInt(ele.goodsprice)*parseInt(ele.goodsnumber);
	strinfo+='<ul class="product_info">'
					+'<li class="ProductName"><p><img src="'+ele.goodspicture+'" ></p><span>'+ele.goodsname+'</span></li>'
					+'<li class="ProductMoney">'+ele.goodsprice+'</li>'
					+'<li class="ProductNumber"><button class="distent" type="button">-</button><input type="text" name="" id="" value="'+ele.goodsnumber+'" /><button class="add" type="button">+</button></li>'
					+'<li class="ProductNn">'+x+'.00</li>'
					+'<li class="ProductUse"><button>收藏</button></li>'
				+'</ul>'
	
});
$("#Allwrap .flowBox #info").html(strinfo);
$("#Allwrap .flowBox #info .product_info .ProductNumber .distent").click(function(){
	var index=$(this).index(".distent")
	var z=$("#Allwrap .flowBox #info .product_info .ProductNumber input:eq("+index+")").val();
	z--;
	if(z<0){
		z=0
	}
	$("#Allwrap .flowBox #info .product_info .ProductNumber input:eq("+index+")").val(z);
	var x=parseInt($("#Allwrap .flowBox #info .ProductMoney:eq("+index+")").html())*z
	console.log(x)
	$("#Allwrap .flowBox #info .ProductNn:eq("+index+")").html(x)
})

$("#Allwrap .flowBox #info .product_info .ProductNumber .add").click(function(){
	var index=$(this).index(".add");
	var z=$("#Allwrap .flowBox #info .product_info .ProductNumber input:eq("+index+")").val();
	z++;
	$("#Allwrap .flowBox #info .product_info .ProductNumber input:eq("+index+")").val(z);
	x=parseInt($("#Allwrap .flowBox #info .product_info .ProductNumber input:eq("+index+")").val());
	var x=parseInt($("#Allwrap .flowBox #info .ProductMoney:eq("+index+")").html())*z
	console.log(x)
	$("#Allwrap .flowBox #info .ProductNn:eq("+index+")").html(x+".00")
})
$(".flowBox .subtotal .price")
$("#Allwrap .flowBox .subtotal li img").click(function(){
	localStorage.removeItem("cc");
	javascript:window.location.reload()
})
})