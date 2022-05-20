const express = require("express");
const bd = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
let authModel = require("./models/authSchema");
const bcrypt = require("bcryptjs");
const jobModel = require("./models/jobSchema");
const jobApplyModel = require("./models/jobApplySchema");

const app = express();
const port = 5000;

app.use(cors());
app.use(
  bd.urlencoded({
    extended: false,
  })
);

app.use(bd.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.az1sv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Database connected");
});
mongoose.connection.on("error", () => {
  console.log("Database connection error");
});

app.get("/", (req, res) => {
  res.send("working root route");
  console.log("Response working");
});

app.post("/signup", async (req, res) => {
  var checkUser = await authModel.findOne({ email: req.body.email });
  if (checkUser) {
    res
      .status(200)
      .send({ result: checkUser, message: "Email already registered" ,status:0});
  } else {
    // res.send({ message: "Yes you can sign up" });
    // var hashPass = await bcrypt.hash(req.body.password, 12);

    let userCreate = new authModel({
      username:req.body.username,
      email: req.body.email,
      password: req.body.password,
      companyname: req.body.companyname,
      role: req.body.role,
      status: "active",
      address: req.body.address,
      phone: req.body.phone
    });

    userCreate
      .save()
      .then((response) => {
        // console.log("Response",response)
        res.status(200).send({
          result: response,
          message: "User Created successfully",
          status:1
        });
      })
      .catch((error) => {
        res.status(400).send({
          result: error.message,
          message: "User not Created successfully",
        });
        console.log("error", error);
      });
  }

  console.log(req.body);
  // res.send("Signup successfull ")
});


app.post("/singleuserdata", async (req, res) => {
  var finduser = await authModel.findOne({ email: req.body.email });
  console.log(finduser)
  
  if (finduser && finduser.status == "inactive") {

      res.status(200).send({
        result: finduser,
        message: "Profile Deactivated",
        status:"inactive"
      });
  }
  
  else if (finduser) {


    res
      .status(200)
      .send({ result: finduser, message: "User exist", status:"active" });
  } else if(finduser == null) {
    
        res.status(200).send({
          result: finduser,
          message: "User Does not Exist",
          status:"notexist"

      })
    }
      else {
        res.status(400).send({
          result: error.message,
          message: "Something went wrong",
          status:"error"
        });
        console.log("error", error);
  }

  console.log(req.body);
  // res.send("Signup successfull ")
});




app.get("/getallusers", async (req, res) => {
  var getusers = await authModel.find({});
  console.log(getusers)
  
   if (getusers) {

    res
      .status(200)
      .send({ result: getusers, message: "Users exist", status:"active" });
  } else if(finduser == null) {
    
        res.status(200).send({
          result: getusers,
          message: "Users Does not Exist",
          status:"notexist"

      })
    }
      else {
        res.status(400).send({
          result: error.message,
          message: "Something went wrong",
          status:"error"
        });
        console.log("error", error);
  }

  console.log(req.body);
  // res.send("Signup successfull ")
});







app.post("/createjob", async (req, res) => {


    let jobCreate = new jobModel({
      name:req.body.name,
      title:req.body.title,
      status:req.body.status,
      type:req.body.type,
      companyname:req.body.companyname,
      date:req.body.date,
      description:req.body.description,
      role:req.body.role,
      email:req.body.email
    });

    jobCreate
      .save()
      .then((response) => {
        // console.log("Response",response)
        res.status(200).send({
          result: response,
          message: "Job Created successfully",
        });
      })
      .catch((error) => {
        res.status(400).send({
          result: error.message,
          message: "Job not Created successfully",
        });
        console.log("error", error);
      });

  console.log(req.body);
  // res.send("Signup successfull ")
});








app.post("/applyjob", async (req, res) => {


  let jobApplyCreate = new jobApplyModel({
    username:req.body.username,
    title:req.body.title,
    status:req.body.status,
    type:req.body.type,
    companyname:req.body.companyname,
    date:req.body.date,
    description:req.body.description,
    useremail:req.body.useremail,
    companyemail:req.body.companyemail
  });

  jobApplyCreate
    .save()
    .then((response) => {
      // console.log("Response",response)
      res.status(200).send({
        result: response,
        message: "Applied to job successfully",
      });
    })
    .catch((error) => {
      res.status(400).send({
        result: error.message,
        message: "Failed to apply for job",
      });
      console.log("error", error);
    });

console.log(req.body);
// res.send("Signup successfull ")
});












app.get("/getjobs", async (req, res) => {

  var getJobs = await jobModel.find();
  // console.log(finduser)
  if (getJobs) {
    res
      .status(200)
      .send({ result: getJobs, message: "Jobs exist" });
  } else if(getJobs == null) {
    
        res.status(200).send({
          result: getJobs,
          message: "Jobs Does not Exist",
      })
    }
      else {
        res.status(400).send({
          result: error.message,
          message: "Something went wrong",
        });
        console.log("error", error);
  }

  console.log(req.body);
  // res.send("Signup successfull ")
});






app.post("/getspecificuserjobs", async (req, res) => {

  var getJobs = await jobApplyModel.find({email:req.body.email});
  // console.log(finduser)
  if (getJobs) {
    res
      .status(200)
      .send({ result: getJobs, message: "Current User Jobs exist" });
  } else if(getJobs == null) {
    
        res.status(200).send({
          result: getJobs,
          message: "Current User Jobs Does not Exist",
      })
    }
      else {
        res.status(400).send({
          result: error.message,
          message: "Something went wrong",
        });
        console.log("error", error);
  }

  console.log(req.body);
  // res.send("Signup successfull ")
});



app.post("/deletespecificjob", async (req, res) => {

  var getJob = await jobModel.findOneAndDelete({email:req.body.email,companyname:req.body.companyname,title:req.body.title,name:req.body.name});
  // console.log(finduser)
  if (getJob) {
    res
      .status(200)
      .send({ result: getJob, message: "Job exist" });
  } else if(getJob == null) {
    
        res.status(200).send({
          result: getJob,
          message: "Job Does not Exist",
      })
    }
      else {
        res.status(400).send({
          result: error.message,
          message: "Something went wrong",
        });
        console.log("error", error);
  }

  console.log(req.body);
  // res.send("Signup successfull ")
});



app.post("/updateprofile", async (req, res) => {
  var finduser = await authModel.findOneAndReplace({ email: req.body.email },{
    username:req.body.username,
    email: req.body.email,
    password: req.body.password,
    companyname: req.body.companyname,
    role: req.body.role,
    status: req.body.status,
    address: req.body.address,
    phone: req.body.phone
  });
  if (finduser) {
    res
      .status(200)
      .send({ result: finduser, message: "User Updated" ,success:"1"});
  } else {
    
        res.status(200).send({
          result: response,
          message: "User Does not Exist",
      })
      .catch((error) => {
        res.status(400).send({
          result: error.message,
          message: "Something went wrong",
        });
        console.log("error", error);
      });
  }

  console.log(req.body);
  // res.send("Signup successfull ")
});










app.post("/deleteuser", async (req, res) => {
  var finduser = await authModel.findOneAndDelete({ email: req.body.email });
  if (finduser) {
    res
      .status(200)
      .send({ result: finduser, message: "User Deleted" ,success:"1"});
  } else {
    
        res.status(200).send({
          result: response,
          message: "User Does not Exist",
      })
      .catch((error) => {
        res.status(400).send({
          result: error.message,
          message: "Something went wrong",
        });
        console.log("error", error);
      });
  }

  console.log(req.body);
  // res.send("Signup successfull ")
});










app.listen(port, () => {
  console.log("Server running at port 5000:");
});
