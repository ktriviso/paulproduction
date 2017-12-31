import React, {Component} from 'react'
import OwlCarousel from 'react-owl-carousel2'
import {Link} from 'react-router-dom'


export default class FeaturedBlogPosts extends Component {
    render() {
        const featuredBlogPosts = this.props.featuredBlogPosts
        const options = {
            items: 1,
            nav: false,
            rewind: true,
            autoplay: true,
            mouseDrag: false,
            smartSpeed: 400
        }
        const post_html = featuredBlogPosts.splice(0,3).map((post) => (
            <li className="flex-active-slide">
                <div className="flex-caption">
                    <h1 className="">{post.fields.blogTitle}</h1>
                    <h3 className="">{post.fields.featuredBlogPostContent}</h3>
                </div>
            </li>
        ))
        const image_bg = this.props.siteImage.fields.image.fields.file.url
        console.log(image_bg)
        // #0F1215,
        const hero_style = {
            background: `url(${image_bg})`
        }
        return (
            <section id="hero" style={hero_style}>
                <div className="row hero-content">
                    <div className="twelve columns hero-container">
                        <div id="hero-slider" className="flexslider">
                            <OwlCarousel className="slides" options={options}>
                                {post_html}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div id="more">
                    <a className="smoothscroll" href="#services">More About Us<i></i></a>
                </div>
            </section>
        )
    }
}
