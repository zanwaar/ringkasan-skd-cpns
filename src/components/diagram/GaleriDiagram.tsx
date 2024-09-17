// src/components/GaleriDiagram.tsx
import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, Edge, Node } from 'react-flow-renderer';

// Definisikan elemen dan koneksi
const nodes: Node<any>[] = [
  { id: 'A', data: { label: 'Galeri A' }, position: { x: 250, y: 0 } },
  { id: 'B', data: { label: 'Galeri B' }, position: { x: 100, y: 100 } },
  { id: 'C', data: { label: 'Galeri C' }, position: { x: 400, y: 100 } },
  { id: 'D', data: { label: 'Galeri D' }, position: { x: 100, y: 200 } },
  { id: 'E', data: { label: 'Galeri E' }, position: { x: 200, y: 200 } },
  { id: 'F', data: { label: 'Galeri F' }, position: { x: 400, y: 200 } },
  { id: 'G', data: { label: 'Galeri G' }, position: { x: 200, y: 300 } },
  { id: 'H', data: { label: 'Galeri H' }, position: { x: 300, y: 300 } },
];

const edges: Edge<any>[] = [
  { id: 'e1', source: 'A', target: 'B', animated: true },
  { id: 'e2', source: 'A', target: 'C', animated: true },
  { id: 'e3', source: 'B', target: 'D', animated: true },
  { id: 'e4', source: 'B', target: 'E', animated: true },
  { id: 'e5', source: 'C', target: 'F', animated: true },
  { id: 'e6', source: 'D', target: 'G', animated: true },
  { id: 'e7', source: 'E', target: 'H', animated: true },
  { id: 'e8', source: 'F', target: 'H', animated: true },
];

const GaleriDiagram: React.FC = () => (
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

export default GaleriDiagram;
