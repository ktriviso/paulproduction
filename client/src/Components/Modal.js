import React, {Component} from 'react'
import AppStore from '../AppStore/AppStore'
const ReactDOM = require('react-dom')
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
        console.log(this.props)
        const blogPostId = this.props.match.params.blogPostId
        const blogPosts = AppStore.data.blogPosts
        const currentBlogPost = blogPosts.find((post) => post.sys.id === blogPostId)
        console.log(currentBlogPost)
        this.setState({
            blogImage: currentBlogPost.fields.blogImage.fields.file.url,
            blogTitle: currentBlogPost.fields.blogTitle,
            blogContent: currentBlogPost.fields.blogContent,
            blogCategory: currentBlogPost.fields.blogCategory
        })
    }

    componentDidMount(){
        console.log(this.props);
        console.log(this.state);
    }

    render() {
        return (
            <div id="modal-bg">
                <div id="modal-01" className="popup-modal">
                    <div className="media">
                        <img src={this.state.blogImage}/>
                    </div>

                    <div className="description-box">
                        <h2>{this.state.blogTitle}</h2>
                        <ReactMarkdown source={this.state.blogContent} />
                        <span className="categories">{this.state.blogCategory}</span>
                    </div>

                </div>
            </div>
        )
    }
}
