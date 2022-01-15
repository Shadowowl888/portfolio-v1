import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, my name is <br />
        Devin Khun
      </SectionTitle>
      <SectionText>
        I build things for the web. <br />
        I'm a self taught entry-level software engineer and programming is my
        hobby working with React and NextJS.
      </SectionText>
      <Button onClick={() => (window.location = "mailto:khundevin@gmail.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
