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
        const aboutGrid = _.filter(responseItems, (item) => {
            return item.sys.contentType.sys.id === 'aboutGrid'
        })
        const testimonials = _.filter(responseItems, (item) => {
            return item.sys.contentType.sys.id === 'testimonials'
        })
        const blogPosts = _.filter(responseItems, (item) => {
            return item.sys.contentType.sys.id === 'blogPosts'
        })
        const featuredBlogPosts = blogPosts.filter((post) => {
            return post.fields.featuredBlogPost === true
        })

        AppStore.data.featuredBlogPosts = featuredBlogPosts
        AppStore.data.aboutGrid = aboutGrid
        AppStore.data.testimonials = testimonials
        AppStore.data.blogPosts = blogPosts
        AppStore.data.ready = true

        AppStore.emitChange()

        if(callback){
            callback(false, AppStore)
        }

    })
}
