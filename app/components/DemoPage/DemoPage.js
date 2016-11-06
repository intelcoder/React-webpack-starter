/**
 * Created by SeongjunKim on 2016-11-05.
 */

import React, { PropTypes }from 'react';
import model from '../../models/model';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import DrawerItem from '../../components/DrawerItem/DrawerItem';
import Parallax from '../../components/Parallax/Parallax';

class DemoPage extends React.Component {
  state = {
    showDrawer: false,
    clientXPosition: 0,
  };


  onCloseBtnClick = () => {
    this.setState({
      showDrawer: false
    })
  };
  handleOpenDrawer = () => {
    this.setState({
      showDrawer: true
    })
  };

  //Update only when showDrawer is open
  onClickOutSideDrawer = (ev) => {
    if (this.state.showDrawer) {
      this.setState({
        clientXPosition: ev.clientX
      })
    }
  };

  render() {
    const { height } = this.props;
    return (
      <div onClick={this.onClickOutSideDrawer}>
        <SideDrawer
          height={height}
          show={this.state.showDrawer}
          onCloseBtnClick={this.onCloseBtnClick}
          clientXPosition={this.state.clientXPosition}
        >
          {
            model.drawerList.map((item, index)=> {
              return (
                <DrawerItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                />
              )
            })
          }
        </SideDrawer>
        <div >
          <div onClick={this.handleOpenDrawer}>
            Button
          </div>
        </div>
        <Parallax backgroundUrl={model.parallaxImages[0]}/>

        <div className="fill-up">
          <div style={{width:'70%'}}>
            <h1>Lorem Ipsum is simply dummy </h1>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>

        <Parallax backgroundUrl={model.parallaxImages[1]}/>

        <div className="fill-up">
          <div style={{width:'70%'}}>
            <h1>Lorem Ipsum is simply dummy </h1>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>



        <Parallax backgroundUrl={model.parallaxImages[2]}/>
        <div className="fill-up">
          <div style={{width:'70%'}}>
            <h1>Lorem Ipsum is simply dummy </h1>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>

      </div>
    );
  }
}

export default DemoPage;