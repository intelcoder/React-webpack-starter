/**
 * Created by SeongjunKim on 2016-11-05.
 */
import React, { PropTypes }from 'react';


class DrawerItem extends React.Component {
  render() {
    const { title, icon } = this.props;
    return (
      <div id="drawer-item">
        <div className="drawer-item-container">
          <div className="icon">
            {
              React.createElement(icon, null)
            }
          </div>
          <div className="title">title</div>
        </div>
      </div>
    );
  }
}

export default DrawerItem;