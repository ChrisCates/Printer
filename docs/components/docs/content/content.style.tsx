import { Palette } from 'components/theme'
import styled from 'styled-components'

export const ContentStyle = styled.div`
  margin: 45px 15px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 9px;
  width: calc(100% - 350px);
  overflow: auto;
  box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.1);

  h3 {
    padding: 30px 30px 15px 30px;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  p {
    padding: 15px 30px;
    line-height: 2;
  }

  div.code {
    font-family: monospace;
    font-weight: bold;
    font-size: 24px;
    background: rgb(30, 30, 30);
    padding: 15px 30px;

    @media (max-width: 640px) {
      font-size: 14px;
      margin: 0 0 15px 0;
    }

    span.hl {
      color: ${Palette.Primary};
    }
  }

  div.vscode {
    display: flex;
    width: 100%;
    min-height: 480px;
    background: rgb(30, 30, 30);
    margin: 30px 0 0 0;
  }

  div.vscode-content {
    width: calc(100% - 320px);
  }

  div.vscode-nav {
    width: 320px;
    padding: 0 0 60px 0;
    background: rgb(35, 35, 35);

    a.header, a.link {
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;
      padding: 0 15px;
      font-size: 18px;
      font-weight: 600;

      .icon {
        position: relative;
        top: -1px;
        font-size: 24px;
        margin: 0 10px 0 0;
      }
    }

    a.header {
      background: rgb(50, 50, 50);
    }

    a.link {
      height: 35px;
      font-size: 14px;
      padding: 0 30px;
      cursor: pointer;

      .icon {
        font-size: 16px;
      }

      &.active {
        background: ${Palette.Primary};
      }
    }
  }
`
