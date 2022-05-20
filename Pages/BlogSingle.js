import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Blogsingle from '../components/Blog/Blogsingle'
import FooterErp from '../components/Footer/FooterErp';
import FooterData from '../components/Footer/FooterData';

const BlogSingle = (props) => {
    console.log("rporps",props.location.state)
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle={props.location.state.companyname} Pdescription=""/>
            <Blogsingle state={props.location.state}/>
            <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>
        </div>
    )
}
export default BlogSingle;