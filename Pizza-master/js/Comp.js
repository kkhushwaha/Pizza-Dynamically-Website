


DataHomePage = 
 [

         {
         ItemCode:"Laptop1",
         src:"images/laptop.jpg",
          Details:"<p>With OS X Yosemite, we set out to elevate the experience of using a Mac. To do that, we looked at the entire system and refined it app by app. Feature by feature. Pixel by pixel. And we built great new capabilities into the interface that put need-to-know information at your fingertips. The result is that your Mac has a fresh new look, with all the power and simplicity you know and love. </p>",
          title:"Oregon scientific ATC chameleon Dual-Lens action Cam",
          Price: "89.00"

         },

         {
    

         ItemCode:"Camera1",
         src:"images/oreon cam.jpg",
        Details:"<p>Calling all weekend warriors! Capture twice the excitement with the ATC Chameleon, the world’s first dual-lens video action camera! Position the two fisheye lenses independently to catch activity within a 180º radius. Record the trail ahead and behind, the wave as it curls around you, the ground below and the plane above as you dive into the blue sky—sharel all the action and your reaction at the same time! It even syncs the video playback automatically, so you don’t have to edit a thing. It’s double the view, double the fun, without doubling your load!  </p>",
          title:"Oregon scientific ATC chameleon Dual-Lens action Cam",
          Price: "200"

         },

          {
          ItemCode:"sport1",
          src:"images/sports.jpg",
          Details:"Licensed Memorabilia A broad range of football's most elite players. And also Chad Johnson Ends August 24 at 12AM"
          
         }

];
DataPvg =  [

         {
         ItemCode:"",
           src:"images/laptop.jpg",
           Details:"Asus Tablet(Gen 2) Electronics and sport, back together again.Ends August 26 at 9AM CT"
         },

          {
          ItemCode:"sport1",
          src:"images/sports.jpg",
          Details:"Licensed Memorabilia A broad range of football's most elite players. And also Chad Johnson Ends August 24 at 12AM"
          
         }

];
DataComputer= 
      [

       {
          ItemCode:"Comp1",
          src:"images/imac.jpg",
          Details:"<p>With OS X Yosemite we set out to elevate the experience of using a Mac. To do that we looked at the entire system and refined it app by app. Feature by feature. Pixel by pixel. And we built great new capabilities into the interface that put need-to-know information at your fingertips. The result is that your Mac has a fresh new look, with all the power and simplicity you know and love. </p>",
          title:"Apple iMac ME089HN/A 27-Inch Desktop (NEWEST VERSION) by MacSlatch",
          Price: 89123.00
        },

  {
          ItemCode:"Comp2",
          src:"images/dellcomputer.jpg",
          Details:"<p>Have more fun and get more done with this all-in-one desktop featuring a 4th Gen Intel® Core™ processor, Windows 8.1 and a 49.5cm (19.5) HD+ display with optional touch.</p>",
          title:"CInspiron One 20 3000 Series (Intel®)",
          Price: 81239.00
  },
         
  {
     
          ItemCode:"Comp3",
          src:"images/hpcomputer.jpg",
          Details:"<p>Step up your game with the powerful HP ENVY Phoenix 810 – clad in battle-worthy armor and designed to dominate opponents with performance that's simply game changing. Get in the zone like never before with lightning-fast processing, stunning graphics, and sound that puts you right in the middle of the action.</p>  <p>With glowing accents, an aggressive design, and a landing pad for your accessories, this serious gaming weapon is designed for domination. A side-panel window illuminates with red lighting, revealing the inner technology aggressive performance.</p>",
          title:"HP ENVY Phoenix 810qe Windows 7 Desktop PC",
          Price: 8139.00
  }

  
  ];

  DataCamera=
   [
 
  {
    ItemCode:"Camera1",
    src:"images/oreon cam.jpg",
    Details:"<p>Calling all weekend warriors! Capture twice the excitement with the ATC Chameleon, the world’s first dual-lens video action camera! Position the two fisheye lenses independently to catch activity within a 180º radius. Record the trail ahead and behind, the wave as it curls around you, the ground below and the plane above as you dive into the blue sky—sharel all the action and your reaction at the same time! It even syncs the video playback automatically, so you don’t have to edit a thing. It’s double the view, double the fun, without doubling your load! </p>",
    title:"Oregon scientific ATC chameleon Dual-Lens action Cam",
    Price:4654.00
  },
  {
    ItemCode:"Camera2",
    src:"images/canondslr.jpg",
    Details:" <p>Designed to realize your perfect shot, the 60D’s pairing of two state-of-the-art sensor and image processor allows it to capture action at a slick 5.3fps while the shutter speed range of 1/8000 sec ensures that nothing escapes your vision.</p>",
    title:"Canon EOS-60-D DSLR Camera",
    Price:5654.00

  }
  ];
  
  DataKids= 
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
    Details:" <p>Offering maximum comfort to their baby is every parent’s priority. Get this Mothertouch Rocking Cradle which will not only keep your little one comfortable but also make sure they are safe from falling or hurting themselves.</p>",
     title:"Cradles", 
    Price:764.00

}

  ];

var s = window.location.href;
//alert(s);
var params = s.split('?');

//alert(params[1]);
//alert(DataHomePage);
//alert("length of an object"+DataHomePage.length);

if( params[1] == "Laptop1" )
{
  //alert("hi");
 var templar= Handlebars.compile($("#DetailsPageTemplate").html());
     $('#electronics').append(templar(DataComputer));

}
else

{
    if( params[1] == "Camera" )
   {
   var templar= Handlebars.compile($("#DetailsPageTemplate").html());
     $('#electronics').append(templar(DataCamera));
   }
   else
   {
    var templar= Handlebars.compile($("#DetailsPageTemplate").html());
     $('#electronics').append(templar(DataKids));
   }
}
 






  
