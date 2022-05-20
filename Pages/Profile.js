import React,{useState, useEffect} from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import FooterErp from '../components/Footer/FooterErp';
import FooterData from '../components/Footer/FooterData';
import StartupFeatures from '../components/Features/StartupFeatures';

const Dashboard = (props) => {

  // console.log("dashboard",props)


    const [user, setUser] = useState(null);



    useEffect(() => {

      let user = JSON.parse(localStorage.getItem('user'));

      if(user){
        setUser(user);
      }
      else{
        props.history.push('/')
      }
      
    } , [])


    const logout = () => {
      localStorage.removeItem('user');
      setUser(null);
      // console.log("User",user)
      props.history.push('/')

    }
    // console.log("User",user)


 

    return(
        <div className="body_wrapper">




            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" 
            logout={logout}
            
            />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle={`Welcome ${user !==null && user.username}`} />
          {user ?  <StartupFeatures props={props} user={user}/> : null}

          <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>


        </div>
    )
}
export default Dashboard;