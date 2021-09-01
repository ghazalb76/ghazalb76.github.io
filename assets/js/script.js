/* User experience animations. Dependencies include the jQuery library, Waypoints plugin and Visibility plugin. - Ghazale Bakhtiari Azad */
$(document).ready(function() {
    $('.background').css('height', $(window).height() + 'px');
    fadeInIntro();
    enableResize();
    stickyNav();
    alternateExperiencePositions();
    enableSmoothScroll();
    // circularize();
    // infoOnHover();
    aboutAnimations();
    experiencesAnimations();
    projectsAnimations();
    interestsAnimations();
    contactAnimations();
});

function enableResize() {
    $(window).on('resize', function(event) {
        $('.background').css('height', $(window).height() + 'px');
    });
}

function stickyNav() {
    $('#content').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
}

function enableSmoothScroll() {
    $("a[href^='#']").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
}

function alternateExperiencePositions() {
    $(".experience").each(function(index, el) {
        if (index % 2 != 0) {
            $(this).css('transform', 'rotateY(180deg)');
            $(this).children().css('transform', 'scaleX(-1)');
            $(this).find('.exp-info').css('transform-origin', '25%');
        }
    });
}

allowed = false;

// function infoOnHover() {
//     $('.skill-icon').hover(function() {
//         if (!allowed) {
//             return false;
//         }
//         $('.skill-icon').not(this).css('opacity', '0.6');
//         var infoID = "#info" + this.id.slice(4);
//         $("#info00").css('opacity', 0);
//         $(infoID).css('opacity', 1);
//     }, function() {
//         if (!allowed) {
//             return false;
//         }
//         $('.skill-icon').not(this).css('opacity', '1');
//         var infoID = "#info" + this.id.slice(4);
//         $(infoID).css('opacity', 0);
//         $("#info00").css('opacity', 1);
//     });
// }

function fadeInIntro() {
    $('#overlay').css('display', 'none');
    $('#main-title').css('display', 'none');
    $('#small').css('display', 'none');
    setTimeout(function() {
        $('#overlay').fadeIn(500);
    }, 750);
    setTimeout(function() {
        $('#main-title').fadeIn(500);
        $('#small').fadeIn(2000);
    }, 2000);
    setTimeout(function() {
        $('#bouncing-arrow').show(500);
    }, 3500);
}

function guaranteeFullScreenSections() {
    $('section').each(function(index, el) {
        if ($(this).height() < $(window).height()) {
            $(this).css('height', $(window).height() + 'px');
        }
    });
}

var animatedAbout = false;

function aboutAnimations() {
    $(window).scroll(function(event) {
        if ($('#profile-pic').visible(true) && !animatedAbout) {
            $('#profile-pic').css('transform', 'scale(1)');
            setTimeout(function() {
                $('#about-me').css('visibility', 'visible').hide().fadeIn(1000);
            }, 500);
            animatedAbout = true;
        };
    });
}

var animatedInterests = false;

function interestsAnimations() {
    $(window).scroll(function(event) {
        if ($('#interests-pictures').visible(true) && !animatedInterests) {
            $('#interests-pictures').animate({
                opacity: '1',
                top: '0px'
            }, 750);
            animatedInterests = true;
        }
    });
    $('.interest').hover(function() {
        $(this).find('img').css({
            transform: 'scale(1.1)'
        });
        $(this).find('.interest-name').animate({
            marginTop: '0px',
            opacity: '1'
        }, 200);
        $(this).find('.interest-text').animate({
            top: '0px',
            opacity: '1'
        }, 200);
    }, function() {
        $(this).find('img').animate({
            left: '0px'
        }, 200);
        $(this).find('.interest-name').animate({
            marginTop: '-30px',
            opacity: '0'
        }, 200);
        $(this).find('.interest-text').animate({
            top: '100px',
            opacity: '0'
        }, 200);
        $(this).find('img').css({
            transform: 'scale(1)'
        });
    });
}

var animatedExperienceCard1 = false;
var animatedExperienceCard2 = false;
var animatedExperienceCard3 = false;
var animatedExperienceCard4 = false;

function experiencesAnimations() {
    $(window).scroll(function(event) {
        if ($('#ex1').visible(true) && !animatedExperienceCard1) {
            $('#ex1').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
        if ($('#ex2').visible(true) && !animatedExperienceCard2) {
            $('#ex2').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
        if ($('#ex3').visible(true) && !animatedExperienceCard3) {
            $('#ex3').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
        if ($('#ex4').visible(true) && !animatedExperienceCard4) {
            $('#ex4').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
    });
}



var animatedExperienceCard1 = false;
var animatedExperienceCard2 = false;
var animatedExperienceCard3 = false;
var animatedExperienceCard4 = false;
var animatedExperienceCard5 = false;
var animatedExperienceCard6 = false;
var animatedExperienceCard7 = false;

function projectsAnimations() {
    $(window).scroll(function(event) {
        if ($('#exx1').visible(true) && !animatedExperienceCard1) {
            $('#exx1').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
        if ($('#exx2').visible(true) && !animatedExperienceCard2) {
            $('#exx2').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
        if ($('#exx3').visible(true) && !animatedExperienceCard3) {
            $('#exx3').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
        if ($('#exx4').visible(true) && !animatedExperienceCard4) {
            $('#exx4').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
        if ($('#exx5').visible(true) && !animatedExperienceCard5) {
            $('#exx5').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
        if ($('#exx6').visible(true) && !animatedExperienceCard6) {
            $('#exx6').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
        if ($('#exx7').visible(true) && !animatedExperienceCard7) {
            $('#exx7').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
        if ($('#exx8').visible(true) && !animatedExperienceCard7) {
            $('#exx8').css('animation', 'fade-in-bottom 5s');
            animatedExperienceCard1 = true;
        }
    });
}





var animatedIcons = false;
var animatedText = false;

function contactAnimations() {
    $(window).scroll(function(event) {
        if ($('#social-icons').visible(true) && !animatedIcons) {
            $('.social-icon').css('animation', 'pulse 3s 10');
            animatedIcons = true;
        }
        // if ($('#contact-text').visible(true) && !animatedText) {
        //     $('#contact-text').css('animation', 'fade-in-bottom 1s');
        //     animatedText = true;
        // }
    });
}


var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-4',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-4',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });   
