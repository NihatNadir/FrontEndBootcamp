const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2012/09/noodles-1010-150x150.jpg.webp",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];


const korea = menu.filter( k => {
    if(k.category === "Korea"){
        return k;
    }   
});
console.log("korea",korea);

const japan = menu.filter( j => {
    if(j.category === "Japan"){
        return j;
    }
})
console.log("japan",japan);
const china = menu.filter( c => {
    if(c.category === "China"){
        return c;
    } 
})
console.log("china",china);


// Variables
const menuItem = document.querySelector('.section-center');
const filterButtons = document.querySelector('.btn-container');
const allButton = document.createElement("button");
const koreaButton = document.createElement("button");
const japanButton = document.createElement("button");
const chinaButton = document.createElement("button");


allButton.classList.add("btn-item");
allButton.textContent = "All";

koreaButton.classList.add("btn-item");
koreaButton.textContent = "Korea";


japanButton.classList.add("btn-item");
japanButton.textContent = "Japan";


chinaButton.classList.add("btn-item");
chinaButton.textContent = "China";

filterButtons.appendChild(allButton);
filterButtons.appendChild(koreaButton);
filterButtons.appendChild(japanButton);
filterButtons.appendChild(chinaButton);

const buttons = document.querySelectorAll('.btn-item');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {        
        button.style.backgroundColor = '#0F0F35';
        button.style.color = 'white';
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'all 0.5s ease';
    });

    button.addEventListener('mouseout', () => {        
        button.style.backgroundColor = '';
        button.style.color = '';
        button.style.transform = 'scale(1)';
    });

    switch(button.textContent){
        case "All":
        button.addEventListener("click",() =>{
            getMenu(menu);
        })
        break;
        case "Korea":
        button.addEventListener("click",() =>{
            getMenu(korea);
        })
        break;
        case "Japan":
        button.addEventListener("click",() =>{
            getMenu(japan);
        })
        break;
        case "China":
        button.addEventListener("click",() =>{
            getMenu(china);
        })
        break;
    }
});

const menuItems = document.querySelector(".section-center");

function getMenu(menu){
    menuItems.innerHTML = "";
    menu.map(x => {
    
        const item = document.createElement("div");
        item.classList.add("menu-items","col-lg-6","col-sm-12");

        const image = document.createElement("img");
        image.src = `${x.img}`;
        image.alt = `${x.title}`;
        image.classList.add("photo");
        item.appendChild(image);

        const divInfo = document.createElement("div");
        divInfo.classList.add("menu-info");

        const divTitle = document.createElement("div");
        divTitle.classList.add("menu-title");

        const h4Title = document.createElement("h4");
        h4Title.textContent = `${x.title}`;

        const h4Price = document.createElement("h4");
        h4Price.classList.add("price");
        h4Price.textContent = `${x.price}`;
        divTitle.appendChild(h4Title);
        divTitle.appendChild(h4Price);

        const divText = document.createElement("div");
        divText.classList.add("menu-text");
        divText.textContent = `${x.desc}`;
        divInfo.appendChild(divTitle);
        divInfo.appendChild(divText);
        item.appendChild(divInfo);
        menuItems.appendChild(item);
    });
}

window.addEventListener("load",getMenu(menu));

