// enum
const LetterState = {
    MISS: "MISS",
    PRESENT: "PRESENT",
    MATCH: "MATCH"
};


/*
    params
    - guess      str | word guess
    - answer     str | correct word to be guessed

    returns
    - result      [] | array of LetterState values corresponding to each letter in the correct word
*/
function validate(guess, answer) {
    const guessLetters = guess.split("");
    const answerLetters = answer.split("");

    const result = [];

    guessLetters.forEach((letter, index) => {
        if (letter != answerLetters[index] && answerLetters.includes(letter))
            result.push(LetterState.PRESENT);
        else if (letter == answerLetters[index])
            result.push(LetterState.MATCH);
        else
            result.push(LetterState.MISS);
    });
}