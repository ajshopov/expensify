const person = {
  age: 20,
  location: {
    city: 'Sydney',
    temperature: 25
  }
};

console.log(`${person.name || 'Anon'} is ${person.age}.`);

// reassign name to firstname, default of anon
const { name: firstname = 'Anon', age } = person;
console.log(`${firstname} is ${age}.`);


if (person.location.city && person.location.temperature) {
  console.log(`It's ${person.location.temperature} in ${person.location.city}.`);
}

const { city, temperature: temp } = person.location;
console.log(`It's ${temp} in ${city}.`);


const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);


const address = ['12 South Street', 'Sydney', 'NSW', '2000'];
console.log(`You are in ${address[1]}, ${address[2]}.`);

const [, town, state = 'Vic'] = address;
console.log(`You are in ${town}, ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName,,medium] = item;
console.log(`A medium Coffee (hot) costs $2.50`);
console.log(`A medium ${itemName} costs ${medium}`);