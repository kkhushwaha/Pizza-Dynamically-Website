 
 
 $(document).ready(function()
 {
 electronicItem=[
            {
			     title:"Oregon scientific ATC chameleon Dual-Lens action Cam",
				 src:"images/oreon cam.jpg",
				 dollar:"$",
				 price:"39",
				 details:"Calling all weekend warriors! Capture twice the excitement with the ATC Chameleon, the world’s first dual-lens video action camera! Position the two fisheye lenses independently to catch activity within a 180º radius. Record the trail ahead and behind, the wave as it curls around you, the ground below and the plane above as you dive into the blue sky—sharel all the action and your reaction at the same time! It even syncs the video playback automatically, so you don’t have to edit a thing. It’s double the view, double the fun, without doubling your load! ",
				 viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			},
			{
				 title:"Canon EOS-60-D DSLR Camera",
				 src:"images/canondslr.jpg",
				 dollar:"$",
				 price:"345.95",
				 details:"Designed to realize your perfect shot, the 60D’s pairing of two state-of-the-art sensor and image processor allows it to capture action at a slick 5.3fps while the shutter speed range of 1/8000 sec ensures that nothing escapes your vision.",
				 viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			},
			{
				 title:"Apple Laptops",
				 src:"images/applelaptop.jpg",
				 dollar:"$",
				 price:"549.95",
				 details:"Early computers were aimed to perform mathematical functions but with the passage of time this all changed and now we use personal computers in a variety of tasks. They range from business applications to personal entertainment and the size of computers has come down significantly as well. But technology was still ugly until Apple Inc. came along and changed i",
				viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			}
 ];
 
 sportsItem=[
            {
			     title:"Wilson Tennis Rackets",
				 src:"images\tennis.jpg",
				 dollar:"$",
				 price:"199.95",
				 details:"Grigor Dimitrov Uses Pro Staff 95S with Spin Effect Technology to Break Into the Top 10! Matte-Black is Gone: Wilson Unveils Graphics Package for New Pro Staff Racket Petra Kvitova Wins 2nd Wimbledon Title; Federer Runner-Up Collaboration Between Wilson and Roger Federer Results in New Wilson Pro Staff Line Kei Nishikor",
				 viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			},
			{
				 title:"Rollerblade Skates",
				 src:"images\skates.jpg",
				 dollar:"$",
				 price:"499",
				 details:"Rollerblade Igniter 100 Inline Skates - High end is within reach for any skater when 100mm wheels are paired with high cuff stability and Soft True Wrap for speed and enhanced support.",
				 viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			},
			{
				 title:"Cricket Kit",
				 src:"images\cricket.jpg",
				 dollar:"$",
				 price:"899",
				 details:"PUMA is one of the established firms in the field of manufacturing sportsâ€™ gear. Being one of the most desirable lifestyle accessories and sports gear manufacturer, their presence is felt on a worldwide basis. Established in 1948, PUMA has grown by leaps and bounds and become one of the most desired brands worldwide. As a world leader, their products are of superior quality and chosen to be the best by their loyal customers.",
				 viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			}
 ];

 
computerItem=[
            {
				title:"Apple iMac ME089HN/A 27-Inch Desktop (NEWEST VERSION) by MacSlatch",
				 src:"images\applecomputer.jpg",
				 dollar:"$",
				 price:"2344.45",
				 details:"With OS X Yosemite, we set out to elevate the experience of using a Mac. To do that, we looked at the entire system and refined it app by app. Feature by feature. Pixel by pixel. And we built great new capabilities into the interface that put need-to-know information at your fingertips. The result is that your Mac has a fresh new look, with all the power and simplicity you know and love.",
				viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			},
			{
				 title:"CInspiron One 20 3000 Series (Intel®)",
				 src:"images\dellcomputer.jpg",
				 dollar:"$",
				 price:"195.45",
				 details:"Have more fun and get more done with this all-in-one desktop featuring a 4th Gen Intel® Core™ processor, Windows 8.1 and a 49.5cm (19.5) HD+ display with optional touch.",
				 viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			},
			{
				 title:"HP ENVY Phoenix 810qe Windows 7 Desktop PC",
				 src:"images\hpcomputer.jpg",
				 dollar:"$",
				 price:"549.95",
				 details:"Step up your game with the powerful HP ENVY Phoenix 810 – clad in battle-worthy armor and designed to dominate opponents with performance that's simply game changing. Get in the zone like never before with lightning-fast processing, stunning graphics, and sound that puts you right in the middle of the action.",
				 viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			}
 ];
 
shirtItem=[
            {
			     title:"Peter England",
				 src:"",
				 dollar:"$",
				 price:"20",
				 details:"",
				viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			},
			{
				 title:"",
				 src:"$",
				 dollar:"",
				 price:"",
				 details:"",
				viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			},
			{
				 title:"",
				 src:"",
				 dollar:"",
				 price:"",
				 details:"",
				viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			}
 ];
 
 
 
 kidsItem=[
            {
			     title:"Prams",
				 src:"images\pram1.jpg",
				 dollar:"$",
				 price:"349",
				 details:"Ever worried about how to go out with your new baby? Have you ever stayed at home instead of having a lovely night out because of the hassle of moving your baby and all the baby products that need to be carried seemed too much? If you have, then the Baby Stroller is the answer to your problem. It will help keep you organised and your baby safe and comfortable.",
				viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			},
			{
				 title:"Cradles",
				 src:"images\cradle.jpg",
				 dollar:"$",
				 price:"229.95",
				 details:"Offering maximum comfort to their baby is every parent’s priority. Get this Mothertouch Rocking Cradle which will not only keep your little one comfortable but also make sure they are safe from falling or hurting themselves.",
				viewHref:"Details.html",
				 buyNowHref:"Passengers.html"
			 }
			
  ];
 


var s = window.location.href;
var params = s.split('?');
//alert(params[1]);
if( params[1] == "Electronic" )
{
  //alert("hi");
 var templar= Handlebars.compile($("#DetailsPageTemplate").html());
 //alert("after templar");
     $('#electronics').append(templar(electronicItem));
	// alert("after embbeding");

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
});



 
