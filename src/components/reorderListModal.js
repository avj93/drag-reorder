import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Modal from './modal.js';

function getMetricList(metricDetails) {
  return metricDetails.map(item => ({
    id: item.program_id,
    content: item.program_displayName,
  }));
}

export default class ReorderListModal extends React.Component {
  state = {
    metricList: getMetricList(this.props.metricDetails),
  };

  metricDetails = this.props.metricDetails;

  /* onDragEnd - when drag ends, required */
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // dropped midway
    if (!destination)
      return;

    // dropped back at the same place of origin
    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;

    // Vertical drag and drop of rows within the column ie Moving within same list(column)
    const newMetricDetails = Array.from(this.metricDetails);
    const reorderedItem = newMetricDetails.find(item => item.program_id === draggableId);

    newMetricDetails.splice(source.index, 1);
    newMetricDetails.splice(destination.index, 0, reorderedItem);

    // Updating Metric details list in class variable
    this.metricDetails = newMetricDetails;

    const newMetricList = getMetricList(newMetricDetails);

    // updating metricList in local state
    this.setState({
      metricList: newMetricList,
    });
  }

  onSubmit = () => {
    // Updating Metric details list in server/parent
    this.props.onSubmit(this.metricDetails);
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Modal list={this.state.metricList} onCancel={this.props.onCancel} onSubmit={this.onSubmit} />
      </DragDropContext>
    );
  }
}
