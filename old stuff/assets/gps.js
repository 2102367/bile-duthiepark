const successCallback = (position) => {
    console.log(position);

    // if(position.coords.latitude > 57.118715){
    //     console.log("pee")
    //     document.getElementById("testMebb").innerHTML = "Hey there";
    // } else if (position.coords.latitude < 57.118715){
    //     console.log("poo")
    //     document.getElementById("testMebb").innerHTML ="is it";

    // }

    const nicePlace = position.coords.latitude;
    console.log(nicePlace);

    if (nicePlace > 57.1170 && nicePlace < 57.1171) {
        document.getElementById("testMebb").innerHTML = "East Lodge";
    } else if (nicePlace > 57.1171 && nicePlace < 57.1172) {
        document.getElementById("testMebb").innerHTML = "Playground SteamRoller";
        console.log("hey");
    } else if (nicePlace > 57.1172 && nicePlace < 57.1173) {
        document.getElementById("testMebb").innerHTML = "East Lodge";
    }

    // switch(nicePlace){
    //     case 0:
    //         nicePlace > 57.1170 && nicePlace < 57.1171;
    //         document.getElementById("testMebb").innerHTML = "East Lodge";
    //         break;
    //     case 1:
    //         nicePlace > 57.1171 && nicePlace < 57.1172;
    //         document.getElementById("testMebb").innerHTML = "Playground SteamRoller";
    //         console.log("hey")
    //         break;
    //     case 2:
    //         nicePlace > 57.1172 && nicePlace < 57.1173;
    //         document.getElementById("testMebb").innerHTML = "East Lodge";
    //         break;
    // }
}

const errorCallback = (error) =>{
    console.log(error)
}

//snavigator.geolocation.getCurrentPosition(successCallback);

const whereYouAtGirl = navigator.geolocation.watchPosition(successCallback, errorCallback);

//async.wait(10000);

//navigator.geolocation.clearWatch(whereYouAtGirl);

