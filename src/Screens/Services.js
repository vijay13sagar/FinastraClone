import React, { useState } from 'react';
import { ServiceContainer, ServHead, Drawer, DrawImage, Header, LearnBtn, HeadSpan, SubHead, DrawHalf, LargeText, DrawHeadCont, DrawHead, ServInCont, Logocard, LogoCardCont, LogImg } from '../Components/styles';
import log1 from '../Assets/log1.png';
import log2 from '../Assets/log2.png';
import log3 from '../Assets/log3.png';
import log4 from '../Assets/log4.png';
import log5 from '../Assets/log5.png';
import log6 from '../Assets/log6.png';
import draw1 from '../Assets/draw1.png';
import draw2 from '../Assets/draw2.png';
import draw3 from '../Assets/draw3.png';
import draw4 from '../Assets/draw4.png';
import drawbg from '../Assets/drawbg.jpg';


const Services = () => {
    const logos = [
        { key: 1, image: log1 },
        { key: 2, image: log2 },
        { key: 3, image: log3 },
        { key: 4, image: log4 },
        { key: 5, image: log5 },
        { key: 6, image: log6 },
    ];
    const data = [
        {
            key: 1, image: draw1, head: 'Market-leading end-to-end', span: ' lending solutions',
            p1: 'Finastra offers the most comprehensive portfolio of end-to-end lending solutions in the market -  across syndicated, commercial, consumer, and mortgage lending.',
            p2: 'We deliver a consistent, frictionless digital borrower experience for a range of businesses, corporations and consumers, whilst improving customer onboarding, increasing transparency and streamlining back-office operations.',
            p3: 'As well as reducing complexity, cost and manual processes, Finastra’s solutions provide a single platform to deliver efficiency and a clear return on investment.',
            link: 'https://www.finastra.com/solutions/lending'
        },

        {
            key: 1, image: draw2, head: 'Scalable global payment processing solutions built for', span: ' the changing world',
            p1: 'Finastra’s powerful payment solutions enable customers to adapt to the latest technology trends, with an open, cloud based and API first framework.',
            p2: 'Consolidate, simplify and reduce costs with a single platform for your business.',
            p3: 'Meet the needs of customers with rapidly deployed solutions, and scale up instantly while delivering back-office efficiencies and enhancing the front-end experience.',
            link: 'https://www.finastra.com/solutions/payments'
        },

        {
            key: 1, image: draw3, head: 'Evolve, transform and', span: ' accelerate innovation',
            p1: 'Finastra’s Treasury & Capital Markets Solutions offer simple, flexible and open solutions for better performance and risk management.',
            p2: 'Extend your business capabilities to analyze and forecast with one integrated solution, creating automated processes and coherent data.',
            p3: 'Build competitive advantage by improving trading and treasury performance, whilst enhancing monitoring and reporting.',
            link: 'https://www.finastra.com/solutions/treasury-capital-markets'
        },

        {
            key: 1, image: draw4, head: 'Banking software solutions for an', span: ' open financial future',
            p1: 'Finastra’s universal banking cloud-enabled software solutions offer next-generation technology for retail banks, commercial banks, universal banks, Islamic banks, community banks and credit unions.',
            p2: 'We help you to deliver the ultimate personalized customer experience, thanks to deep data insights using sophisticated analytics to better target and service consumers.  Frictionless data access and actionable insights let you better target and service account holders.',
            p3: 'Innovate and leverage new technologies for accelerated growth, while optimizing cost and mitigating risk.',
            link: 'https://www.finastra.com/solutions/digital-retail-banking'
        },

    ];
    const [drawer, setDrawer] = useState(1);
    return (
        <ServiceContainer>
            <ServInCont>
                <ServHead>
                    Serving financial institutions of all sizes across the globe
                </ServHead>
                <LogoCardCont>
                    {logos.map((item, id) => (
                        <Logocard key={item.key}>
                            <LogImg src={item.image} />
                        </Logocard>
                    ))}
                </LogoCardCont>
                <LargeText>
                    Explore Finastra’s solutions that can make you ready for today and the future.
                </LargeText>
                <DrawHeadCont>
                    <DrawHead onClick={() => setDrawer(1)} active={(drawer == 1)} >Lending</DrawHead>
                    <DrawHead onClick={() => setDrawer(2)} active={(drawer == 2)}>Payments</DrawHead>
                    <DrawHead onClick={() => setDrawer(3)} active={(drawer == 3)}>Treasury & Capital</DrawHead>
                    <DrawHead onClick={() => setDrawer(4)} active={(drawer == 4)}>Digital & Retail Banking</DrawHead>
                </DrawHeadCont>
            </ServInCont>
            <Drawer image={drawbg}>
                <DrawHalf>
                    <Header greater>{data[drawer - 1].head}
                        <HeadSpan>{data[drawer - 1].span}</HeadSpan>
                    </Header>
                    <SubHead bold>
                        {data[drawer - 1].p1}
                        <br /><br />
                        {data[drawer - 1].p2}
                        <br /><br />
                        {data[drawer - 1].p3}
                    </SubHead>
                    <LearnBtn learn href={data[drawer - 1].link}>Learn more</LearnBtn>
                </DrawHalf>
                <DrawHalf>
                    <DrawImage src={data[drawer - 1].image} />
                </DrawHalf>

            </Drawer>
        </ServiceContainer>
    );
}

export default Services;