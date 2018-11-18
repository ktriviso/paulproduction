import React, { Component } from 'react';

export default class InnerTestimonial extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
            showLess: true
        }

        this.toggleText = this.toggleText.bind(this)
	}

    toggleText(){
        this.setState({
            showLess: !this.state.showLess
        })
    }

	render() {
		return (
			<div className="bgrid member">
				<div className="member-pic">
					<img src={this.props.data.fields.testimonialProfile.fields.file.url} alt="" />
					<div className="mask" />
				</div>
				<div className="member-name">
					<h3>{this.props.data.fields.name}</h3>
					<span>{this.props.data.fields.age}</span>
				</div>
				<p>{this.state.showLess ? this.props.data.fields.testimonial.substring(0,250)+"..." : this.props.data.fields.testimonial}</p>
                <button onClick={this.toggleText}>{this.state.showLess ? 'Read more' : 'Read less'}</button>
			</div>
		);
	}
}
