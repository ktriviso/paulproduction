import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            active: 'Home'
        }
    }

    render(){
        return(
            <header id="main-header">
                <div className="row">

                    <nav id="nav-wrap">
                        <ul id="nav" className="nav">
                            <Link to={{pathname:'/Home', hash: '#hero'}}><li><a className="smoothscroll">Home.</a></li></Link>
                            <li><a className="smoothscroll" href="#about">About.</a></li>
                            <li><a className="smoothscroll" href="#testimonial-scroll">Testimonials.</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Blog.</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact.</a></li>
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
