var test = '{"thumb":[' 
        +'{"mainTitle":"Pyle Sport Electronics","path":"images/tv1.jpg"},'
        +'{"mainTitle":"Asus Tablet(Gen 2)","path":"images/laptop.jpg"},'
        +'{"mainTitle":"Nike Sunglasses","path":"images/goggle.jpg"},'
        +'{"mainTitle":"Baby Mc.Stuffins","path":"images/kids.jpg"},'
        +'{"mainTitle":"OGIO Apparel","path":"images/shirt.jpg"},'
        +'{"mainTitle":" Licensed Memorabilia","path":"images/sports.jpg"}]}';

        var obj1 = JSON.parse(test);
		 var i=0;
		 
		alert(obj1.thumb.length);
		
		for(i=0;i<obj1.thumb.length;i++)
        {
		
          str='<div class="col-sm-4" id="div'+i+'">';
          str+='<div class="thumbnail">';
               str+='<img class="image" src="'+ obj1.thumb[i].path+ '" height="700" width="700">'
               
               str+=' <div class="caption">';
       str+='<h3>'+obj1.thumb[i].mainTitle+'</h3>';
str+=' <p>';
  str+='<a href="sport.html" class="btn btn-primary" role="button">book</a>';
     str+='</p>';
  str+='</div>';
  str+='</div>';
    str+='</div>';
    str+='<p>Any content can go here.';
	str+='</p>';
  str+='</div>';
str+='</div>';
str+='</div>';


                    document.getElementById("mainrow").innerHTML+=str;
					alert(str);
					}

       
    