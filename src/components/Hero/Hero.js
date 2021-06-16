import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection,Span } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome
        <br />
        Hi there!
      </SectionTitle>
      <SectionText>
        <Span>I am an Ethusiastic programmer, eager to learn new concepts and also
        apply them. Currently i am in Third year doing btech in the field of
        Information Technology . I am also interested towards web development i
        also know React and interested in creating frontend applications.</Span>
      </SectionText>
      <Button onClick={()=> window.location.href="mailto:uddeshyapankaj14@gmail.com"} >
         Email 📧
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
