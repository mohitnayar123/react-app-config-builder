import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './Canvas';
import Sidebar from './Sidebar';
import PropertyPanel from './PropertyPanel';
import PageTabs from './PageTabs';
import { defaultElementProps } from './components';

let idCounter = 1;

export default function App() {
  const [pages, setPages] = useState([{ name: 'Page1', elements: [] }]);
  const [activePage, setActivePage] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  const active = pages[activePage];

  const handleDrop = (type, offset) => {
    const newEl = {
      id: `el_${idCounter++}`,
      type,
      ...defaultElementProps,
      position: { x: offset.x, y: offset.y },
    };
    const newPages = [...pages];
    newPages[activePage].elements.push(newEl);
    setPages(newPages);
  };

  const handleSelect = id => setSelectedId(id);

  const handleElementChange = updated => {
    const newPages = pages.map((page, idx) => {
      if (idx !== activePage) return page;
      return {
        ...page,
        elements: page.elements.map(el => (el.id === updated.id ? updated : el)),
      };
    });
    setPages(newPages);
  };

  const handleAddPage = () => {
    setPages([...pages, { name: `Page${pages.length + 1}`, elements: [] }]);
  };

  const saveYaml = () => {
    const yamlData = { pages };
    const yaml = JSON.stringify(yamlData, null, 2); // placeholder for real YAML
    console.log(yaml);
  };

  const selectedEl = active.elements.find(el => el.id === selectedId);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <PageTabs pages={pages} active={activePage} onAdd={handleAddPage} onSelect={setActivePage} />
        <div style={{ display: 'flex', flex: 1 }}>
          <Canvas elements={active.elements} onDrop={handleDrop} onSelect={handleSelect} selectedId={selectedId} />
          <div style={{ width: 250, display: 'flex', flexDirection: 'column', borderLeft: '1px solid #ccc' }}>
            <Sidebar />
            <div style={{ flex: 1, borderTop: '1px solid #ccc', overflowY: 'auto' }}>
              <PropertyPanel element={selectedEl} onChange={handleElementChange} />
            </div>
          </div>
        </div>
        <div style={{ padding: 4, borderTop: '1px solid #ccc' }}>
          <button onClick={saveYaml}>Save Config</button>
        </div>
      </div>
    </DndProvider>
  );
}
