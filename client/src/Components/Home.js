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
            emailWasSent: false,
            name: '',
            email: '',
            number: '',
            message: ''
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
                console.log(response.status)
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


                <section id="hero" style={hero_style}>
                    <div className="row hero-content">
                        <div id="hero-slider" className="flexslider">
                            <div className="slides">
                                <div className="flex-caption">
                                    <h1 className="">{siteHeader.fields.headerTitle}</h1>
                                    <h2>Powered by Crossfit Outbreak</h2>
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
                            <h1>About Our Head Coach Paul Roller<span>.</span></h1>
                            <hr />
                            <div className='container'>
                                <img className='bio-picture' src='./Headshot.jpg'/>
                                <p>Paul has an obsessive passion for learning the latest techniques in strength and conditioning, and using them to help others achieve their goals. Paul bases his knowledge on scientifically researched and well-tested protocols. He currently spends his time coaching at CrossFit Outbreak in Brooklyn, New York, coaching classes and designing training programs for general clients and competitive athletes alike. </p>
                            </div>
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
                        </div>
                    </div>

                    <div className="row items mobile-no-padding">
                        <div id="portfolio-wrapper" className="bgrid-fourth s-bgrid-third tab-bgrid-half">
                                    {blogPosts.map(function(blogPost){

                                        return (
                                            <div className="bgrid folio-item" onClick={_this.launchModal.bind(_this, blogPost)}>
                                                <div className="item-wrap">
                                                <Link to={'/blog/' + blogPost.sys.id}><img src={blogPost.fields.blogImage.fields.file.url}/></Link>


                                                    <div className="portfolio-item-meta">
                                                        <h5>{blogPost.fields.blogTitle}</h5>
                                                        <p>{blogPost.fields.blogCategory}</p>
                                                        <i className="fa fa-plus"></i>
                                                    </div>
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
                            <h1>Fill out this form to get started!<span>.</span></h1>
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
                    </div>

                    <div className="six columns tab-whole right">
                        <h3>Contact Information:</h3>
                        <p>Number: (570) 590 8251<br/>
                        Email: info.prprogramming@gmail.com <br/>
                        </p>

                        <h3 className="address">Affiliated Gyms</h3>
                        <p>
                        CrossFit Outbreak<br/>
                        Clinton Hill <span className="contact-span">|</span> E. Williamsburg <span className="contact-span">|</span> Williamsburg <span className="contact-span">|</span> Bed Stuy<br/>
                        New York<br/>
                        </p>

                    </div>
                    </div>
                </section>

                <footer>
                    <div className="row">
                        <div className="twelve columns content group">
                            <ul className="social-links">
                                <li><a href="https://www.facebook.com/paul.roller.5" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCpsHvOv3nK96N-hh4TxZ0mg" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                                <li><a href="https://www.instagram.com/pr_programming/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                            <hr />
                            </div>
                            <ul className="copyright">
                            <a href="https://www.kristatriviso.com" target="_blank">
                                <div className="logo">
                                    <div className="icon animate">
                                        <span>K</span>
                                        <span>T</span>
                                    </div>
                                    <div className="pipe animate">|</div>
                                    <div className="name animate">Krista Triviso</div>
                                </div>
                            </a>
                                <li>&copy; Copyright 2015 PR-Programming.</li>
                                <li>Design by <a href="#">Styleshout.</a>.</li>
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
