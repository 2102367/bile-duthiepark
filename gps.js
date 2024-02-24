const successCallback = (position) => {
    console.log(position);

    if(position.coords.latitude > 57.118700){
        console.log("pee")
    } else if (position.coords.latitude < 57.118800){
        console.log("poo")
    }
}

const errorCallback = (error) =>{
    console.log(error)
}

const options = {
    timeout: 1000,
    enableHighAccuracy: true,
}

// navigator.geolocation.getCurrentPosition(successCallback);

const whereYouAtGirl = navigator.geolocation.watchPosition(successCallback, errorCallback, options);

//async.wait(10000);

//navigator.geolocation.clearWatch(whereYouAtGirl);

