import React, {Component} from 'react'

export default class Testimonials extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        let {testimonials} = this.props
        if(testimonials.length > 0){
            this.setState(testimonials)
            localStorage.setItem('testimonials', JSON.stringify(testimonials))
            console.log(localStorage)
        } else {
            testimonials = JSON.parse(localStorage.getItem('testimonials'))
            this.setState(testimonials)
        }
    }

    render() {
        var testimonials = this.props.testimonials

        return (
            <div className="row">
                <div id="team-wrapper" className="bgrid-fourth s-bgrid-third tab-bgrid-half mob-bgrid-whole group">
                {testimonials.map(function(testimonial){
                    return (
                        <div className="bgrid member">
                            <div className="member-pic">
                                <img src={testimonial.fields.testimonialProfile.fields.file.url} alt=""/>
                                <div className="mask"></div>
                            </div>
                            <div className="member-name">
                                <h3>{testimonial.fields.name}</h3>
                                <span>{testimonial.fields.age}</span>
                            </div>
                            <p>{testimonial.fields.testimonial}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}
