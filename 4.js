// Задание 4.

// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
//Реализуйте его на прототипах.

//Определите иерархию электроприборов. Включите некоторые в розетку. 
//Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.
 
function proverka(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
}  

proverka.prototype.plugIn = function() {
  console.log(this.name + " включено");
  this.isPlugged = true;
}

proverka.prototype.getPowerUsed = function() {
  return this.isPlugged ? this.power : 0;
}


const lampa = new proverka('lampa', 4);
const tv = new proverka('tv', 547);

console.log(lampa.getPowerUsed() + tv.getPowerUsed());
 
lampa.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed());

tv.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed());
