import ClimbingPhoto from './components/photo/ClimbingPhoto';
import NameOverlay from './components/name/NameOverlay';
import LinkList from './components/links/LinkList';
import CornerNotes from './components/corners/CornerNotes';
import './App.css';

function App() {
  return (
    <main className="page">
      <NameOverlay />
      <ClimbingPhoto />
      <LinkList />
      <CornerNotes />
      <div className="tv-static" aria-hidden="true" />
    </main>
  );
}

export default App;
