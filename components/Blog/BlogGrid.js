import React,{useEffect, useState} from 'react';
import BlogGridItem from './BlogGridItem';
import axios from "axios"

const BlogGrid =()=>{

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getjobs")
        .then(res => {
            setJobs(res.data.result);
        }
        )
    },[])


    return(
        <section className="blog_area_two sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 blog_grid_info">
                        <div className="row">
                           
                           {
                           
                           jobs.length > 0 ? jobs.map( (job,i) => {
                                 return(
                                      <BlogGridItem job={job} key={i} date={job.date.slice(0,2)} month={job.date.slice(3,5)} image="blog_grid_1.jpg" Title={job.name} description={job.title}
                                     />
                                 )
                           })
                           
                           : <div>No Jobs</div>
                           
                           }
                           
                           
                           
                        </div>
                       
                    </div>
                 
                </div>
            </div>
        </section>
    )
}
export default BlogGrid;