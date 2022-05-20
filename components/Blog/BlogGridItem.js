import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class BlogGridItem extends Component{
        constructor(props)
        {
            super(props);
            this.state = { "01":"Jan", "02":"Feb", "03":"Mar", "04":"Apr", "05":"May", "06":"Jun", "07":"Jul", "08":"Aug", "09":"Sep", "10":"Oct", "11":"Nov", "12":"Dec"};
        }


    
    render(){
        let{date, month, Title, description, btn, image}=this.props;
        return(
            <div className="col-lg-6">
                <div className="blog_list_item blog_list_item_two">
                    <a href="/#" className="post_date">
                        <h2>{date} <span>{this.state[`${month}`]}</span></h2>
                    </a>
                   
                    <Link  
                                to={{
                                    pathname: "/BlogSingle",
                                    state: this.props.job // your data array of objects
                                }}
                                > 
                                
                                <img className="img-fluid" src={require ("../../img/new/blog/" + image)}alt=""/>
                                
                                
                                
                                </Link>
                   
                   
                   
                    <div className="blog_content">

                    <Link  
                                to={{
                                    pathname: "/BlogSingle",
                                    state: this.props.job // your data array of objects
                                }}
                                > <h5 className="blog_title">{Title}</h5></Link>



                        <p>{description}</p>
                        <div className="post-info-bottom">
                            {/* <a href="/#">{btn} </a> */}

                            <Link  className="learn_btn_two"
                                to={{
                                    pathname: "/BlogSingle",
                                    state: this.props.job // your data array of objects
                                }}
                                >Read More<i className="arrow_right"></i></Link>

                                    <span className="post-info-comments">
                                <i className="icon_comment_alt" aria-hidden="true"></i>
                                <span> {this.props.job.type}</span>
                            </span>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BlogGridItem;