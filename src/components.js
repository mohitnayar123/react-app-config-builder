export const componentLibrary = {
  ui: [
    { type: 'container', label: 'Container' },
    { type: 'tabs', label: 'Tabs' },
    { type: 'textbox', label: 'Text Box' },
    { type: 'modal', label: 'Modal Dialog' },
    { type: 'button', label: 'Button' },
    { type: 'image', label: 'Image Placeholder' },
  ],
  charts: [
    { type: 'bar_chart', label: 'Bar Chart' },
    { type: 'pie_chart', label: 'Pie Chart' },
    { type: 'ag_grid', label: 'AG Grid' },
    { type: 'text_display', label: 'Text Display' },
    { type: 'table', label: 'Simple Table' },
    { type: 'slicer', label: 'Slicer' },
    { type: 'tree_chart', label: 'Tree Chart' },
  ],
  data: [
    { type: 'editable_grid', label: 'Editable Grid' },
    { type: 'form_inputs', label: 'Form Inputs' },
    { type: 'file_upload', label: 'File Upload' },
  ],
};

export const defaultElementProps = {
  position: { x: 0, y: 0 },
  size: { width: 200, height: 150 },
  properties: {},
};
