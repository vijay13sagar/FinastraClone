import React from 'react';
import { HomeContainer, Header, HeadSpan, SubHead, HeadCont, Logo, Card, CardCont, CardText, CardLink } from '../Components/styles';
import logo from '../Assets/logo.png';
import pic1 from '../Assets/pic1.jpg';
import pic2 from '../Assets/pic2.jpg';
import pic3 from '../Assets/pic3.jpg';
import bg from '../Assets/bg.png'

const Home = () => {
    const data = [
        { key: 1, image: pic1, text: ' Finastra Forum Your World. OPEN Regional event dates now released', link: 'https://www.finastra.com/finastra-forum', linktext: 'Join us' },
        { key: 2, image: pic2, text: 'Drive new revenue streams through contextual finance with BaaS', link: 'https://www.finastra.com/banking-as-a-service', linktext: 'Discover how' },
        { key: 3, image: pic3, text: "Finastra's open developer platform and app marketplace unlocks iinocation in financial services", link: 'https://store.fusionfabric.cloud/', linktext: 'Discover more' },
    ];
    return (
        <HomeContainer pic={bg}>
            <Logo src={logo} />
            <HeadCont>
                <Header>We enable the financial services world, to deliver the
                    <HeadSpan> future of</HeadSpan>
                    <HeadSpan> banking</HeadSpan>
                </Header>

                <SubHead wid>
                    Applications that power financial institutions, marketplaces that accelerate industry
                    & an open innovation platform for banks, fintechs & non-banks to connect and collaborate
                </SubHead>
            </HeadCont>
            <CardCont>
                {data.map((item, id) => (
                    <Card key={item.key} image={item.image}>
                        <CardText>{item.text}</CardText>
                        <CardLink href={item.link}>{item.linktext}</CardLink>
                    </Card>
                ))}
            </CardCont>
        </HomeContainer>
    )
}
export default Home;