function checkSpeed(speed){
    const speedlimit = 70
    const points = 5
    const pointsthreshhold = 12
    if (speed <= speedlimit){
        return "okay"
    }else {
        const excessspeed = speed - speedlimit
        const pointss = Math.floor(speed / points)
        if (pointss > pointsthreshhold){
return "LICENSE CANCELLED"

        }else{
            return "points" + points
        }

  
        }
}
const speed =parseInt ("100")// ENTER CARSPEED
checkSpeed(speed)
console.log(checkSpeed(speed))