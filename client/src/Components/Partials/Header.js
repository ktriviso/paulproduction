import React, {Component} from 'react'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            active: 'Home'
        }
    }

    componentDidMount(){
        const path = window.location.pathname
        let active
        if(path.includes('about')) {
            active = 'about'
        } else if(path.includes('testimonial-scroll')) {
            active = 'testimonial'
        } else if(path.includes('portfolio')) {
            active = 'blog'
        } else if(path.includes('contact')) {
            active = 'contact'
        } else {
            active = 'home'
        }
        this.setState({
            active: active
        })
    }

    render(){
        return(
            <header id="main-header">
                <div className="row">

                    <nav id="nav-wrap">
                        <ul id="nav" className="nav">
                            <li className={this.state.active === 'home' ? 'current' : ''}><a className="smoothscroll" href="#hero">Home.</a></li>
                            <li className={this.state.active === 'about' ? 'current': ''}><a className="smoothscroll" href="#about">About.</a></li>
                            <li className={this.state.active === 'testimonal' ? 'current': ''}><a className="smoothscroll" href="#testimonial-scroll">Testimonials.</a></li>
                            <li className={this.state.active === 'blog' ? 'current': ''}><a className="smoothscroll" href="#portfolio">Blog.</a></li>
                            <li className={this.state.active === 'contact' ? 'current': ''}><a className="smoothscroll" href="#contact">Contact.</a></li>
                        </ul>
                    </nav>

                    <ul className="header-social">
                        <li><a href="https://www.facebook.com/paul.roller.5" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCpsHvOv3nK96N-hh4TxZ0mg" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                        <li><a href="https://www.instagram.com/pr_programming/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
