var color=colorGen(6);
var sq=document.querySelectorAll(".square");
var cp=colorPicker();
var cpd=document.querySelector(".rgb");
var mass=document.querySelector("#mass");
var head=document.querySelector(".header");
var reset=document.querySelector(".reset");
var hard=document.querySelector("#hard");
var hards=true;
var easy=document.querySelector("#easy");
var easys=false;

cpd.textContent=cp;

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	color=colorGen(6);
	cp=colorPicker();
	cpd.textContent=cp;
	for(var i=0;i<sq.length;i++)
	{
		sq[i].style.backgroundColor=color[i];
		sq[i].style.display="block";
	}
	reset.textContent="new color!"
	head.style.background="steelblue";
	mass.textContent="";
	easys=false;
	hards=true;
});


easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	color=colorGen(3);
	cp=colorPicker();
	cpd.textContent=cp;
	for(var i=0;i<sq.length;i++)
	{
		if(color[i]){
			sq[i].style.backgroundColor=color[i];	
		}
		else{
			sq[i].style.display="none";
		}
	}
	
	head.style.background="steelblue";
	mass.textContent="";
	easys=true;
	hards=false

});


reset.addEventListener("click",function(){
	if(hards){
	color=colorGen(6);
	cp=colorPicker();
	cpd.textContent=cp;
	for(var i=0;i<sq.length;i++)
	{
		sq[i].style.backgroundColor=color[i];
		sq[i].style.display="block";	
	}
	}
	else if(easy){
	color=colorGen(3);
	cp=colorPicker();
	cpd.textContent=cp;
	for(var i=0;i<sq.length;i++)
	{
		if(color[i]){
			sq[i].style.backgroundColor=color[i];	
		}
		else{
			sq[i].style.display="none";
		}
	}	
	}
	reset.textContent="new color"
	head.style.background="steelblue";
	mass.textContent=""
});


for(var i=0;i<sq.length;i++)
{
	sq[i].style.backgroundColor=color[i];
	sq[i].addEventListener("click",function(){
		 var cc=this.style.backgroundColor;
		if(cc===cp){
			 // this.syle.backgroundColor="steelblue";
			 mass.textContent="correct!";
			change(cc);
			head.style.background=cc;
			reset.textContent="playagain!!"
		 }
		 else{
		 	// alert("wrong")
		 	 this.style.background="#232323";
		 	 mass.textContent="try again!";
		 }
	});
}


function change(color){

 for(var i=0;i<sq.length;i++)
				{
				sq[i].style.backgroundColor=color;
				}
}

function colorPicker(){
	var a=Math.floor(Math.random()*color.length);
	return color[a];
}

function colorGen(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(colorRandom());
	}
	return arr
}

function colorRandom(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+ r +", "+ g +", "+ b +")";
}