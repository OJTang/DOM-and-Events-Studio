// Write your JavaScript code here.
// Remember to pay attention to page loading!
 /*jshint esversion: 6 */
window.addEventListener('load', function(event){
    const takeOff = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const land = document.getElementById('landing');
    const rocket = document.getElementById('rocket');
    const abort = document.getElementById('missionAbort');
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    let numberHeight = Number(shuttleHeight.innerHTML);
    let pixelHeight = Number(rocket.style.bottom.replace('px', ''));
    console.log(pixelHeight);

    takeOff.addEventListener('click', function(event){
        let query = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (query) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = numberHeight += 10000;
        }
    });

    land.addEventListener('click', function(event){
        let message = window.alert('The shuttle is landing. Landing gear engaged.');
         flightStatus.innerHTML = 'The shuttle has landed.';
          shuttleBackground.style.backgroundColor = 'green';
         shuttleHeight.innerHTML = numberHeight = 0;
    });

    abort.addEventListener('click', function(event){
        let abortQuery = window.confirm('Confirm that you want to abort the mission.');
        if (abortQuery) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = numberHeight = 0;
        }
    });

    up.addEventListener('click', function(event){
        shuttleHeight.innerHTML = numberHeight += 10000;
        let newHeight = pixelHeight += 10;
        rocket.style.bottom = newHeight + 'px';
    });

});