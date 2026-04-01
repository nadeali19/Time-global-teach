// var player, section0, section1, section2, section3;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player("intro_player", {
//     videoId: "pVVvs0U2FM4",
//     playerVars: {
//       rel: 0,
//       enablejsapi: 1,
//       autohide: 1,
//       autoplay: 1,
//       wmode: "opaque",
//       loop: 1,
//       controls: 0,
//     },
//     events: {
//       onStateChange: onPlayerStateChange,
//     },
//   });
//   section0 = new YT.Player("section0_player", {
//     videoId: "y7uDhqj2OAg",
//     playerVars: {
//       rel: 0,
//       enablejsapi: 1,
//       autohide: 1,
//       autoplay: 1,
//       wmode: "opaque",
//       loop: 1,
//       controls: 0,
//     },
//     events: {
//       onStateChange: onSection0PlayerStateChange,
//     },
//   });
//   section1 = new YT.Player("section1_player", {
//     videoId: "G35sk07OCRs",
//     playerVars: {
//       rel: 0,
//       enablejsapi: 1,
//       autohide: 1,
//       autoplay: 1,
//       wmode: "opaque",
//       loop: 1,
//       controls: 0,
//     },
//     events: {
//       onStateChange: onSection1PlayerStateChange,
//     },
//   });
// //   section2 = new YT.Player("section2_player", {
// //     videoId: "pVVvs0U2FM4",
// //     playerVars: {
// //       rel: 0,
// //       enablejsapi: 1,
// //       autohide: 1,
// //       autoplay: 1,
// //       wmode: "opaque",
// //       loop: 1,
// //       controls: 0,
// //     },
// //     events: {
// //       onStateChange: onSection2PlayerStateChange,
// //     },
// //   });
//   section3 = new YT.Player("section3_player", {
//     videoId: "q4arExHpR3s",
//     playerVars: {
//       rel: 0,
//       enablejsapi: 1,
//       autohide: 1,
//       autoplay: 1,
//       wmode: "opaque",
//       loop: 1,
//       controls: 0,
//     },
//     events: {
//       onStateChange: onSection3PlayerStateChange,
//     },
//   });
// }
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.ENDED) {
//     loadingout();
//     player.playVideo();
//   }
// }
// function onSection0PlayerStateChange(event) {
//   if (event.data == YT.PlayerState.ENDED) {
//     section0.playVideo();
//   }
// }
// function onSection1PlayerStateChange(event) {
//   if (event.data == YT.PlayerState.ENDED) {
//     section1.playVideo();
//   }
// }
// // function onSection2PlayerStateChange(event) {
// //   if (event.data == YT.PlayerState.ENDED) {
// //     section2.playVideo();
// //   }
// // }
// function onSection3PlayerStateChange(event) {
//   if (event.data == YT.PlayerState.ENDED) {
//     section3.playVideo();
//   }
// }

/* 
Lottie animation JSON files are missing. Commenting out to avoid 404 errors.
*/

var designContainer = document.getElementById("design-animation-container");
var buildContainer = document.getElementById("build-animation-container");
var deliverContainer = document.getElementById("deliver-animation-container");

// Dummy objects to prevent errors
var designAnim = { play: function(){}, stop: function(){}, pause: function(){} };
var buildAnim = { play: function(){}, stop: function(){}, pause: function(){} };
var deliverAnim = { play: function(){}, stop: function(){}, pause: function(){} };

var homeLoader = $("#loader");
if (homeLoader.length) {
  var element = document.getElementById("container-intro");
  // Check if data.json exists or just bypass for now to allow site to load
  loadingout(); 
  /*
  var animation = lottie.loadAnimation({
    ...
  */
}
var fullpageblock = $("#fullpage");
if (fullpageblock.length) {
  var myFullpage = new fullpage("#fullpage", {
    licenseKey: "OPEN-SOURCE-GPLv3",
    verticalCentered: true,
    sectionsColor: ["#1bbc9b", "#4BBFC3", "#7BAABE"],
    loopBottom: false,
    scrollingSpeed: 1700,
    easingcss3: "cubic-bezier(0.550, 0.085, 0.000, 0.990)",
    onLeave: function onLeave(index, nextIndex, direction) {
      console.log(nextIndex["index"]);
      if (nextIndex["index"] == 0) {
        clearTimeout(int1);
        //section0.playVideo();
        setTimeout(function () {
          designAnim.play();
        }, 500);
        int1 = setTimeout(function () {
          fullpage_api.moveSectionDown();
        }, 7000); // first slide duration in ms
      } else {
        setTimeout(function () {
          designAnim.stop();
        }, 200);
      }
      if (nextIndex["index"] == 1) {
        clearTimeout(int1);
        //section1.playVideo();
        setTimeout(function () {
          buildAnim.play();
        }, 1200);
        int1 = setTimeout(function () {
          fullpage_api.moveSectionDown();
        }, 7000); // first slide duration in ms
      } else {
        setTimeout(function () {
          buildAnim.stop();
        }, 600);
      }
      if (nextIndex["index"] == 2) {
        clearTimeout(int1);
        // section2.playVideo();
        setTimeout(function () {
            deliverAnim.play();
        }, 1200);
        int1 = setTimeout(function () {
          fullpage_api.moveSectionDown();
        }, 7000); // first slide duration in ms
      } else {
        setTimeout(function () {
            deliverAnim.stop();
        }, 600);
      }
      if (nextIndex["index"] == 3) {
        clearTimeout(int1);
        //section3.playVideo();
        setTimeout(function () {
          $(".active .revealbox").addClass("aos-animate");
          $(".social").addClass("aos-animate");
        }, 300);
      } else {
        setTimeout(function () {
          $(".revealbox").removeClass("aos-animate");
          $(".social").removeClass("aos-animate");
        }, 500);
      }
    },
  });
}

function loadingout() {
  $("#loader").removeClass("aos-animate");
  setTimeout(function () {
    $("#content").addClass("aos-animate");
    $(".logo").addClass("aos-animate");
  }, 50);
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 50);
  setTimeout(function () {
    designAnim.play();
  }, 2000);
  int1 = setTimeout(function () {
    fullpage_api.moveSectionDown();
  }, 7000);
}
AOS.init();
$().ready(function () {
  $(window).load(function () {
    console.log("document ready");
    // setTimeout(function() {
    //     document.getElementById("site-loader").style.display = "none";
    //     var intro = $("#loader");
    //     if (intro.length) {
    //         document.getElementById("intro").play();
    //     }
    // }, 500);
    var logoblock = $(".logo-block");
    console.log(logoblock.length);
    if (logoblock.length) {
      setTimeout(function () {
        new Vivus("logo-canvas", {
          type: "oneByOne",
          start: "autostart",
          duration: 200,
        });
      }, 300);
    }
  });
  setTimeout(function () {
    $("#content").removeClass("aos-animate");
    $(".logo").removeClass("aos-animate");
    $(".nav-menu").removeClass("aos-animate");
  }, 20);
  menucheck = setInterval(function () {
    if ($(".nav-menu").hasClass("aos-animate")) {
      $(".nav-menu").removeClass("aos-animate");
    }
  }, 20);
  setTimeout(function () {
    var footer = $(".footer");
    var logo = $("#header");
    if (footer.length) {
      $(".footer").addClass("aos-animate");
    }
    if (logo.length) {
      $(".logo").addClass("aos-animate");
    }
  }, 300);
});

