import React from 'react';

export default function PageTabs({ pages, active, onAdd, onSelect }) {
  return (
    <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
      {pages.map((page, idx) => (
        <div
          key={page.name}
          onClick={() => onSelect(idx)}
          style={{
            padding: '4px 8px',
            cursor: 'pointer',
            background: idx === active ? '#eee' : '#f9f9f9',
            borderRight: '1px solid #ccc',
          }}
        >
          {page.name}
        </div>
      ))}
      <div onClick={onAdd} style={{ padding: '4px 8px', cursor: 'pointer' }}>+</div>
    </div>
  );
}
