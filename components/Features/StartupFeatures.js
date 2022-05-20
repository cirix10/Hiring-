import React, {Component} from 'react';
import Reveal from 'react-reveal';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import AdminJobItem from '../Team/adminJobItem';

class StartupFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            appliedJobs:[],
            username: "",
            email:  "",
            password:  "",
            companyname:  "",
            role:  "",
            status:  "",
            address:  "",
            phone:  "",
            applicantsApplied:[],
            allJobs:[]
        };
    }


    componentDidMount() {
        // console.log(this.props)
        axios.post("http://localhost:5000/getspecificuserjobs",{email: this.props.user.email})
        .then(res => {
            // console.log("Applied Jobs",res.data.result)
            this.setState({appliedJobs:res.data.result})
        })
        .catch(err => {
            console.log(err)
        })



        axios.post("http://localhost:5000/singleuserdata",{email: this.props.user.email})
        .then(res => {
            // console.log("Success user get",res.data.result)
            this.setState({...res.data.result})

            if(res.data.result.role === "company"){
                axios.post("http://localhost:5000/getspecificuserjobs",{email: this.props.user.email})
                .then(res => {
                    // console.log("applicants applied to company",res.data.result)
                    this.setState({applicantsApplied: res.data.result })
                })
                .catch(err => {
                    console.log(err)
                })
            }



        })
        .catch(err => {
            console.log(err)
        })



        if(this.props.user.role === "admin"){

        axios.get("http://localhost:5000/getjobs")
        .then(res => {
            // console.log("All Jobs",res.data.result)
            this.setState({allJobs:res.data.result})
        })
        .catch(err => {
            console.log(err)
        })

    }
        
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    updateProfile = (e) => {
        axios.post("http://localhost:5000/updateprofile",{
            username:this.state.username,
            email: this.state.email,
            password: this.state.password,
            companyname: this.state.companyname,
            role: this.state.role,
            status: this.state.status,
            address: this.state.address,
            phone: this.state.phone
        })
        .then(res => {
            // console.log("User",res.data)
            alert("Profile Updated Successfully")
        })
        .catch(err => {
            console.log(err)
        })
    }

    deactivateProfile = (e) => {
        axios.post("http://localhost:5000/updateprofile",{
            username:this.state.username,
            email: this.state.email,
            password: this.state.password,
            companyname: this.state.companyname,
            role: this.state.role,
            status: "inactive",
            address: this.state.address,
            phone: this.state.phone
        })
        .then(res => {
            // console.log("User",res.data)
            alert("Profile Deactivated Successfully")
            localStorage.removeItem('user');
            this.props.props.history.push('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    

    jobPostHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postJob = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const finaldate = dd + '/' + mm + '/' + yyyy;

        let job = {
            name:this.state.jobpostname,
            description:this.state.jobpostdescription,
            title:this.state.jobposttitle,
            companyname:this.state.jobpostcompanyname,
            role:"company",
            status:"running",
            email: this.state.email,
            date: finaldate,
            type: this.state.jobposttype
        }

        // console.log("job",job)

        axios.post("http://localhost:5000/createjob",job)
        .then(res => {
            // console.log("Job",res.data)
            alert("Job Posted Successfully")
        })
        .catch(err => {
            console.log(err)
        })


    }




    deleteJob = (index) => {
        // console.log(index)
        

        let newArr = this.state.allJobs.filter(job => job.title != this.state.allJobs[index].title && job.name != this.state.allJobs[index].name)

        // console.log(newArr)

        this.setState({allJobs:newArr})


        axios.post("http://localhost:5000/deleteuser", {
            email: this.state.allJobs[index].email,companyname: this.state.allJobs[index].companyname,title: this.state.allJobs[index].title,name: this.state.allJobs[index].name
        })
        .then(res => {
            // console.log("User",res)
            this.setState({allJobs:newArr})

        })
    }


    render(){
        // console.log(this.props)
        return(
            <section className="startup_fuatures_area sec_pad">
                <div className="container">
                    <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
                    <Reveal effect="fadeInLeft">
                        
                        {this.state.role == "applicant" ? <h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">Edit your profile<br/> view aplied jobs </h2> :
                        
                        <h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">Edit your profile<br/> create job posts </h2>

                        }
                        
                        </Reveal>
                    </div>
                    <ul className="nav nav-tabs startup_tab" id="myTab" role="tablist">
                        <Reveal effect="fadeInLeft">
                            <li className="nav-item">
                            <a className="nav-link active" id="market-tab" data-toggle="tab" href="#market" role="tab" aria-controls="market" aria-selected="true">
                                <span className="icon"><i className="icon-cloud-upload"></i></span>
                                <h3>Edit<br/> Profile</h3>
                            </a>
                            </li>
                        </Reveal>
                        <Reveal effect="fadeInLeft" duration={1400}>
                            <li className="nav-item">
                                <a className="nav-link" id="app-tab" data-toggle="tab" href="#app" role="tab" aria-controls="app" aria-selected="false">
                                    <span className="icon"><i className="icon-screen-tablet"></i></span>
                                    {this.state.role == "applicant" ? <h3>Applied<br/> Jobs</h3> : this.state.role == "company" ? <h3>Create<br/> Job</h3> : <h3>Delete<br/> Jobs</h3>    }
                                </a>
                            </li>
                        </Reveal>
{
    this.state.role == "company" ?
                        <Reveal effect="fadeInLeft" duration={2000}>
                            <li className="nav-item">
                                <a className="nav-link" id="hubstaff-tab" data-toggle="tab" href="#hubstaff" role="tab" aria-controls="hubstaff" aria-selected="false">
                                    <span className="icon"><i className="icon-graduation"></i></span>
                                    <h3>Applicants<br/> Applied</h3>
                                </a>
                            </li>
                        </Reveal>

    :null
}

                        
                      
                    </ul>
                    <div className="tab-content startup_tab_content" id="myTabContent">
                        <div className="tab-pane fade show active" id="market" role="tabpanel" aria-labelledby="market-tab">
                            <div className="startup_tab_img">


                            <section className="contact_info_area sec_pad web_img">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Office Address</h6>
                                <p className="f_400 f_size_15">{this.state.address}</p>
                            </div>
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a href="tel:3024437488">{this.state.phone}</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a href="mailto:syedhamzahoda@gmail.com">{this.state.email}</a></p>
                            </div>
                        </div>
                        <div className="contact_form col-lg-9">
                            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Leave a Message</h2>
                            <form onSubmit={this.submitForm} className="contact_form_box" method="post" id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" id="username" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange}/>
                                        </div>
                                    </div>


                                {   this.props.user.role == "company" ?
                                    <div className="col-lg-6">
                                    <div className="form-group text_box">
                                        <input type="text" id="companyname" name="companyname" value={this.state.companyname} placeholder="Company Name" onChange={this.handleChange}/>
                                    </div>
                                </div>

                                    :null

                                }



                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" name="email" id="email" value={this.state.email} disabled placeholder="Your Email" onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" name="password" id="password" value={this.state.password} disabled placeholder="Your Password" onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <input type="text" id="address" name="address" value={this.state.address} placeholder="Address" onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                   
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" name="phone" id="phone" value={this.state.phone} placeholder="Phone Number" onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                </div>
                                <button type="button" onClick={() => this.updateProfile()} className="btn_three">Update Profile</button>

                                <button style={{marginRight:"10px"}} type="button" onClick={() => this.deactivateProfile()}  className="btn_three">Deactivate Account</button>
                            </form>
                            {/* {emailStatus ? emailStatus : null} */}
                            <div id="success">Your message succesfully sent!</div>
                            <div id="error">Opps! There is something wrong. Please try again</div>
                        </div>
                    </div>
                    
                </div>
            </section>



                            </div>



                            
                        </div>





                        <div className="tab-pane fade" id="app" role="tabpanel" aria-labelledby="app-tab">
                            <div className="startup_tab_img">
{
    this.state.role == "applicant" ?

                            <section className="experts_team_area sec_pad web_img">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Jobs you applied for" tClass="t_color3" />
                <div className="row">
                    
                    {
                        this.state.appliedJobs.length > 0 ?


                        this.state.appliedJobs.map((e,i) => {


                            return <div key={i} className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="job.jpg" job={e} memberN={e.companyname} memberd={e.title}/>
                        </div>

                        })

                    : <h1>Empty</h1>

                   }
                </div>
            </div>
        </section>

    : 

    this.state.role == "company" ?

    <section className="contact_info_area sec_pad web_img">
<div className="container">
<div className="row">

<div className="contact_form col-lg-12">
    <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Create a Job Post</h2>
    <form onSubmit={this.submitForm} className="contact_form_box" method="post" id="contactForm">
        <div className="row">
            <div className="col-lg-6">
                <div className="form-group text_box">
                    <input type="text" id="jobpostname" name="jobpostname" value={this.state.jobpostname} placeholder="Job Name" onChange={this.jobPostHandler}/>
                </div>
            </div>


        {   this.props.user.role == "company" ?
            <div className="col-lg-6">
            <div className="form-group text_box">
                <input type="text" id="jobpostcompanyname" name="jobpostcompanyname" value={this.state.jobpostcompanyname} placeholder="Company Name" onChange={this.jobPostHandler}/>
            </div>
        </div>

            :null

        }



            <div className="col-lg-6">
                <div className="form-group text_box">
                    <input type="text" name="jobposttitle" id="jobposttitle" value={this.state.jobposttitle}  placeholder="Title" onChange={this.jobPostHandler}/>
                </div>
            </div>

        
            <div className="col-lg-6">
                <div className="form-group text_box">

                <select onChange={this.jobPostHandler} name="jobposttype" value={this.state.jobposttype}>
                    <option value="">Select type</option>
                    <option value="internship">Internship</option>
                    <option value="job">Job</option>
                </select>
                </div>
            </div>


            <div className="col-lg-12">
                <div className="form-group text_box">
                    <textarea type="text" name="jobpostdescription" id="jobpostdescription" value={this.state.jobpostdescription}  placeholder="Description" onChange={this.jobPostHandler}/>
                </div>
            </div>



        </div>
        <button type="button" onClick={() => this.postJob()} className="btn_three">Post Job</button>

    </form>
    {/* {emailStatus ? emailStatus : null} */}
    <div id="success">Your message succesfully sent!</div>
    <div id="error">Opps! There is something wrong. Please try again</div>
</div>
</div>

</div>
</section>

:

<section className="experts_team_area sec_pad web_img">
<div className="container">
    <Sectitle sClass="sec_title text-center mb_70" Title="All Job Posts" tClass="t_color3" />
    <div className="row">
        
        {
            this.state.allJobs.length > 0 ?


            this.state.allJobs.map((e,i) => {


                return <div key={i} className="col-lg-3 col-sm-6">
                <AdminJobItem deleteJob={() => this.deleteJob(i)} teamImage="job.jpg" job={e} memberN={e.companyname} memberd={e.title}/>
            </div>

            })

        : <h1>Empty</h1>

       }
    </div>
</div>
</section>



}
                            </div>
                        </div>





                        <div className="tab-pane fade" id="hubstaff" role="tabpanel" aria-labelledby="hubstaff-tab">
                            <div className="startup_tab_img">


                            <section className="experts_team_area sec_pad web_img">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Applicants applied" tClass="t_color3" />
                <div className="row">
                    
                    {
                        this.state.applicantsApplied.length > 0 ?


                        this.state.applicantsApplied.map((e,i) => {


                            return <div key={i} className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="applicant-profile.png" job={e} memberN={e.username} memberd={e.useremail}/>
                        </div>

                        })

                    : <h1>Empty</h1>

                   }
                </div>
            </div>
        </section>
                            
                            
                            
                            
                            </div>
                        </div>




                            
                            
                    </div>
                </div>
            </section>
        )
    }
}

export default StartupFeatures;