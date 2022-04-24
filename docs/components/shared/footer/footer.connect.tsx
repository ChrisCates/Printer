import { connect } from 'react-redux'
import { FooterComponent } from './footer.component'

export const FooterState = (state) => ({})

export const FooterActions = {}

export const Footer = connect(FooterState, FooterActions)(FooterComponent)
