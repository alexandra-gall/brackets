module.exports = function check(str, bracketsConfig) {
    let brackets = '' ;
    let i= 0;

    while (i < bracketsConfig.length) {
        brackets = bracketsConfig[i].join('');

        if (str.includes(brackets)) {
            str = str.replace(brackets,'');
            i = 0;
        } else {
            i += 1;
        }
    }

    return str.length === 0;
}
