# script-
  const currentDate = new Date();
const hours = currentDate.getHours();
let greeting;

if (hours < 12) {
  greeting = 'Доброе утро';
} else if (hours < 18) {
  greeting = 'Добрый день';
} else {
  greeting = 'Добрый вечер';
}

const username = prompt('Пожалуйста, введите ваше имя:');
const message = `${greeting}, ${username}! Сегодня ${currentDate.toLocaleDateString()} и время ${currentDate.toLocaleTimeString()}.`;
console.log(message);
