import React, {Component} from 'react'

export default class Modal extends Component {
    handleCloseModal(e){
        e.preventDefault()
        this.props.handleCloseModal()
    }
    render() {
        return (
            <div id="modal-bg">
                <div id="modal-01" className="popup-modal">
                    <div className="media">
                        <img src="images/portfolio/underwater.jpg" alt="Underwater"/>
                    </div>

                    <div className="description-box">
                        <h4>Underwater</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <span className="categories">Videography</span>
                    </div>

                    <div className="link-box group">
                        <a href="#" className="popup-modal-dismiss" onClick={this.handleCloseModal.bind(this)}>Close</a>
                    </div>
                </div>
            </div>
        )
    }
}
