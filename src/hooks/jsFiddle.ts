export function solution(x: number, b: Array < number > , z: number) {

    let observationSum: number = 0;
    let downloadedSum: number = 0;

    // loops through the 'b' array parameter to determine how much has been downloaded 
    b.forEach((number) => downloadedSum = downloadedSum + number);

    // retrieves the values of the last download observations per unit minute
    let lastObservations: number[] = b.slice(-z);

    // gives a sum of the total amount of download for all observed minutes
    lastObservations.forEach((number: number) => observationSum = observationSum + number);

    // gives a value to the amount of file to be downloaded
    const sizeRemaining: number = x - downloadedSum;


    // returns 0 of the file is finished downloading 
    if (sizeRemaining === 0) {
        return 0
    }

    // gives an average of the observation time
    let averageObservationTime: number = (observationSum / lastObservations.length)

    // returns '-1' if the time of observation cannot be determined
    if (averageObservationTime > 0 === false) {
        return -1
    }

    // assigns a value to the time left to download
    const timeRemaining: number = Math.ceil(sizeRemaining / averageObservationTime)

    // returns the time left to complete the download
    return (`${timeRemaining} minutes left`)

}

console.log(solution(100, [10, 6, 6, 8], 2))
// output should be '10 minutes left'