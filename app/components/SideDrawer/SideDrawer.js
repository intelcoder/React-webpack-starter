/**
 * Created by SeongjunKim on 2016-11-05.
 */
/**
 * Created by fiddlest on 2016-10-02.
 */
import React, { PropTypes }from 'react';
import animate from 'gsap-promise';
import Close from 'react-icons/lib/fa/close'


class SideDrawer extends React.Component {



  componentDidMount() {
    this.drawerOpener(this.props.show,0, true);
  }

  componentWillUpdate(nextProps) {
    this.drawerOpener(nextProps.show, nextProps.clientXPosition)
  }

  drawerOpener = (shouldOpen,clientXPosition, init = false) => {
    const width = this.refs.drawerContainer.getBoundingClientRect().width,
      clickedOutSide = width < clientXPosition;
    let x = (shouldOpen) ? 0 : width * -1;
    if(shouldOpen && clickedOutSide){
      x = width * -1;
    }
    if (init) {
      return animate.set(this.refs.drawerContainer, { x: x })
    }
    animate.to(this.refs.drawerContainer, 0.5, { x: x })
  };

  render() {
    const { height, onCloseBtnClick} = this.props;
    return (
      <div id="drawer-container" style={{ height: height }} ref="drawerContainer">
        <div onClick={onCloseBtnClick} className="drawer-close-btn">
          <div>
            <Close/>
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SideDrawer;

SideDrawer.PropTypes = {
  width: PropTypes.number,
  height: PropTypes.number

};