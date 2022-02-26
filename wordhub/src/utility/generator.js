import dictionary from "./dictionary.json";

export default function getRandomWord() {
    const index = Math.floor(Math.random() * dictionary.length);
    return dictionary[index];
}