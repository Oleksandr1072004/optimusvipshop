//// Cart
//let cartIcon = document.getElementsByClassName("#cart-icon");
//let cart = document.getElementsByClassName(".cart");
//let closeCart = document.getElementsByClassName("#close-cart");
//
//cartIcon.onclick = () => {
//    cart.classList.add("active");
//};
//closeCart.onclick = () => {
//    cart.classList.remove("active");
//};
//
//if (document.readyState == "loading"){
//    document.addEventListener("DOMContentLoaded", ready);
//} else {
//    ready();
//}
//
//function ready(){
//    var removeCartButtons = document.getElementsByClassName("cart-remove");
//    console.log(removeCartButtons);
//    for (var i = 0; i < removeCartButtons.length; i++){
//        var button = removeCartButtons[i];
//        button.addEventListener("click", removeCartItem);
//    }
//    //
//    var quantityInputs = document.getElementsByClassName("cart-quantity");
//    for (var i = 0; i < quantityInputs.length; i++){
//        var input = quantityInputs[i];
//        input.addEventListener("change",quantityChanged);
//    }
//    //
//    var addCart = document.getElementsByClassName("add-cart");
//    for (var i = 0; i < addCart.length; i++)
//    {
//        var button = addCart[i];
//        button.addEventListener("click",addCartClicked);
//    }
//    //
//    document.getElementsByClassName("btn-buy")[0].addEventListener("click",buyButtonClicked);
//}
//function buyButtonClicked(){
//    alert("Your order is placed");
//    var cartContent = document.getElementsByClassName("cart-content")[0];
//    while (cartContent.hasChildNodes()){
//        cartContent.removeChild(cartContent.firstChild);
//    }
//    updatetotal();
//}
//function removeCartItem(event){
//    var buttonClicked = event.target;
//    buttonClicked.parentElement.remove();
//    updatetotal();
//}
//function quantityChanged(event){
//    var input = event.target;
//    if (isNaN(input.value) || input.value <= 0){
//        input.value = 1;
//    }
//    updatetotal();
//}
//
//function addCartClicked(event){
//    var button = event.target;
//    var shopProducts = button.parentElement;
//    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
//    var price = shopProducts.getElementsByClassName("price")[0].innerText;
//    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
//    addProductToCart(title, price, productImg);
//    updatetotal();
//}
//
//function addProductToCart(title, price, productImg){
//    var cartShopBox = document.createElement("div");
//    cartShopBox.classList.add("cart-box");
//    var cartItems = document.getElementsByClassName("cart-content")[0];
//    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
//    for (var i = 0; i < cartItemsNames.length; i++){
//        if (cartItemsNames[i].innerText == title){
//            alert("You have already add this item to cart!");
//            return;
//        }
//    }
//    var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img"/>
//                            <div class="detail-box">
//                                <div class="cart-product-title">${title}</div>
//                                <div class="cart-price">${price}</div>
//                                <input type="number" value="1" class="cart-quantity">
//                            </div>
//                            <i class="bx bxs-trash-alt cart-remove"></i>`;
//    cartShopBox.innerHTML = cartBoxContent;
//    cartItems.append(cartShopBox);
//    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
//    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
//}
//
//function updatetotal(){
//    var cartContent = document.getElementsByClassName("cart-content")[0];
//    var cartBoxes = cartContent.getElementsByClassName("cart-box");
//    var total = 0;
//    for (var i = 0; i < cartBoxes.length; i++){
//        var cartBox = cartBoxes[i];
//        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
//        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
//        var price = parseFloat(priceElement.innerText.replace("₴",""));
//        var quantity = quantityElement.value;
//        total = total + price * quantity;
//        total = Math.round(total * 100) / 100;
//        document.getElementsByClassName("total-price")[0].innerText = total + " ₴";
//    }
//}

//function displayAutoParts(autopartsArray = autopartsData) {
//          if (autopartsArray.length === 0) {
//            autopartsList.innerHTML = "<p>Немає доступних автозапчастин</p>";
//            return;
//          }
//
//          const noveltySection = document.getElementById("novelty-products");
//          const today = new Date().toLocaleDateString('en-GB');
//
//          autopartsArray.forEach(autoparts => {
//            const autopartsItem = document.createElement("div");
//            autopartsItem.classList.add('product-box');
//            autopartsItem.innerHTML = `
//              <img src="${autoparts.image}" alt="" class="product-img" id="product-img"/>
//              <h2 class="product-title" id="autopart-text">${autoparts.title}</h2>
//              <span class="price" id="autopart-price">${autoparts.price} ₴</span>
//              <p>${autoparts.date_of_public}</p>
//              <p>${currentUser}</p>
//              <i class="bx bx-shopping-bag add-cart" id="add-to-cart"></i>
//            `;
//
//            const addToCartButton = autopartsItem.querySelector(".add-cart");
//            addToCartButton.addEventListener("click", () => {
//              const title = autoparts.title;
//              const price = autoparts.price + " ₴";
//              const productImg = autoparts.image;
//              addProductToCart(title, price, productImg);
//              updatetotal();
//            });
//
//            autopartsList.appendChild(autopartsItem);
//
//            // Check if the auto part is new and add it to the "Новинки" section
//            if (autoparts.date_of_public === today) {
//              const clone = autopartsItem.cloneNode(true);
//              noveltySection.appendChild(clone);
//            }
//          });
//        }
// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};
closeCart.onclick = () => {
    cart.classList.remove("active");
};

