const container = document.querySelector(".container");
const input = document.querySelector("#input");
const select = document.querySelector("#select");
const btn = document.querySelector(".btn");


let products = [
  {
    productName: "Laptop",
    type: "Technology",
    price: 279.5,
    sold: "90",
    image:
      "https://gv466hf5ah.gjirafa.net/image/1361/1361145.jpg?width=600&height=600",
  },

  {
    productName: "Machine Coffee",
    type: "House Stuff",
    price: 147.05,
    sold: "130",
    image: "https://gv466hf5ah.gjirafa.net/image/1375/1375279.jpg",
  },

  {
    productName: "Electric Bike",
    type: "Sport",
    price: 949.0,
    sold: "40",
    image: "https://gv466hf5ah.gjirafa.net/image/1297/1297138.jpg",
  },

  {
    productName: "Exercise Ball",
    type: "Sport",
    price: 16.93,
    sold: "70",
    image: "https://gv466hf5ah.gjirafa.net/image/1058/1058205.jpg",
  },

  {
    productName: "Celular Samsung Galaxy A23",
    type: "Technology",
    price: 349.5,
    sold: "85",
    image: "https://gv466hf5ah.gjirafa.net/image/1791/1791451.jpg",
  },
  {
    productName: "Bag for laptop",
    type: "Accesories",
    price: 35.5,
    sold: "205",
    image: "https://hhstsyoejx.gjirafa.net/gj50/img/198841/img/0.jpg",
  },
  {
    productName: "HeadPhones",
    type: "Technology",
    price: 449.5,
    sold: "155",
    image: "https://hhstsyoejx.gjirafa.net/gj50/img/196900/img/0.jpg",
  },
  {
    productName: "Jacket Nike for Men",
    type: "Clothes",
    price: 139,
    sold: "115",
    image: "https://gv466hf5ah.gjirafa.net/image/1787/1787196.jpg?width=600&height=600",
  },
  {
    productName: "Perfume Hugo Boss",
    type: "Fregrance",
    price: 59,
    sold: "105",
    image: "https://gv466hf5ah.gjirafa.net/image/1075/1075331.jpg?width=600&height=600",
  },

];



const sort = (e) => {
  const value = e.target.value;
  switch (value) {
    case "mostWanted":
      container.innerHTML = "";
      let sortBySales = products.sort((a, b) => {
        return b.sold - a.sold;
      });
      generate(sortBySales);
      break;
    case "lower":
        container.innerHTML = "";
      let sortByLower = products.sort((a, b) => {
        return a.price - b.price;
      });
      generate(sortByLower);
      break;
    case "upper":
        container.innerHTML = "";
      let sortByHigher = products.sort((a, b) => {
        return b.price - a.price;
      });
      generate(sortByHigher);
      break;
    default:
      container.innerHTML = "Nothing";
      break;
  }

  container.innerHTML += generate();
};

select.addEventListener("change", sort);




const generate = (dataArray) => {
  dataArray.forEach((e) => {
    let html = `
        <div class="card">
           <img src="${e.image}" alt="">
           <h4>${e.productName}</h4>
           <h2>${e.price} $</h2>
           <p>Category: ${e.type}</p>
         </div>`;
    container.insertAdjacentHTML("beforeend", html);
  });
};
generate(products);




function search(e) {
  const filtered = products.filter((element) => {
    const mergeNameTopic =
      `${element.productName} ${element.type}`.toLowerCase();  
    return mergeNameTopic.includes(e.target.value);
  });
  container.innerHTML = "";
  generate(filtered);
}

input.addEventListener("input", search);
