
  


$(document).ready(function ()
{
  
  


Data = [
         {
         ItemCode:"Electronic",
           src:"images/laptop.jpg",
           Details:"Asus Tablet(Gen 2) Electronics and sport, back together again.Ends August 26 at 9AM CT"
         },

         {
            ItemCode:"Camera",
         src:"images/canon.jpg",
         Details:"Nike Sunglasses Put these on your face Ends August 25 at 9AM CT"
         
         },

         {
           ItemCode:"Kids",
           src:"images/cradle.jpg",
           Details:"Baby Mc.StuffinsYou see, when a turkey and an English muffin love each other very much Ends August 22 at 9AM CT"
           
         },

         {
          ItemCode:"shirt1",
          src:"images/shirt.jpg",
          Details:"OGIO Apparel Some say the name actually means All We Own We Owe Gee Oh Ends August 23 at 11:59PM CT"
          
         },

         {
          ItemCode:"sport1",
          src:"images/sports.jpg",
          Details:"Licensed Memorabilia A broad range of football's most elite players. And also Chad Johnson Ends August 24 at 12AM"
          
         },

         {
          ItemCode:"laptop2",
            src:"images/laptop.jpg",
          Details:"Asus Tablet(Gen 2) Electronics and sport, back together again.Ends August 26 at 9AM CT"
         
         }


        

         ];
      
       
       
     var templ= Handlebars.compile($("#EntryTemplate").html());
     $('#Mainrow').append(templ(Data));
});

/*
function getData(ele)
{
//alert(ele);
this.divid =ele.id;
var s = window.location.href;
alert( s );
var templar= Handlebars.compile($("DetailsPageTemplate").html());
     $('#electronics').append(templar(Data));
//document.write(divid);
//alert(divid);
*/
for ( i = 0; i < Data.length; i++)
 {
  
  if(Data[i].ItemCode == "divid")
  {
    //alert(Data[i].ItemCode);
    //document.write(Data[i]);
       
           break;
   };
};
*/
