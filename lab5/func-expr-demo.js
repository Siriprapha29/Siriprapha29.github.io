function check_uppercase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}
chk_uppercase(kku);
chk_uppercase(kku);

let chk_uppercase = function check_uppercase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}
chk_uppercase(Kku);
chk_uppercase(kku);