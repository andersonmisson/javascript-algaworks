function dizerOi(nome) {
  console.log(this);
  console.log("Oi, " + nome);
}

dizerOi("Aria");

dizerOi.call(null, "Arya");

dizerOi.apply(null, ["Arya"]);