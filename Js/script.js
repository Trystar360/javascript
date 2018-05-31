
function map (num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
  var elmnt, scrlH;

  scroll();
  scrollAction();
  function scroll(){
    document.onscroll = function(){
      scrollAction();
    };
  }

  function getScroll(){
     var sy, d= document, r= d.documentElement, b= d.body;
     sy= r.scrollTop || b.scrollTop || 0;
     return sy;
   }

   function scrollAction(){
    elmnt = document.getElementById("bod");
      scrlH = elmnt.scrollHeight-window.innerHeight;
        //console.log(getScroll());
        var opacity = map(getScroll(),0,200,0,1);

        var w = map(getScroll(),0,100,100,0);
        document.getElementById("navv").style.width = w + "%";

        var pos = map(getScroll(),0,scrlH,0,360);
        document.getElementById("jsImg").style.transform = "rotate("+ pos +"deg)";
        //console.log(elmnt.clientHeight);

        var boxs = map(getScroll(),0,300,365,0);
        if(boxs < 0)
        boxs = 0;

        document.getElementById("uses").style.left = boxs + "px";
        document.getElementById("uses").style.opacity = opacity;

        document.getElementById("other").style.right = boxs + "px";
        document.getElementById("other").style.opacity = opacity;
   }

   function clicked(){
     smoothScroll("other")
   }

function fade(){
    $("#mainBod").animate({
        opacity: 0,
        }, 2000);
    $("#mainBod").fadeTo(1000,0);
    

    $("#secondWindow").animate({
        opacity: 1,
        width: "1000px",
        height: "auto"
    })
    $("#secondWindow").fadeTo(1000,1);

}

var hidden = false;
function unhide(){
  hidden = !hidden;

  if(hidden){
    document.getElementById("hidden").style.display = "block"
  }else{
    document.getElementById("hidden").style.display = "none"
  }
  smoothScroll("hidden")
}