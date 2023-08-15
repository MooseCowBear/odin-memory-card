import { shuffle } from "./gameBoardHelpers";

function createDogObject(url) {
  return { image: url, clicked: false };
}

async function fetchDogData(setDogData) {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/12");
    const data = await response.json();

    const dogObjects = [];

    for (let i = 0; i < data.message.length; i += 1) {
      dogObjects.push(createDogObject(data.message[i]));
    }

    setDogData(dogObjects);
  } catch {
    console.log("Dog fetch failed.");
    setDogData([]); // in case the failure happened on round other than one
  }
}

function getHardModeData(setDogData) {
  console.log("calling get hardmode dogs");
  const dogObjects = [];

  for (let i = 1; i <= 12; i++) {
    dogObjects.push(createDogObject(`src/assets/sleeping_${i}.jpeg`));
  }
  shuffle(dogObjects);
  setDogData(dogObjects);
}

export function getSomeDogs(hardMode, setDogData) {
  if (hardMode) {
    getHardModeData(setDogData);
  } else {
    fetchDogData(setDogData);
  }
}