function menushow() {
  clearInterval(menucheck);
  //document.getElementById("menu").style.display = "block";
  $(".nav-menu").addClass("aos-animate");
  $(".nav-menu").css("pointer-events", "auto");
  document.getElementById("menuhide").style.display = "block";
  document.getElementById("menushow").style.display = "none";
  setTimeout(function () {
    new Vivus("page-canvas", {
      type: "oneByOne",
      start: "autostart",
      duration: 200,
    });
    document.getElementById("line-block").style.display = "block";
    //document.getElementById("content").style.display = "none";
  }, 500);
}

function menuhide() {
  menucheck = setInterval(function () {
    if ($(".nav-menu").hasClass("aos-animate")) {
      $(".nav-menu").removeClass("aos-animate");
    }
  }, 50);
  //document.getElementById("menu").style.display = "none";
  $(".nav-menu").removeClass("aos-animate");
  $(".nav-menu").css("pointer-events", "none");
  document.getElementById("line-block").style.display = "none";
  document.getElementById("menuhide").style.display = "none";
  document.getElementById("menushow").style.display = "block";
  //document.getElementById("content").style.display = "block";
}
var aboutblock = $(".about-block");
if (aboutblock.length) {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: 5000,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 4,
      },
      400: {
        slidesPerView: 3,
      },
    },
  });
}
var logoblock = $(".logo-block");
console.log(logoblock.length);
if (logoblock.length) {
  setTimeout(function () {
    new Vivus("logo-canvas", {
      type: "oneByOne",
      start: "autostart",
      duration: 200,
    });
  }, 300);
}
var careerBlock = $(".career-block");
if (careerBlock.length) {
  var swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    paginationClickable: true,
    spaceBetween: 0,
    freeMode: false,
    freeModeSticky: true,
    simulateTouch: true,
    touchRatio: 0.2,
    mousewheelControl: {
      invert: true,
    },
    autoHeight: true,
    speed: 800,
    initialSlide: 0,
    slidesPerView: 1,
  });
}
