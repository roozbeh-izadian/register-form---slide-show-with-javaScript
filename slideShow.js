var interval;
var l=0;
var n=1;
function play()
	{
		interval=setInterval(goForward,2000);
	}

function goForward()
	{
		opacityResetBox();
		transformRestBox();
		transformRestImg();
		l-=960;
		n++;
		if(l==-3840)
		{
			l=0;
			n=1;
			document.getElementById('img2').style.transform="rotate(720deg)";
			document.getElementById('img3').style.transform="rotate(720deg)";				
		}
		document.getElementById('slider').style.left=l+"px";
		
		document.getElementById('img'+n).style.transform="rotate(-360deg)";
		
		document.getElementById('box'+n).style.opacity="1";
		document.getElementById('box'+n).style.transform="rotate(360deg)";
	}	
	
function pause()
	{	
		clearInterval(interval);
	}		
function goto1()
{
	l=0;
	document.getElementById('slider').style.left=l+'px';
	showText();	
}
function goto2()
{
	l=-960;
	document.getElementById('slider').style.left=l+'px';	
	showText();
}
function goto3()
{
	l=-1920;
	document.getElementById('slider').style.left=l+'px';	
	showText();
}
function goto4()
{
	l=-2880;
	document.getElementById('slider').style.left=l+'px';	
	showText();
}
function showText()
{
	if(l==0)
		document.getElementById('textContent').innerHTML="Emma watson";
	else if(l==-960)
		document.getElementById('textContent').innerHTML="Emma watson 2";
	else if(l==-1920)
		document.getElementById('textContent').innerHTML="Vanilope";	
	else
		document.getElementById('textContent').innerHTML="God of War";	
}
function arrow()
	{
		if(l=="0"){
			l=-960;
			document.getElementById('slider').style.left="-960px";}
		else 
			if(l=="-960"){
				l=-1920;
				document.getElementById('slider').style.left="-1920px";}
		else 
			if(l=="-1920"){
				l=-2880;
				document.getElementById('slider').style.left="-2880px";}
	}
function arrow2()
	{	
		if(l=="-960"){
			l=0;
			document.getElementById('slider').style.left="0px";}
		if(l=="-1920"){
			l=-960;
			document.getElementById('slider').style.left="-960px";}
		if(l=="-2880"){
			l=-1920;
			document.getElementById('slider').style.left="-1920px";}

	}			

	function opacityResetBox()
	{
		for (var i = 1; i <=4; i++) 
			document.getElementById('box'+i).style.opacity=".5";
	}
	
	function transformRestBox()
	{
		for (var i = 1; i <=4; i++) 
			document.getElementById('box'+i).style.transform="rotate(0deg)";
	}
	
	function transformRestImg()
	{
		for (var i = 1; i <=4; i++) 
			document.getElementById('img'+i).style.transform="rotate(-0deg)";
	}