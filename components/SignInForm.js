import React,{useState} from 'react';


const SignInFrom =({show,signin})=>{

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
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">First time here?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Join now and apply for <br/> <span className="f_700">Jobs</span> for all <br/> domains</h2>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Access to all applicants</li>
                                    <li><i className="ti-check"></i>All companies on single platform</li>
                                    <li><i className="ti-check"></i> Unlimited Job offers</li>
                                </ul>
                                <button type="button" onClick={() => show(true)} className="btn_three sign_btn_transparent">Sign Up</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign In</h2>
                                <form action="/#" className="login-form sign-in-form">
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email</label>
                                        <input onChange={(e) => handleChange(e)} name="email" value={userData.email} type="text" placeholder="abc@gmail.com"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input onChange={(e) => handleChange(e)} name="password" value={userData.password} type="password" placeholder="******"/>
                                    </div>
                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox"/> Keep me Signed in
                                            </label>
                                        </div>
                                       
                                        <div className="forgotten-password">
                                            <a href="/#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="button" onClick={() => signin(userData)} className="btn_three">Sign in</button>
                                        <div className="social_text d-flex ">
                                            <div className="lead-text">Don't have an account?</div>
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
export default SignInFrom;