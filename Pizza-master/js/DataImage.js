
function First(src,Name,Detail)
{
 //alert("hello");
   this.src =src;
	this.Name=Name;
	this.Detail=Detail;
	}	
var kyu=new First("<img src=images/tv1.jpg>","Electronics Piles","hjgjkjrlkg");
var divid=document.getElementById('gh');
divid.innerHtml="kyu.src";
var div1=document.getElementById('kj');
document.write(kyu.Detail);
//document.write(kyu.)
document.write(kyu.Name);

document.write(kyu.Detail);
