function fetchPage(whatPage) { //fetch page
  fetch(whatPage)
    .then((response) => response.text())
    .then((data) => (document.getElementById("body").innerHTML = data));
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) { //show Slides
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showIphone() { //create table for iphone products
  fetch("/getiphone")
    .then((response) => response.text())
    .then((data) => {
      var iphoneTypes = JSON.parse(data);
      var myTables = `<table class="styled-table" >
            <tr>
            <th></th>
            <th >Name</th>
            <th>Color</th>
            <th>Image</th>
            <th>Price $</th>
            <th>Quantity</th>
            <th> </th>
            
          
        </tr>
    </table>`;
      iphoneTypes.forEach((element) => {
        myTables += `<datalist id="quantity">
                      <option value ="1">
                      <option value ="2">
                      <option value ="3">
                      <option value ="4">
                      </datalist>
                      <form action="/addNewOrder">
                <table class="styled-table" >
               
                    <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                        <td><input type="hidden" name="color" value="${element.color}">${element.color}</td>
                       
                        <td ><input type="hidden" name="img" value="${element.img}">
                        <img src="./images/${element.img}.jpg" alt="${element.img}" width="150" height="120">
                        </td>
                        <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>
                        <td>
                        <input list="quantity" id="quantity" placeholder="quantity" name="quantity" required></td>
                        <td><button onclick="openForm(),saveNewOrder()">Add To cart</button></td>
                    </tr>
                    </form>
                    </table>
                
                `;
      });
      document.getElementById("myphone").innerHTML = myTables;
    });
}

function showIwatch() { //create table for iWatch products
  fetch("/getwatch")
    .then((response) => response.text())
    .then((data) => {
      var watchTypes = JSON.parse(data);
      var myTables = `<table class="styled-table">
        <tr>
        <th></th>
        <th>Name</th>
        <th>Color</th>
        <th>Image</th>
        <th>Price $</th>
        <th>Quantity</th>
        <th> </th>
      
    </tr>
</table>`;
      watchTypes.forEach((element) => {
        myTables += `
        <datalist id="quantity">
        <option value ="1">
        <option value ="2">
        <option value ="3">
        <option value ="4">
        </datalist>
        <form action="/addNewOrder">
  <table class="styled-table" >
 
      <tr>
          <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
          <td><input type="hidden" name="color" value="${element.color}">${element.color}</td>
         
          <td ><input type="hidden" name="img" value="${element.img}">
          <img src="./images/${element.img}.jpg" alt="${element.img}" width="150" height="120">
          </td>
          <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>
          <td>
          <input list="quantity" id="quantity" placeholder="quantity" name="quantity" required></td>
          <td><button onclick="openForm(),saveNewOrder()">Add To cart</button></td>
      </tr>
      </form>
      </table>
                `;
      });
      document.getElementById("mywatch").innerHTML = myTables;
    });
}

function showImac() { //create table for iMac products
  fetch("/getimac")
    .then((response) => response.text())
    .then((data) => {
      var macTypes = JSON.parse(data);
      var myTables = `<table class="styled-table">
                <tr>
                <th></th>
                <th>Name</th>
                <th>Color</th>
                <th>Image</th>
                <th>Price $</th>
                <th>Quantity</th>
                <th> </th>
              
            </tr>
        </table>`;
      macTypes.forEach((element) => {
        myTables += `
        <datalist id="quantity">
                      <option value ="1">
                      <option value ="2">
                      <option value ="3">
                      <option value ="4">
                      </datalist>
                      <form action="/addNewOrder">
                <table class="styled-table">
               
                    <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                        <td><input type="hidden" name="color" value="${element.color}">${element.color}</td>
                       
                        <td ><input type="hidden" name="img" value="${element.img}">
                        <img src="./images/${element.img}.jpg" alt="${element.img}" width="150" height="120">
                        </td>
                        <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>
                        <td>
                        <input list="quantity" id="quantity" placeholder="quantity" name="quantity" required></td>
                        <td><button onclick="openForm(),saveNewOrder()">Add To cart</button></td>
                    </tr>
                    </form>
                    </table>
        `;
      });
      document.getElementById("myData").innerHTML = myTables;
    });
}



function showorder() { //show the cart
  fetch("/getorder")
    .then((response) => response.text())
    .then((data) => {
      var Types = JSON.parse(data);
      var myTables = `
      <table class="styled-table">
                <tr>
                <th> Name </th>
                <th>&nbsp Image</th>
                <th>&nbsp Price $</th>
                <th>&nbsp Quantity</th>
                <th>&nbsp Total</th>
              
            </tr>
        </table>
        `;
      Types.forEach((element) => {
        myTables += ` 
                <table class="styled-table" >
                    <tr>
                    <td><input type="hidden" name="nameProduct" value="${element.name}">${element.name}</td>
                        <td ><input type="hidden" name="img" value="${element.img}">
                        <img src="./images/${element.img}.jpg" alt="${element.img}" width="150" height="120">
                        </td>
                        <td><input type="hidden" name="priceProduct" value="${element.price}"> ${element.price}</td>
                        <td><input type="hidden" name="quantityProduct" value="${element.quantity}"> ${element.quantity}</td>
                        <td><input type="hidden" name="total" value="${element.total}"> ${element.total}</td>
                    </tr>
                    </table>
                    `; 
         
                    
      });
      document.getElementById("myOrder").innerHTML = myTables;
    });
}


function getval(){ //search by category name
  const val = document.querySelector('input').value;
  if(val.toLowerCase() === "iphone"){
    fetchPage('iphone.html'),showIphone();
  }
  if (val.toLowerCase() === "imac"){
    fetchPage('mac.html'),showImac();
  }
  if (val.toLowerCase() === "iwatch") {
    fetchPage('watch1.html'),showIwatch();
  }
  if (val.toLowerCase() != "iphone" && val.toLowerCase() != "imac" && val.toLowerCase() != "iwatch"){
    alert('no '+ val+ ' product')
  } 

}

