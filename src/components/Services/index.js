import React from "react";
import DevIcon from "../../images/undraw_progressive_app_m9ms.svg";
import DataIcon from "../../images/undraw_data_reports_706v.svg";
import MusicIcon from "../../images/undraw_compose_music_ovo2.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={DevIcon} />
            <ServicesH2>Front-End Developer</ServicesH2>
            <ServicesP>With a focus on React, HTML5 and CSS3</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={DataIcon} />
            <ServicesH2>Data Scientist</ServicesH2>
            <ServicesP>
              Able to test, train & employ ML algorithms on sets of data
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={MusicIcon} />
            <ServicesH2>Music Producer</ServicesH2>
            <ServicesP>
              Production of original music at River Road Records
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
