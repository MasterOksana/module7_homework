// Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.


class proverka
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  plugIn()
  {
    console.log(this.name + " включено");
    this.isPlugged = true;
  }
  
  getPowerUsed()
  {
    return this.isPlugged ? this.power : 0;
  }
}

const lampa = new proverka('lampa', 4);
const tv = new proverka('tv', 547);

console.log(lampa.getPowerUsed() + tv.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed());

tv.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed());