/**
 * Created by fiddlest on 2016-10-02.
 */
import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  componentWillMount() {
    window.addEventListener('resize', this.updateWidthHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidthHeight);
  }

  updateWidthHeight = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  };

  getChildrenWithData = () => {
    if (this.props.children) {
      return React.cloneElement(this.props.children, {
        width: this.state.width,
        height: this.state.height
      })
    }
  };

  render() {
    return (
      <div>
        {
          this.getChildrenWithData()
        }
      </div>
    );
  }
}