import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Modal from './Modal'
import FeaturedBlogPosts from './Partials/FeaturedBlogPosts'
import Testimonial from './Partials/Testimonial'

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            launchModal: false
        }
    }
    launchModal(e) {
        e.preventDefault()

        this.setState({
            launchModal: true
            })
    }
    closeModal(){
        this.setState({
            launchModal: false
            })

    }
    render(){
        let modal
        if(this.state.launchModal) {
            modal = <Modal handleCloseModal={this.closeModal.bind(this)}/>
        }
        var aboutGrid = this.props.data.aboutGrid
        var testimonials = this.props.data.testimonials
        var blogPosts = this.props.data.blogPosts
        var featuredBlogPosts = this.props.data.featuredBlogPosts
        console.log(featuredBlogPosts)

        return(
            <div>
            {modal}
                <header id="main-header">
                    <div className="row">

                        <nav id="nav-wrap">
                            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                            <span className="menu-icon">Menu</span>
                            </a>
                            <a className="mobile-btn" href="#" title="Hide navigation">
                            <span className="menu-icon">Menu</span>
                            </a>

                            <ul id="nav" className="nav">
                            <li><a className="smoothscroll" href="#hero">Home.</a></li>
                            <li><a className="smoothscroll" href="#about">About.</a></li>
                            <li><a className="smoothscroll" href="#testimonial-scroll">Testimonials.</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Blog.</a></li>
                            <li  className="current"><a className="smoothscroll" href="#contact">Contact.</a></li>
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

                <FeaturedBlogPosts featuredBlogPosts={featuredBlogPosts}/>

                <section id="about">
                    <div className="row section-head">
                        <div className="twelve columns">
                            <h1>About Our Head Coach<span>.</span></h1>
                            <hr />
                            <p>about paul</p>
                        </div>
                    </div>

                    {aboutGrid.map(function(about){
                        return (
                            <div className="primary-content">
                                <div className="row mobile-no-padding">
                                    <div className="process bgrid-half tab-bgrid-whole group">
                                        <div className="bgrid">
                                            <h3>{about.fields.aboutTitle}</h3>
                                            <p>{about.fields.aboutContent}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}



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
                            <h1>Our Latest Blog Posts<span>.</span></h1>
                            <hr />
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                            </p>
                        </div>
                    </div>

                    <div className="row items">
                        <div id="portfolio-wrapper" className="bgrid-fourth s-bgrid-third tab-bgrid-half">
                            <div className="bgrid folio-item" onClick={this.launchModal.bind(this)}>
                                    {blogPosts.map(function(blogPost){
                                        return (
                                            <div className="item-wrap">
                                                <img src={blogPost.fields.blogImage.fields.file.url}/>
                                                <Link to={'/modal/' + blogPost.sys.id}>
                                                    <div className="overlay"></div>
                                                    </Link>
                                                <div className="portfolio-item-meta">
                                                    <h5>{blogPost.fields.blogTitle}</h5>
                                                    <p>{blogPost.fields.blogCategory}</p>
                                                </div>
                                                <div className="link-icon"><i className="fa fa-plus"></i></div>
                                            </div>
                                        )
                                    })}
                            </div>
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
                            <form name="contactForm" id="contactForm" method="post" action=""  >
                            <fieldset>
                                <div className="group">
                                    <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minLength="2" required />
                                </div>
                                <div>
                                    <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required />
                                </div>
                                <div>
                                    <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject"  value="" />
                                </div>
                                <div>
                                    <textarea name="contactMessage"  id="contactMessage" placeholder="Message" rows="10" cols="50" required ></textarea>
                                </div>
                                <div>
                                    <button className="submitform">Submit</button>
                                    <div id="submit-loader">
                                        <div className="text-loader">Sending...</div>
                                        <div className="s-loader">
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                </div>
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
                        <p>
                        CrossFit Outbreak Williamsburg<br/>
                        415 Wythe Avenue<br/>
                        Brooklyn, Ny<br/>
                        11249 US
                        </p><p>
                        CrossFit Outbreak Clinton Hill<br/>
                        10 Grand Avenue<br/>
                        Brooklyn, Ny<br/>
                        11205 US
                        </p><p>
                        CrossFit Outbreak Bed Stuy<br/>
                        492 Throop Avenue<br/>
                        Brooklyn, Ny<br/>
                        11221 US
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
