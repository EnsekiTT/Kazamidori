window.addEventListener("deviceorientation", function(e) {
        document.getElementById('orientation').textContent = [e.alpha | 0, e.beta | 0, e.gamma | 0];
});

window.addEventListener('devicemotion', function(e) {
		var acc = e.acceleration;
		document.getElementById('motion').textContent = [acc.x.toFixed(3), acc.y.toFixed(3), acc.y.toFixed(3)];
});


if(window.DeviceOrientationEvent){
  window.addEventListener('deviceorientation', function(event){
    var compassHeading;
    if(event.webkitCompassHeading){
      compassHeading = event.webkitCompassHeading;
      compassAccuracy = event.webkitCompassAccuracy;
    }
    else{
      compassHeading = event.alpha;
      compassAccuracy = event.absolute;
    }
    document.getElementById('heading').innerHTML = compassHeading;
    document.getElementById('headingAccuracy').innerHTML = compassAccuracy;
    rotateArrow(targetHeading, compassHeading);
    setLength(targetLength);
  });
}
