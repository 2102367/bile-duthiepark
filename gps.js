const successCallback = (position) => {
    console.log(position);
    console.log("hiptastic " + GeolocationCoordinates.latitude)
}


navigator.geolocation.getCurrentPosition(successCallback);

const whereYouAtGirl = navigator.geolocation.watchPosition(successCallback)
