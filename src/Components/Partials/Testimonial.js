import React, {Component} from 'react'
import InnerTestimonial from './InnerTestimonial'

export default class Testimonials extends Component {
    componentDidMount(){
        let {testimonials} = this.props
        if(testimonials.length > 0){
            this.setState(testimonials)
            localStorage.setItem('testimonials', JSON.stringify(testimonials))
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
                {testimonials.map(function(testimonial, i){
                    return (
                        <InnerTestimonial data={testimonial} key={i}/>
                    )
                })}
                </div>
            </div>
        )
    }
}
