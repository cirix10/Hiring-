import React, {Component} from 'react';
import FooterData from '../Footer/FooterData';
import {Link} from 'react-router-dom';

class Teamitem extends Component {
    render(){
        var {teamImage, memberN, memberd}= this.props;
        return(
            <Link  className="learn_btn_two"
                                to={{
                                    pathname: "/BlogSingle",
                                    state: this.props.job // your data array of objects
                                }}
                                >
            <div className="ex_team_item">
                <img src={require ("../../img/" + teamImage)} alt="team"/>
                <div className="team_content">
                        <h3 className="f_p f_size_16 f_600 t_color3">{memberN}</h3>
                </div>
                <div className="hover_content">
                    <div className="n_hover_content">
                        
                        <div className="br"></div>
                            <h3 className="f_p f_size_16 f_600 w_color">{memberN}</h3>
                            <h3 className="f_p f_size_16 f_600 w_color">{this.props.job.title}</h3>
                        <h5>{memberd}</h5>
                    </div>
                </div>
            </div>
            </Link>
        )
    }
}
export default Teamitem;