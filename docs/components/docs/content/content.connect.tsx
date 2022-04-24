import { connect } from 'react-redux'
import { ContentComponent } from './content.component'

export const ContentState = (state) => ({
    selected: state.docs.selected
})

export const ContentActions = {}

export const Content = connect(ContentState, ContentActions)(ContentComponent)
