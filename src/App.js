import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppStore from './AppStore/AppStore.js'
import routes from './routes.js'
import {BrowserRouter} from 'react-router-dom'
import AppDispatcher from './Dispatcher/Dispatcher.js'
import {FeaturedBlogPosts} from './Components/Partials/FeaturedBlogPosts.js'
import {Testimonial} from './Components/Partials/Testimonial.js'
import {Modal} from './Components/Modal.js'

class App extends Component {
    constructor(props) {
    super(props)

    this.state = {
        removeLoader: false
    }
    }
    getStore(){
        let payload = {
            action: 'getAppStore'
        }
        AppDispatcher.dispatch(payload)
    }

    componentWillMount(){
        this.getStore()
    }

    componentDidMount(){
        AppStore.addChangeListener(this._onChange.bind(this))
        var _this = this
        _this.setState({
            removeLoader: true
        })
    }

    componentWillUnmount(){
        AppStore.removeChangeListener(this._onChange.bind(this))
    }

    _onChange(){
        this.setState(AppStore.data)
    }

  render() {
      const data = AppStore.data
      if(!data.ready){
          this.getStore()
        return <div>loading</div>
    } else {
        return (
            <BrowserRouter>
                <div>
                    {routes}
                </div>
            </BrowserRouter>
        );
    }
  }
}

export default App;
