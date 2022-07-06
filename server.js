const {Router} = require('express')
const express = require('express')

const {Collection} = require('mongodb')
const app = express()
const port = 3000
const mydb = require('./models/dbAdaptor.js')



app.use(express.static('public'))

app.get('/addCustomers', (req, res) => { //add new customer
  var newClient =
  {
    name: req.query.name,
    ID: req.query.id,
    email: req.query.email,
    password: req.query.password,
    user:"customer"
  }
  async function mysave(details) {
    await mydb.saveClient(details).then((result) => res.redirect('CustomerIndex.html?#'));
  }
  mysave(newClient);

})

app.get('/addmanager', (req, res) => { // add new user by admin
  var newManager =
  {
    ID: req.query.id,
    email: req.query.email,
    password: req.query.password,
    user: req.query.user,
    name: req.query.name
    
  }
  async function mysave(details) {
    await mydb.saveManager(details).then((result) => res.redirect('adminindex.html'));
  }
  mysave(newManager);

})

app.get('/addorder', (req, res) => { // add order to mongo
   var date=new Date()
   var split_date=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()
  var neworder =
  {
    name: req.query.name,
    address: req.query.address,
    city: req.query.city,
    order_date:split_date,
    status:"open",
    nameProduct:req.query.nameProduct,
    priceProduct:req.query.priceProduct,
    quantityProduct:req.query.quantityProduct
  }
  async function myorder(details) {
    await mydb.saveorder(details).then((result) => res.redirect('http://localhost:3000/thankYou.html'));
  }
  myorder(neworder);

})

app.get("/getiphone", (req, res) => { //show all the iphone products
  async function getData() {
    await mydb.getproduct().then((result) => res.send(result));
  }
  getData();
});




app.get("/getimac", (req, res) => { //show all the imac products
  async function myData() {
    await mydb.getmac().then((result) => res.send(result));
  }
  myData();
});

app.get("/getwatch", (req, res) => { //show all the iwatch products
  async function watchData() {
    await mydb.getwatch().then((result) => res.send(result));
  }
  watchData();
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

app.get('/NewProduct', (req, res) => { //save new iPhone
  var newProduct =
  {
    name: req.query.name,
    color: req.query.color,
    price: req.query.price,
    img: req.query.img
  }
  async function addProduct(details) {
    await mydb.SaveNewIphone(details).then((result) => res.redirect('adminindex.html'));
  }
  addProduct(newProduct);

})

app.get('/NewImac', (req, res) => { //save new iMac
  var newImac =
  {
    name: req.query.name,
    color: req.query.color,
    price: req.query.price,
    img: req.query.img
  }
  async function addImac(details) {
    await mydb.SaveNewImac(details).then((result) => res.redirect('adminindex.html'));
  }
  addImac(newImac);

})

app.get('/NewIwatch', (req, res) => { //save new iWatch
  var newIwatch =
  {
    name: req.query.name,
    color: req.query.color,
    price: req.query.price,
    img: req.query.img
  }
  async function addIwatch(details) {
    await mydb.SaveNewIwatch(details).then((result) => res.redirect('adminindex.html'));
  }
  addIwatch(newIwatch);

})

app.get("/getOpenOrders", (req, res) => { //get open orders from mongo
  async function getOrders() {
    await mydb.GetOpenOrders().then((result) => res.send(result));
  }
  getOrders();
});


app.get("/getusers", (req, res) => { //get exist users from mongo
  async function users() {
    await mydb.getUsers().then((result) => res.send(result));
  }
 users();
});


app.get("/getclose", (req, res) => { //mark order as completed by name

  var close = req.query.name

  async function getclose(details) {
    await mydb.closeOrders(details).then((result) => res.redirect('adminindex.html'));
  }
  getclose(close);
});

app.get("/delete", (req, res) => { //delete user

  var Delete = req.query.ID

  async function getclose(details) {
    await mydb.deleteUser(details).then((result) => res.redirect('adminindex.html'));
  }
  getclose(Delete);
});

app.get('/addNewOrder', (req, res) => { // get order details to the cart
  var order =
  {
    name: req.query.name,
    color:req.query.color,
    quantity: req.query.quantity,
    price: req.query.price,
    img:req.query.img,
    total: req.query.price*req.query.quantity, 
  }
  async function mysave(details) {
    await mydb.saveNewOrder(details).then((result) => res.redirect('CustomerIndex.html'));
  }
  mysave(order);

})


app.get("/getorder", (req, res) => { // get Order Details
  async function myData() {
    await mydb.getOrderDetails().then((result) => res.send(result));
  }
  myData();
});

app.get("/deleteLastOrder", (req, res) => { // delete the cart

  async function deleteLast() {
    await mydb.deleteOrder().then((result) => res.redirect('CustomerIndex.html'));
  }
  deleteLast();
});


app.get("/login",async(req,res)=>{ // Verify login by id
  var User =
   {
    ID:req.query.ID,
    password :req.query.password,
  }
  async function myUser(details){
    await mydb.loginUser(details).then((result)=>{
      console.log("result:" , result);
      if (result == null){
        res.redirect('index.html')
      }
      else {
        for (const [key, value] of Object.entries(result)) {
        if (key == "user") {
          console.log(value);
          if (value.includes("admin")) {
            res.redirect('adminindex.html');
          }
          else {
            res.redirect('CustomerIndex.html?#');
          }
        }
        }
      }
    })};


  await myUser(User);
 console.log(User)
});










