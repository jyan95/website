import ClimbingPhoto from './components/photo/ClimbingPhoto';
import NameOverlay from './components/name/NameOverlay';
import LinkList from './components/links/LinkList';
import './App.css';

function App() {
  return (
    <main className="page">
      <NameOverlay />
      <ClimbingPhoto />
      <LinkList />
      <div className="tv-static" aria-hidden="true" />
    </main>
  );
}

export default App;
