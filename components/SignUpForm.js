import React,{useState} from 'react';


const SignUpForm =({show,signup})=>{


    const [userData , setUserData] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }


    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">Already have an account?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br/> starting using our <br/><span className="f_700">amazing</span> products</h2>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Create Job Posts</li>
                                    <li><i className="ti-check"></i>Unlimited Applicants to choose</li>
                                    <li><i className="ti-check"></i>Reliable and faster process</li>
                                </ul>
                                <button type="button" onClick={() => show(false)} className="btn_three sign_btn_transparent">Sign In</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                                <form action="#" className="login-form sign-in-form">
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Username</label>
                                        <input type="text" onChange={(e) => handleChange(e)} value={userData.username} name="username" placeholder="Name"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input type="text" onChange={(e) => handleChange(e)} value={userData.email} name="email" placeholder="abc@gmail.com"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input type="password" onChange={(e) => handleChange(e)} value={userData.password} name="password" placeholder="******"/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Address</label>
                                        <input type="text" onChange={(e) => handleChange(e)} value={userData.address} name="address" placeholder="Address"/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Phone</label>
                                        <input type="text" onChange={(e) => handleChange(e)} value={userData.phone} name="phone" placeholder="Phone"/>
                                    </div>



                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Role</label>                    
                                        <select style={{color:"#222d39",borderRadius:"4px",backgroundColor:"white",border:"1px solid #fff",paddingLeft:"30px",marginLeft:"30px"}} name="role" onChange={(e) => handleChange(e)} value={userData.role} >
                                        <option value="">Select Role</option>
                                        <option value="applicant">Applicant</option>
                                        <option value="company">Company</option>
                                        </select>
                                    </div>


                                    {
                                    userData.role == "company" ?  <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Company Name</label>
                                        <input type="text" onChange={(e) => handleChange(e)} value={userData.companyname} name="companyname" placeholder="Name"/>
                                    </div>
                                    
                                    : null
                                }



                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox"/> I agree to terms and conditions of this website
                                            </label>
                                        </div>
                                        
                                        <div className="forgotten-password">
                                            <a href="/#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button 
                                        
                                        disabled={userData.username !=undefined && userData.email !=undefined && userData.password !=undefined && userData.address !=undefined && userData.phone !=undefined && userData.role !=undefined ? false : true}
                                        
                                        type="button" onClick={() => signup(userData)} className="btn_three">Sign Up</button>
                                        <div className="social_text d-flex ">
                                            <div className="lead-text">Or Sign up Using</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="/#"><i className="ti-google"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignUpForm;