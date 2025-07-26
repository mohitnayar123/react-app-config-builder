import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { componentLibrary } from './components';

function DraggableItem({ type, label }) {
  const [, drag] = useDrag({ type: 'component', item: { type } });
  return (
    <div ref={drag} style={{ padding: '4px 8px', border: '1px solid #ddd', marginBottom: 4, cursor: 'grab' }}>
      {label}
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState({ ui: true, charts: true, data: true });

  return (
    <div style={{ width: 250, borderLeft: '1px solid #ccc', padding: 8, overflowY: 'auto' }}>
      {Object.entries(componentLibrary).map(([key, items]) => (
        <div key={key} style={{ marginBottom: 8 }}>
          <div
            style={{ fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => setOpen({ ...open, [key]: !open[key] })}
          >
            {key.toUpperCase()}
          </div>
          {open[key] && (
            <div>
              {items.map(item => (
                <DraggableItem key={item.type} type={item.type} label={item.label} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
