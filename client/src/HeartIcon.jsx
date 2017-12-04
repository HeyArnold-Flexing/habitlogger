import React from 'react';
import ReactDOM from 'react-dom';
import HeartSVG from '../../media/icons/Linearicons/SVG/heart.svg';
let node;
class Heart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    node = ReactDOM.findDOMNode(this);
    TweenMax.to(node, 1.5, {x: 155, y: 42, width: 30, height: 30})
  }
  componentWillReceiveProps(nextProps) {
    let change = {y: 39};
    let time = 1;
    TweenMax.to(node, time, change)
  }
  render(){
    return (
      <img src={HeartSVG} alt="lukeg" x="330" height="400px"/>
      )
  }
}

export default Heart;