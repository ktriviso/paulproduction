import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            active: 'Home'
        }
    }

    sendHashScroll(e){
        console.log(e.target)
        const hash = e.target.getAttribute('href').replace('/#', '')
        const target = document.getElementById(hash)
        if(target) {
            target.scrollIntoView()
        }
    }

    render(){
        return(
            <header id="main-header">
                <div className="row">
                <img src="/LogoNoBackground.png"/>

                    <nav id="nav-wrap">
                        <ul id="nav" className="nav">
                            <li><Link to={{pathname: '/', hash: '#hero'}} onClick={this.sendHashScroll.bind(this)}>Home.</Link></li>
                            <li><Link to={{pathname: '/', hash: '#about'}} onClick={this.sendHashScroll.bind(this)}>About.</Link></li>
                            <li><Link to={{pathname: '/', hash: '#testimonial-scroll'}} onClick={this.sendHashScroll.bind(this)}>Testimonials.</Link></li>
                            <li><Link to={{pathname: '/', hash: '#portfolio'}} onClick={this.sendHashScroll.bind(this)}>Blog.</Link></li>
                            <li><Link to={{pathname: '/', hash: '#contact'}} onClick={this.sendHashScroll.bind(this)}>Contact.</Link></li>
                        </ul>
                    </nav>

                    <ul className="header-social">
                        <li><a href="https://www.facebook.com/PR-Programming-and-Nutrition-1181868045249132/?ref=bookmarks" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCpsHvOv3nK96N-hh4TxZ0mg" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                        <li><a href="https://www.instagram.com/pr_programming/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
