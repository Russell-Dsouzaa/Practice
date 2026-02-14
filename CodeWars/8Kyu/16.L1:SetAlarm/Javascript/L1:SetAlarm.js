const prompt = require('prompt-sync')();

function setAlarm(employed, vacation) {
    if (employed && !vacation) {
        return true;
    }

    return false;
}

function main() {
    let employed = Boolean(prompt(`Enter either a truthy or a falsy value for employed variable/field : `)), vacation = Boolean(prompt(`Enter either a truthy or a falsy value for vacation variable/field : `));

    console.log(setAlarm(employed,vacation));
}

if (require.main === module) {
    main();
}

/*
Learnings :-

    1. if we enter '0' as input to either employed ot vacation variables, it would still be converted to 'true'. This is because 0 input would be stored as string.
    Boolean() class would convert only 0 number into 'false'.
*/