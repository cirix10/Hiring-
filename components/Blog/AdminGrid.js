import React,{useEffect, useState} from 'react';
import AdminGridItem from './AdminGridItem.js';
import axios from "axios"

const AdminGrid =()=>{


    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getallusers")
        .then(res => {

            let filterArr = res.data.result.filter(user => user.role != "admin")

            setUsers(filterArr);
            // console.log("AdminUsers",res.data.result)
        }
        )
    },[])

    const deleteUser = (index) => {

        // console.log(users[index].email)
        // console.log(index)

        let newArr = users.filter(user => user.email != users[index].email)

        // console.log(newArr)



        axios.post("http://localhost:5000/deleteuser", {email:users[index].email})
        .then(res => {
            // console.log("User",res)
            setUsers(newArr)

        })

    }

    return(
        <section className="blog_area_two sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 blog_grid_info">
                        <div className="row">
                           
                           {
                           
                           users.length > 0 ? users.map( (user,i) => {
                               
                                 return(
                                      <AdminGridItem deleteUser={() => deleteUser(i)} user={user} key={i} image="applicant-profile.png" Title={user.username} description={user.email}
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
export default AdminGrid;