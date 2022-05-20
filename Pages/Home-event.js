import React,{useState, useEffect} from "react";
import CustomNavbar from "../components/CustomNavbar";
import FooterErp from "../components/Footer/FooterErp";
import FooterData from "../components/Footer/FooterData";
import Login from "./Login.js";
import Breadcrumb from '../components/Breadcrumb';
import BlogGrid from '../components/Blog/BlogGrid';
import AdminGrid from '../components/Blog/AdminGrid';
import axios from "axios"

const HomeSupport = () => {

    const [user, setUser] = useState(null);



    useEffect(() => {

      let user = JSON.parse(localStorage.getItem('user'));

      if(user){
        setUser(user);
      }
      
    } , [])


    const logout = () => {
      localStorage.removeItem('user');
      setUser(null);
      // console.log("User",user)
    }
    // console.log("User",user)


 
  // Sign in 
  const signin = (user) => {
   
    
      axios.post("http://localhost:5000/singleuserdata", {email:user.email})
      .then(res => {
        // console.log("User",res.data)


        if(res.data.status == "inactive"){
          alert("Profile Deactivated")
        }

        else if (res.data.result == null){
          alert("User not found")
        }

        else if(res.data.result.email == user.email && res.data.result.password == user.password){
          alert("success")
          localStorage.setItem('user', JSON.stringify(res.data.result))
          setUser(res.data.result);
  
          }
          else{
            alert("Invalid email or password")
          }
  


      }).catch(err => {
        console.log(err)
      })

       

      
}


  // Sign in 
  const signup = (user) => {
   
    
    axios.post("http://localhost:5000/signup", user)
    .then(res => {
      // console.log("User",res.data)

      if (res.data.status == 0){
        alert("Email Already Registered")
      }

      else if(res.data.status == 1){
        alert("Account Created")
        localStorage.setItem('user', JSON.stringify(res.data.result))
        setUser(res.data.result);

        }
        else{
          alert("Invalid email or password")
        }



    }).catch(err => {
      console.log(err)
    })

  } 

    




  return (
    <div className="body_wrapper">

    {user == null ?  <Login signin={signin} signup={signup}/>

    : 
    

    user.role == "admin" ?  <div className="body_wrapper">
    <CustomNavbar
    mClass="menu_four hosting_menu"
    nClass="w_menu m-auto"
    slogo="sticky_logo"
    hbtnClass="event_btn"
    logout={logout}
    />
        <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Welcome Admin" />
        <AdminGrid/>
        <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>

    </div>

    :

    <div className="body_wrapper">
            <CustomNavbar
        mClass="menu_four hosting_menu"
        nClass="w_menu m-auto"
        slogo="sticky_logo"
        hbtnClass="event_btn"
        logout={logout}
      />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Jobs And Internships" />
            <BlogGrid/>
            <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>

        </div>


       }
 
 
 
    </div>
  );
};
export default HomeSupport;
