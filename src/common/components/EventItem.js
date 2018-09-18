import React from "react";


const EventItem = (props) => {


	const items = props.api.map((filters) =>

 		<li key={filters.home_team} className="event-item">
      <ul className="bet-info">
        <li id="match">
        	<span>{filters.home_team}</span>
        	<span>{filters.teams[0] === filters.home_team ? filters.teams[1] : filters.teams[0]}</span>
        </li>
      </ul>
      <ul className="home-away-coeficent">
        <li className="home"><span>{filters.sites[0].odds.h2h[0].toFixed(2)}</span></li>
        <li className={filters.sites[0].odds.h2h[2] == null ? 'even missed' : 'even'}>
        	<span>{filters.sites[0].odds.h2h[2] == null ? '-' : filters.sites[0].odds.h2h[2].toFixed(2)}</span>
        </li>
        <li className="away"><span>{filters.sites[0].odds.h2h[1].toFixed(2)}</span></li>
      </ul>
      <ul className="bookmaker">
      	<li>
      		<span className="bookmaker-name">{filters.sites[0].site_nice}</span>
      	</li>
      </ul>
    </li>

	);
	return (
    <ul className="bet-content">
  		{items}
    </ul>
	);
}

export default EventItem;

		







