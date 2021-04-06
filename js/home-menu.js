'use strict';

const e = React.createElement;

class MenuList extends React.Component {
    render() {
        return (
            <div className="menu-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Art</li>
                </ul>
            </div>
        );
    }
}
class MenuClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
    //   return 'You liked this.';
    window.location = "/about";
    }

    return e(
      'div',
      { onClick: () => this.setState({ clicked: true }) },
      'About'
    );

  }
}

const domContainer = document.querySelector('#react-home-menu');
ReactDOM.render(e(MenuClick), domContainer);