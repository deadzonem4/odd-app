import React from "react";
import EventItem from '../common/components/EventItem'


class OddsBox extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

	render() {
	    return (
	      <div className={"col-md-" + this.props.col}>
	        <div className="events-result">
	          <div className="content-box">
	            <h2 className="event-title">{this.props.title}</h2>
	            <ul className="filters">
	              <li className="filter-item">Best sports events</li>
	              <li className="filter-item">1x2</li>
	              <li className="filter-item">Bookmakers</li>
	            </ul>
	            	<EventItem api={this.props.api}/>
	          </div>
	        </div>
	      </div>
	    );
	}
}

export default OddsBox;
