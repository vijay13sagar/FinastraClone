import React from 'react';
import { ContactCont, ContactHead, Logo, HeadSpan, LearnBtn, FlexHor, ArtCont, DateTag, ArtText, PolicyCont } from '../Components/styles';
import logo2 from '../Assets/logo2.png';
const Contact = () => {
    const data = [
        {
            key: 1, head: 'solutions', arts: [
                { text: 'Lending' },
                { text: 'Payments' },
                { text: 'Treasury & Capital Markets' },
                { text: 'Digital & Retail Banking' },
                { text: 'Corporate & Commercial Banking' },
                { text: 'Investment Management' },
            ]
        },
        {
            key: 2, head: 'partners', arts: [
                { text: 'Partnering with Finastra' },
                { text: 'Find a Partner' },
                { text: 'Partner Portal' },
            ]
        },
        {
            key: 3, head: 'solutions', arts: [
                { text: 'Customer Support' },
                { text: 'Training & Certifications' },
            ]
        },
        {
            key: 4, head: 'view points', arts: [
                { text: 'Articles' },
                { text: 'eBooks' },
                { text: 'Infographics' },
                { text: 'On-Demand Webinars' },
                { text: 'Podcasts' },
                { text: 'Videos' },
                { text: 'White Papers' },
                { text: 'Browse All' },
            ]
        },
        {
            key: 5, head: 'arts', arts: [
                { text: 'Our Story' },
                { text: 'Executive Team' },
                { text: 'ESG Purpose & Impact' },
                { text: 'Office Locations' },
                { text: 'Press & Media' },
                { text: 'Awards' },
                { text: 'Events & Webinars' },
                { text: 'Customer Stories' },
            ]
        },
    ];
    return (
        <ContactCont>
            <ContactHead>
                Get in touch<br />
                <HeadSpan>We are here to help your business</HeadSpan> <HeadSpan>reach its goals</HeadSpan>
            </ContactHead>
            <LearnBtn href='https://www.finastra.com/contact/sales'>Contact Us</LearnBtn>
            <FlexHor>
                <ArtCont>
                    <Logo nomar src={logo2} />
                    <LearnBtn href='https://www.finastra.com/contact/sales'>Contact Us</LearnBtn>
                </ArtCont>
                {data.map((item, id) => (
                    <ArtCont key={item.key}>
                        <DateTag>{item.head}</DateTag>
                        {item.arts.map((item1, id) => (
                            <ArtText>{item1.text}</ArtText>
                        ))}
                    </ArtCont>
                ))}

            </FlexHor>
        </ContactCont>
    );
}

export default Contact;