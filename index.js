// First Problem

// This function will work how to operation multiplication, addition, divided & subtraction a number.

function mindGame(number) {
    if (typeof number !== "number") {
        return "input should be a number!"
    } else {
        let result = (number * 3 + 10) / 2 - 5;
        return result
    }
}

// ‍Second Problem

// This function will work how to see string of length find even or odd.

function evenOdd(string) {
    if (typeof string !== "string") {
        return "input should be a string!"
    }
    else if (string.length % 2 == 0) {
        return "even"
    } else if (string.length % 2 != 0) {
        return "odd"
    }
}

// Third Problem

// This function will show, how to subtract 7 from the number parameter and output the subtraction result, and is greater than 7 how to double that output.

function isLGSeven(number) {
    let lessThanSeven = number - 7;
    if (typeof number !== "number") {
        return "input should be a number!"
    }
    else if (lessThanSeven < 7) {
        return lessThanSeven
    }
    else if (number >= 7) {
        return number * 2
    }
}

// Fourth Problem

// This function will work Find out the length of how many negative numbers are inside a array.

// let numberOfArray = [2, -5, -7, -13]
function findingBadData(arrData) {
    if (Array.isArray(numberOfArray) !== true) {
        return "input should be array!"
    }
    else {
        const badData = [];
        const goodData = [];
        for (let i = 0; i < arrData.length; i++) {
            let element = arrData[i];
            if (element < 0) {
                badData.push(element)
            } else if (arrData[i] >= 0) {
                goodData.push(arrData[i])
            }
        }
        return badData.length
    }
}

// Fifth Problem

// The task of this function is how to multiply another number with the value of the parameter and get the sum of all the products, if the sum is double of 1000 then subtract 2000 from that number 

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {

    if (typeof firstFriendGems !== "number" || typeof secondFriendGems !== "number" || typeof thirdFriendGems !== "number") {
        return "please, provide all valid number.!";
    }
    const firstFriendDiamond = 21 * firstFriendGems;
    const secondFriendDiamond = 32 * secondFriendGems;
    const thirdFriendDiamond = 43 * thirdFriendGems;
    const totalDiamonds = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

    if (totalDiamonds >= 1000) {
        return totalDiamonds - 2000;
    } else {
        return totalDiamonds;
    }
}

