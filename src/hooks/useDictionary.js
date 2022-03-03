import Dictionary from "../utility/dictionary.json";

export default function useDictionary(numWords, wordLength) {
    const dict = Dictionary[wordLength];
    const words = [];

    for (let i = 0; i < numWords; i++) {
        const index = Math.floor(Math.random() * dict.length);
        words.push(dict[index].toUpperCase());
    }

    return words;
}