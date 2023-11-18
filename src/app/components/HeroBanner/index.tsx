"use client";
import React from "react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import Icon from "@mdi/react";
import { mdiFacebook, mdiGenderFemale, mdiInstagram, mdiTwitter } from "@mdi/js";
import {
  StyledAdoptMeCTA,
  StyledBanner,
  StyledBgImage,
  StyledCTA,
  StyledColumn,
  StyledContainer,
  StyledDiplay1,
  StyledDiplay2,
  StyledParagraph,
  StyledPetInfoBox,
  StyledPetInfoContainer,
  StyledSlide,
  StyledSocialLinks,
  StyledSocialLinksContainer,
  StyledTextAndCTAContainer,
} from "./components";

import MainDog from "@/assets/img/main-dog-banner.png";
import SecondaryDog from "@/assets/img/secondary-dog-banner.png";
import "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const HeroBanner = () => {
  return (
    <StyledContainer>
      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        slidesPerView={1}
      >
        <StyledSlide>
          <StyledBanner>
            <StyledColumn $position="left" $width="60%">
              <StyledTextAndCTAContainer>
                <StyledDiplay1>find</StyledDiplay1>
                <StyledDiplay2>
                  a new <br /> best friend
                </StyledDiplay2>
                <StyledCTA type="button">Let&apos;s go</StyledCTA>
              </StyledTextAndCTAContainer>
            </StyledColumn>
            <StyledColumn $position="right" $width="40%" $overImage>
              <StyledSocialLinksContainer>
                <StyledSocialLinks href="#">
                  <Icon path={mdiInstagram} title="Instagram" size={1.5} color="white" />
                </StyledSocialLinks>
                <StyledSocialLinks href="#">
                  <Icon path={mdiTwitter} title="Twitter" size={1.5} color="white" />
                </StyledSocialLinks>
                <StyledSocialLinks href="#">
                  <Icon path={mdiFacebook} title="Facebook" size={1.5} color="white" />
                </StyledSocialLinks>
              </StyledSocialLinksContainer>
            </StyledColumn>
            <StyledBgImage src={MainDog} alt="Main-Dog" priority />
          </StyledBanner>
        </StyledSlide>

        <StyledSlide>
          <StyledBanner>
            <StyledColumn $position="left" $width="50%" $overImage>
              <StyledDiplay2>coly</StyledDiplay2>
              <StyledParagraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nihil
                corrupti, quo aspernatur sit nam expedita nostrum fuga odit reprehenderit
                id et quibusdam enim blanditiis tempora exercitationem vitae voluptas
                aperiam?
              </StyledParagraph>
              <StyledPetInfoContainer className="pet-info">
                <StyledPetInfoBox className="pet-info-box">
                  <h5>4</h5>
                  <p>age</p>
                </StyledPetInfoBox>
                <StyledPetInfoBox className="pet-info-box" $centerText>
                  <Icon path={mdiGenderFemale} title="gender-female" color="white" />
                  <p>gender</p>
                </StyledPetInfoBox>
                <StyledPetInfoBox className="pet-info-box">
                  <h5>vizsla</h5>
                  <p>raze</p>
                </StyledPetInfoBox>
              </StyledPetInfoContainer>

              <StyledAdoptMeCTA>adopt me</StyledAdoptMeCTA>
            </StyledColumn>
            <StyledColumn $position="right" $width="50%" $overImage>
              <StyledSocialLinksContainer>
                <StyledSocialLinks href="#">
                  <Icon path={mdiInstagram} title="Instagram" size={1.5} color="white" />
                </StyledSocialLinks>
                <StyledSocialLinks href="#">
                  <Icon path={mdiTwitter} title="Twitter" size={1.5} color="white" />
                </StyledSocialLinks>
                <StyledSocialLinks href="#">
                  <Icon path={mdiFacebook} title="Facebook" size={1.5} color="white" />
                </StyledSocialLinks>
              </StyledSocialLinksContainer>
            </StyledColumn>
            <StyledBgImage src={SecondaryDog} alt="Secondary-Dog" />
          </StyledBanner>
        </StyledSlide>
      </Swiper>
    </StyledContainer>
  );
};
