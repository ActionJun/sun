var datastr=localStorage.getItem("data");
console.log(datastr);
var datajson=JSON.parse(datastr);
console.log(datajson);
$("#load #loading tr td #load_ps").click(function(){
	console.log(1)
	console.log($("#users").val(),$("#words").val())
	$.each(datajson,function(index,ele){
		console.log(ele.name)
		 if(ele.name==$("#users").val()&&ele.pwd==$("#words").val()){
			alert("登陆成功")
			$(location).attr('href', 'home.html');
		}else{
			alert("登陆失败")
		}
	})
})
