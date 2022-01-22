import styled from 'styled-components';
import { Primary, PrimaryLight, Frame, FrameRed, FrameYellow, FrameGreen } from '../../theme/theme.colors';

export const IndexTitleStyle = styled.div`
    position :relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 600px;
    overflow: hidden;
    border-bottom: 2px solid rgb(30, 30, 30);

    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }

    div.brand {
        display: flex;
        align-items: center;
        width: 400px;
        padding: 15px;

        img {
            height: 48px;
            margin: 0 30px 0 0;

            @media (max-width: 1100px) {
                margin: 15px 0;
            }
        }

        @media (max-width: 1100px) {
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            
        }

        div.text {
            @media (max-width: 1100px) {
                width: 100%;
            }

            h1 {
                font-size: 32px;
                font-family: Oswald;
                font-weight: 300;
                letter-spacing: 1.5px;

                @media (max-width: 1100px) {
                    text-align: center;
                }
            }

            p {
                font-size: 14px;

                @media (max-width: 1100px) {
                    text-align: center;
                }
            }

            div.buttons {
                display: flex;
                align-items: center;
                padding: 15px 0;

                @media (max-width: 1100px) {
                    justify-content: center;
                }
            }

            a.button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 120px;
                height: 30px;
                border-radius: 9px;
                font-size: 14px;
                font-weight: bold;
                background: ${Primary};
                color: white;
                text-decoration: none;
                margin: 0 5px 0 0;

                &:hover { background: ${PrimaryLight}; }

                .i {
                    margin: 0 5px 0 0;
                }
            }
        }
    }

    div.panel {
        position: relative;
        width: 800px;

        div.window {
            position: absolute;
            left: 100px;
            top: -150px;
            width: 800px;
            height: 640px;
            background: ${Frame};
            border-radius: 9px;
            box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;

            @media (max-width: 1100px) {
                left: 0%;
            }

            div.window-buttons {
                position: absolute;
                left: 0;
                top: 0;
                display: flex;
                padding: 5px 5px;
                div.window-button {
                    background: ${FrameYellow};
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    margin: 5px;
                    &.green { background: ${FrameGreen}; }
                    &.red { background: ${FrameRed}; }
                }
            }
        }

        div.window-inner {
            position: relative;
            top: 35px;
            background: rgb(30, 30, 30);
            width: 100%;
            margin: auto;
            height: 100%;
            padding: 10px 20px;
            pointer-events: none;

            @media (max-width: 1100px) {
                width: 100%;
            }

            font-family: monospace;
            font-weight: bold;
            font-size: 14px;
            line-height: 2;

            textarea {
                width: 100%;
                height: 100%;
                background: none;
                border: none;
                color: white;
            }
        }
    }
`;