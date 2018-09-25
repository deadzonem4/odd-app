import React from "react";

class EventItem extends React.Component {
  
  constructor(props) {
    super(props);

    this.Test = this.Test.bind(this);

    this.state = {
      test: false
    };
    
  }
  Test() {
    this.setState({
      test: !this.state.test
    });
    console.log("here")
  }

  render() {
    const items = this.props.api.map((filters) =>
      <div key={filters.home_team}>
        <div  className={filters.sites_count === 0 ? 'event-item-disabled' : 'event-item'} onClick={this.Test}>
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
        </div>
      </div>
    );

    return (
      <div className="bet-content">
        {items}
      </div>
    );
  }
}

export default EventItem;

		









