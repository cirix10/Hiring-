import React,{useState, useEffect} from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Contacts from '../components/Contacts';
import FooterErp from '../components/Footer/FooterErp';
import FooterData from '../components/Footer/FooterData';
import Login from "./Login.js";

const About = () => {


    const [user, setUser] = useState(null);



    useEffect(() => {

      let user = JSON.parse(localStorage.getItem('user'));
      // console.log(user)

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


 
  // Sign in with google
  const signin = (user) => {
 
        
     
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user);

   
   
}





    return(
        <div className="body_wrapper">

{user == null ?  <Login signin={signin}/>

:   <div>

            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" logout={logout}/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Contact Us" Pdescription="Have a question? Get in touch with Admin."/>
            <Contacts/>
            <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>
        </div>}


        </div>
    )
}
export default About;