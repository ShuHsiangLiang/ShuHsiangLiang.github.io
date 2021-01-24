var time=0;
var stars=[
  {
    el: ".red",
    r: 120,
    speed: 0.6,
    width: 20,
  },
  {
    el: ".yellow",
    r: 160,
    speed: 0.4,
    width: 40,
  }
];

function update(){
  stars.forEach(function(star)
  {                
  var r = star.r;
  var angle = star.speed * time*2;
  var x= r * Math.cos((angle/360)*(Math.PI*2)) - (star.width/2);
  var y= r * Math.sin((angle/360)*(Math.PI*2)) - (star.width/2);
  $(star.el).css("transform","translate("+x+"px,"+y+"px)");
  time+=1;
  console.log(time);
  });
}
setInterval(update,30);