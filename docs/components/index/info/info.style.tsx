import { Palette } from 'components/theme'
import styled from 'styled-components'

export const InfoStyle = styled.div`
  padding: 60px 30px;

  h3 {
    font-size: 32px;
    font-family: Oswald;
    font-weight: 300;
    letter-spacing: 2px;
    padding: 0 0 15px 0;

    @media (max-width: 640px) {
      font-size: 24px;
      padding: 0 0 15px 0;
    }
  }

  p {
    font-size: 18px;
    line-height: 2;
    padding: 0 0 30px 0;

    @media (max-width: 640px) {
      font-size: 14px;
      padding: 0 0 15px 0;
    }
  }

  a {
    font-weight: bold;
    color: ${Palette.Primary};
  }

  div.code {
    font-family: monospace;
    font-weight: bold;
    font-size: 24px;
    background: rgb(30, 30, 30);
    border-radius: 9px;
    padding: 15px;
    margin: 0 0 30px 0;

    @media (max-width: 640px) {
      font-size: 14px;
      margin: 0 0 15px 0;
    }
  }
`
