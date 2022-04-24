import { connect } from 'react-redux'
import { setSelected } from 'redux/slice/slice.docs'
import { NavComponent } from './nav.component'

export const NavState = (state) => ({
    selected: state.docs.selected
})

export const NavActions = {
    setSelected
}

export const Nav = connect(NavState, NavActions)(NavComponent)
