const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const multer = require("multer");
const nodemailer = require("nodemailer");

app.set("views", path.join(__dirname, "views"));

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "/public")));

//Create connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "realstate",
});

// node mailer

//connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

// //multer
var imagename = "";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    console.log(file);

    imagename = Date.now() + path.extname(file.originalname) + "";
    console.log(imagename);
    cb(null, imagename);
  },
});
const fileFilter = (req, file, cb) => {
  // if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// app.get('/Admin_home',(req, res)=>{
//   res.render("Admin_home");
// });
// app.get('/Customer_Home',(req, res)=>{
//   res.render("Customer_Home");
// });

//route for homepage
app.get("/showproperty", (req, res) => {
  let sql = "SELECT * FROM property";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// //register data
app.post("/register", (req, res) => {
  let data = {
    name: req.body.name,
    password: req.body.password,
    type: req.body.type,
    email: req.body.email,
  };
  let sql = "insert into login set?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect("/login");
  });
});

// //login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const type = req.body.type;
  conn.query(
    "SELECT * FROM login WHERE email= ? AND password=? and type=?",
    [email, password, type],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "wrong username/password/type" });
      }
    }
  );
});

//route for update
app.post("/update", function (req, res) {
  let sql =
    "update property set property_name='" +
    req.body.name +
    "',property_price=" +
    req.body.price +
    " where property_id=" +
    req.body.id;
  console.log(sql);
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/showproperty");
  });
});

//route for delete
app.get("/propertydelete/:id", function (req, res) {
  const id = req.params.id;
  console.log(id);
  let sql = "DELETE FROM property WHERE property_id=" + id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/showproperty");
  });
});
//add cart

app.post("/propertybuy", upload.single("file"), (req, res) => {
  let data = {
    customer_name: "ashwani",
    property_id: req.body.id,
    property_image: imagename,
    property_price: req.params.price,
  };
  console.log(data);
  let sql = "INSERT INTO property_add set?";

  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//edit
app.get("/propertyedit/:id", function (req, res) {
  const id = req.params.id;
  console.log(id);
  let sql = "select * FROM property WHERE property_id=" + id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// route for homepage show cart
// app.get('/showcart',(req, res)=>{
//   console.log("jas")
//   let sql = "SELECT product.product_id,product_name,product_price,cart.qty,product.product_image FROM product,cart where product.product_id=cart.product_id";
//   let query = conn.query(sql,(err, results)=>{
//     if(err) throw err;
//     console.log(results)
//     res.json(results);
//   });
// });
// route for update
app.post("/updatecart", (req, res) => {
  if (req.body.qty > 0) {
    let sql =
      "UPDATE cart SET qty=" +
      req.body.qty +
      " WHERE property_id=" +
      req.body.id;
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.json({ data: "okk report" });
    });
  } else {
    let sql = "DELETE FROM cart WHERE property_id=" + req.body.id;
    let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect("/showcart");
    });
  }
});
// // route for payment
// app.post('/payment',async(req,res)=>{
//   //console.log(req.body.products);
//   let dt = new Date().toDateString();
//   let data1={customer_name:req.body.cname,amount:req.body.amount,bill_date:dt}
//   let sql= "INSERT INTO bill SET ?";
//   //await db.query(queryString).catch(err =>{throw err});
//   let promise = new Promise((resolve,reject)=>{
//     conn.query(sql,data1,async(err,resultSet)=>{
//       if(err) reject(err);
//       resolve(resultSet);
//     });
//   });
//   let result= await promise;
//   console.log(result);
//   console.log("hello");
//   console.log("done promise");
//   let data ={customer_name:req.body.cname,cardno:req.body.cardno,amount:req.body.amount};
//   console.log(data);
//   sql ="INSERT INTO payment SET ?";
//   conn.query(sql,data,(err,results)=>{
//     if(err) throw err;
//     res.json(results)
//   });
//   var billno=10;
//   let s ="select max(billno) 'billno' FROM bill";
//   let promise1= new Promise((resolve,reject)=>{
//     conn.query(s, async(err, results)=>{
//       if(err) throw err;
//       resolve(results);

//       //console.log("billno="+billno)
//     });
//   });
//   let myresult =await promise1;
//   billno =myresult[0].billno;
//   let o= JSON.parse(req.body.products);
//   console.log("billno"+billno)
//   console.log(o);
//   for(x in o)
//   {
//     console.log(o[x]);
//     let sql ="INSERT INTO bill_items values("+billno+","+o[x].product_id+","+o[x].qty+","+o[x].product_price+")";
//     console.log(sql);
//     let query = conn.query(sql,data,(err, results)=>{
//       if(err) throw err;

//     });
//   }
// });

// // route for bill and generate bill
// app.post('/bill',(req,res)=>{
//   console.log("generating bill")
//   let cname =req.body.cname;
//   console.log(cname);
//   let sql = "select bill.billno,customer_name,amount,product.product_id,product_name,product_qty,bill_items.product_price from bill,bill_items,product where bill.billno= bill_items.billno and bill_items.product_id=product.product_id and customer_name='"+cname+"'";

