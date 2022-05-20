import React,{useState} from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import FooterErp from '../components/Footer/FooterErp';
import FooterData from '../components/Footer/FooterData';

const Login = ({signin, signup}) => {

    const [register, setRegister] = useState(false);


    return(
        <div className="body_wrapper">
            {/* <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/> */}
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sign Up or Login"/>
           
           
           
           { 

           register ? <SignUpForm show={setRegister} signup={signup}/> : <SignInForm show={setRegister} signin={signin}/>
           
           }
           
           
           
           
           
           
           
           <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>

        </div>
    )
}
export default Login;