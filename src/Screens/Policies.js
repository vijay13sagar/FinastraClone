import React from 'react';
import { PolicyCont, TermText, PolicyText, IconCont } from '../Components/styles';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs'

const Policies = () => {
    return (
        <PolicyCont>
            <TermText>
                © 2022 Finastra. All rights reserved.
            </TermText>
            <PolicyText>Terms & Conditions</PolicyText>
            <PolicyText>Privacy Policy</PolicyText>
            <PolicyText>Accessibility</PolicyText>
            <PolicyText>All Legal</PolicyText>
            <IconCont>
                <BsFacebook size={25} color='hotpink' />
                <AiFillLinkedin size={30} color='hotpink' />
                <AiFillYoutube size={30} color='hotpink' />
                <AiFillTwitterCircle size={30} color='hotpink' />
            </IconCont>
        </PolicyCont>
    );
}
export default Policies;