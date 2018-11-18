import * as Contentful from 'contentful'
import _ from 'lodash'
import AppStore from '../AppStore/AppStore'
import {CONFIG} from '../Config'

export const getAppStore = (callback) => {
    const cms= Contentful.createClient({
        space: CONFIG.space_id,
        accessToken: CONFIG.access_token
    })

    // this sorts the blog posts by its createdAt timestamp from contentful
    cms.getEntries({content_type:'blogPosts', 'order':'-sys.createdAt'}).then((response) => {
        const responseItems = response.items
        AppStore.data.blogPosts = responseItems
        AppStore.emitChange()

        if(callback){
            callback(false, AppStore)
        }
    })

    cms.getEntries().then((response) => {
        const responseItems = response.items
        const aboutGrid = _.filter(responseItems, (item) => {
            return item.sys.contentType.sys.id === 'aboutGrid'
        })
        const programs = _.filter(responseItems, (item) => {
            return item.sys.contentType.sys.id === 'programs'
        })
        const testimonials = _.filter(responseItems, (item) => {
            return item.sys.contentType.sys.id === 'testimonials'
        })
        const siteHeader = _.find(responseItems, (item) => {
            return item.sys.contentType.sys.id === 'siteHeader'
        })

        AppStore.data.aboutGrid = aboutGrid
        AppStore.data.programs = programs
        AppStore.data.testimonials = testimonials
        AppStore.data.siteHeader = siteHeader
        AppStore.data.ready = true
        AppStore.emitChange()

        if(callback){
            callback(false, AppStore)
        }

    })
}
