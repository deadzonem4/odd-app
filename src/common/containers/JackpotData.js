import React from 'react';

class JackpotData extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      api: {},
      url: this.props.dataLink,
      loading: true
    };
  }
  componentWillMount(){
    this.fetchData();
    this.interval = setInterval(() => {
      this.fetchData();
    }, 8000);
  }
 componentWillUnmount() {
  console.log("asd");
    clearInterval(this.interval);
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
    let elements = React.Children.toArray(this.props.children)
    if (this.state.loading) {
      return (
        <div className="wait-page">Please Wait</div>
      );
    }
	  return (
      <div>
        {React.cloneElement(elements[0], { data: this.state.api})}
        {React.cloneElement(elements[1], { data: this.state.api})}
        {React.cloneElement(elements[2], { data: this.state.api})}
      </div>
	  );
	}
}

export default JackpotData;