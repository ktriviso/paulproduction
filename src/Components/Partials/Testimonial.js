import React, {Component} from 'react'

export default class Testimonials extends Component {
    render() {
        return (
            <div className="row">
                <div id="team-wrapper" className="bgrid-fourth s-bgrid-third tab-bgrid-half mob-bgrid-whole group">
                    <div className="bgrid member">
                        <div className="member-pic">
                            <img src="images/team/member01-k.jpg" alt=""/>
                            <div className="mask"></div>
                        </div>
                        <div className="member-name">
                            <h3>Naruto Uzumaki</h3>
                            <span>Age 42</span>
                        </div>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
                    </div>
                </div>
            </div>
        )
    }
}
