import {EventEmitter} from 'events'
import _ from 'lodash'

export default _.extend({}, EventEmitter.prototype, {
    data: {
        ready: false
    },
    // this is the EventEmitter
    emitChange: function(){
        this.emit('change')
    },
    addChangeListener: function(callback){
        this.on('change', callback)
    },
    // if its not being used, it doesnt need to be listening
    removeChangeListener: function(callback){
        this.removeListener('change', callback)
    }
})
