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

function showAdminIphone() { //create table to add new iphone
    fetch("/getiphone")
      .then((response) => response.text())
      .then((data) => {
        var iphoneTypes = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th >Name</th>
              <th>Color</th>
              <th>Image</th>
              <th>Price $</th>

              
            
          </tr>
      </table>`;
        iphoneTypes.forEach((element) => {
          myTables += `
                  <table class="styled-table" >
                 
                      <tr>
                          <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                          <td><input type="hidden" name="color" value="${element.color}">${element.color}</td>
                         
                          <td ><input type="hidden" name="img" value="${element.img}">
                          <img src="./images/${element.img}.jpg" alt="${element.img}" width="150" height="120">
                          </td>
                          <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>

                      </tr>
                      </table>
                  
                  `;
        });
        document.getElementById("myphone").innerHTML = myTables;
      });
  }

  function showAdminIwatch() { //create table to add new iWatch
    fetch("/getwatch")
      .then((response) => response.text())
      .then((data) => {
        var watchTypes = JSON.parse(data);
        var myTables = `<table class="styled-table">
          <tr>

          <th>Name</th>
          <th>Color</th>
          <th>Image</th>
          <th>Price $</th>

        
      </tr>
  </table>`;
        watchTypes.forEach((element) => {
          myTables += `
        

    <table class="styled-table" >
   
        <tr>
            <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
            <td><input type="hidden" name="color" value="${element.color}">${element.color}</td>
           
            <td ><input type="hidden" name="img" value="${element.img}">
            <img src="./images/${element.img}.jpg" alt="${element.img}" width="150" height="120">
            </td>
            <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>


        </tr>

        </table>
                  `;
        });
        document.getElementById("mywatch").innerHTML = myTables;
      });
  }

  function showAdminImac() { //create table to add new iMac
    fetch("/getimac")
      .then((response) => response.text())
      .then((data) => {
        var macTypes = JSON.parse(data);
        var myTables = `<table class="styled-table">
                  <tr>
                  <th>Name</th>
                  <th>Color</th>
                  <th>Image</th>
                  <th>Price $</th>

                
              </tr>
          </table>`;
        macTypes.forEach((element) => {
          myTables += `

                  <table class="styled-table" >
                 
                      <tr>
                          <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                          <td><input type="hidden" name="color" value="${element.color}">${element.color}</td>
                         
                          <td ><input type="hidden" name="img" value="${element.img}">
                          <img src="./images/${element.img}.jpg" alt="${element.img}" width="150" height="120">
                          </td>
                          <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>
                      </tr>

                      </table>
          `;
        });
        document.getElementById("myData").innerHTML = myTables;
      });
  }


  
  function openFormAddNewIphone() { //form to add new iphone
    document.getElementById("myFormProduct").style.display = "block";
  }
  
  function openFormAddNewImac() { //form to add new iMac
    document.getElementById("myFormNewImac").style.display = "block";
  }
  
  function openFormAddNewIwatch() { //form to add new iWatch
    document.getElementById("myFormNewIwatch").style.display = "block";
  }
  

  
  function closeFormAddNewIphone() { //close the form
    document.getElementById("myFormProduct").style.display = "none";
  }
  
  function closeFormAddNewImac() { //close the form
    document.getElementById("myFormNewImac").style.display = "none";
  }
  
  function closeFormAddNewIwatch() { //close the form
    document.getElementById("myFormNewIwatch").style.display = "none";
  }

  


function showOpenOrders() { // create table to see all the open orders
    fetch("/getOpenOrders")
      .then((response) => response.text())
      .then((data) => {
        var OrdersTypes = JSON.parse(data);
        var myTables = `<table class="styled-table-openOrders" >
            <tr>
            <th style="width:100px">Name </th>
            <th style="width:100px">Address</th>
            <th style="width:100px">City</th>
            <th style="width:100px">Status</th>
            <th style="width:130px">Order date</th>
            <th style="width:100px">Order_close</th>
  
        </tr>
    </table>`;
        OrdersTypes.forEach((element) => {
          myTables += ` <form action ="/getclose">
                    <table class="styled-table-openOrders" >
   
                        <tr>
                        <td><input type="hidden" name="_id" value="${element._id}></td>
                            <td style="width:100px"><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                            <td style="width:130px">${element.address}</td>
                            <td style="width:100px">${element.city}</td>
                            <td style="width:100px">${element.status}</td>
                            <td style="width:100px">${element.order_date}</td>
                            <td> <button onclick="closeOrder()"> Close order</button></td>
                            
                        </tr>
                     
                        </table>
                        </form>
                    `;
        });
        document.getElementById("OpenOrders").innerHTML = myTables;
      });
  }


  function showUsers() { // create table to see all the exist users
    fetch("/getusers")
      .then((response) => response.text())
      .then((data) => {
        var userTypes = JSON.parse(data);
        var myTables = `<table class="styled-table-openOrders" >
            <tr>
            <th style="width:100px">Name </th>
            <th style="width:100px">Id</th>
            <th style="width:100px">Email</th>
            <th style="width:100px">User</th>
            <th style="width:100px">Delete</th>
        </tr>
    </table>`;
       userTypes.forEach((element) => {
          myTables += ` <form action="/delete">
                    <table class="styled-table-openOrders" >
   
                        <tr>
                            <td style="width:100px"><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                            <td style="width:130px"><input type="hidden" name="ID" value="${element.ID}">${element.ID}</td>
                            <td style="width:100px">${element.email}</td>
                            <td style="width:100px">${element.user}</td>
                            <td> <button onclick="deleteUser()"> Delete User</button></td>
                            
                        </tr>
                     
                        </table>
                        </form>
                    `;
        });
        document.getElementById("activeUsers").innerHTML = myTables;
      });
  }

