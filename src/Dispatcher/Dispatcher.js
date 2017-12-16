import {Dispatcher} from 'flux'
import {getAppStore} from '../Actions/Action.js'

const AppDispatcher = new Dispatcher()

AppDispatcher.register((payload) => {
    const action = payload.action

    switch(action){
        case 'getAppStore':
            getAppStore()
            break

        default:
            return true
        // took the return true statement from the flux documentation
    }
    return true
})

export default AppDispatcher
