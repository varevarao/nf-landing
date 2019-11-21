import React from 'react';
import styled from 'styled-components';
import { DisplayText } from '../components/display-text';
import { Divider } from '../components/divider';
import Section from '../components/section-container';

const FooterContainer = styled(Section)`
    background-color:  #323232;

    .footer-content {
        margin: 5rem 0;

        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        text-align: left;

        color: white;

        .footer-main {
            flex: 1;

            >img {
                margin-bottom: 1rem;
            }
        }

        .footer-aux {
            flex: 3;

            display: flex;
            align-items: flex-start;
            justify-content: space-around;

            >* {
                >:first-child {
                    color: #ffb900;
                    font-weight: bold;
                }
            }
        }

        .footer-prod-line, .contact-line {
            display: flex;
            flex-direction: column;

            margin-top: 1rem;

            >img {
                width: 1.5rem;
            }
        }

        .footer-social {
            display: flex;
            flex-direction: column;

            >* {
                margin-top: 0.5rem;
            }
        }
    }
`;

const FooterDivider = styled(Divider)`
    background-color: #ffb900;
    
`;

const FooterSection = () => {
    return (
        <FooterContainer>
            <div className="footer-content">
                <div className="footer-main">
                    <img src="/img/rgb-now-floats-logo-foot.png" alt="NowFloats" />
                    <DisplayText size="xsmall" color="white" variant="subdued" color="white">NowFloats' mission has always been to enable small and medium-sized businesses to easily bring their business online, and grow it there in a meaningful way.</DisplayText>
                </div>
                <div className="footer-aux">
                    <div className="footer-prods">
                        <DisplayText size="small">Products</DisplayText>
                        <div className="footer-prod-line">
                            <img src="/img/boost-360-insignia.png" alt="Boost360" />
                            <DisplayText size="small" color="white">Boost</DisplayText>
                            <DisplayText size="xxsmall" variant="subdued" color="white">for Small & Mid-size business</DisplayText>
                        </div>
                        <div className="footer-prod-line">
                            <img src="/img/kitsune-app-icon-stancil.png" alt="Kitsune" />
                            <DisplayText size="small" color="white">kitsune</DisplayText>
                            <DisplayText size="xxsmall" variant="subdued" color="white">for large enterprise</DisplayText>
                        </div>
                    </div>
                    <div className="footer-contacts">
                        <DisplayText size="small">Contact</DisplayText>
                        <div className="contact-line">
                            <DisplayText size="xsmall" color="white"></DisplayText>
                            <DisplayText size="xxsmall" variant="subdued" color="white">1860-123-1233</DisplayText>
                        </div>
                        <div className="contact-line">
                            <DisplayText size="xsmall" color="white">SUPPORT</DisplayText>
                            <DisplayText size="xxsmall" variant="subdued" color="white">ria@nowloats.com</DisplayText>
                        </div>
                        <div className="contact-line">
                            <DisplayText size="xsmall" color="white">CAREER</DisplayText>
                            <DisplayText size="xxsmall" variant="subdued" color="white">fun@nowloats.com</DisplayText>
                        </div>
                        <div className="contact-line">
                            <DisplayText size="xsmall" color="white">INFO</DisplayText>
                            <DisplayText size="xxsmall" variant="subdued" color="white">hello@nowloats.com</DisplayText>
                        </div>
                    </div>
                    <div className="footer-social">
                        <DisplayText size="small">Social</DisplayText>
                        <DisplayText size="xxsmall" variant="subdued" color="white">Twitter</DisplayText>
                        <DisplayText size="xxsmall" variant="subdued" color="white">YouTube</DisplayText>
                        <DisplayText size="xxsmall" variant="subdued" color="white">Facebook</DisplayText>
                        <DisplayText size="xxsmall" variant="subdued" color="white">Angel</DisplayText>
                        <DisplayText size="xxsmall" variant="subdued" color="white">Blog</DisplayText>
                        <DisplayText size="xxsmall" variant="subdued" color="white">Press Kit</DisplayText>
                    </div>
                </div>
            </div>
            <FooterDivider />
            <DisplayText size="xxsmall" color="white" variant="subdued" color="white">© 2012-2019 NOWFLOATS TECHNOLOGIES</DisplayText>
        </FooterContainer>
    )
}

export default FooterSection;
