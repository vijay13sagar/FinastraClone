import React from 'react';
import { HomeContainer, DrawHalf, VideoCont, SubHead, Card, CardText, CardLink, FutureHead, NewsCardCont, NewsCard, NewsImg, DateTag, ServHead, FutHalf } from '../Components/styles';
import futurebg from '../Assets/futurebg.jpg';
import video from '../Assets/video.png';

const Future = () => {
    const data = [
        { key: 1, title: 'CloudMargin', text: 'The world’s first automated, single-instance, cloud-native collateral management platform that never stops evolving.', link: 'https://store.fusionfabric.cloud/application/cloudmargin-1' },
        { key: 2, title: 'HUBX Arranger', text: 'HUBX Arranger is a data-driven primary and secondary loan syndication platform integrated with Fusion Loan IQ.', link: 'https://store.fusionfabric.cloud/application/hubx-arranger' },
        { key: 3, title: 'Fincom', text: 'Better Compliance with lower Operational Costs', link: 'https://store.fusionfabric.cloud/application/fincom-co-s-aml-screening' },
        { key: 4, title: 'Clari5', text: 'Real-time Enterprise-Wide Fraud Detection, Monitoring and Prevention solution that monitors suspicious patterns', link: 'https://store.fusionfabric.cloud/application/real-time-enterprise-fraud-management-efm-system' },
    ];
    return (
        <HomeContainer pic={futurebg} row>
            <DrawHalf width={35}>
                <FutureHead>Build the future. Open collaboration.</FutureHead>
                <VideoCont>
                    <NewsCard vid>
                        <NewsImg src={video} />
                        <DateTag>video&emsp;8 sep 2021&emsp;3 min 36 s</DateTag>
                        <ServHead white news>FusionFabric.cloud - Unlocking Innovation in Financial Services</ServHead>
                    </NewsCard>
                </VideoCont>
            </DrawHalf>
            <FutHalf>
                {data.map((item, id) => (
                    <Card fut width={20} key={item.key}>
                        <CardText nomar>
                            {item.title}
                        </CardText>
                        <SubHead>
                            {item.text}
                        </SubHead>
                        <CardLink fut nomar href={item.link}>Visit FusionStore</CardLink>
                    </Card>
                ))}

            </FutHalf>
        </HomeContainer>
    );
}

export default Future;