import React, {Component} from 'react'
export default class EmailStatus extends Component{
    componentDidMount(){
        setTimeout(function(){
            window.location.reload()
        },3000)
    }
    render(){
        return (
            <div id='emailStatus'>
                <div className='loader-ring'>
                    <div className='loader-ring-light'></div>
                    <div className='loader-ring-track'></div>
                </div>
            </div>
        )
    }
}
