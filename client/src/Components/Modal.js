import React, {Component} from 'react'
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')

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
                        <img src={this.props.blogPost.fields.blogImage.fields.file.url}/>
                    </div>

                    <div className="description-box">
                        <h4>{this.props.blogPost.fields.blogTitle}</h4>
                        <ReactMarkdown source={this.props.blogPost.fields.blogContent} />
                        <span className="categories">{this.props.blogPost.fields.blogCategory}</span>
                    </div>

                    <div className="link-box group">
                        <a href="#" className="popup-modal-dismiss" onClick={this.handleCloseModal.bind(this)}>Close</a>
                    </div>
                </div>
            </div>
        )
    }
}
