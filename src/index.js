module.exports = function toReadable(number) {
    const nums = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let result = "";
    function f1(n) {
        result += nums[n]
            ? nums[n]
            : nums[Math.floor(n / 10) * 10] +
              " " +
              nums[n % (Math.floor(n / 10) * 10)];
    }
    function hundred(n) {
        if (n % 100) {
            result += nums[Math.floor(n / 100)] + " hundred ";
            f1(n - Math.floor(n / 100) * 100);
        } else {
            result += nums[Math.floor(n / 100)] + " hundred";
        }
    }
    if (Math.log10(number) < 2) f1(number);
    if (Math.floor(Math.log10(number)) === 2) hundred(number);

    return result;
};
