import React, {Component} from 'react'

export default class Blog extends Component {
    render() {
        return (
            <div className="row items">
                <div id="portfolio-wrapper" className="bgrid-fourth s-bgrid-third tab-bgrid-half">
                    <div className="bgrid folio-item" onClick={this.launchModal.bind(this)}>
                        <div className="item-wrap">
                            <a href="#modal-01">
                                <img src="images/portfolio/underwater.jpg" alt="Underwater"/>
                                <div className="overlay"></div>
                                <div className="portfolio-item-meta">
                                    <h5>Underwater</h5>
                                    <p>Videography</p>
                                    </div>
                                <div className="link-icon"><i className="fa fa-plus"></i></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
