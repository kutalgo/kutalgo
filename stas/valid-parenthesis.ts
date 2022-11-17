const prn = console.log;

const badTestCases = [
    '{{',
    '{(})'
];

const goodTestCases = [
    '()',
    // '[[{}()]]'
];

function isValid(s: string): boolean {

    let stack: (string | number)[] = [];
    const paires: Record<string, string> = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let i = 0; i < s.length; i++) {

        prn(i, stack);

        if (['(', '[', '{'].includes(s[i])) { // opening?

            if (stack.length > 1 && ('number' === typeof (stack[stack.length - 1])) && (s[i] === stack[stack.length - 2])) {
                stack[stack.length - 1] = <number>stack[stack.length - 1] + 1;
            } else if ((stack.length === 0) || (stack[stack.length - 1] !== s[i])) {
                stack.push(s[i]);
            } else { // if (stack[stack.length-1] === s[i])
                stack.push(2);
            }

        } else { // closing
            if (stack.length < 1) {
                return false;
            }
            if ('number' === typeof (stack[stack.length - 1])) {
                if (stack[stack.length - 2] !== paires[s[i]]) {
                    return false;
                }
                if (stack[stack.length - 1] === 1) {
                    stack.pop();
                    stack.pop();
                } else {
                    stack[stack.length - 1] = <number>stack[stack.length - 1] - 1;
                }
            } else if (s[i] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}


// prn("BAD: ")
// for (const tc of badTestCases) {
//     prn(tc, isValid(tc));
// }

prn("GOOD: ")
for (const tc of goodTestCases) {
    prn(tc, isValid(tc));
}



