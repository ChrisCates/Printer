import { SampleStyle } from './sample.style'

export interface SampleI {}

export function SampleComponent({}: SampleI) {
  return <SampleStyle></SampleStyle>
}
