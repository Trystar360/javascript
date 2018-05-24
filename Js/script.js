
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
        var w = map(getScroll(),0,100,100,0);
        document.getElementById("navv").style.width = w + "%";

        var pos = map(getScroll(),0,scrlH,0,360);
        document.getElementById("jsImg").style.transform = "rotate("+ pos +"deg)";
        //console.log(elmnt.clientHeight);

        var uses = map(getScroll(),0,300,365,0);
        if(uses < 0)
        uses = 0;
        document.getElementById("uses").style.left = uses + "px";

        var facts = map(getScroll(),0,200,200,0);
        if(facts < 0)
        facts = 0;
        document.getElementById("facts").style.right = uses + "px";
   }