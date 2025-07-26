import React from 'react';

export default function PropertyPanel({ element, onChange }) {
  if (!element) {
    return <div style={{ padding: 8 }}>Select an element</div>;
  }

  const update = (field, value) => {
    onChange({ ...element, [field]: value });
  };

  return (
    <div style={{ padding: 8 }}>
      <div>ID: {element.id}</div>
      <div style={{ marginTop: 8 }}>
        <label>
          X:
          <input
            type="number"
            value={element.position.x}
            onChange={e => update('position', { ...element.position, x: +e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Y:
          <input
            type="number"
            value={element.position.y}
            onChange={e => update('position', { ...element.position, y: +e.target.value })}
          />
        </label>
      </div>
    </div>
  );
}
