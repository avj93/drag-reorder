import React from 'react';
import initialData from '../data/initial-data';
import MetricTable from './metricTable.js';
import ReorderListModal from './reorderListModal.js';

export default class Container extends React.Component {
  state = {
    metricDetails: initialData,
    shouldShowModal: false,
  };

  showModal = () => {
    this.setState({
      ...this.state,
      shouldShowModal: true,
    });
  }

  updateMetricDetailsList = (newList) => {
    this.setState({
      metricDetails: newList,
      shouldShowModal: false,
    });
  }

  hideModal = () => {
    this.setState({
      ...this.state,
      shouldShowModal: false,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <MetricTable metricDetails={this.state.metricDetails} updateMetricDetailsList={this.updateMetricDetailsList} />
        <button className="reorder" onClick={this.showModal} >
          {"Click to Reorder the Table"}
        </button>
        {
          this.state.shouldShowModal && <ReorderListModal metricDetails={this.state.metricDetails} onCancel={this.hideModal} onSubmit={this.updateMetricDetailsList} />
        }
      </div>
    );
  }
}
