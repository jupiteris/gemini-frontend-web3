import React from "react";

class CardOverView extends React.Component {

  state = {
    isHide: false,
    children: '',
    chartProperties: {
      number: '',
      title: '',
      bgColor: '',
      styleName: '',
      desc: '',
      percent: '',
    }
  };


  componentDidMount() {
    this.setState((previousState) => ({
      chartProperties: this.props.chartProperties,
      children: this.props.children,
    }));
  }

  handleToggle() {
    this.setState((previousState) => ({
      isHide: !previousState.isHide,
    }));
  }

  render() {
    const {chartProperties, isHide, children} = this.state;
    const {number, title, styleName, desc, bgColor, percent} = chartProperties;
    return (
      <div className="jr-card jr-card-full">
        <div
          className={isHide === true ? `jr-fillchart bg-${bgColor} jr-fillchart-nocontent` : `jr-fillchart bg-${bgColor} jr-overlay-fillchart`}>
          <div className="card-title mb-3">{title}</div>
          {children}
          <div className="jr-fillchart-content">
            <div className="card-title mb-4">{title}</div>
            <h2 className="mb-2 jr-fs-xl jr-font-weight-medium">{number}</h2>
            {percent > 0}
            <p className="mb-0 jr-fs-sm"><span
              className={`jr-font-weight-medium jr-fs-md jr-chart-${styleName}`}>{percent}
              </span>{desc}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default CardOverView;
