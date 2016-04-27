/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 300
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 3,
          "color": "#573C97"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "http://pic.58pic.com/58pic/15/30/52/29s58PIC2gf_1024.jpg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 6,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 15,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#13e8e9",
        "opacity": 0.4,
        "width": 5
      },
      "move": {
        "enable": true,
        "speed": 26,
        "direction": "top-right",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 10,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 20
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": true,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }, function() {
  console.log('particles.js loaded - callback');
});