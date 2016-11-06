/**
 * Created by SeongjunKim on 2016-11-05.
 */
import React, { PropTypes }from 'react';
import animate from 'gsap-promise';

class Parallax extends React.Component {

  handleScroll = (ev) => {
    const top =  this.refs.parallax.getBoundingClientRect().top;
    const bottom = this.refs.parallax.getBoundingClientRect().bottom;



  };
  componentWillMount(){
    document.addEventListener('scroll',this.handleScroll)
  }

  render() {
    const {backgroundUrl} = this.props;
    return (
      <div ref="parallax" className="parallax parallax-background" style={{backgroundImage: `url(${backgroundUrl})`}}>
        {this.props.children}
      </div>
    );
  }
}

export default Parallax;