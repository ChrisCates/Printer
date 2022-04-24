import { connect } from 'react-redux'
import { TitleComponent } from './title.component'

export const TitleState = (state) => ({})

export const TitleActions = {}

export const Title = connect(TitleState, TitleActions)(TitleComponent)
