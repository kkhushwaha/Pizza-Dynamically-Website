//alert("hrrr");
/*
DataKi= 
  [
{
ItemCode:"Kids1",
  	src:"images/pram1.jpg",
  	Details:"  <p>Ever worried about how to go out with your new baby? Have you ever stayed at home instead of having a lovely night out because of the hassle of moving your baby and all the baby products that need to be carried seemed too much? If you have, then the Baby Stroller is the answer to your problem. It will help keep you organised and your baby safe and comfortable.</p>",
     title:"Params",	
    Price:464.00

},
{
ItemCode:"Kids2",
  	src:"images/cradle.jpg",
  	Details:"<p>Offering maximum comfort to their baby is every parent’s priority. Get this Mothertouch Rocking Cradle which will not only keep your little one comfortable but also make sure they are safe from falling or hurting themselves.</p>",
     title:"Cradles",	
    Price:764.00

}




  ];


        

   
        
   
     var templar2= Handlebars.compile($("#DetailViewPageDisplay").html());
     $('#computers').append(templar2(DataKi[0]));

*/
function getAddData(ele)
{ 
	alert(ele);
  //alert("hello");

  for (var i = 0 ; i < DataKi.length; i++) 
{
  //alert(i);
  
for(var j = 0; j < DataKi.length; j++)
 {  
  //alert(j);

   if(DataKi[i].ItemCode == ele)
   {
      alert(DataKi[j].Details);
      alert(DataKi[j].src);
      
      break;
   }
  
}

}
};
