// src/components/StanDiagram.tsx
import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, Edge, Node } from 'react-flow-renderer';

// Definisikan elemen dan koneksi
const nodes: Node<any>[] = [
  { id: 'A', data: { label: 'Stan A' }, position: { x: 250, y: 0 } },
  { id: 'B', data: { label: 'Stan B' }, position: { x: 100, y: 100 } },
  { id: 'C', data: { label: 'Stan C' }, position: { x: 400, y: 100 } },
  { id: 'D', data: { label: 'Stan D' }, position: { x: 50, y: 200 } },
  { id: 'E', data: { label: 'Stan E' }, position: { x: 150, y: 200 } },
  { id: 'F', data: { label: 'Stan F' }, position: { x: 400, y: 200 } },
];

const edges: Edge<any>[] = [
  { id: 'e1', source: 'A', target: 'B', animated: true },
  { id: 'e2', source: 'A', target: 'C', animated: true },
  { id: 'e3', source: 'B', target: 'D', animated: true },
  { id: 'e4', source: 'B', target: 'E', animated: true },
  { id: 'e5', source: 'C', target: 'F', animated: true },
  { id: 'e6', source: 'D', target: 'F', animated: true },
];

const StanDiagram: React.FC = () => (
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

export default StanDiagram;