//if (document.readyState == "loading"){
//    document.addEventListener("DOMContentLoaded", readyId);
//} else {
//    readyId();
//}
//
//function readyId(){
//    var removeCartButtons = document.getElementsById("cartremove");
//    console.log(removeCartButtons);
//    for (var i = 0; i < removeCartButtons.length; i++){
//        var button = removeCartButtons[i];
//        button.addEventListener("click", removeCartItemId);
//    }
//    //
//    var quantityInputs = document.getElementsById("cartquantity");
//    for (var i = 0; i < quantityInputs.length; i++){
//        var input = quantityInputs[i];
//        input.addEventListener("change",quantityChangedId);
//    }
//    //
//    var addCart = document.getElementsById("add-to-cart");
//    for (var i = 0; i < addCart.length; i++)
//    {
//        var button = addCart[i];
//        button.addEventListener("click",addCartClickedId);
//    }
//    //
//    document.getElementsById("btnbuy")[0].addEventListener("click",buyButtonClickedId);
//}
//function buyButtonClickedId(){
//    alert("Your order is placed");
//    var cartContent = document.getElementsById("cartcontent")[0];
//    while (cartContent.hasChildNodes()){
//        cartContent.removeChild(cartContent.firstChild);
//    }
//    updatetotalId();
//}
//function removeCartItemId(event){
//    var buttonClicked = event.target;
//    buttonClicked.parentElement.remove();
//    updatetotalId();
//}
//function quantityChangedId(event){
//    var input = event.target;
//    if (isNaN(input.value) || input.value <= 0){
//        input.value = 1;
//    }
//    updatetotalId();
//}
//
//function addCartClickedId(event){
//    var button = event.target;
//    var shopProducts = button.parentElement;
//    var title = shopProducts.getElementsById("autopart-text")[0].innerText;
//    var price = shopProducts.getElementsById("autopart-price")[0].innerText;
//    var productImg = shopProducts.getElementsById("product-img")[0].src;
//    addProductToCartId(title, price, productImg);
//    updatetotalId();
//}
//
//function addProductToCartId(title, price, productImg){
//    var cartShopBox = document.createElement("div");
//    cartShopBox.classList.add("cartbox");
//    var cartItems = document.getElementsById("cartcontent")[0];
//    var cartItemsNames = cartItems.getElementsById("cartproducttitle");
//    for (var i = 0; i < cartItemsNames.length; i++){
//        if (cartItemsNames[i].innerText == title){
//            alert("You have already add this item to cart!");
//            return;
//        }
//    }
//    var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img"/>
//                            <div class="detail-box">
//                                <div class="cart-product-title" id="cartproducttitle">${title}</div>
//                                <div class="cart-price" id="cartprice">${price}</div>
//                                <input type="number" value="1" class="cart-quantity" id="cartquantity">
//                            </div>
//                            <i class="bx bxs-trash-alt cart-remove" id="cartremove"></i>`;
//    cartShopBox.innerHTML = cartBoxContent;
//    cartItems.append(cartShopBox);
//    cartShopBox.getElementsById("cartremove")[0].addEventListener("click", removeCartItemId);
//    cartShopBox.getElementsById("cartquantity")[0].addEventListener("change", quantityChangedId);
//}
//
//function updatetotalId(){
//    var cartContent = document.getElementsById("cartcontent")[0];
//    var cartBoxes = cartContent.getElementsById("cartbox");
//    var total = 0;
//    for (var i = 0; i < cartBoxes.length; i++){
//        var cartBox = cartBoxes[i];
//        var priceElement = cartBox.getElementsById("cartprice")[0];
//        var quantityElement = cartBox.getElementsById("cartquantity")[0];
//        var price = parseFloat(priceElement.innerText.replace("₴",""));
//        var quantity = quantityElement.value;
//        total = total + price * quantity;
//        total = Math.round(total * 100) / 100;
//        document.getElementById("totalprice")[0].innerText = total + " ₴";
//    }
//}
        // Auto parts Data
        let autopartsData = [];
        let loggedIn = false;
        let currentUser = null;
        let autopartsIdCounter = 1;

        let allpartsauto = ['бампер','балка','телевізор','рестайлинг ','комп`ютер','волокно','фара','фари','диск','шина','шини','колесо','колеса','спойлер','дзеркало','дзеркала','капот','двері','двигун','гальма','підвіска','закис','турбо','аудіо','міст','кришка','крило','решітка','бачок','дісплей','керування','панель','блок','радіо','приладова','управління','ручник','бардачок','підсилювач','пристрій','вимикач','спідометр','перемикач','магнітола','ламп','контролер','подушка','електродвигун','рейка','плафон','модуль','коробка','фаркоп','муфта','двигун','насос','мотор','редуктор','автомат','значок','ручка','камера','вісь','піввісь','шийка','компресор','генератор','гідропідсилювач','компресор','генератор','підшипник','амортизатор','підігрів','електро','ручник','електроручник','супорт','вал','вентилятор','супорт','торпеда','ресора','важіль','шків','накладка','форсунка','стартер','руль','радіатор','ліхтар'];
        let modelCars = ['авто','автомобіль','фура','автобус','самоскид'];
        let allmodels = ['ABT','AC Schnitzer','Acura','Alfa Romeo','Alpina','Alpine','Apex','Arrinera','Artega','Ascari','Aston Martin','Audi','BAC','BMW','Bentley','Bertone','Borgward','Bugatti','Buick','Cadilac','Carlsson','Chevrolet','Chrysler','Citroen','Covini','Dacia','Daewoo','Devon','Dodge','Donkervoort','EDAG','Edo','Elfin','FPV','Farbio','Ferrari','Fiat','Fisker','Ford','GAC','Geely','Genesis','HSV','Hamann','Hennessey','Holden','Honda','Hummer','Hyundai','Icona','Infiniti','Isuzu','Iveco','Jaguar','Jeep', 'Karma','Kia','Kleemann','LCC','Lamborghini','Lancia','Land Rover','Lexus','mazda','mercedes','mercedes-Benz','mercury','mitsubishi','morgan','Nissan','Opel','Pagani','Peugeot','Porsche','Renault','Rover','Saturn','Skoda','Spada','Spyker','Subaru','Suzuki','Tata','Tesla','Toyota','Volkswagen','Volvo','Zagato','Zenvo'];

        // DOM Elements
        const addProductButton = document.getElementById("addProduct");
        const editProductButton = document.getElementById("editProduct");
        const addAutopartButton = document.getElementById("addAutopartsButton");
        const editAutopartButton = document.getElementById("editAutopartsButton");
        const autopartsForm = document.getElementById("AutopartsForm");
        const autopartsList = document.getElementById("Autoparts-List");
        const todayDate = new Date().toLocaleDateString('en-GB');
        //const ShowOrHideAddEditAutopartsButton = document.getElementById("ShowOrHideAddEditAutoparts");

        const signInButton = document.getElementById("signInButton");
        const registerButton = document.getElementById("registerButton");
        const logoutButton = document.getElementById("logoutButton");
        const loginButton = document.getElementById("loginButton");
        const register_Button = document.getElementById("register_Button");
        const autopartsLink = document.getElementById("autoparts_link");
        const autoLink = document.getElementById("auto_link");

        const searchInput = document.getElementById("search");
        searchInput.addEventListener("input", handleSearch);

        // Event Listeners
        signInButton.addEventListener("click", signIn);
        registerButton.addEventListener("click", register);
        logoutButton.addEventListener("click", logout);
        loginButton.addEventListener("click", showLoginFormEnter);
        register_Button.addEventListener("click", showRegisterForm);
        //ShowOrHideAddEditAutopartsButton.addEventListener("click", showAddEditAutopartsForm);

        addProductButton.addEventListener("click", showAutopartsForm);
        editProductButton.addEventListener("click", showAutopartsFormEdit);
        editAutopartButton.addEventListener("click", editAutoParts);
        addAutopartButton.addEventListener("click", addAutoPart);

        autopartsLink.addEventListener("click", () => displayAutopartsByCategory("Автозапчастини"));
        autoLink.addEventListener("click", () => displayAutopartsByCategory("Авто"));

        // Check login status when the page loads
        checkLogin();

        function addAutoPart() {
          const date_create = new Date().toLocaleDateString('en-GB');
          const autopartsTitle = document.getElementById("autopartTitleInput").value;
          const autopartsPrice = document.getElementById("autopartPriceInput").value;
          const autopartsImage = document.getElementById("autopartImageInput").files[0];

          if (!autopartsTitle || !autopartsPrice || !autopartsImage) {
            alert("Please provide a title, content, and image for the autoparts");
            return;
          }

          const reader = new FileReader();
          reader.onload = () => {
            const imageBase64 = reader.result;
            autopartsIdCounter += 1;
            const newAutopartsItem = {
              id: autopartsIdCounter,
              image: imageBase64,
              title: autopartsTitle,
              price: autopartsPrice,
              date_of_public: date_create,
            };

            autopartsData.push(newAutopartsItem);
            saveAutopartsData();
            clearAutopartsForm();
            displayAutoParts();
          };

          reader.readAsDataURL(autopartsImage);
        }
        function editAutoParts() {
          document.getElementById("addAutopartsButton").style.display = "none";
          // if (!loggedIn) {
          //   alert("Please sign in to edit autoparts.");
          //   return;
          // }
          const autopartsId = parseInt(prompt("Enter the ID of the autoparts you want to edit:"));
          const existingAutopartsItem = autopartsData.find(item => item.id === autopartsId);

          if (!existingAutopartsItem) {
            alert("Autoparts not found");
            return;
          }

          document.getElementById("autopartTitleInput").value = existingAutopartsItem.title;
          document.getElementById("autopartPriceInput").value = existingAutopartsItem.price;
          //document.getElementById("autopartImageInput").files[0] = existingAutopartsItem.image;
          editAutopartButton.removeEventListener("click", editAutoParts);

          function editAutopartsPress(){
              const autopartsTitle = document.getElementById("autopartTitleInput").value;
              const autopartsPrice = document.getElementById("autopartPriceInput").value;
              const autopartsImage = document.getElementById("autopartImageInput").files[0];
              if (!autopartsTitle || !autopartsPrice || !autopartsImage) {
                alert("Please provide a title, content, and image for the autoparts");
                return;
              }
              existingAutopartsItem.title = autopartsTitle;
              existingAutopartsItem.price = autopartsPrice;
              editAutopartButton.removeEventListener("click", editAutopartsPress);
              editAutopartButton.addEventListener("click", editAutoParts);

              saveAutopartsData();
              clearAutopartsForm();
              displayAutoparts();

              document.getElementById("addAutopartsButton").style.display = "block";
            }
          editAutopartButton.addEventListener("click", editAutopartsPress);
        }

        function signIn() {
          const username = document.getElementById("usernameInput").value;
          const password = document.getElementById("passwordInput").value;

          if (localStorage.getItem(username) === password) {
            loggedIn = true;
            currentUser = username;
           saveLogin();
            document.getElementById("autopartsForm").style.display = "none";
            document.getElementById("Autoparts-List").style.display = "grid";
            document.getElementById("novelty-products").style.display = "block";
            document.getElementById("autoparts-products").style.display = "block";
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("logoutButton").style.display = "block";
            document.getElementById("loginButton").style.display = "none";
            document.getElementById("register_Button").style.display = "none";
          } else {
            alert("Invalid username or password");
          }
        }

        function register() {
          const username = document.getElementById("usernameInput").value;
          const password = document.getElementById("passwordInput").value;

          if (localStorage.getItem(username)) {
            alert("Username already exists");
          } else {
            localStorage.setItem(username, password);
            alert("Registration successful. You can now sign in with your new account.");
          }
        }
        function logout() {
          loggedIn = false;
          currentUser = null;
          localStorage.removeItem("loggedIn");
          localStorage.removeItem("currentUser");
          showLoginForm();
        }
        function checkLogin() {
          if (localStorage.getItem("loggedIn")) {
            loggedIn = true;
            currentUser = localStorage.getItem("currentUser");
            document.getElementById("autopartsForm").style.display = "none";
            document.getElementById("novelty-products").style.display = "block";
            document.getElementById("autoparts-products").style.display = "block";
            document.getElementById("Autoparts-List").style.display = "grid";
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("logoutButton").style.display = "block";
            document.getElementById("loginButton").style.display = "none";
            document.getElementById("register_Button").style.display = "none";
          } else {
            showLoginForm();
          }
        }

       function saveLogin() {
         localStorage.setItem("loggedIn", "true");
         localStorage.setItem("currentUser", currentUser);
       }

        function saveAutopartsData() {
          localStorage.setItem("autopartsData", JSON.stringify(autopartsData));
          //autopartsIdCounter = autopartsData.length;
        }

        function loadAutopartsData() {
          const storedAutopartsData = localStorage.getItem("autopartsData");
          if (storedAutopartsData) {
            autopartsData = JSON.parse(storedAutopartsData);
            autopartsData.sort((a, b) => new Date(b.date_of_public) - new Date(a.date_of_public));
          }
          console.log(autopartsData);
          console.log(autopartsData.length);
          autopartsIdCounter = autopartsData.length;
          console.log(autopartsIdCounter);
        }

        function showLoginForm() {
          document.getElementById("autopartsForm").style.display = "none";
          document.getElementById("Autoparts-List").style.display = "none";
          document.getElementById("novelty-products").style.display = "none";
          document.getElementById("autoparts-products").style.display = "none";
          document.getElementById("loginForm").style.display = "block";
          document.getElementById("loginButton").style.display = "block";
          document.getElementById("register_Button").style.display = "block";
          document.getElementById("addProduct").style.display = "none";
          document.getElementById("editProduct").style.display = "none";
          document.getElementById("logoutButton").style.display = "none";
        }
        function showLoginFormEnter() {
          document.getElementById("loginForm").style.display = "block";
          document.getElementById("autopartsForm").style.display = "none";
          document.getElementById("Autoparts-List").style.display = "none";
          document.getElementById("novelty-products").style.display = "none";
          document.getElementById("autoparts-products").style.display = "none";
          document.getElementById("loginButton").style.display = "block";
          document.getElementById("registerButton").style.display = "none";
          document.getElementById("signInButton").style.display = "block";
          document.getElementById("register_Button").style.display = "block";
          document.getElementById("logoutButton").style.display = "none";
        }
        function showRegisterForm() {
          document.getElementById("loginForm").style.display = "block";
          document.getElementById("signInButton").style.display = "none";
          document.getElementById("registerButton").style.display = "block";
          document.getElementById("autopartsForm").style.display = "none";
          document.getElementById("Autoparts-List").style.display = "none";
          document.getElementById("novelty-products").style.display = "none";
          document.getElementById("autoparts-products").style.display = "none";
          document.getElementById("loginButton").style.display = "block";
          document.getElementById("register_Button").style.display = "block";
          document.getElementById("logoutButton").style.display = "none";
          document.getElementById("addProduct").style.display = "none";
          document.getElementById("editProduct").style.display = "none";
          //document.getElementById("ShowOrHideAddEditNews").style.display = "none";
        }
        function showAddEditAutopartsForm(){
          document.getElementById("autopartsForm").style.display = "block";
          document.getElementById("autopartTitleInput").style.display = "block";
          document.getElementById("autopartPriceInput").style.display = "block";
          document.getElementById("autopartImageInput").style.display = "block";
          document.getElementById("addProduct").style.display = "block";
          document.getElementById("editProduct").style.display = "block";
          document.getElementById("Autoparts-List").style.display = "none";
          document.getElementById("novelty-products").style.display = "none";
          document.getElementById("autoparts-products").style.display = "none";
          //ShowOrHideAddEditAutopartsButton.removeEventListener("click", showAddEditAutopartsForm);
          //ShowOrHideAddEditAutopartsButton.addEventListener("click", hideAddEditAutopartsForm);
        }
        function hideAddEditAutopartsForm(){
          document.getElementById("autopartsForm").style.display = "none";
          document.getElementById("autopartTitleInput").style.display = "none";
          document.getElementById("autopartPriceInput").style.display = "none";
          document.getElementById("autopartImageInput").style.display = "none";
          document.getElementById("addProduct").style.display = "none";
          document.getElementById("editProduct").style.display = "none";
          document.getElementById("Autoparts-List").style.display = "grid";
          document.getElementById("novelty-products").style.display = "block";
          document.getElementById("autoparts-products").style.display = "block";
          //ShowOrHideAddEditAutopartsButton.removeEventListener("click", hideAddEditAutopartsForm);
          //ShowOrHideAddEditAutopartsButton.addEventListener("click", showAddEditAutopartsForm);
        }
        function showAutopartsForm() {
          document.getElementById("editAutopartsButton").style.display = "none";
          document.getElementById("addAutopartsButton").style.display = "block";
          document.getElementById("autopartsForm").style.display = "inline-block";
          addProductButton.removeEventListener("click", showAutopartsForm);
          addProductButton.addEventListener("click", clearAutopartsForm);
          editProductButton.removeEventListener("click", clearAutopartsForm);
          editProductButton.addEventListener("click", showAutopartsFormEdit);
          document.getElementById("Autoparts-List").style.display = "none";
          document.getElementById("novelty-products").style.display = "none";
          document.getElementById("autoparts-products").style.display = "none";
          document.getElementById("loginForm").style.display = "none";
          document.getElementById("logoutButton").style.display = "block";
          document.getElementById("loginButton").style.display = "none";
          document.getElementById("register_Button").style.display = "none";
        }
        function showAutopartsFormEdit() {
          document.getElementById("addAutopartsButton").style.display = "none";
          document.getElementById("editAutopartsButton").style.display = "block";
          document.getElementById("autopartsForm").style.display = "inline-block";
          editProductButton.removeEventListener("click", showAutopartsFormEdit);
          editProductButton.addEventListener("click", clearAutopartsForm);
          addProductButton.removeEventListener("click", clearAutopartsForm);
          addProductButton.addEventListener("click", showAutopartsForm);
          document.getElementById("Autoparts-List").style.display = "none";
          document.getElementById("novelty-products").style.display = "none";
          document.getElementById("autoparts-products").style.display = "none";
        }
        function clearAutopartsForm() {
          document.getElementById("addAutopartsButton").style.display = "block";
          document.getElementById("editAutopartsButton").style.display = "block";
          document.getElementById("autopartsForm").style.display = "none";
          document.getElementById("Autoparts-List").style.display = "grid";
          document.getElementById("novelty-products").style.display = "block";
          document.getElementById("autoparts-products").style.display = "block";
          addProductButton.removeEventListener("click", clearAutopartsForm);
          addProductButton.addEventListener("click", showAutopartsForm);
          editProductButton.removeEventListener("click", clearAutopartsForm);
          editProductButton.addEventListener("click", showAutopartsFormEdit);
          document.getElementById("autopartTitleInput").value = "";
          document.getElementById("autopartPriceInput").value = "";
          document.getElementById("autopartImageInput").value = "";
        }
        function displayAutoParts(autopartsArray = autopartsData) {
          //autopartsList.innerHTML = "";
          if (autopartsArray.length === 0) {
            autopartsList.innerHTML = "<p>Немає доступних автозапчастин</p>";
            return;
          }

          autopartsArray.forEach(autoparts => {
            //autopartsList.innerHTML = "5555";
            const autopartsItem = document.createElement("div");
            autopartsItem.classList.add('product-box');
            autopartsItem.innerHTML = `
              <img src="${autoparts.image}" alt="" class="product-img" id="product-img"/>
                        <h2 class="product-title" id="autopart-text">${autoparts.title}</h2>
                        <span class="price" id="autopart-price">${autoparts.price} ₴</span>
                        <p>${autoparts.date_of_public}</p>
                        <p>${currentUser}</p>
                        <i class="bx bx-shopping-bag add-cart" id="add-to-cart"></i>
            `;
            const addToCartButton = autopartsItem.querySelector(".add-cart");
            addToCartButton.addEventListener("click", () => {
                const title = autoparts.title;
                const price = autoparts.price + " ₴";
                const productImg = autoparts.image;
                addProductToCart(title, price, productImg);
                updatetotal();
            });
            autopartsList.appendChild(autopartsItem);
          });
        }

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};
closeCart.onclick = () => {
    cart.classList.remove("active");
};
if (document.readyState == "loading"){
            document.addEventListener("DOMContentLoaded", ready);
        } else {
            ready();
        }

        function ready(){
            var removeCartButtons = document.getElementsByClassName("cart-remove");
            console.log(removeCartButtons);
            for (var i = 0; i < removeCartButtons.length; i++){
                var button = removeCartButtons[i];
                button.addEventListener("click", removeCartItem);
            }
            //
            var quantityInputs = document.getElementsByClassName("cart-quantity");
            for (var i = 0; i < quantityInputs.length; i++){
                var input = quantityInputs[i];
                input.addEventListener("change",quantityChanged);
            }
            //
            var addCart = document.getElementsByClassName("add-cart");
            for (var i = 0; i < addCart.length; i++)
            {
                var button = addCart[i];
                button.addEventListener("click",addCartClicked);
            }
            //
            document.getElementsByClassName("btn-buy")[0].addEventListener("click",buyButtonClicked);
        }
        function buyButtonClicked(){
            alert("Your order is placed");
            var cartContent = document.getElementsByClassName("cart-content")[0];
            while (cartContent.hasChildNodes()){
                cartContent.removeChild(cartContent.firstChild);
            }
            updatetotal();
        }
        function removeCartItem(event){
            var buttonClicked = event.target;
            buttonClicked.parentElement.remove();
            updatetotal();
        }
        function quantityChanged(event){
            var input = event.target;
            if (isNaN(input.value) || input.value <= 0){
                input.value = 1;
            }
            updatetotal();
        }

        function addCartClicked(event){
            var button = event.target;
            var shopProducts = button.parentElement;
            var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
            var price = shopProducts.getElementsByClassName("price")[0].innerText;
            var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
            addProductToCart(title, price, productImg);
            updatetotal();
        }

        function addProductToCart(title, price, productImg){
            var cartShopBox = document.createElement("div");
            cartShopBox.classList.add("cart-box");
            var cartItems = document.getElementsByClassName("cart-content")[0];
            var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
            for (var i = 0; i < cartItemsNames.length; i++){
                if (cartItemsNames[i].innerText == title){
                    alert("You have already add this item to cart!");
                    return;
                }
            }
            var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img"/>
                                    <div class="detail-box">
                                        <div class="cart-product-title">${title}</div>
                                        <div class="cart-price">${price}</div>
                                        <input type="number" value="1" class="cart-quantity">
                                    </div>
                                    <i class="bx bxs-trash-alt cart-remove"></i>`;
            cartShopBox.innerHTML = cartBoxContent;
            cartItems.append(cartShopBox);
            cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
            cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
        }

        function updatetotal(){
            var cartContent = document.getElementsByClassName("cart-content")[0];
            var cartBoxes = cartContent.getElementsByClassName("cart-box");
            var total = 0;
            for (var i = 0; i < cartBoxes.length; i++){
                var cartBox = cartBoxes[i];
                var priceElement = cartBox.getElementsByClassName("cart-price")[0];
                var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
                var price = parseFloat(priceElement.innerText.replace("₴",""));
                var quantity = quantityElement.value;
                total = total + price * quantity;
            }
            total = Math.round(total * 100) / 100;
            document.getElementsByClassName("total-price")[0].innerText = total + " ₴";
        }

        function handleSearch() {
          const searchTerm = searchInput.value.trim().toLowerCase();
          const autopartsList = document.getElementById("Autoparts-List");
          autopartsList.innerHTML = ""; // Clear existing autoparts items

          if (searchTerm === "") {
            // If the search input is empty, display all autoparts
            displayAutoParts(autopartsData);
            return;
          }

          // Filter the autopartsData based on the search term
          const filteredAutoparts = autopartsData.filter((autoparts) => {
            const title = autoparts.title.toLowerCase();
            const price = autoparts.price.toLowerCase();
            return title.includes(searchTerm) || price.includes(searchTerm);
          });

          // Display the filtered autoparts
          displaySearchAutoparts(filteredAutoparts);
        }
        function displaySearchAutoparts(autopartsArray) {
          document.getElementById("currentAutoparts").style.display = "none";
          document.getElementById("Autoparts-List").style.display = "grid";
          const autopartsList = document.getElementById("Autoparts-List");
          autopartsList.innerHTML = ""; // Clear existing autoparts items

          // Loop through the autopartsArray and create HTML elements to display them
          autopartsArray.forEach((autoparts) => {
            const autopartsItem = document.createElement("div");
            autopartsItem.classList.add('product-box');
            autopartsItem.innerHTML = `
              <img src="${autoparts.image}" alt="" class="product-img" id="product-img"/>
                        <h2 class="product-title" id="autopart-text">${autoparts.title}</h2>
                        <span class="price" id="autopart-price">${autoparts.price} ₴</span>
                        <p>${autoparts.date_of_public}</p>
                        <i class="bx bx-shopping-bag add-cart" id="add-to-cart"></i>
            `;
            const addToCartButton = autopartsItem.querySelector(".add-cart");
            addToCartButton.addEventListener("click", () => {
                const title = autoparts.title;
                const price = autoparts.price + " ₴";
                const productImg = autoparts.image;
                addProductToCart(title, price, productImg);
                updatetotal();
            });
            autopartsList.appendChild(autopartsItem);
          });
        }
        // Function to filter and display autoparts by category
        function displayAutopartsByCategory(category) {
          document.getElementById("currentAutoparts").style.display = "none";
          document.getElementById("Autoparts-List").style.display = "grid";
          const autopartsList = document.getElementById("Autoparts-List");
          autopartsList.innerHTML = ""; // Clear existing autoparts items

          const filteredAutoparts = autopartsData.filter((autoparts) => {
            const lowerTitle = autoparts.title.toLowerCase();
            if (category === "Автозапчастини") {
              // Filter autoparts for "Автозапчастини" category
              console.log(allpartsauto.some((word) => lowerTitle.includes(word)));
              return allpartsauto.some((word) => lowerTitle.includes(word));
            } else if (category === "Авто") {
              // Filter autoparts for "Авто" category
              console.log(modelCars.some((word) => lowerTitle.includes(word)));
              return modelCars.some((word) => lowerTitle.includes(word));
            }
            else {
              // Filter autoparts for "Авто" category
              console.log(modelCars.some((word) => lowerTitle.includes(word)));
              return modelCars.some((word) => lowerTitle.includes(word));
            }
          });

          // Display the filtered autoparts
          displayCurrentAutoparts(filteredAutoparts);
        }
        function displayCurrentAutoparts(autopartsArray) {
          autopartsList.innerHTML = "";
          if (autopartsArray.length === 0) {
            autopartsList.innerHTML = "<p>Немає доступних даних</p>";
            return;
          }

          autopartsArray.forEach(autoparts => {
            const autopartsItem = document.createElement("div");
            autopartsItem.classList.add('product-box');
            autopartsItem.innerHTML = `
              <img src="${autoparts.image}" alt="" class="product-img" id="product-img"/>
                        <h2 class="product-title" id="autopart-text">${autoparts.title}</h2>
                        <span class="price" id="autopart-price">${autoparts.price} ₴</span>
                        <p>${autoparts.date_of_public}</p>
                        <i class="bx bx-shopping-bag add-cart" id="add-to-cart"></i>
            `;
            const addToCartButton = autopartsItem.querySelector(".add-cart");
            addToCartButton.addEventListener("click", () => {
                const title = autoparts.title;
                const price = autoparts.price + " ₴";
                const productImg = autoparts.image;
                addProductToCart(title, price, productImg);
                updatetotal();
            });
            autopartsList.appendChild(autopartsItem);
          });
        }
        loadAutopartsData();
        displayAutoParts();
//
//searchInput.addEventListener("input", handleSearch);
//
//        // Event Listeners
//        signInButton.addEventListener("click", signIn);
//        registerButton.addEventListener("click", register);
//        logoutButton.addEventListener("click", logout);
//        loginButton.addEventListener("click", showLoginFormEnter);
//        register_Button.addEventListener("click", showRegisterForm);
//        //ShowOrHideAddEditAutopartsButton.addEventListener("click", showAddEditAutopartsForm);
//
//        addProductButton.addEventListener("click", showAutopartsForm);
//        editProductButton.addEventListener("click", showAutopartsForm);
//        editAutopartButton.addEventListener("click", editAutoParts);
//        addAutopartButton.addEventListener("click", addAutoPart);
//
//        autopartsLink.addEventListener("click", () => displayAutopartsByCategory("Автозапчастини"));
//        autoLink.addEventListener("click", () => displayAutopartsByCategory("Авто"));
//
//        // Check login status when the page loads
//        // checkLogin();
//
//        function addAutoPart() {
//          const date_create = new Date().toLocaleDateString('en-GB');
//          const autopartsTitle = document.getElementById("autopartTitleInput").value;
//          const autopartsPrice = document.getElementById("autopartPriceInput").value;
//          const autopartsImage = document.getElementById("autopartImageInput").files[0];
//
//          if (!autopartsTitle || !autopartsPrice || !autopartsImage) {
//            alert("Please provide a title, content, and image for the autoparts");
//            return;
//          }
//
//          const reader = new FileReader();
//          reader.onload = () => {
//            const imageBase64 = reader.result;
//            autopartsIdCounter += 1;
//            const newAutopartsItem = {
//              id: autopartsIdCounter,
//              image: imageBase64,
//              title: autopartsTitle,
//              price: autopartsPrice,
//              date_of_public: date_create,
//            };
//
//            autopartsData.push(newAutopartsItem);
//            saveAutopartsData();
//            clearAutopartsForm();
//            displayAutoParts();
//          };
//
//          reader.readAsDataURL(autopartsImage);
//        }
//        function editAutoParts() {
//          document.getElementById("addAutopartsButton").style.display = "none";
//          // if (!loggedIn) {
//          //   alert("Please sign in to edit autoparts.");
//          //   return;
//          // }
//          const autopartsId = parseInt(prompt("Enter the ID of the autoparts you want to edit:"));
//          const existingAutopartsItem = autopartsData.find(item => item.id === autopartsId);
//
//          if (!existingAutopartsItem) {
//            alert("Autoparts not found");
//            return;
//          }
//
//          document.getElementById("autopartTitleInput").value = existingAutopartsItem.title;
//          document.getElementById("autopartPriceInput").value = existingAutopartsItem.price;
//          //document.getElementById("autopartImageInput").files[0] = existingAutopartsItem.image;
//          editAutopartButton.removeEventListener("click", editAutoParts);
//
//          function editAutopartsPress(){
//              const autopartsTitle = document.getElementById("autopartTitleInput").value;
//              const autopartsPrice = document.getElementById("autopartPriceInput").value;
//              const autopartsImage = document.getElementById("autopartImageInput").files[0];
//              if (!autopartsTitle || !autopartsPrice || !autopartsImage) {
//                alert("Please provide a title, content, and image for the autoparts");
//                return;
//              }
//              existingAutopartsItem.title = autopartsTitle;
//              existingAutopartsItem.price = autopartsPrice;
//              editAutopartButton.removeEventListener("click", editAutopartsPress);
//              editAutopartButton.addEventListener("click", editAutoParts);
//
//              saveAutopartsData();
//              clearAutopartsForm();
//              displayAutoparts();
//
//              document.getElementById("addAutopartsButton").style.display = "block";
//            }
//          editAutopartButton.addEventListener("click", editAutopartsPress);
//        }
//
//        function signIn() {
//          const username = document.getElementById("usernameInput").value;
//          const password = document.getElementById("passwordInput").value;
//
//          if (localStorage.getItem(username) === password) {
//            loggedIn = true;
//            currentUser = username;
//            // saveLogin();
//            showAutopartsForm();
//            document.getElementById("autopartsForm").style.display = "none";
//            document.getElementById("Autoparts-List").style.display = "flex";
//            document.getElementById("novelty-products").style.display = "block";
//            document.getElementById("autoparts-products").style.display = "block";
//          } else {
//            alert("Invalid username or password");
//          }
//        }
//
//        function register() {
//          const username = document.getElementById("usernameInput").value;
//          const password = document.getElementById("passwordInput").value;
//
//          if (localStorage.getItem(username)) {
//            alert("Username already exists");
//          } else {
//            localStorage.setItem(username, password);
//            alert("Registration successful. You can now sign in with your new account.");
//          }
//        }
//        function logout() {
//          loggedIn = false;
//          currentUser = null;
//          localStorage.removeItem("loggedIn");
//          localStorage.removeItem("currentUser");
//          showLoginForm();
//        }
//        function checkLogin() {
//          if (localStorage.getItem("loggedIn")) {
//            loggedIn = true;
//            currentUser = localStorage.getItem("currentUser");
//            showAutopartsForm();
//            document.getElementById("autopartsForm").style.display = "none";
//            document.getElementById("novelty-products").style.display = "flex";
//            document.getElementById("autoparts-products").style.display = "block";
//            document.getElementById("Autoparts-List").style.display = "flex";
//          } else {
//            showLoginForm();
//          }
//        }
//
//        //function saveLogin() {
//        //  localStorage.setItem("loggedIn", "true");
//        //  localStorage.setItem("currentUser", currentUser);
//        //}
//
//        function saveAutopartsData() {
//          localStorage.setItem("autopartsData", JSON.stringify(autopartsData));
//          //autopartsIdCounter = autopartsData.length;
//        }
//
//        function loadAutopartsData() {
//          const storedAutopartsData = localStorage.getItem("autopartsData");
//          if (storedAutopartsData) {
//            autopartsData = JSON.parse(storedAutopartsData);
//            autopartsData.sort((a, b) => new Date(b.date_of_public) - new Date(a.date_of_public));
//          }
//          console.log(autopartsData);
//          console.log(autopartsData.length);
//          autopartsIdCounter = autopartsData.length;
//          console.log(autopartsIdCounter);
//        }
//
//        function showLoginForm() {
//          document.getElementById("autopartsForm").style.display = "none";
//          document.getElementById("Autoparts-List").style.display = "none";
//          document.getElementById("novelty-products").style.display = "none";
//          document.getElementById("autoparts-products").style.display = "none";
//          document.getElementById("loginForm").style.display = "block";
//          document.getElementById("loginButton").style.display = "block";
//          document.getElementById("register_Button").style.display = "block";
//          document.getElementById("addProduct").style.display = "none";
//          document.getElementById("editProduct").style.display = "none";
//          document.getElementById("logoutButton").style.display = "none";
//        }
//        function showLoginFormEnter() {
//          document.getElementById("loginForm").style.display = "block";
//          document.getElementById("autopartsForm").style.display = "none";
//          document.getElementById("Autoparts-List").style.display = "none";
//          document.getElementById("novelty-products").style.display = "none";
//          document.getElementById("autoparts-products").style.display = "none";
//          document.getElementById("loginButton").style.display = "block";
//          document.getElementById("registerButton").style.display = "none";
//          document.getElementById("signInButton").style.display = "block";
//          document.getElementById("register_Button").style.display = "block";
//          document.getElementById("logoutButton").style.display = "none";
//        }
//        function showRegisterForm() {
//          document.getElementById("loginForm").style.display = "block";
//          document.getElementById("signInButton").style.display = "none";
//          document.getElementById("registerButton").style.display = "block";
//          document.getElementById("autopartsForm").style.display = "none";
//          document.getElementById("Autoparts-List").style.display = "none";
//          document.getElementById("novelty-products").style.display = "none";
//          document.getElementById("autoparts-products").style.display = "none";
//          document.getElementById("loginButton").style.display = "block";
//          document.getElementById("register_Button").style.display = "block";
//          document.getElementById("logoutButton").style.display = "none";
//          document.getElementById("addProduct").style.display = "none";
//          document.getElementById("editProduct").style.display = "none";
//          //document.getElementById("ShowOrHideAddEditNews").style.display = "none";
//        }
//        function showAddEditAutopartsForm(){
//          document.getElementById("autopartsForm").style.display = "block";
//          document.getElementById("autopartTitleInput").style.display = "block";
//          document.getElementById("autopartPriceInput").style.display = "block";
//          document.getElementById("autopartImageInput").style.display = "block";
//          document.getElementById("addProduct").style.display = "block";
//          document.getElementById("editProduct").style.display = "block";
//          document.getElementById("Autoparts-List").style.display = "none";
//          document.getElementById("novelty-products").style.display = "none";
//          document.getElementById("autoparts-products").style.display = "none";
//          //ShowOrHideAddEditAutopartsButton.removeEventListener("click", showAddEditAutopartsForm);
//          //ShowOrHideAddEditAutopartsButton.addEventListener("click", hideAddEditAutopartsForm);
//        }
//        function hideAddEditAutopartsForm(){
//          document.getElementById("autopartsForm").style.display = "none";
//          document.getElementById("autopartTitleInput").style.display = "none";
//          document.getElementById("autopartPriceInput").style.display = "none";
//          document.getElementById("autopartImageInput").style.display = "none";
//          document.getElementById("addProduct").style.display = "none";
//          document.getElementById("editProduct").style.display = "none";
//          document.getElementById("Autoparts-List").style.display = "block";
//          document.getElementById("novelty-products").style.display = "block";
//          document.getElementById("autoparts-products").style.display = "block";
//          //ShowOrHideAddEditAutopartsButton.removeEventListener("click", hideAddEditAutopartsForm);
//          //ShowOrHideAddEditAutopartsButton.addEventListener("click", showAddEditAutopartsForm);
//        }
//        function showAutopartsForm() {
//          document.getElementById("autopartsForm").style.display = "inline-block";
//          //addProductButton.removeEventListener("click", showAutopartsForm);
//          //addProductButton.addEventListener("click", clearAutopartsForm);
//          document.getElementById("Autoparts-List").style.display = "none";
//          document.getElementById("novelty-products").style.display = "none";
//          document.getElementById("autoparts-products").style.display = "none";
//        }
//        function clearAutopartsForm() {
//          document.getElementById("autopartsForm").style.display = "none";
//          document.getElementById("Autoparts-List").style.display = "flex";
//          document.getElementById("novelty-products").style.display = "block";
//          document.getElementById("autoparts-products").style.display = "block";
//          //addProductButton.removeEventListener("click", clearAutopartsForm);
//          //addProductButton.addEventListener("click", showAutopartsForm);
//          document.getElementById("autopartTitleInput").value = "";
//          document.getElementById("autopartPriceInput").value = "";
//          document.getElementById("autopartImageInput").value = "";
//        }
//        function displayAutoParts(autopartsArray = autopartsData) {
//          //autopartsList.innerHTML = "";
//          //if (autopartsArray.length === 0) {
//          //  autopartsList.innerHTML = "<p>No autoparts available</p>";
//          //  return;
//          //}
//
//          autopartsArray.forEach(autoparts => {
//            const autopartsItem = document.createElement("div");
//            autopartsItem.classList.add('product-box');
//            //autopartsList.innerHTML = "5555";
//            autopartsItem.innerHTML = `
//                        <img src="${autoparts.image}" alt="" class="product-img" id="product-img"/>
//                        <h2 class="product-title" id="autopart-text">${autoparts.title}</h2>
//                        <span class="price" id="autopart-price">${autoparts.price} ₴</span>
//                        <p>${autoparts.date_of_public}</p>
//                        <i class="bx bx-shopping-bag add-cart" id="add-to-cart"></i>
//            `;
//            autopartsList.appendChild(autopartsItem);
//          });
//        }
//function handleSearch() {
//          const searchTerm = searchInput.value.trim().toLowerCase();
//          const autopartsList = document.getElementById("Autoparts-List");
//          autopartsList.innerHTML = ""; // Clear existing autoparts items
//
//          if (searchTerm === "") {
//            // If the search input is empty, display all autoparts
//            displayAutoParts(autopartsData);
//            return;
//          }
//
//          // Filter the autopartsData based on the search term
//          const filteredAutoparts = autopartsData.filter((autoparts) => {
//            const title = autoparts.title.toLowerCase();
//            const price = autoparts.price.toLowerCase();
//            return title.includes(searchTerm) || price.includes(searchTerm);
//          });
//
//          // Display the filtered autoparts
//          displaySearchAutoparts(filteredAutoparts);
//        }
//        function displaySearchAutoparts(autopartsArray) {
//          document.getElementById("currentAutoparts").style.display = "none";
//          document.getElementById("Autoparts-List").style.display = "grid";
//          const autopartsList = document.getElementById("Autoparts-List");
//          autopartsList.innerHTML = ""; // Clear existing autoparts items
//
//          // Loop through the autopartsArray and create HTML elements to display them
//          autopartsArray.forEach((autoparts) => {
//            const autopartsItem = document.createElement("div");
//            autopartsItem.innerHTML = `
//              <img src="${autoparts.image}" alt="" class="product-img" id="product-img"/>
//                        <h2 class="product-title" id="autopart-text">${autoparts.title}</h2>
//                        <span class="price" id="autopart-price">${autoparts.price} ₴</span>
//                        <p>${autoparts.date_of_public}</p>
//                        <i class="bx bx-shopping-bag add-cart" id="add-to-cart"></i>
//                        `;
//
//            autopartsList.appendChild(autopartsItem);
//          });
//        }
//        // Function to filter and display autoparts by category
//        function displayAutopartsByCategory(category) {
//          document.getElementById("currentAutoparts").style.display = "none";
//          document.getElementById("Autoparts-List").style.display = "grid";
//          const autopartsList = document.getElementById("Autoparts-List");
//          autopartsList.innerHTML = ""; // Clear existing autoparts items
//
//          const filteredAutoparts = autopartsData.filter((autoparts) => {
//            const lowerTitle = autoparts.title.toLowerCase();
//            // const lowerTitle = cTitle.charAt(0).toUpperCase() + cTitle.slice(1);
//            // const lowerContent = cContent.charAt(0).toUpperCase() + cTitle.slice(1);
//            // console.log(lowerTitle);
//
//            if (category === "Автозапчастини") {
//              // Filter autoparts for "Автозапчастини" category
//              console.log(allpartsauto.some((word) => lowerTitle.includes(word)));
//              return allpartsauto.some((word) => lowerTitle.includes(word));
//            } else if (category === "Авто") {
//              // Filter autoparts for "Авто" category
//              console.log(modelCars.some((word) => lowerTitle.includes(word)));
//              return modelCars.some((word) => lowerTitle.includes(word));
//            }
//            else {
//              // Filter autoparts for "Авто" category
//              console.log(modelCars.some((word) => lowerTitle.includes(word)));
//              return modelCars.some((word) => lowerTitle.includes(word));
//            }
//          });
//
//          // Display the filtered autoparts
//          displayCurrentAutoparts(filteredAutoparts);
//        }
//        function displayCurrentAutoparts(autopartsArray) {
//          autopartsList.innerHTML = "";
//          if (autopartsArray.length === 0) {
//            autopartsList.innerHTML = "<p>Немає доступних даних</p>";
//            return;
//          }
//
//          autopartsArray.forEach(autoparts => {
//            const autopartsItem = document.createElement("div");
//            autopartsItem.innerHTML = `
//              <img src="${autoparts.image}" alt="" class="product-img" id="product-img"/>
//                        <h2 class="product-title" id="autopart-text">${autoparts.title}</h2>
//                        <span class="price" id="autopart-price">${autoparts.price} ₴</span>
//                        <p>${autoparts.date_of_public}</p>
//                        <i class="bx bx-shopping-bag add-cart" id="add-to-cart"></i>
//            `;
//            autopartsList.appendChild(autopartsItem);
//          });
//        }

//document.addEventListener("DOMContentLoaded", function() {
//    const todayDate = new Date().toLocaleDateString('en-GB');
//    const noveltySection = document.getElementById("novelty-products");
//    const autopartsSection = document.getElementById("autoparts-products");
//
//    if (todayDate === "your_target_date_in_en_GB_format") {
//        // Add novelty content to the novelty section
//        noveltySection.innerHTML += `
//            <div class="product-box">
//                <img src="images/novelty_product.png" alt="" class="product-img"/>
//                <h2 class="product-title">Нова продукція</h2>
//                <span class="price">Ціна ₴</span>
//                <i class="bx bx-shopping-bag add-cart"></i>
//            </div>
//        `;
//    } else {
//        // Add regular content to the autoparts section
//        autopartsSection.innerHTML += `
//            <div class="product-box">
//                <img src="images/light_volkswagen_golf_xenon.png" alt="" class="product-img"/>
//                <h2 class="product-title" id="autopart-text">Права передня фара VW GOLF XENON Оригінал</h2>
//                <span class="price" id="autopart-price">12000 ₴</span>
//                <i class="bx bx-shopping-bag add-cart"></i>
//            </div>
//            <div class="product-box">
//                <img src="images/display_audi_a4_pc4.png" alt="" class="product-img"/>
//                <h2 class="product-title">Дислпей екрана AUDI A4 PC4 Оригінал</h2>
//                <span class="price">25000 ₴</span>
//                <i class="bx bx-shopping-bag add-cart"></i>
//            </div>
//        `;
//    }
//});
//const id_form = document.getElementById("id_form-0-quantity");
//id_form.addEventListener('input', () => {
//  var x = document.getElementById("id_form-0-quantity").value;
//  document.getElementById("total").innerHTML = "$" + x;
//})
////id_form-0.oninput = function() {
////    document.getElementById("total").innerHTML = "$" + id_form-0.value;
////};
//
//function myFunction() {
//  var x = document.getElementById("id_form-0-quantity").value;
//  document.getElementById("total").innerHTML = "$" + x;
//}
//
//myFunction();


//const { Slendr } = window.slendr
//
//new Slendr({ slideshow: true, keyboard: true })

//const id_form = document.getElementById("id_form-0-quantity");
//        id_form.addEventListener('input', () => {
//          var x = document.getElementById("id_form-0-quantity").value;
//          document.getElementById("total").innerHTML = x + ".00 $";
//        })
        // const getAnswer1_click = document.getElementById("getAnswer1");
        // const getAnswer2_click = document.getElementById("getAnswer2");
        // const getAnswer3_click = document.getElementById("getAnswer3");
        // const getAnswer4_click = document.getElementById("getAnswer4");
        // getAnswer1_click.addEventListener("click", () => getAnswer("one"));
        // getAnswer2_click.addEventListener("click", () => getAnswer("two"));
        // getAnswer3_click.addEventListener("click", () => getAnswer("three"));
        // getAnswer4_click.addEventListener("click", () => getAnswer("four"));

//        function getAnswer(number){
//            if (number == "one"){
//                document.getElementById("answer1").innerHTML = "<p align='justify' data-aos='fade-up' data-aos-duration='1000' style='font-size:16px;'><br>На сайті Alibaba проводяться угоди між постачальниками – експортерами, і покупцями – клієнтами, імпортерами продукції. Так, перша категорія користувачів продає товари. При цьому компанія-експортер надає опис своєї діяльності, розповідає про свою продукцію, підтверджуючи інформацію додатковими фотографіями товарів, сертифікатами якості та іншими відомостями. Крім цього, кожен постачальник пропонує власні умови доставки. Тому перед тим як купувати на Alibaba, варто уважно вивчити інформацію про експортера.<br>Покупці шукають необхідні їм товари на сайті торговельного майданчика і надійних постачальників. Маркетплейс характеризується зручним функціоналом, що дозволяє клієнту вести переговори з імпортером прямо на сайті. Важливо завжди звертатися до постачальника для уточнення інформації про продукцію. Також під час листування з ним клієнт може вирішити цінові питання, варіанти доставки. Ще покупець має можливість запросити надати одну одиницю товару для визначення якості безпосередньо перед тим як зробити замовлення на Alibaba і укласти більшу угоду з постачальником.</p>";
//                // getAnswer1_click.removeEventListener("click", () => getAnswer("one"));
//                // getAnswer1_click.addEventListener("click", () => closeAnswer("one"));
//                document.getElementById("iconAnswer1").innerHTML = "<i class='fa-solid fa-minus'></i>";
//            }
//            else if (number == "two"){
//                document.getElementById("answer2").innerHTML = "<p align='justify' data-aos='fade-up' data-aos-duration='1000' style='font-size:16px;'><br>Після запуску та реєстрації у програмі необхідно:<br>1. Додати у контакти продавця;<br>2. Зайти в особисті дані продавця;<br>3. Перейти до розділу «Моменти»;<br>4. Вибрати потрібний товар;<br>5. Переслати товар, що цікавить, з описом (фото, колір, розмір, доп. характеристики) менеджеру на прорахунок;<br>6. Після погодження замовлення внести передоплату та чекати на посилку.<br>Додатково можна замовити перевірку та фотозвіт товару при отриманні на склад у Китаї.<br>Розрахунок за доставку з Китаю, тариф, комісія та інші платежі будуть вказані у Вашому замовленні.</p>";
//                // getAnswer2_click.removeEventListener("click", () => getAnswer("two"));
//                // getAnswer2_click.addEventListener("click", () => closeAnswer("two"));
//                document.getElementById("iconAnswer2").innerHTML = "<i class='fa-solid fa-minus'></i>";
//            }
//            else if (number == "three"){
//                document.getElementById("answer3").innerHTML = "<p align='justify' data-aos='fade-up' data-aos-duration='1000' style='font-size:16px;'><br>Оформити відправку з Китаю можна з сервісом NP Shopping. Перед замовленням необхідно пройти авторизацію на сайті форвардингу. Вам стануть доступні китайські адреси складів, з яких посилку надішлють в Україну.<br>Для замовлення на сайті Tmall вибрані позиції потрібно помістити у кошик. Оформляючи покупку, введіть отримані контакти відділення. Для перекладу сторінки можна використовувати автоматичну функцію в браузері Chrome, натиснувши на іконку поряд з адресним рядком.<br>Після оплати товарів та міжнародного перевезення посилка буде доступна в Україні. Відстежити всі переміщення можна у власному кабінеті, ввівши трек-номер. NP Shopping дає можливість робити покупки на китайських маркетплейсах із швидкою доставкою до України.</p>";
//                // getAnswer3_click.removeEventListener("click", () => getAnswer("three"));
//                // getAnswer3_click.addEventListener("click", () => closeAnswer("three"));
//                document.getElementById("iconAnswer3").innerHTML = "<i class='fa-solid fa-minus'></i>";
//            }
//            else if (number == "four"){
//                document.getElementById("answer4").innerHTML = "<p align='justify' data-aos='fade-up' data-aos-duration='1000' style='font-size:16px;'><br>Aliexpress працює на базі сторінок магазинів, де кожен розміщує свою продукцію. У пошуку покупці бачать окремі товари, але завжди є змога перейти в магазин і переглянути пропозиції саме від цього постачальника. Це зручно, якщо ви хочете придбати товар перевіреного продавця чи оригінальну продукцію китайського бренду – на Aliexpress є офіційні сторінки магазинів Xiomi, Redmi, Boya та інших компаній. Крім цього, там магазини можуть розміщати свої купони.<br>На Aliexpress завжди є змога задати продавцю питання про товар. Відправлення, доставка, додаткова інформація. В листуванні можна навіть спробувати попросити знижку.<br>Оплата завжди проходить в доларах, незалежно від валюти, що ви обрали. Ціна в гривні лише приблизна і відповідає курсу обміну фінансової системи, з якої працює Aliexpress. Водночас при оплаті з рахунку можливе зняття іншої суми в залежності від курсу обміну платіжної системи (Visa або MasterCard) чи вашого банку.</p>";
//                // getAnswer4_click.removeEventListener("click", () => getAnswer("four"));
//                // getAnswer4_click.addEventListener("click", () => closeAnswer("four"));
//                document.getElementById("iconAnswer4").innerHTML = "<i class='fa-solid fa-minus'></i>";
//            }
//        }
//        function closeAnswer(number){
//            if (number == "one"){
//                document.getElementById("answer1").innerHTML = "";
//                // getAnswer1_click.removeEventListener("click", () => closeAnswer("one"));
//                // getAnswer1_click.addEventListener("click", () => getAnswer("one"));
//                document.getElementById("iconAnswer1").innerHTML = "<i class='fa-solid fa-plus'></i>";
//            }
//            else if (number == "two"){
//                document.getElementById("answer2").innerHTML = "";
//                // getAnswer2_click.removeEventListener("click", () => closeAnswer("two"));
//                // getAnswer2_click.addEventListener("click", () => getAnswer("two"));
//                document.getElementById("iconAnswer2").innerHTML = "<i class='fa-solid fa-plus'></i>";
//            }
//            else if (number == "three"){
//                document.getElementById("answer3").innerHTML = "";
//                // getAnswer3_click.removeEventListener("click", () => closeAnswer("three"));
//                // getAnswer3_click.addEventListener("click", () => getAnswer("three"));
//                document.getElementById("iconAnswer3").innerHTML = "<i class='fa-solid fa-plus'></i>";
//            }
//            else if (number == "four"){
//                document.getElementById("answer4").innerHTML = "";
//                // getAnswer4_click.removeEventListener("click", () => closeAnswer("four"));
//                // getAnswer4_click.addEventListener("click", () => getAnswer("four"));
//                document.getElementById("iconAnswer4").innerHTML = "<i class='fa-solid fa-plus'></i>";
//            }
//        }