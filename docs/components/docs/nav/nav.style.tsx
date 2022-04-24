import styled from 'styled-components'
import { Fonts, Palette } from 'components/theme'

export const NavStyle = styled.div`
  margin: 45px 15px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 9px;
  width: 290px;
  height: 720px;
  overflow: hidden;
  box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    width: 100%;
    margin: 30px 0;
  }

  a.brand {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    padding: 15px 30px;

    img {
      height: 32px;
      margin: 0 15px 0 0;
    }

    h2 {
      font-family: ${Fonts.Header};
      font-size: 24px;
      padding: 0 0 3px 0;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
    padding: 15px 30px;
  }

  a.link {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 40px;
    background: rgba(256, 256, 256, 0.05);
    padding: 0 30px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.5px;

    &:hover {
      background: rgba(256, 256, 256, 0.1);
    }
    &.active {
      background: ${Palette.Primary};
    }
  }
`
