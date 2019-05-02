import React from 'react';
import MainContainer from '../components/MainContainer';
import MainSlider from '../components/MainSlider';
import WinSlider from '../components/WinSlider';
import OnlineCasino from '../components/OnlineCasino';

const NewsPage = (props) => {

  return (
		<div>
      <MainContainer dataLink="https://win-cor.winbet-bg.com/api/bg/home-sliders">
         <MainSlider/>
      </MainContainer>
      <WinSlider/>
      <OnlineCasino title="Winbet online casino"/>
		</div>

  );
}

export default NewsPage;
