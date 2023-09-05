import logo from './logo.svg';
import './App.css';
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
function App()
{
  return (
    <div className="App">
      <div
        className="head"
        style={{
          width: 'fit-content',
          margin: 'auto',
        }}
      >
        <h1
          style={{
            color: 'green',
          }}
        >
          GeeksforGeeks
        </h1>
        <strong>React MUI TreeView API</strong>
      </div>

      <TreeView
        aria-label="Tutorials navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          margin: 'auto',
          flexGrow: 1,
          width: 'fit-content',
        }}
      >
        <TreeItem nodeId="1" label="Data DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD">
          <TreeItem nodeId="2" label="Array" />
          <TreeItem nodeId="3" label="Max Heap" />
          <TreeItem nodeId="4" label="Stack" />
        </TreeItem>
        <TreeItem nodeId="5" label="Algorithms">
          <TreeItem nodeId="10" label="Gready" />
          <TreeItem nodeId="6" label="Graph">
            <TreeItem nodeId="8" label="DFS" />
            <TreeItem nodeId="8" label="BFS" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
}

export default App;
