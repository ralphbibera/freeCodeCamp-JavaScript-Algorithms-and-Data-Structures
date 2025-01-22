const btn = document.querySelector("#search-button");
btn.addEventListener("click", handleClick);
const input = document.querySelector("#search-input");

async function handleClick() {
  const url =
    "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/" +
    input.value.toLowerCase();
  const response = await fetch(url);

  if (!response.ok) {
    alert("Pokémon not found");
    return;
  }

  const data = await response.json();
  console.log(data);

  const name = document.querySelector("#pokemon-name");
  name.textContent = data["name"];

  const id = document.querySelector("#pokemon-id");
  id.textContent = "#" + data["id"];

  const weight = document.querySelector("#weight");
  weight.textContent = data["weight"];

  const height = document.querySelector("#height");
  height.textContent = data["height"];

  const types = document.querySelector("#types");
  types.innerHTML = "";
  data["types"].forEach((element) => {
    const type = document.createElement("p");
    type.textContent = element["type"]["name"].toUpperCase();
    types.append(type);
  });

  const hp = document.querySelector("#hp");
  hp.textContent = data["stats"][0]["base_stat"];

  const attack = document.querySelector("#attack");
  attack.textContent = data["stats"][1]["base_stat"];

  const defense = document.querySelector("#defense");
  defense.textContent = data["stats"][2]["base_stat"];

  const specialAttack = document.querySelector("#special-attack");
  specialAttack.textContent = data["stats"][3]["base_stat"];

  const specialDefense = document.querySelector("#special-defense");
  specialDefense.textContent = data["stats"][4]["base_stat"];

  const speed = document.querySelector("#speed");
  speed.textContent = data["stats"][5]["base_stat"];

  const body = document.querySelector("body");
  const currentSprite = document.querySelector("#sprite");
  if (currentSprite) {
    body.removeChild(currentSprite);
  }

  const img = document.createElement("img");
  img.src = data["sprites"]["front_default"];
  img.id = "sprite";
  body.append(img);
}
