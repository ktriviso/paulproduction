import React, {Component} from 'react'

export default class Featured extends Component {
    render() {
        return (
            <section id="hero">
                <div className="row hero-content">
                    <div className="twelve columns hero-container">
                    <div id="hero-slider" className="flexslider">
                        <ul className="slides">
                            <li>
                                <div className="flex-caption">
                                    <h1 className="">Say hello to <span>Kreo</span>. We create awesome and stunning
                                    digital solutions.
                                    </h1>
                                    <h3 className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}
