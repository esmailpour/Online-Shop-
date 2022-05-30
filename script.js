'use strict';
const getData=()=>{
    let loadPage=document.body.id;
    switch(loadPage){
        case 'loginPage':
            showLoginPage();
            break;
        case 'productPage':
            showProductPage();
            break;
        case 'descriptPage':
            showDescriptPage();
            break;
        case 'addProductPage':
            showAddProductPage();
            break;
        default:
            console.log('errorLoadPage');
            break;
    }
}

//.............................LoginPageVariables.............................//
const loginpass = document.getElementById("username-fild");
const loginuser = document.getElementById("password-fild");
const loginbutton = document.getElementById("login-form-submit");
const loginerrormsg = document.getElementById("login-error-msg");
//.............................ptoductPageVariables.............................//
const productsBox=document.getElementById('container');
const addProductBtn=document.getElementsByClassName('btn');
//.............................add Product Page..................................
const shoesName=document.getElementById('name');
const shoesKafi=document.getElementById('kafi');
const shoesBastebndi=document.getElementById('bastebndish');
const shoesimge=document.getElementById('img-product');
const shoesDesc=document.getElementById('desc');
const sendNewProductBtn=document.getElementById('add-product-btn');
const goAddProductBtn=document.getElementById('go-add-product-btn');
const shoesPrice=document.getElementById('shoesPrice');


