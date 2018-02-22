import React from 'react'

export const Footer = () => (
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
                <a href="https://github.com/ktriviso" target="_blank">
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
)
