import React, {Component} from 'react'
import AppStore from '../AppStore/AppStore'
const ReactMarkdown = require('react-markdown')

export default class Modal extends Component {

    constructor(props){
        super(props)
        this.state = {
            blogImage: '',
            blogTitle: '',
            blogContent: '',
            blogCategory: ''
        }
    }

    componentWillMount(){
        const blogPostId = this.props.match.params.blogPostId
        const blogPosts = AppStore.data.blogPosts
        const currentBlogPost = blogPosts.find((post) => post.sys.id === blogPostId)
        this.setState({
            blogImage: currentBlogPost.fields.blogImage.fields.file.url,
            blogTitle: currentBlogPost.fields.blogTitle,
            blogContent: currentBlogPost.fields.blogContent,
            blogCategory: currentBlogPost.fields.blogCategory
        })
    }

    render() {
        return (
            <div id="modal-bg">
                <div id="modal-01" className="popup-modal">
                    <div className="media">
                        <img src={this.state.blogImage} alt="Blog Post"/>
                    </div>
                    <div className="description-box">
                        <h2>{this.state.blogTitle}</h2>
                        <ReactMarkdown source={this.state.blogContent} />
                    </div>
                </div>
                <div id="temp-footer">Powered by <span>PR Programming</span></div>
            </div>
        )
    }
}
