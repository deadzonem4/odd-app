import React from 'react';
import MainContainer from '../components/MainContainer';
import MainSlider from '../components/MainSlider';
import WinSlider from '../components/WinSlider';
import OnlineCasino from '../components/OnlineCasino';
import HomeMap from '../components/HomeMap';

const NewsPage = (props) => {

  return (
		<div>
      <MainContainer dataLink="https://win-cor.winbet-bg.com/api/bg/home-sliders">
         <MainSlider/>
      </MainContainer>
      <WinSlider/>
      <OnlineCasino title="Winbet online casino"/>
      <HomeMap
			  containerElement={<div style={{ height: `360px` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>

  );
}

export default NewsPage;
