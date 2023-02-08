var firefly1 = bodymovin.loadAnimation({
  container: document.getElementById('firefly1'), // Required
  path: 'assets/firefly.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "Firefly", // Name for future reference. Optional.
})
var firefly2 = bodymovin.loadAnimation({
  container: document.getElementById('firefly2'), // Required
  path: 'assets/firefly.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "Firefly", // Name for future reference. Optional.
})
var firefly3 = bodymovin.loadAnimation({
  container: document.getElementById('firefly3'), // Required
  path: 'assets/firefly.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "Firefly", // Name for future reference. Optional.
})
var firefly4 = bodymovin.loadAnimation({
  container: document.getElementById('firefly4'), // Required
  path: 'assets/firefly.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "Firefly", // Name for future reference. Optional.
})
var firefly5 = bodymovin.loadAnimation({
  container: document.getElementById('firefly5'), // Required
  path: 'assets/firefly.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "Firefly", // Name for future reference. Optional.
})
var firefly6 = bodymovin.loadAnimation({
  container: document.getElementById('firefly6'), // Required
  path: 'assets/firefly.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "Firefly", // Name for future reference. Optional.
})

let learnathonButton = document.getElementById("learnathon-button");
let hackathonButton = document.getElementById("hackathon-button");

let learnathonSchedule = document.getElementById("learnathon-schedule");
let hackathonSchedule = document.getElementById("hackathon-schedule");
hackathonSchedule.style.display = "none";

learnathonButton.onclick = function() {
    learnathonSchedule.style.display = "grid";
    hackathonSchedule.style.display = "none";
    learnathonButton.classList.add("active");
    hackathonButton.classList.remove("active");
}

hackathonButton.onclick = function() {
    learnathonSchedule.style.display = "none";
    hackathonSchedule.style.display = "grid";
    learnathonButton.classList.remove("active");
    hackathonButton.classList.add("active");
}


canvas = document.getElementById('pond-canvas');

