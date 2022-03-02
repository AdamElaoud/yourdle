import five from "./dictionaries/five.json";

export default function getRandomFiveWord() {
    const index = Math.floor(Math.random() * five.length);
    return five[index];
}