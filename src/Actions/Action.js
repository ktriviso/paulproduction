import * as Contentful from 'contentful'
import _ from 'lodash'
import AppStore from '../AppStore/AppStore'
import {CONFIG} from '../Config'

export const getAppStore = (callback) => {
    const cms= Contentful.createClient({
        space: CONFIG.space_id,
        accessToken: CONFIG.access_token
    })

    cms.getEntries().then((response) => {
        console.log(response)
        const responseItems = response.items
        const aboutData = _.find(responseItems, (item) => {
            return item.sys.contentType.sys.id === 'about'
        })

        AppStore.data.about = aboutData
        console.log(AppStore.data)
        AppStore.data.ready = true

        AppStore.emitChange()

        if(callback){
            callback(false, AppStore)
        }

    })
}
