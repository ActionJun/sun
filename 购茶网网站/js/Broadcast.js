window.onload=function(){
	var broadcast=document.getElementById("Broadcast");
	var broadcastlists=document.querySelectorAll("#Broadcast #Broadcastlist li");
	var broadcastbox=document.getElementsByClassName("Broadcastbox");
	var index=0;
	var timer=null;
	console.log(broadcastlists)
	function change(){
		for(var i=0;i<broadcastbox.length;i++){
			broadcastlists[i].className="";
			broadcastbox[i].style.display="none";
		}
		if(index>broadcastbox.length-1){
			index=0;
		}
		if(index<0){
			index=broadcastbox.length-1;
		}
		broadcastlists[index].className="Broadcastnow";
		broadcastbox[index].style.display="block"
	}
	timer=setInterval(function(){
		index++;
		change();
	},2000)
	broadcast.onmouseover=function(){
		clearInterval(timer);
		console.log(broadcastlists)
	}
	broadcast.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			change();
		},2000)
		
	}
	for(var j=0;j<broadcastlists.length;j++){
		broadcastlists[j].index=j;
		broadcastlists[j].onclick=function(){
			index=this.index;
			change();
		}
	}
}