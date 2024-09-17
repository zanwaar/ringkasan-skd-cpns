// src/components/PosDiagram.tsx
import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, Edge, Node } from 'react-flow-renderer';

// Definisikan elemen dan koneksi
const nodes: Node<any>[] = [
  { id: 'A', data: { label: 'Pos A' }, position: { x: 250, y: 5 } },
  { id: 'B', data: { label: 'Pos B' }, position: { x: 100, y: 100 } },
  { id: 'C', data: { label: 'Pos C' }, position: { x: 400, y: 100 } },
  { id: 'D', data: { label: 'Pos D' }, position: { x: 300, y: 200 } },
  { id: 'E', data: { label: 'Pos E' }, position: { x: 500, y: 200 } },
  { id: 'F', data: { label: 'Pos F' }, position: { x: 500, y: 300 } },
  { id: 'G', data: { label: 'Pos G' }, position: { x: 300, y: 300 } },
];

const edges: Edge<any>[] = [
  { id: 'e1', source: 'A', target: 'B', animated: true },
  { id: 'e1', source: 'B', target: 'C', animated: true },
  { id: 'e2', source: 'A', target: 'C', animated: true },
  { id: 'e3', source: 'C', target: 'D', animated: true },
  { id: 'e4', source: 'C', target: 'E', animated: true },
  { id: 'e5', source: 'D', target: 'G', animated: true },
  { id: 'e6', source: 'E', target: 'F', animated: true },
  { id: 'e7', source: 'E', target: 'G', animated: true },
  { id: 'e8', source: 'G', target: 'F', animated: true },
];

const PosDiagram: React.FC = () => (
  <div style={{ height: '500px' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      style={{ width: '100%', height: '100%' }}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  </div>
);

export default PosDiagram;
