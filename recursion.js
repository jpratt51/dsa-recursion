/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
    if (i === nums.length) return 1;

    return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, word = "", i = 0) {
    if (words.length === i) return word.length;

    if (words[i].length > word.length) word = words[i];

    return longest(words, word, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, modStr = "", i = 0) {
    if (str.length < i) return modStr;

    if (str.charAt(i) !== "") modStr += str.charAt(i);

    return everyOther(str, modStr, (i = i + 2));
}

everyOther("tacocat");

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, firstPart = "", secondPart = "", i = 0) {
    console.log(firstPart, secondPart);
    if (str.length === i) {
        return firstPart === secondPart ? true : false;
    }
    const midIdx = Math.floor(str.length / 2);
    if (str.length % 2 !== 0) {
        if (i <= midIdx) {
            firstPart += str.charAt(i);
        }
        if (i >= midIdx) {
            let character = str.charAt(i);
            secondPart = character += secondPart;
        }
    } else {
        if (i < midIdx) {
            firstPart += str.charAt(i);
        }
        if (i >= midIdx) {
            let character = str.charAt(i);
            secondPart = character += secondPart;
        }
    }

    return isPalindrome(str, firstPart, secondPart, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = -1, i = 0) {
    if (arr.length === i) return idx;

    if (arr[i] === val) {
        idx = i;
        return idx;
    }

    return findIndex(arr, val, idx, (i += 1));
}

findIndex([1, 2, 3, 4, 5], 1);

/** revString: return a copy of a string, but in reverse. */

function revString(str, revStr = "", i = 0) {
    if (str.length === i) return revStr;

    if (str.charAt(i) !== "") {
        let character = str.charAt(i);
        revStr = character + revStr;
    }

    return revString(str, revStr, (i += 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
    let valArr = Object.values(obj);
    for (let i of valArr) {
        if (typeof i === "object") {
            gatherStrings(i, arr);
        } else {
            if (typeof i === "string") arr.push(i);
        }
    }
    return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
    if (left > right) {
        return -1;
    }
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === val) {
        return middle;
    }
    if (arr[middle] > val) {
        return binarySearch(arr, val, left, middle - 1);
    }
    return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch,
};
