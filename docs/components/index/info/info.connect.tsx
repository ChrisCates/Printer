import { connect } from 'react-redux'
import { InfoComponent } from './info.component'

export const InfoState = (state) => ({})

export const InfoActions = {}

export const Info = connect(InfoState, InfoActions)(InfoComponent)
