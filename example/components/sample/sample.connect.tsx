import { connect } from 'react-redux'
import { SampleComponent } from './sample.component'

export const SampleState = (state) => ({})

export const SampleActions = {}

export const Sample = connect(SampleState, SampleActions)(SampleComponent)
