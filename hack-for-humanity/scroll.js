      function transformScroll(event) {
        event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
        event.preventDefault();
      }
      var element = document.scrollingElement || document.documentElement;
      element.addEventListener("wheel", transformScroll);

      var handler = function (e) {
        e = e || window.event;
        var k = e.keyCode || e.which;
        if (e == 37 || e == 38 || e == 39 || e == 40) e.preventDefault();
        switch (k) {
          case 38:
          case 37:
            sideScroll("right", 2, 100, 10);
            break;
          case 40:
          case 39:
            sideScroll("left", 2, 100, 10);
            break;
          default:
            return true;
        }
        return false;
      };
      function sideScroll(direction, speed, distance, step) {
        scrollAmount = 0;
        var slideTimer = setInterval(function () {
          if (direction == "left") {
            document.body.scrollLeft += 3;
            document.documentElement.scrollLeft += 3;
          } else {
            document.body.scrollLeft -= 3;
            document.documentElement.scrollLeft -= 3;
          }
          scrollAmount += step;
          if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
          }
        }, speed);
      }
      if (window.attachEvent) window.addEvent("onkeydown", handler, false);
      else window.addEventListener("keydown", handler, false);

