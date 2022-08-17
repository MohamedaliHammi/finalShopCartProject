const shop = document.getElementById('product1');


//* automatically add products  all products data are here
let shopItemsData = [
    {
     id: 01,
     name: 'Cartoon Astrounat T-shirt',
     desc : 'adidas',
     price : 78,
     img: "images/imgs/img/products/f1.jpg" 
    },
    {
        id: 02,
        name : 'T-shirt',
        desc : 'skates',
        price : 100,
        img: "images/imgs/img/products/f2.jpg" 

    },
    {
        id: 03,
        name: 'Cartoon Astrounat T-shirt',
        price : 200,
        desc : 'Zara',
        img: "images/imgs/img/products/f3.jpg" 
    },
    {
     id: 04,
     name: 'Cartoon Astrounat T-shirt',
     price : 300,
     desc : 'pull-bear',
     img: "images/imgs/img/products/f4.jpg"    
    },
    {
     id: 05,
     name: 'Cartoon Astrounat T-shirt',
     price : 300,
     desc : 'pull-bear',
     img: "images/imgs/img/products/f5.jpg"    
    },
    {
        id: 05,
        name: 'Cartoon Astrounat T-shirt',
        price : 300,
        desc : 'pull-bear',
        img: "images/imgs/img/products/f6.jpg"    
       },
       {
        id: 05,
        name: 'Cartoon Astrounat T-shirt',
        price : 300,
        desc : 'pull-bear',
        img: "images/imgs/img/products/f7.jpg"    
       },
       {
        id: 05,
        name: 'Cartoon Astrounat T-shirt',
        price : 300,
        desc : 'pull-bear',
        img: "images/imgs/img/products/f8.jpg"    
       },
]

let generateShop = () =>{
    return (shop.innerHTML = shopItemsData.map( (p) =>{
        // object destruction 
      let {id, name, price, desc, img} = p;
    return `
    <div class="proContainer">
    <div class="pro">
        <img src="${img}" alt="firstProduct">
        <div id="desc">
            <span>${desc}</span>
            <h5>${name}</h5>
            <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <div class="price">$${price}</div>
                 <a href="#"><i class="bi bi-bag-plus-fill cart"></i></a>
            </div>
        </div>
    </div>
 </div>`
    }).join(''));
   
};
generateShop();
