let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}
for (property in statistics){
    if(property[0] == 'r') { //check if property name begins with r
        console.log(statistics[property]);
    } else if (statistics[property] % 2 == 1) { //check if property value is odd
        console.log(statistics[property]);
    }
}