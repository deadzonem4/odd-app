import React from 'react';

class MainContainer extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      api: '',
      url: this.props.dataLink,
      loading: true
    };
  }
  componentWillMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(this.state.url)
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
    .then(api => {
      this.setState({ 
        api: api,
        loading: false
      });
    })
    .catch(error => {
      console.log('error');
    });
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="wait-page">Please Wait</div>
      );
    }
	  return (
      <div>
        {React.cloneElement(this.props.children, { SliderBg: this.state.api })}
        
      </div>
	  );
	}
}

export default MainContainer;