//.............................Fanction-Login.............................//
const showLoginPage=function(){
    loginbutton.addEventListener("click",(e)=>{
        e.preventDefault();
        if(loginpass.value === "admin" && loginuser.value === "admin"){
            window.location.href='./products.html';
        }else{
            loginerrormsg.style.opacity=1;
        }
    })
    window.localStorage.setItem('previousProducts',JSON.stringify(products));
}
/*.................................Objects............*/
const products=[
    {

        img:'./img/sport1.jpg',
        name:'A21X     کفش کوهنوردی مردانه کد',
        price:'199,000 ',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
    {
       
        img:'./img/2.jpg',
        name:'MAX1 کفش فوتسال مردانه مدل ',
        price:'199,000',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
    {  
        img:'./img/3.jpg',
        name:'کفش روزمره مردانه ال سی وایکیکی مدل 0W0018Z8-BLACK',
        price:'303,000 ',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
    {
        img:'./img/4.jpg',
        name:'A21X  کفش کوهنوردی مردانه کد',
        price:'199,000 ',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
    {
       
        img:'./img/5.jpg',
        name:'A21X  کفش کوهنوردی مردانه کد',
        price:'305,000 ',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
    {
        
        img:'./img/6.jpg',
        name:'A21X  کفش کوهنوردی مردانه کد',
        price:'820,000 ',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
    {
      
        img:'./img/7.jpg',
        name:'A21X  کفش کوهنوردی مردانه کد',
        price:'340,000 ',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
    {
        
        img:'./img/8.jpg',
        name:'A21X  کفش کوهنوردی مردانه کد',
        price:'199,000 ',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
    {
        
        img:'./img/9.jpg',
        name:'A21X  کفش کوهنوردی مردانه کد',
        price:'390,000 ',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
    {
        
        img:'./img/10.jpg',
        name:'A21X  کفش کوهنوردی مردانه کد',
        price:' 280,000 ',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
    {
        
        img:'./img/11.jpg',
        name:'A21X  کفش کوهنوردی مردانه کد',
        price:'930,000 ',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
    {
        
        img:'./img/12.jpg',
        name:'A21X  کفش کوهنوردی مردانه کد',
        price:'تومان 700,000 ',

        kafi:'قابلیت گردش هواو قابلیت ارتجاعی',
        basteBandi:'بندی',
        vijegi:'مقاوم در برابر سایش، قابلیت گردش هوا، کاهش فشارهای وارده',
        size:'40 41 42 43'
    },
];
    const LoadStorage=JSON.parse(window.localStorage.getItem('previousProducts'))
/*.................................Fanction-product-page............*/
const showProductPage=function(){
    const productScroll=( products)=>{
        products.map((p)=>{
            const showBox=`
                <div class="product-box">
                    <div class="product-img">
                        <a class="img-link">
                            <img src="${p.img}" alt="${p.name}" >
                        </a>
                    </div>
                    <div class="product-text">
                        <p class="product-name">   ${p.name}</p>
                         <span class="product-price"> تومان${p.price}</span>
                    </div>
                    <input type="submit" value="افزودن به سبد خرید" class="product-submit" >
                </div>
            `;
            productsBox.insertAdjacentHTML('beforeend',showBox)
    
        });
    }
    productScroll(LoadStorage);
    //..............................................add product..........
    const addProduct=()=>{
        goAddProductBtn.addEventListener('click',function(){
            window.location.href='./addProducts.html';
        });
    };
    addProduct();

    //.........................show Products Details....................................
    let children=[].slice.call(document.getElementsByClassName('product-box'));
    children.forEach((child,i)=>{
        child.addEventListener('click',function(){
            console.log(child);
            console.log(i);
            window.location.href=`./descriptProduct.html?id=${i}`;
        });
    });
}



const showDescriptPage=function(){
    const url=new URLSearchParams(window.location.search);
    const NewId=url.get('id');
    const result=JSON.parse(window.localStorage.getItem('previousProducts'));
    console.log(result);
    console.log(NewId);
    const LoadStorage=result.find((p,id)=>id==NewId);
    const productContainer=document.getElementById('container-product');
    const showAddProductDetails=(LoadStorage)=>{
        const productDatailes=`
        <div class="imge-product">
                       <img src=${LoadStorage.img} alt=${LoadStorage.img}>
                   </div>
                   <div class="descript-product-box">
                       <div class="shoes-name">
                            <h2>${LoadStorage.name} </h2>
                       </div>
                       <div class="size">
                           <span><strong>سایز :</strong></span>
                           <div class="select-style">
                               <select name="list">
                                    <option value="40" >40 </option>
                                    <option value="41" > 41</option> 
                                    <option value="42" >42 </option>
                                    <option value="43" >43 </option>
                                    <option value="44" >44</option>
                                    <option value="45" >45 </option> 
                                </select>
                           </div>
 
                        </div>
                       <div class="vijegiha">
                            <span><strong>ویژگی ها</strong></span>
                       </div>

                       <div class="kaffi">
                           <span><strong>کفی:</strong></span>
                           <span>${LoadStorage.kafi}</span>
                       </div>
                        <div class="bastebandi">
                            <span><strong> بسته بندی:</strong></span>
                            <span>${LoadStorage.basteBandi}</span>
                        </div>
                        <div class="vijegi">
                            <span><strong>ویژگی: </strong></span>
                            <span>${LoadStorage.vijegi}</span>
                        </div>
                        <div class="price">
                        <span><strong> قیمت:</strong></span>
                         <span class="product-price"> تومان${LoadStorage.price}</span>
                    </div>
                    </div>
                    <div class="submit-box">
                        <input type="submit" value="افزودن به سبد خرید" class="products-submit" >
                     </div>`;
                     productContainer.insertAdjacentHTML('afterbegin',productDatailes);
    }
    showAddProductDetails(LoadStorage);
    
}

const showAddProductPage=function(){
    sendNewProductBtn.addEventListener('click',function(){
        if( shoesName.value&&shoesKafi.value&&shoesBastebndi.value&&shoesPrice.value&&shoesimge.value&&shoesDesc.value){
            const productStorage=JSON.parse(window.localStorage.getItem('previousProducts'));
            const imgAddress=`./img/${shoesimge.value.split('\\').slice(-1).join('\\')}`;
            productStorage.push({
                name:shoesName.value,
                kafi:shoesKafi.value,
                basteBandi:shoesBastebndi.value,
                price:shoesPrice.value,
                img:imgAddress,
                vijegi:shoesDesc.value
            })
            window.localStorage.setItem('previousProducts',JSON.stringify(productStorage));
            console.log(JSON.parse(window.localStorage.getItem('previousProducts')));
        }
        console.log(shoesPrice);
    });  
}
getData();