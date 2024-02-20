// Hàm tạo id ngẫu nhiên
function generateRandomId() {
  return Math.random().toString(36).substring(2);
}

// Hàm tạo dữ liệu string ngẫu nhiên
function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  const length = 5;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function createRandomObjectsArray(numObjects: number) {
  const objectsArray = [];
  for (let i = 0; i < numObjects; i++) {
    const randomObject = {
      id: generateRandomId(),
      name: generateRandomString(),
    };
    objectsArray.push(randomObject);
  }
  return objectsArray;
}

const numberOfObjects = 100;
const randomObjectsArray = createRandomObjectsArray(numberOfObjects);

export default randomObjectsArray;
