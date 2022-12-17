$(document).ready(function() {
  var audio = document.getElementById("bgMusic");
	var audio2 = document.getElementById("ring")

	$("enter_btn").mouseenter(function(){
		audio2.play()
	})
	audio.volume=0.5;

  $("#btn7").on('click',function(){
    $("#seven").addClass('enLarge');
  })
  $("a.enter_btn[href]").click(function(e){
    e.preventDefault();
    if (this.href) {
        var target = this.href;
        setTimeout(function(){
            window.location = target;
        }, 2000);
    }
});

  var controller = new ScrollMagic.Controller();
  var mScene = new ScrollMagic.Scene({
                  triggerElement: '.b1'
  })
  .setClassToggle('.b1','show')
  .addTo(controller);

  var mScene2 = new ScrollMagic.Scene({
                  triggerElement: '.b2'
  })
  .setClassToggle('.b2','show')
  .addTo(controller);
});
