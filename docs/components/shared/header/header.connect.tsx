import { connect } from 'react-redux'
import { HeaderComponent } from './header.component'

export const HeaderState = (state) => ({})

export const HeaderActions = {}

export const Header = connect(HeaderState, HeaderActions)(HeaderComponent)
