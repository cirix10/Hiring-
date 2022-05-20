import React,{useEffect, useState} from 'react';
import axios from 'axios';

const Bloglists =(props)=>{


    let [user, setUser] = useState(null);

    let [getDate,setDate] = useState({ "01":"Jan", "02":"Feb", "03":"Mar", "04":"Apr", "05":"May", "06":"Jun", "07":"Jul", "08":"Aug", "09":"Sep", "10":"Oct", "11":"Nov", "12":"Dec"});

    let [applyJob, setApplyJob] = useState({
        name:"",
        message:"",
        portfolio:"",
    });

    useEffect(() => {

        let user = JSON.parse(localStorage.getItem('user'));
  
        if(user){
          setUser(user);
        }
        
      } , [])
  


        const handleChange = (e) => {
            setApplyJob({...applyJob, [e.target.name]: e.target.value})
        }


        const applyJobHandler = () => {


            axios.post("http://localhost:5000/applyjob", {
                username: user.username,
                title: props.state.title,
                status: props.state.status,
                type: props.state.type,
                companyname: props.state.companyname,
                date: props.state.date,
                description: props.state.description,
                useremail: user.email,
                companyemail: props.state.email
            })
            .then(res => {
                console.log("Success")
            }).catch(err => {
                console.log("Failed")
            })



            // console.log("Current User",user)
            // console.log("Apply Job",applyJob)
            // console.log("props state",props.state)
        }



    return(
        <section className="blog_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 blog_sidebar_left">
                        <div className="blog_single mb_50">
                            <img className="img-fluid" src={require('../../img/job-single.png')} alt=""/>
                            <div className="blog_content">
                                <div className="post_date">
                                    <h2>{props.state.date.slice(0,2)} <span>{`${getDate[props.state.date.slice(3,5)]}`}</span></h2>
                                </div>
                                <div className="entry_post_info">
                                    By: <a href=".#">{props.state.companyname}</a>
                                </div>
                                <a href=".#">
                                    <h5 className="f_p f_size_20 f_500 t_color mb-30">{props.state.title}</h5>
                                </a>
                                <p className="f_400 mb-30">{props.state.description}</p>
                                
                                <blockquote className="blockquote mb_40">
                                    <h6 className="mb-0 f_size_18 l_height30 f_p f_400">Feel free to apply from the form given below.</h6>
                                </blockquote>
                               
                                <div className="post_share">
                                    <div className="post-nam"> Share: </div>
                                    <div className="flex">
                                        <a ><i className="ti-facebook"></i>Facebook</a>
                                        <a ><i className="ti-twitter"></i>Twitter</a>
                                        <a ><i className="ti-pinterest"></i>Pinterest</a>
                                    </div>
                                </div>
                                
                                <div className="media post_author mt_60">
                                    <img className="rounded-circle" style={{width:"50px",height:"50px"}} src={require('../../img/company.jpg')} alt=""/>
                                    <div className="media-body">
                                        <h5 className="f_p t_color3 f_size_18 f_500">{props.state.companyname}</h5>
                                        <h6 className="f_p f_size_15 f_400 mb_20">Editor</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                        <div className="widget_title mt_100">
                            <h3 className="f_p f_size_20 t_color3">Apply Now</h3>
                            <div className="border_bottom"></div>
                        </div>
                        <form className="get_quote_form row" action=".#" method="post">
                            <div className="col-md-12 form-group">
                                <textarea className="form-control message" onChange={(e)=>handleChange(e)} value={applyJob.message} name="message" placeholder="Message"></textarea>
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="text" className="form-control" onChange={(e)=>handleChange(e)} value={applyJob.name} name='name' placeholder="Name"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="email" className="form-control" onChange={(e)=>handleChange(e)} value={user ? user.email : ""} name="email"  placeholder="Email"/>
                            </div>
                            <div className="col-md-12 form-group">
                                <input type="text" className="form-control" onChange={(e)=>handleChange(e)} value={applyJob.portfolio} name="portfolio" placeholder="Portfolio (optional)"/>
                            </div>
                            <div className="col-md-12"><button className="btn btn_three btn_hover f_size_15 f_500" type="button" onClick={() => applyJobHandler()}>Apply</button></div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Bloglists;