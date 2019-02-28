import React from 'react';
import OddsBox from '../components/OddsBox';
import Sidebar from '../components/Sidebar';
import {Helmet} from "react-helmet";
const url = 'https://api.the-odds-api.com/v3/odds/?sport=UPCOMING&region=uk&apiKey=537c7f0eaaa48e1b3434ea434b654898';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      url : '',
      homeTeam : '',
      awayTeam : '',
      mydata: '',
      api: '',
    };
  }
  componentDidMount(){
    
    fetch(url)
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
      .then(api => {
        this.setState({ 
          url: url,
          api: api.data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ 

        });
      });
  }

  render() {
    if (this.state.loading) {
      return null;
    }
		return (
      <main id="content">
        <div className="container">
          <div className="row">
            <Helmet>
              <title>Home Page</title>
              <meta name="description" content="Home page description" />
            </Helmet>
            <Sidebar 
              col="3"
              title="Top Events"
              api={this.state.api}
            />
            <OddsBox 
              col="9" 
              title="Upcoming events"
              api={this.state.api}
            />
          </div>
        </div>
      </main>
	  );
  };
    
}

export default HomePage;

