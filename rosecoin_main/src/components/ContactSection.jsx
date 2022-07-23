import React from 'react';
import styled from 'styled.component';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div``;

export default function ContactSection (){

    return(
        <ContactSectionStyle>
            <div className="container">
            <SectionTitle heading="Contact" subheading="Get in touch"/>    
                <div className="contactSection__wrapper">
                    <div className="left"></div>
                    <div className="right"></div>
                    </div>          
            </div>
        </ContactSectionStyle>
        
    )

}