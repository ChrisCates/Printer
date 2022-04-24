import styled from 'styled-components'

export const Palette = {
  Primary: '#C49A0F',
  PrimaryLight: '#F2D577',

  Frame: '#373737',
  Red: '#E9524A',
  Yellow: '#F1AE1B',
  Green: '#59C837'
}

export const Fonts = {
  Header: 'Oswald',
  Body: 'Montserrat'
}

export const Container = styled.div`
  width: 100%;
  max-width: 1650px;
  margin: auto;

  &.flex-wrap {
    display: flex;
    flex-wrap: wrap;
  }
`
