import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import BlogGrid from '../components/Blog/BlogGrid';
import FooterData from '../components/Footer/FooterData';
import FooterErp from '../components/Footer/FooterErp';

const BlogGridPage = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Blog Grid" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <BlogGrid/>
            <FooterErp fClass="h_footer_dark_two" FooterData={FooterData}/>
        </div>
    )
}
export default BlogGridPage;