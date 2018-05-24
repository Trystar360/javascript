
function map (num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  scroll();
  function scroll(){
    document.onscroll = function(){
        console.log(getScroll());
        var w = map(getScroll(),0,100,100,0);
        document.getElementById("navv").style.width = w + "%";

        var pos = map(getScroll(),0,600,0,360);
        document.getElementById("jsImg").style.transform = "rotate("+ pos +"deg)";

        var uses = map(getScroll(),0,200,-200,0);
        if(uses > 50)
        uses = 50;
        document.getElementById("uses").style.left = uses + "px";

        var facts = map(getScroll(),0,200,200,0);
        if(facts > 50)
        facts = 50;
        document.getElementById("facts").style.right = uses + "px";
    };
  }

  function getScroll(){
     var sy, d= document, r= d.documentElement, b= d.body;
     sy= r.scrollTop || b.scrollTop || 0;
     return sy;
   }