function ripple(e){
    var element = e.target;
    var i = 0; 
    // confine element to just the title slide
    if(element.id == 'overlay' || element.id == 'ripple' || element.id == 'title')  {
      // generate 2 circle-y bois
      for(; i<2; i++) {
          setTimeout(
            function() {
              var d=document.createElement("ripple");
              d.setAttribute("id", "ripple")
              d.className="ripple";
              d.style.top=e.clientY+"px";
              d.style.left=e.clientX+"px";
              document.body.appendChild(d);
              d.addEventListener('animationend', function(){d.parentElement.removeChild(d);}.bind(this));
            }, i*240);
        }
      }
  }
  
  var fishies;
  
  // Utility functions
  function randomFloat(a, b){
    var r = (Math.random() * (b - a) + a);
    return r;
  }
  
  function distance2D(a, b){
    return Math.sqrt((a[0] - b[0])*(a[0] - b[0]) + (a[1] - b[1])*(a[1] - b[1]));	
  }
  
  
  function vectorMagnitude2D(vect){
    return Math.sqrt(vect[0]*vect[0] + vect[1]*vect[1]);
  }
  
  function normalizeVector2D(vect){
    var mag = vectorMagnitude2D(vect);
    return [vect[0]/mag, vect[1]/mag];
  }
  
  function addSameLengthArrays(l1, l2){
    if(l1.length != l2.length){
      return undefined;
    }
  
    for(var i = 0; i < l1.length; i++){
      l1[i] += l2[i];
    }
  
    return l1;
  }
  
  // Fishie classes
  class FishieGroup {
  constructor(size) {
    this.list = [];
    this.minDist = .02;
    this.peerPressure = 30;

    this.init = function (size) {
      for (var i = 0; i < size; i++) {
        if(i>size/3) 
          this.list.push(new Fishie(randomFloat(0, canvas.width), randomFloat(0, canvas.height)));
        else
        this.list.push(new Tadpole(randomFloat(0, canvas.width), randomFloat(0, canvas.height)));
      }
    };
    this.init(size);

    // Calculate new velocities for all the fishies
    this.update = function () {
      // Rule 1: move away from the center of the flock
      // Calculate the center of the flock
      var center = [0, 0];
      for (var i = 0; i < this.list.length; i++) {
        center = addSameLengthArrays(center, this.list[i].position);
      }
      center[0] = center[0] / this.list.length;
      center[1] = center[1] / this.list.length;

      for (var i = 0; i < this.list.length; i++) {
        var centeredVelocity = [this.list[i].position[0] - center[0], this.list[i].position[1] - center[1]];

        // Rule 2: 
        // Don't get too close to your friends
        var avoidanceVelocity = [0, 0];

        // Rule 3:
        // Submit to peer pressure
        var nearByInfluence = [0, 0];
        var n = 0;

        for (var j = 0; j < this.list.length; j++) {
          if (i != j) {
            var dist = distance2D(this.list[i].position, this.list[j].position);
            if (dist < this.minDist) {
              avoidanceVelocity[0] += this.list[i].position[0] - this.list[j].position[0];
              avoidanceVelocity[1] += this.list[i].position[1] - this.list[j].position[1];
            }

            if (dist < this.peerPressure) {
              nearByInfluence = addSameLengthArrays(nearByInfluence, this.list[j].velocity);
              n++;
            }
          }
        }

        // Divide influence over number of neighbors
        if (n > 0) {
          nearByInfluence[0] = nearByInfluence[0] / n;
          nearByInfluence[1] = nearByInfluence[1] / n;
        }

        // Rule 4:
        // Move towards focus point
        var focusVelocity = [0, 0];
        var focusCenter = [canvas.width * .5, canvas.height * .5];
        focusVelocity[0] += this.list[i].position[0] - focusCenter[0];
        focusVelocity[1] += this.list[i].position[1] - focusCenter[1];

        // Rule 5: 
        //Move in a circle
        var circularVeloctiy = [0,0];
        if(this.list[i].position[0] < canvas.width * .4) {
          if(this.list[i].position[1] < canvas.height * .4) {
            circularVeloctiy[0] -= 1;
            circularVeloctiy[1] += .6;
          }
          else if(this.list[i].position[1] > canvas.height * .4) {
              circularVeloctiy[0] += 1;
              circularVeloctiy[1] += .6;
          }
        }
        else if(this.list[i].position[0] > canvas.width * .4) {
          if(this.list[i].position[1] < canvas.height * .4) {
              circularVeloctiy[0] -= 1;
              circularVeloctiy[1] -= .6;
          }
          else if(this.list[i].position[1] > canvas.height * .4) {
            circularVeloctiy[0] += 1;
            circularVeloctiy[1] -= .6;
          }
        }

        // Combine velocities
        this.list[i].velocity[0] += centeredVelocity[0] / 200000 + avoidanceVelocity[0] * 10 + nearByInfluence[0] / 2 - focusVelocity[0] / 75000;
        this.list[i].velocity[1] += centeredVelocity[1] / 200000 + avoidanceVelocity[1] * 10 + nearByInfluence[1] / 2 - focusVelocity[1] / 75000;
        
        // In case you want them to move in a circle
        this.list[i].velocity[0] += circularVeloctiy[0]/4000;
        this.list[i].velocity[1] += circularVeloctiy[1]/4000;
        
        // Limit max speed
        if (vectorMagnitude2D(this.list[i].velocity) > this.list[i].maxSpeed) {
          this.list[i].velocity[0] = this.list[i].velocity[0] * this.list[i].speedKiller;
          this.list[i].velocity[1] = this.list[i].velocity[1] * this.list[i].speedKiller;
        }

        // Update position and image position
        this.list[i].position = addSameLengthArrays(this.list[i].position, this.list[i].velocity);
        this.list[i].obj.position = new paper.Point(this.list[i].position[0], this.list[i].position[1]);
        this.list[i].obj.rotation = Math.atan2(this.list[i].velocity[1], this.list[i].velocity[0]) * 57.2958;
        // If the fishie is too far out of bounds, teleport it to the other side and slow em down
        if (this.list[i].position[0] < -5) {
          this.list[i].position[0] = canvas.width + 5;
          this.list[i].velocity[0] * .6;
        } else if (this.list[i].position[0] > canvas.width + 5) {
          this.list[i].position[0] = -5;
          this.list[i].velocity[0] * .6;
        }

        if (this.list[i].position[1] < -5) {
          this.list[i].position[1] = canvas.height + 5;
          this.list[i].velocity[1] * .6;
        } else if (this.list[i].position[1] > canvas.height + 5) {
          this.list[i].position[1] = -5;
          this.list[i].velocity[1] * .6;
        }
      }
    };
  }
}
  
  class Tadpole {
  constructor(x, y) {
    this.position = [x, y];
    this.velocity = normalizeVector2D([Math.random() * 2 - 1, Math.random() * 2 - 1]);

    this.obj = new paper.Path();
    this.obj.strokeColor = "black";
    this.obj.fillColor = "black";

    this.obj.add(new paper.Point(0,0));
    this.obj.add(new paper.Point(16,2));
    this.obj.arcTo(new paper.Point(18,0), new paper.Point(16,-2));
    this.obj.add(new paper.Point(0,0));

    // To make the fish smaller on mobile
    var scalar = canvas.width/1536;

    this.obj.scale((Math.random() + 1)*scalar, (Math.random() + .15)*scalar);
    this.obj.position = new paper.Point(this.position[0], this.position[1]);
    this.obj.applyMatrix = false;

    this.maxSpeed = (Math.random() + .1) * 2;
    this.speedKiller = .5;
  }
} 

