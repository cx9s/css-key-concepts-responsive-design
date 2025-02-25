const cats = [
  {
    name: "Little Miss Purrfect",
    species: "Cat",
    favFoods: ["wet food", "dry food"],
    birthYear: 2016,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
  },
  {
    name: "Mr Gwumpy",
    species: "Cat",
    favFoods: ["caviar"],
    birthYear: 2016,
    photo:
      "https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg",
  },
  {
    name: "Dopey",
    species: "Cat",
    favFoods: ["bugs"],
    birthYear: 2018,
    photo:
      "https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1",
  },
  {
    name: "Jumpy",
    species: "Scaredy Cat",
    favFoods: ["not cucumbers!"],
    birthYear: 2008,
    photo: "https://i.ytimg.com/vi/eX2qFMC8cFo/maxresdefault.jpg",
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
  },
  {
    name: "Cindy Clawford",
    species: "Cat",
    favFoods: ["mice"],
    birthYear: 2012,
    photo:
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  },
  {
    name: "Katy Purry",
    species: "Cat",
    favFoods: ["cigarettes", "coffee"],
    birthYear: 2015,
    photo:
      "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1183822926.jpg",
  },
  {
    name: "Dr. Von Belly-Rub",
    species: "Cat",
    favFoods: ["salt"],
    birthYear: 2020,
    photo:
      "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    name: "Blobby",
    species: "Bird?",
    favFoods: ["your soul"],
    birthYear: 2020,
    photo:
      "https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-cat-photos-funny-cover.jpg",
  },
  {
    name: "El Taco",
    species: "Cat",
    favFoods: ["tequila", "bar snax"],
    birthYear: 1995,
    photo: "https://i.imgflip.com/mh1vd.jpg",
  },
  {
    name: "Nibbles",
    species: "Hungry Cat",
    favFoods: ["blankets", "feet", "tinsel"],
    birthYear: 2003,
    photo:
      "https://i.pinimg.com/736x/1b/ef/b5/1befb5723f54627768e1d77642ca4d45.jpg",
  },
  {
    name: "BoopySnoot",
    species: "Tiny Cat",
    favFoods: ["milk"],
    birthYear: 2021,
    photo: "https://i.ytimg.com/vi/ZKBlMWI6nO4/maxresdefault.jpg",
  },
  {
    name: "Tiger",
    species: "Fearsome Cat",
    favFoods: ["anything that moves", "anything else"],
    birthYear: 2020,
    photo:
      "https://static.onecms.io/wp-content/uploads/sites/47/2021/04/13/kitten-pounce-158906394-2000.jpg",
  },
  {
    name: "Smushi",
    species: "Sushi Cat",
    favFoods: ["ramen"],
    birthYear: 2000,
    photo:
      "https://www.mythirtyspot.com/wp-content/uploads/2014/09/Screen-Shot-2014-09-18-at-10.19.29-PM-1024x712.png",
  },
  {
    name: "Doughnut",
    species: "Party Cat",
    favFoods: ["mushrooms"],
    birthYear: 2014,
    photo:
      "https://rlv.zcache.co.uk/doughnut_cat_pet_cat_kitten_cat_cute_cats_postcard-rdef91d9c144140c5b6ac0b9516085db9_ucbjp_540.jpg",
  },
  {
    name: "Blep",
    species: "Cat",
    favFoods: ["baked bean juice"],
    birthYear: 2016,
    photo:
      "https://metro.co.uk/wp-content/uploads/2020/05/PRI_150473631-e1588316954238.jpg?quality=90&strip=all",
  },
];

(function () {
  const petNames = document.getElementsByClassName("cat-name");
  const petImage = document.getElementsByClassName("pet-pic");
  const favFoods = document.getElementsByClassName("fav-foods");
  const birthYear = document.getElementsByClassName("birth-year");
  const species = document.getElementsByClassName("species");

  for (let i = 0; i < cats.length; i++) {
    petNames[i].innerText = cats[i].name;
    petImage[i].src = cats[i].photo;
    favFoods[i].innerText = `Favourite foods: ${cats[i].favFoods
      .map((food) => food)
      .join(", ")}`;
    birthYear[i].innerText = `Birth Year: ${cats[i].birthYear}`;
    species[i].innerText = `Species: ${cats[i].species}`;
  }
})();

// nav
function myFunction() {
  const nav = document.querySelector("nav");
  const icon = document.querySelector(".icon");
  if (nav.className === "") {
    nav.className = " responsive";
    icon.innerHTML = "-";
  } else {
    nav.className = "";
    icon.innerHTML = "+";
  }
}
