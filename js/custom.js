

//slick-slider initialization
$('.slick-slider').slick({
  arrows: false
});


function hideContainers() {
  $(".english-container").each(function() {
  $(this).hide("fade", 500);
  });
}

function preHideContainers() {
  $(".english-container").each(function() {
    var tt = $(this).index();
    if(tt != 0) {
      $(this).hide();
    }
  })
}

preHideContainers();

var navItems = $(".nav-container ul li");
var container = $(".english-container");
navItems.click(function() {
  if($(this).hasClass("active-item") == false) {
    var ind = $(this).index();
    var jj = container.eq(ind);
    hideContainers();
    setTimeout(function() {
      jj.show("fade", 900);
    }, 500);
    var of = $(".main").offset();
    var oft = of.top;
    $("html, body").animate({
      scrollTop: oft - 80
    });
    $(".nav-container ul li").removeClass("active-item");
    $(this).addClass("active-item");
  }

});

function setHeightSlide() {
  var heightWindow = $(window).height();
  $(".slick-slider img").height(heightWindow);
  var widthContainer = $(".container").width();
  $(".nav-container").width(widthContainer);
}

setHeightSlide();

$(window).resize(function() {
  setHeightSlide();
})


$('.scrollbar-chrome').scrollbar();


      
//jplayer---------------------------------------------




  function defineHeightPlayer() {
  var widthPlayerWrapper = $(".player-wrapper").width();
  var constWidth = 480 / 270;
  var heightPlayer = widthPlayerWrapper / constWidth;
  return heightPlayer;
}

  var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
  }, [
    {
        title:"Big Buck Bunny Trailer",
        artist:"Blender Foundation",
        m4v:"http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
        ogv:"http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
        webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
        poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
      },
      {
        title:"Finding Nemo Teaser",
        artist:"Pixar",
        m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
        ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
        webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
        poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
      },
      {
        title:"Incredibles Teaser",
        artist:"Pixar",
        m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
        ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
        webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
        poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
      },
      {
        title:"Big Buck Bunny Trailer",
        artist:"Blender Foundation",
        m4v:"http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
        ogv:"http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
        webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
        poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
      },
      {
        title:"Finding Nemo Teaser",
        artist:"Pixar",
        m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
        ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
        webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
        poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
      },
      {
        title:"Incredibles Teaser",
        artist:"Pixar",
        m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
        ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
        webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
        poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
      }
  ], {
    playlistOptions: {
      enableRemoveControls: false
    },
    swfPath: "/libs/js",
    //solution:"flash, html",
    supplied: "webmv, ogv, m4v, oga, mp3",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: true,
    size: {
      width: "100%",
      height: defineHeightPlayer() + "px"
    }
  });



  




  var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_2",
    cssSelectorAncestor: "#jp_container_2"
  }, [
    {
        title:"Big Buck Bunny Trailer",
        artist:"Blender Foundation",
        m4v:"http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
        ogv:"http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
        webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
        poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
      },
      {
        title:"Finding Nemo Teaser",
        artist:"Pixar",
        m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
        ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
        webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
        poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
      },
      {
        title:"Incredibles Teaser",
        artist:"Pixar",
        m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
        ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
        webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
        poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
      },
      {
        title:"Big Buck Bunny Trailer",
        artist:"Blender Foundation",
        m4v:"http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
        ogv:"http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
        webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
        poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
      }
  ], {
    playlistOptions: {
      enableRemoveControls: false
    },
    swfPath: "/libs/js",
    solution:"flash, html",
    supplied: "webmv, ogv, m4v, oga, mp3",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: true,
    size: {
      width: "100%",
      height: defineHeightPlayer() + "px"
    }
  });
  

  var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_3",
    cssSelectorAncestor: "#jp_container_3"
  }, [
    {
        title:"Big Buck Bunny Trailer",
        artist:"Blender Foundation",
        m4v:"http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
        ogv:"http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
        webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
        poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
      },
      {
        title:"Finding Nemo Teaser",
        artist:"Pixar",
        m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
        ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
        webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
        poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
      },
      {
        title:"Incredibles Teaser",
        artist:"Pixar",
        m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
        ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
        webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
        poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
      }
  ], {
    playlistOptions: {
      enableRemoveControls: false
    },
    swfPath: "/libs/js",
    solution:"flash, html",
    supplied: "webmv, ogv, m4v, oga, mp3",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: true,
    size: {
      width: "100%",
      height: defineHeightPlayer() + "px"
    }
  });


var add = function() {
  var x = 0;
  return function() {
    //console.log(x);
    console.log(x++);
  }
  
}
var xd = add();
xd();
xd();
xd();

