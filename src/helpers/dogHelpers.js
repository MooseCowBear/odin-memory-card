export const fetchDogData = async (setDogData) => {
  console.log("calling fetch dog image");
  // takes the dogDataSetter callback and a bool 
  const response = await fetch('https://dog.ceo/api/breeds/image/random/12');
  const data = await response.json();
  console.log(data);
  setDogData(data.message); // end up with array of urls
}

