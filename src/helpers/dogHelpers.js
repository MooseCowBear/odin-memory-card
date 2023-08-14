export const fetchDogData = async (setDogData) => {
  console.log("calling fetch dog image");

  const response = await fetch("https://dog.ceo/api/breeds/image/random/12");
  const data = await response.json();
  console.log(data);

  const dogObjects = [];

  for (let i = 0; i < data.message.length; i += 1) {
    dogObjects.push(createDogObject(data.message[i]));
  }
  console.log("dog objects", dogObjects);

  setDogData(dogObjects);
};

const createDogObject = (url) => {
  return { image: url, clicked: false };
};