//   let query = conn.query(sql,(err,result)=>{
//     if(err) throw err;

//     res.json(result)
//     console.log(result);
//   });
// });

//route for insert data
app.post("/saveproperty", upload.single("file"), (req, res) => {
  let data = {
    property_name: req.body.property_name,
    property_price: req.body.property_price,
    property_image: imagename,
  };
  console.log(data);
  let sql = "INSERT INTO property SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;

    let q = conn.query("select * from property", (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
});
// feedback
app.post("/rate", (req, res) => {
  let data = {
    textarea: req.body.textarea,
    property_id: req.body.id,
    property_name: req.body.property_name,
  };
  console.log(data);
  let sql1 = "INSERT INTO feedback SET ?";
  conn.query(sql1, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//check feedback
app.get("/showfeedback", (req, res) => {
  let sql = "SELECT * FROM feedback";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//search item

app.get("/search", async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const results = await searchQuery(searchTerm);
    res.send(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
//
const searchQuery = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const query =
      `SELECT * FROM property WHERE place LIKE '` + searchTerm + "%'";
    conn.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// show property through search bar

app.get("/showplaceproperty", async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const results = await searchQuery1(searchTerm);
    res.send(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
const searchQuery1 = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM property WHERE place LIKE '${searchTerm}'`;
    conn.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

app.get("/showclients", (req, res) => {
  let sql = "SELECT * FROM login where type='Seller'";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
//show client
app.get("/showclients/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  let sql = "SELECT *  FROM login WHERE id='" + id + "'";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
    console.log(results);
  });
});

//delete side Admin - client
app.get("/clientdelete/:id", function (req, res) {
  const id = req.params.id;
  console.log(id);
  let sql = "DELETE FROM login WHERE type='" + id + "'";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/showclients");
  });
});

// client edit
app.get("/clientedit/:id", function (req, res) {
  const id = req.params.id;
  console.log(id);
  let sql = "select * FROM login WHERE id='" + id + "'";
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//route for update client
app.post("/clientupdate", function (req, res) {
  let sql =
    "update login set name='" +
    req.body.name +
    "',email=" +
    req.body.email +
    " where type=" +
    req.body.type;
  console.log(sql);
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/showclients");
  });
});

// add city route
app.post("/savecity", upload.single("file"), (req, res) => {
  let data = {
    city_name: req.body.city,
    city_image: imagename,
  };
  // console.log(data);
  let sql = "INSERT INTO city SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.json(results);
    // let q = conn.query("select * from city", (err, results) => {
    //   if (err) throw err;
    //   res.json(results);
    // });
  });
});

//show city
app.get("/showcity", (req, res) => {
  let sql = "SELECT * FROM city";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// show data after search type
app.get("/showdata/:valu1", function (req, res) {
  const id = req.params.id;
  console.log(id);
  let sql = "select * FROM login WHERE type='" + id + "'";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// filter
app.get("/showproperty/:data", function (req, res) {
  const id = req.params.id;
  console.log(id);
  let sql = "select * FROM property WHERE place='" + id + "'";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/saveData", upload.single("file"), async function (req, res) {
  let data = {
    property_name: req.body.property_name,
    price: req.body.price,
    property_image: imagename,
    city: req.body.city,
    sector: req.body.sector,
  };
  console.log(data);
  let sql = "INSERT INTO clientProperty SET ?";
  // let testAccount = await nodemailer.createTestAccount();
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   // true for 465, false for other ports
  //   auth: {
  //     user: "bethany.toy@ethereal.email", // generated ethereal user
  //     pass: "VEfqrXM3CaFsSTS4rr", // generated ethereal password
  //   },
  // });
  // let info = await transporter.sendMail({
  //   from: '"Approval Foo 👻" <admin@property24*7.com>', // sender address
  //   to: "ashwanipc1415@gmail.com, baz@example.com", // list of receivers
  //   subject: "Hello ✔", // Subject line
  //   text: "Hello world?", // plain text body
  //   html: "<b>Admin from property 24*7</b>", // html body
  // });
  // console.log("Message sent: %s", info.messageId);
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;

    let q = conn.query("select * from clientProperty", (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
});
// check client property
app.get("/showData", function (req, res) {
  let sql = "select * FROM clientProperty ";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// client edit
// app.get("/rate/:id", function (req, res) {
//   const id = req.params.id;
//   console.log(id);
//   let sql = "select * FROM login WHERE type='" + id + "'";
//   let query = conn.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

//reviews
// app.post('/reviews', function(req,res){
//   const {rating, comment,property_id}=re.body;
//   const review ={
//     user:req.user.username,
//     property_name: req.property_id.property_name,
//     rating: Number(rating),
//     comment
//   }
//   const sql = " select * from property where proprty_id='"+property_id+"'";
//   const isReview = sql.reviews.find(r)
// })

app.listen(4200, () => {
  console.log("listening on port 4200!");
});
