import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Modal from './Modal'
import Testimonial from './Partials/Testimonial'
import EmailStatus from './EmailStatus'

var encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            launchModal: false,
            activeBlogPost: {},
            emailWasSent: false,
            name: "",
            email: "",
            message: ""
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

    handleSubmit = e => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
          })
            .then(() => this.setState({emailWasSent: true}))
            .catch(error => alert(error));

          e.preventDefault();
    };
    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    componentDidMount(){
        let {hash} = this.props.history.location
        hash = hash.replace('#', '')
        if(hash && hash.length > 0){
            document.getElementById(hash).scrollIntoView()
        }
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
        var programs = this.props.data.programs
        var testimonials = this.props.data.testimonials
        var blogPosts = this.props.data.blogPosts
        var siteHeader = this.props.data.siteHeader

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
                                    <h2 id="header-content">{siteHeader.fields.headerContent}</h2>
                                    {/* <h2>Powered by Crossfit Outbreak</h2>   */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div id="more">
                        <a className="smoothscroll" href="#services">More About Us<i></i></a>
                    </div>
                    <h3>Powered by Crossfit Outbreak</h3>
                </section>

                <section id="about">
                    <div className="row section-head">
                        <div className="twelve columns">
                            <h1>About Our Head Coach Paul Roller<span>.</span></h1>
                            <hr />
                            <div className='container'>
                                <img className='bio-picture' src='./Headshot.jpg' alt="bio"/>
                                <p>Paul has an obsessive passion for learning the latest techniques in strength and conditioning, and using them to help others achieve their goals. Paul bases his knowledge on scientifically researched and well-tested protocols. He currently spends his time coaching at CrossFit Outbreak in Brooklyn, New York, coaching classes and designing training programs for general clients and competitive athletes alike. </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mobile-no-padding">
                        <div id="about-container"className="process bgrid-half tab-bgrid-whole group">
                            {aboutGrid.map(function(about, i){
                                return (
                                    <div className="bgrid" key={i}>
                                        <h3>{about.fields.aboutTitle}</h3>
                                        <p>{about.fields.aboutContent}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="row section-head">
                        <div className="twelve columns">
                            <h1>Programs<span>.</span></h1>
                            <hr />
                            <div className='container'>
                                
                                <p>Our programs are created to maximize your potential in whatever facet you chose. Whether it’s individualized programming, nutrition, or a specific accessory program, this is your home base to get you one step closer to greatness!</p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="row mobile-no-padding">
                        <div id="about-container"className="process bgrid-half tab-bgrid-whole group">
                            {programs.map(function(program, i){
                                return (
                                    <div className="bgrid" key={i}>
                                        <h3>{program.fields.programTitle}</h3>
                                        <p>{program.fields.programDescription}</p>
                                        <p>Purchase <a href={program.fields.programLink} target="_blank">here</a>.</p>
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
                            {blogPosts.map(function(blogPost, i){
                                return (
                                    <div className="bgrid folio-item" key={i}>
                                        <div className="item-wrap">
                                        <Link to={'/blog/' + blogPost.sys.id}><img src={blogPost.fields.blogImage.fields.file.url} alt="blog post"/></Link>
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

                        <form onSubmit={this.handleSubmit} id="contactForm">

                            <input name="name" type="text" id="contactName" placeholder="Name" onChange={this.handleChange}/>

                            <input name="email" type="email" id="contactEmail" placeholder="Email" onChange={this.handleChange}/>

                            <textarea name="message"  id="contactMessage" placeholder="Message" onChange={this.handleChange}></textarea>

                            <button type="submit" className="submitform">Send</button>

                        </form>
                    </div>

                    <div className="six columns tab-whole right">
                        <h3>Contact Information:</h3>
                        <p>Number: (570) 590 8251<br/>
                        Email: info@pr-programming.com <br/>
                        </p>

                        <h3 className="address">Affiliated Gyms</h3>
                        <p>
                        CrossFit Outbreak<br/>
                        Clinton Hill <span className="contact-span">|</span> E. Williamsburg <span className="contact-span">|</span> Williamsburg <span className="contact-span">|</span> Bed Stuy <span className="contact-span">|</span> Bushwick<br/>
                        New York<br/>
                        </p>

                    </div>
                    </div>
                </section>

                <footer>
                    <div className="row">
                        <div className="twelve columns content group">
                            <ul className="social-links">
                                <li><a href="https://www.facebook.com/paul.roller.5" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCpsHvOv3nK96N-hh4TxZ0mg" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a></li>
                                <li><a href="https://www.instagram.com/pr_programming/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                            <hr />
                            </div>
                            <ul className="copyright">
                                <li><img src="/LogoNoBackground.png" alt="copyright"/></li>
                                <li>&copy; Copyright 2015 PR-Programming.</li>
                                <br/>
                                <li>Design by <a href="/">Styleshout.</a>.</li>
                                <li>Site built by <a href='http://kristatriviso.com/'>Krista Triviso</a></li>
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

//
// <form method="POST" name="contact" id="contactForm" onSubmit={this.handleSubmit.bind(this)} netlify >
//
//     <input type="hidden" name="form-name" value="contact" />
//
//     <input name="name" type="text" id="contactName" placeholder="Name" value={this.state.name} onChange={this.handleNameInput.bind(this)}/>
//
//     <input name="email" type="email" id="contactEmail" placeholder="Email" value={this.state.email} onChange={this.handleEmailInput.bind(this)}/>
//
//     <textarea name="message"  id="contactMessage" placeholder="Message" value={this.state.message} onChange={this.handleMessageInput.bind(this)}></textarea>
//
//     <div data-netlify-recaptcha></div>
//
//     <button type="submit" className="submitform">Send</button>
//
// </form>
