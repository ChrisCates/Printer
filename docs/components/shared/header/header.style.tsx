import styled from 'styled-components'
import { Fonts } from 'components/theme'

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: rgba(64, 64, 64, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.05);

  div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 15px;
  }

  a.brand {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;

    img {
      height: 40px;
      margin: 0 15px 0 0;
    }

    h2 {
      font-family: ${Fonts.Header};
      font-size: 24px;
      padding: 0 0 8px 0;
    }
  }

  div.menu {
    display: flex;
    height: 100%;
  }

  a.item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 5px 30px 0 30px;
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 5px solid transparent;

    .icon {
      font-size: 20px;
      margin: 0 10px 0 0;
    }

    @media (max-width: 640px) {
      padding: 0 10px;
      .icon {
        font-size: 24px;
      }
      span {
        display: none;
      }
    }

    &:hover {
      background: rgba(256, 256, 256, 0.1);
    }

    &.active {
      border-bottom: 5px solid rgba(256, 256, 256, 0.75);
    }
  }
`
