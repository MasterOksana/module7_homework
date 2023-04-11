// Написать функцию, которая принимает в качестве аргументов строку и объект, 
//а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

 
function proverka(obj, proObj) {
    return (proObj in obj);
}

const user = {
    name: "Pavel", 
    login: "Pasha",
    country: "Albania"
  };


  console.log(proverka(user, "country"));   
  console.log(proverka(user, "age"));  
 
