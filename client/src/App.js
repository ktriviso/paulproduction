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
import {Loader} from './Components/Partials/Loader.js'

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
        setTimeout(function(){
            _this.setState({
                removeLoader: true
            })
        }, 1000)
    }

    componentWillUnmount(){
        AppStore.removeChangeListener(this._onChange.bind(this))
    }

    _onChange(){
        this.setState(AppStore.data)
    }

    render() {
      const data = AppStore.data
      if(!data.ready) {
          this.getStore()
          return <Loader/>
      } else if(this.state.removeLoader){
          return (
              <BrowserRouter>
                  <div>
                      {routes}
                  </div>
              </BrowserRouter>
          );
      } else {
          return <Loader />
      }
    }
}

export default App;
