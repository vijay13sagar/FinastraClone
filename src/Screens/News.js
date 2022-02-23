import React from 'react';
import { NewsContainer, Header, NewsCardCont, NewsCard, NewsImg, ServHead, DateTag } from '../Components/styles';
import news1 from '../Assets/news1.png';
import news2 from '../Assets/news2.png';
import news3 from '../Assets/news3.png';

const News = () => {
    const data = [
        { key: 1, image: news1, d1: 'webinar', d2: '16 feb 2022', text: 'Commercial lending: Streamlining the borrower and lender experience' },
        { key: 2, image: news2, d1: 'REPORT', d2: '10 FEB 2022', text: 'Selecting a Payment Hub, 2021-22' },
        { key: 3, image: news3, d1: 'BROCHURE', d2: '9 FEB 2022', text: 'Thunes via Fusion Total Messaging' },
    ];
    return (
        <NewsContainer>
            <Header greater black>The Latest from Finastra</Header>
            <NewsCardCont>
                {data.map((item, id) => (
                    <NewsCard key={item.key}>
                        <NewsImg src={item.image} />
                        <DateTag>{item.d1}&emsp;{item.d2}</DateTag>
                        <ServHead news>{item.text}</ServHead>
                    </NewsCard>
                ))}

            </NewsCardCont>

        </NewsContainer>
    );
}

export default News;