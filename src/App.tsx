// Imports-------------------------------
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap
} from 'reactflow';

import 'reactflow/dist/style.css';

// Reactor Template Imports
import ReactorNode from './components/ReactorNode';
const nodeTypes = {
  reactor: ReactorNode
};



// Body Start-------------------------------
function App() {

  //Suite 1-------------------------------
  const nodes = [
    {
  id: 'suite1',
  position: { x: 0, y: 0 },
  data: { label: 'Suite 1' },
  style: {
    width: 700,
    height: 500,
    backgroundColor: '#dbeafe',
    border: '2px solid #2563eb',
    borderRadius: '12px',
    padding: '10px'
  },
  draggable: false
},

//Suite 2----------------------------
{
  id: 'suite2',
  position: { x: 800, y: 0 },
  data: { label: 'Suite 2' },
  style: {
    width: 700,
    height: 500,
    backgroundColor: '#dcfce7',
    border: '2px solid #16a34a',
    borderRadius: '12px',
    padding: '10px'
  },
  draggable: false
},






    //Reactor 1--------------------------
    {
      id: 'R1',
      position: { x: 100, y: 100 },
      data: { label: 'R1 Reactor' },
      type: 'reactor'
    },

    //Reactor 2--------------------------
    {
      id: 'R2',
      position: { x: 400, y: 100 },
      data: { label: 'R2 Reactor' },
      type: 'reactor'
    },

    //Isolator--------------------------
    {
      id: 'ISO',
      position: { x: 600, y: 200 },
      data: { label: 'Isolator' },
      type: 'default',

      //this rotates the shape
        style: {
        width: 75,
        height: 200
        }
    },

    //Reactor 3--------------------------
    {
      id: 'R3',
      position: { x: 900, y: 100 },
      data: { label: 'R3 Reactor' },
      type: 'reactor'
    },

    //Filter Dryer--------------------------
    {
      id: 'FD',
      position: { x: 1200, y: 100 },
      data: { label: 'Filter Dryer' },
      type: 'default'
    },

       //VBSE--------------------------
    {
      id: 'VBSE',
      position: { x: 1400, y: 225 },
      data: { label: 'VBSE' },
      type: 'default',

      //this rotates the shape
        style: {
        width: 75,
        height: 150
        }
    }


  ];

  return (
    <div style={{ width: '100vw', height: '100vh' }}>

      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        fitView
      >

        <Background gap={20} size={1} />

        <Controls />

        <MiniMap />

      </ReactFlow>

    </div>
  );
}

export default App;