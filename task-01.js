"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

// добавляет поле mood со значением 'happy'
user.mood = "happy";

console.table(user);

// заменяет значение hobby на 'skydiving'
user.hobby = "skydiving";

console.table(user);

// заменяет значение premium на false
user.premium = false;

console.table(user);

// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

for (const key of Object.keys(user)) {

  console.log(`ключ: `, user[key]);
}
