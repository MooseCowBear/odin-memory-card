import { shuffle } from "./gameBoardHelpers";

export async function fetchDogData(setDogData) {
  console.log("calling fetch dog image");

  const response = await fetch("https://dog.ceo/api/breeds/image/random/12");
  const data = await response.json();

  const dogObjects = [];

  for (let i = 0; i < data.message.length; i += 1) {
    dogObjects.push(createDogObject(data.message[i]));
  }

  setDogData(dogObjects);
}

function createDogObject(url) {
  return { image: url, clicked: false };
}

export function getHardModeData(setDogData) {
  const dogObjects = [];

  for(let i = 1; i <= 12; i ++) {
    dogObjects(createDogObject(`src/assets/sleeping_${i}.jpeg`))
  }
  shuffle(dogObjects);
  setDogData(dogObjects);
}