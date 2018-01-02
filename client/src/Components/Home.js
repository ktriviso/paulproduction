import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Modal from './Modal'
import Testimonial from './Partials/Testimonial'
import axios from 'axios'
import EmailStatus from './EmailStatus'

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            launchModal: false,
            activeBlogPost: {},
            emailWasSent: false
        }
    }
    launchModal(blogPost) {
        this.setState({
            launchModal: true,
            activeBlogPost: blogPost
            })
    }
    closeModal(){
        this.setState({
            launchModal: false
            })

    }
    handleNameInput(e){
        e.preventDefault()
        this.setState({name: e.target.value})
    }
    handleEmailInput(e){
        e.preventDefault()
        this.setState({email: e.target.value})
    }
    handleNumberInput(e){
        e.preventDefault()
        this.setState({number: e.target.value})
    }
    handleMessageInput(e){
        e.preventDefault()
        this.setState({message: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        const _this = this
        axios.post('sendEmail', {
            data: _this.state
        }).then(function(response){
            console.log(response)
            if(response.status === 200){
                _this.setState({
                    emailWasSent: true
                })
            }
        }).catch(function(error){
            console.log(error)
        })

    }
    render(){
        let modal
        let emailSuccess

        if(this.state.emailWasSent){
            emailSuccess = <EmailStatus/>
        }
        if(this.state.launchModal) {
            modal = <Modal handleCloseModal={this.closeModal.bind(this)} blogPost={this.state.activeBlogPost}/>
        }
        var aboutGrid = this.props.data.aboutGrid
        var testimonials = this.props.data.testimonials
        var blogPosts = this.props.data.blogPosts
        var siteHeader = this.props.data.siteHeader
        var _this = this

        const image_bg = siteHeader.fields.headerImage.fields.file.url
        const hero_style = {
            background: `url(${image_bg})`
        }

        return(
            <div>
            {modal}
            {emailSuccess}
                <header id="main-header">
                    <div className="row">

                        <nav id="nav-wrap">
                            <ul id="nav" className="nav">
                                <li className="current"><a className="smoothscroll" href="#hero">Home.</a></li>
                                <li><a className="smoothscroll" href="#about">About.</a></li>
                                <li><a className="smoothscroll" href="#testimonial-scroll">Testimonials.</a></li>
                                <li><a className="smoothscroll" href="#portfolio">Blog.</a></li>
                                <li><a className="smoothscroll" href="#contact">Contact.</a></li>
                            </ul>
                        </nav>

                        <ul className="header-social">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </header>

                <section id="hero" style={hero_style}>
                    <div className="row hero-content">
                        <div id="hero-slider" className="flexslider">
                            <div className="slides">
                                <div className="flex-caption">
                                    <h1 className="">{siteHeader.fields.headerTitle}</h1>
                                    <h3 className="">{siteHeader.fields.headerContent}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="more">
                        <a className="smoothscroll" href="#services">More About Us<i></i></a>
                    </div>
                </section>

                <section id="about">
                    <div className="row section-head">
                        <div className="twelve columns">
                            <h1>About Our Head Coach<span>.</span></h1>
                            <hr />
                            <p>Paul has an obsessive passion for learning the latest techniques in strength and conditioning, and using them to help others achieve their goals. Paul bases his knowledge on scientifically researched and well-tested protocols. He currently spends his time coaching at CrossFit Outbreak in Brooklyn, New York, coaching classes and designing training programs for general clients and competitive athletes alike. </p>
                        </div>
                    </div>

                    <div className="row mobile-no-padding">
                        <div id="about-container"className="process bgrid-half tab-bgrid-whole group">
                            {aboutGrid.map(function(about){
                                return (
                                    <div className="bgrid">
                                        <h3>{about.fields.aboutTitle}</h3>
                                        <p>{about.fields.aboutContent}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>



                    <div className="row team section-head" id ='testimonial-scroll'>
                        <div className="twelve columns">
                            <h1>Testimonials<span>.</span></h1>
                            <hr />
                        </div>
                    </div>

                    <Testimonial testimonials={testimonials}/>

                </section>

                <section id="portfolio">
                    <div className="row section-head">
                        <div className="twelve columns">
                            <h1>Our Blog Posts<span>.</span></h1>
                            <hr />
                            <p>So you made the leap of signing up for a gym membership. You know you want to become more fit, but you may not know exactly what your goals are or what classes to take to achieve those goals. Our blog will introduce you to a litany of educational tips and tricks, from various forms of exercise to what kind of adaptations will stimulate in your body. We aim to create awareness around fitness and the advantages of the individualized approach. Visit our blog weekly for our latest and greatest posts.
                            </p>
                        </div>
                    </div>

                    <div className="row items mobile-no-padding">
                        <div id="portfolio-wrapper" className="bgrid-fourth s-bgrid-third tab-bgrid-half">
                                    {blogPosts.map(function(blogPost){

                                        return (
                                            <div className="bgrid folio-item" onClick={_this.launchModal.bind(_this, blogPost)}>
                                                <div className="item-wrap">
                                                    <img src={blogPost.fields.blogImage.fields.file.url}/>
                                                    <div className="overlay"></div>
                                                    <div className="portfolio-item-meta">
                                                        <h5>{blogPost.fields.blogTitle}</h5>
                                                        <p>{blogPost.fields.blogCategory}</p>
                                                    </div>
                                                    <div className="link-icon"><i className="fa fa-plus"></i></div>
                                                </div>
                                            </div>
                                        )
                                    })}

                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="row section-head">
                        <div className="twelve columns">
                            <h1>Get In Touch With Us<span>.</span></h1>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div id="contact-form" className="six columns tab-whole left">
                            <form name="contactForm" id="contactForm" onSubmit={this.handleSubmit.bind(this)} >
                            <fieldset>
                                <div className="group">
                                    <input name="contactName" type="text" id="contactName" placeholder="Name" value={this.state.name} onChange={this.handleNameInput.bind(this)} minLength="2" required />
                                </div>
                                <div>
                                    <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value={this.state.email} onChange={this.handleEmailInput.bind(this)} required />
                                </div>
                                <div>
                                    <input name="contactSubject" type="text" id="contactSubject" placeholder="Number"  value={this.state.number} onChange={this.handleNumberInput.bind(this)}/>
                                </div>
                                <div>
                                    <textarea name="contactMessage"  id="contactMessage" placeholder="Message" value={this.state.message} onChange={this.handleMessageInput.bind(this)} rows="10" cols="50" required ></textarea>
                                </div>
                                <div>
                                    <button className="submitform">Submit</button>
                                </div>


                            </fieldset>
                        </form>
                        <div id="message-warning"></div>
                        <div id="message-success">
                            <i className="icon-ok"></i>Your message was sent, thank you!<br />
                            </div>
                    </div>

                    <div className="six columns tab-whole right">
                        <h3>Contact Information:</h3>
                        <p>Mobile: (570) 590 8251<br/>
                        Email: paul@outbreakfitness.com <br/>
                        </p>

                        <h3 className="address">Affiliated Gyms</h3>
                        <p>
                        CrossFit Outbreak East Williamsburg<br/>
                        208 Frost Street<br/>
                        Brooklyn, Ny<br/>
                        11211 US
                        </p>

                    </div>
                    </div>
                </section>

                <footer>
                    <div className="row">
                        <div className="twelve columns content group">
                            <ul className="social-links">
                                <li><a href="http://www.facebook.com/paul.roller.5"><i className="fa fa-facebook-square"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                            <hr />
                            </div>
                            <ul className="copyright">
                                <li>&copy; Copyright 2015 KREO.</li>
                                <li>Design by <a href="http://www.styleshout.com/">Styleshout.</a>.</li>
                            </ul>
                            <div id="go-top">
                                <a className="smoothscroll" title="Back to Top" href="#hero">Back to Top<i className="fa fa-angle-up"></i></a>
                            </div>
                    </div>
                </footer>

            </div>

        )
    }

}
