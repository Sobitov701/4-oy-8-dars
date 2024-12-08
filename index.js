let user = {};
user.age = 19;
user.name = "Asadbek";
user.location = "Fargona";

console.log(user);

user.address = {
  city: "Yaypan",
  zipCode: "YO`Q",
};

console.log(user);

user.lastname = "Sobitov";

console.log(user);

delete user.address.zipCode;

const user = {
  name: "Toshpo`lat",
  age: 30,
  address: {
    city: "Tashkent",
    street: "Amir Teumr Street",
    zipCode: 100000,
  },
  contact: {
    emile: "ulugbek@exaple.com",
    phone: {
      home: 123 - 4567,
      work: 7654 - 321,
    },
  },
};

let {
  contact: {
    phone: { home, work },
  },
} = user;

console.log(home);
console.log(work);

// .?  optional chainning nima uchun kerakligi haqida 3 ta sabab yozing

//1. yozgan kodimzda hato bormi yoki yoqmi shuni tekshirib beradi
//2. .? optional chainning yozsak ham js ga ogirligi tushmaydi
//3. uzun va murakkab obyekda ishlash oson boladi

//MENI TUSHINGANLARIM SHU
