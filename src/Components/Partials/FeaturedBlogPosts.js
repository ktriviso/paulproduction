import React, {Component} from 'react'
import OwlCarousel from 'react-owl-carousel2';
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
        const post_html = featuredBlogPosts.map((post) => (
            <li className="flex-active-slide">
                <div className="flex-caption">
                    <h1 className="">{post.fields.blogTitle}</h1>
                    <h3 className="">{post.fields.featuredBlogPostContent}</h3>
                </div>
            </li>
        ))
        return (
            <section id="hero">
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
                    <a class="smoothscroll" href="#services">More About Us<i class="fa fa-angle-down"></i></a>
                </div>
            </section>
        )
    }
}
