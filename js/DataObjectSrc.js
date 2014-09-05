/*var item = {
		src:"",
		Details:"",
		id:"",
		type:""
	}
	
function getDummyItems(){
	var Data = [];
	switch()
	{
		case "electronic":
		var item1 = new item();
		var item2 = new item();

		Data.push(item1);
		Data.push(item2);
	}
	return Data;
}
*/
$(document).ready(function ()
{
	
	


var Data = [
         {
	       src:"images/laptop.jpg",
	       Details:"Asus Tablet(Gen 2) Electronics and sport, back together again.Ends August 26 at 9AM CT"

         },

         {
	       src:"images/goggle.jpg",
	       Details:"Nike Sunglasses Put these on your face Ends August 25 at 9AM CT"
         },

         {
           src:"images/kids.jpg",
           Details:"Baby Mc.StuffinsYou see, when a turkey and an English muffin love each other very much Ends August 22 at 9AM CT"
         },

         {
         	src:"images/shirt.jpg",
         	Details:"OGIO Apparel Some say the name actually means All We Own We Owe Gee Oh Ends August 23 at 11:59PM CT"
         },

         {
         	src:"images/sports.jpg",
         	Details:"Licensed Memorabilia A broad range of football's most elite players. And also Chad Johnson Ends August 24 at 12AM"
         },

         {
             src:"images/laptop.jpg",
	       Details:"Asus Tablet(Gen 2) Electronics and sport, back together again.Ends August 26 at 9AM CT"
         }


        

         ];
      
       
       
     var templ= Handlebars.compile($("#EntryTemplate").html());
     $('#Mainrow').append(templ(Data));
});