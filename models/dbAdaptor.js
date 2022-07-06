const { request } = require('express');
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);



async function loginUser(details){ // Verify login 
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var query = { ID: String(details.ID), password: String (details.password) };
  var col = client.db("appleStore").collection("Users");
  var result = await col.findOne(query);
  client.close();
  console.log(result)
  return result;
}
exports.loginUser=loginUser;



async function saveClient(details){  // save new customers
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("appleStore").collection("Users");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.saveClient = saveClient;




  async function saveManager(details){  // save new customers
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("appleStore").collection("Users");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.saveManager = saveManager;


  async function saveorder(details){  //save new order
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("appleStore").collection("Orders");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }

  exports.saveorder=saveorder;

  async function getproduct(){  // show iphone collection
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("appleStore");
    let collection = db.collection('Products');
    let res = await collection.find({}).toArray();
    client.close();
    return res;
  }
  

  exports.getproduct = getproduct;

  async function getmac(){  //show imac collection
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("appleStore");
    let collection = db.collection('imac');
    let res = await collection.find({}).toArray();
    client.close();
    return res;
  }
  

  exports.getmac = getmac;

  async function getwatch(){  //show watch collection
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("appleStore");
    let collection = db.collection('watch');
    let res = await collection.find({}).toArray();
    client.close();
    return res;
  }
  
  exports.getwatch = getwatch;

  async function SaveNewIphone(details){  // save new iPhone to mongo
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("appleStore").collection("Products");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.SaveNewIphone = SaveNewIphone;

  async function SaveNewImac(details){  // save new iMac to mongo
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("appleStore").collection("imac");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.SaveNewImac = SaveNewImac;
  
  async function SaveNewIwatch(details){  // save new iWatch to mongo
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("appleStore").collection("watch");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.SaveNewIwatch = SaveNewIwatch;
  
  async function GetOpenOrders(){  // find open orders
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var dbo = client.db("appleStore");
    var query = { status: "open" };
    let collection= dbo.collection('Orders');
    let res=await collection.find(query).toArray() 
    client.close();
    return res;
  };
  exports.GetOpenOrders = GetOpenOrders;

  async function getUsers(){  // get all the exist users
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var dbo = client.db("appleStore");
    let collection= dbo.collection('Users');
    let res=await collection.find({}).toArray() 
    client.close();
    return res;
  };
  exports.getUsers = getUsers;



  async function closeOrders(details){  // mark order as completed
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var date=new Date()
    var split_date=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()
    var dbo = client.db("appleStore");
    var myquery = { name: details };
    var newvalues = { $set: { status: "Close",close_date:split_date } };
    let collection= dbo.collection('Orders');
    let res=await collection.updateOne(myquery,newvalues);
    client.close();
    return res;
  };
  exports.closeOrders = closeOrders;

  async function deleteUser(details){  //delete user
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var dbo = client.db("appleStore");
    var myquery = { ID: details };
    let collection= dbo.collection('Users');
    let res=await collection.deleteOne(myquery);
    client.close();
    return res;
  };
  exports.deleteUser = deleteUser;


  async function saveNewOrder(details){   //add products to cart
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("appleStore").collection("orderDetails");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.saveNewOrder = saveNewOrder;

  async function getOrderDetails(){  //show my cart 
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("appleStore");
    let collection = db.collection('orderDetails');
    let res = await collection.find({}).toArray();
    client.close();
    return res;
  }
  exports.getOrderDetails=getOrderDetails;



  async function deleteOrder(){  //delete cart after purchase 
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("appleStore");
    var myquary= {name: /^i/}
    let collection = db.collection('orderDetails');
    let res = await collection.deleteMany(myquary);
    client.close();
    return res;
  }
  exports.deleteOrder=deleteOrder;

