import './styles/main.css';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Menubar from './components/menubar';

function App() {
  return (
    <div
      className='App'
      style={{
        backgroundImage: 'url(/images/skin.png)',
      }}
    >
      <Sidebar />
      <Main />
      <Menubar />
    </div>
  );
}

export default App;
