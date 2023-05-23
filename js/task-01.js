// Write a script that, for the user object, sequentially:

// adds a field 'mood' with the value 'happy'
// replaces the value of 'hobby' with 'skydiving'
// replaces the value of 'premium' with false
// prints the content of the user object in the format key: value using Object.keys() and for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
    console.log(` ${key} : ${user[key]}`);
  }