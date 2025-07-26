import React from 'react';
import { useDrop } from 'react-dnd';

export default function Canvas({ elements, onDrop, onSelect, selectedId }) {
  const [, drop] = useDrop({
    accept: 'component',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      onDrop(item.type, offset);
    },
  });

  return (
    <div ref={drop} style={{ flex: 1, position: 'relative', border: '1px solid #ccc' }}>
      {elements.map(el => (
        <div
          key={el.id}
          onClick={() => onSelect(el.id)}
          style={{
            position: 'absolute',
            left: el.position.x,
            top: el.position.y,
            width: el.size.width,
            height: el.size.height,
            border: el.id === selectedId ? '2px solid blue' : '1px solid #999',
            padding: 4,
            boxSizing: 'border-box',
            background: '#fff',
          }}
        >
          {el.type}
        </div>
      ))}
    </div>
  );
}
