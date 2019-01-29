import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import './styles.css';

const ListItem = (props) => {
  const { item, index } = props;

  return (
    <Draggable
      draggableId={item.id}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          className={snapshot.isDragging ? "listItemDraggingOver" : "listItem"}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </div>
      )}
    </Draggable>
  );
}

const List = (props) => {
  const { list, provided } = props;

  return (
    <div ref={provided.innerRef} {...provided.droppablePops} className="listContainer">
      {list.map((item, index) => <ListItem key={item.id} item={item} index={index} />)}
    </div>
  );
}


export default class Modal extends React.PureComponent {
  componentWillMount() {
    document.body.classList.add("noScroll");
  }

  componentWillUnMount() {
    document.body.classList.remove("noScroll");
  }

  render() {
    const { list, onCancel, onSubmit } = this.props;

    return (
      <div className="modalOverlay">
        <div className="modal">
          <div className="modalContent">
            <h3 className="modalTitle">{"Reorder"}</h3>
            <Droppable droppableId="BMS_LIST">
              {(provided, snapshot) => (
                <List list={list} provided={provided}>
                  {provided.placeholder}
                </List>
              )}
            </Droppable>
            <div className="modalFooter">
              <button className="cancel" onClick={onCancel}>{"Cancel"}</button>
              <button className="submit" onClick={onSubmit}>{"Submit"}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
