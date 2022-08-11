import { vipArr } from "./vip.js";
let elem = document.getElementById("root");
const richArr = [];
class vipPeople {
  constructor(name, worth, image) {
    this.name = name;
    this.worth = worth;
    this.image = image;
  }
  displayVip() {
    let person = document.createElement("div");
    elem.appendChild(person);
    person.id = this.name;
    person.classList = "vip";
    person.innerHTML = `<p>Name: ${this.name}<br>Worth: ${this.worth}<br> <img src="${this.image}" alt="${this.name}"></p>`;

    person.addEventListener("click", () => {
      person.classList = "hidden";
    });
  }
}

for (let i = 0; i < vipArr.length; i++) {
  let vipPerson = new vipPeople(
    vipArr[i].name,
    vipArr[i].worth,
    vipArr[i].image
  );

  richArr.push(vipPerson);
}
richArr.map((rich) => rich.displayVip());
let person = elem.getElementsByClassName("vip");
for (let i = 0; i < richArr.length; i++) {
  person[i].addEventListener("click", () => {
    delete richArr[i];
    console.log(richArr);
  });
}
