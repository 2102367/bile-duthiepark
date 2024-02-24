const successCallback = (position) => {
    console.log(position);

}


navigator.geolocation.getCurrentPosition(successCallback);

const whereYouAtGirl = navigator.geolocation.watchPosition(successCallback)
