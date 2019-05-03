import React from "react";
import '../common/styles/main.css';
import SocialLinks from './SocialLinks.js'
import SocialIcons from './SocialIcons.js'

const SocialBox = (props) => {

  return (
    <div className="social-box">
	    <div className="container">
	      <div className="social-box-content">
	      	<div className="row">
		      	<SocialIcons col="col-12"/>
		        <SocialLinks 
			        title="Winbet"
			        text1="За нас"
			        link1="https://affiliate.winbet-bg.com/#/bg/about-us"
			        text2="Новини"
			        link2="https://affiliate.winbet-bg.com/#/bg/news"
			        text3="Игрален сайт"
			        link3="https://winbet.bg"
		        />
		        <SocialLinks 
			        title="Информация за партньори"
			        text1="Правила и условия"
			        link1="https://affiliate.winbet-bg.com/#/bg/terms-and-coditions"
			        text2="Комисионна"
			        link2="https://affiliate.winbet-bg.com/#/bg/commission"
			        text3="Често задавани въпроси"
			        link3="https://affiliate.winbet-bg.com/#/bg/f-a-q"
			        text4="Отговорно залагане"
			        link4="https://affiliate.winbet-bg.com/#/bg/responsible-betting"
		        />
		        <SocialLinks 
			        title="Обслужване на клиенти"
			        text1="Бонуси и промоции"
			        link1="https://winbet.bg/bg/promotion/"
			        text2="Депозити и тегления"
			        link2="https://winbet.bg/bg/help/payments/deposit"
		        />
		        <SocialLinks 
			        title="Контакти"
			        text1="Контактна форма"
			        link1="https://affiliate.winbet-bg.com/#/bg/contact"
		        />
	        </div>
	      </div>
      </div>
    </div>
  );
}


export default SocialBox;