class Fishie {
  constructor(x, y) {
    this.position = [x, y];
    this.velocity = normalizeVector2D([Math.random() * 2 - 1, Math.random() * 2 - 1]);

    this.obj = new paper.Path();
    this.obj.strokeColor = "black";
    this.obj.fillColor = "black";

    this.obj.add(new paper.Point(0, 4));
    this.obj.add(new paper.Point(0, -4));
    this.obj.add(new paper.Point(3, .5));
    this.obj.arcTo(new paper.Point(9.5,4), new paper.Point(16,0));
    this.obj.arcTo(new paper.Point(9.5,-4), new paper.Point(3,-.5));
    this.obj.add(new paper.Point(0, 5));


    // To make the fish smaller on mobile
    var scalar = canvas.width/1536;

    this.obj.scale((Math.random() + 1.75)*scalar, (Math.random() + .25)*scalar);
    this.obj.position = new paper.Point(this.position[0], this.position[1]);
    this.obj.applyMatrix = false;

    this.maxSpeed = (Math.random() + .1) * 2;
    this.speedKiller = .5;
  }
} 

  function render(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    fishies.update();
    paper.view.draw();
    requestAnimationFrame(render);
  }
  
  // Start on load
  window.onload = function(){
    firefly2.setDirection(2);
    firefly4.setDirection(2);
    // firefly6.setDirection(2);
    canvas = document.getElementById('pond-canvas');
    paper.setup(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var numFishies = Math.round(canvas.width*canvas.height/20000);
    fishies = new FishieGroup(numFishies);
    render();
    firefly1.play();
    setTimeout(function(){ firefly2.play();}, 300);
    setTimeout(function(){ firefly3.play();}, 600);
    setTimeout(function(){ firefly4.play();}, 900);
    setTimeout(function(){ firefly5.play();}, 1200);
    setTimeout(function(){ firefly6.play();}, 1500);
  }
  
  // Add/Remove fishies proportionately
  window.onresize = function(){
    paper.project.clear();
    paper.setup(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var numFishies = Math.round(canvas.width*canvas.height/20000);
    fishies = new FishieGroup(numFishies);
  }
  
  document.addEventListener('click',ripple);