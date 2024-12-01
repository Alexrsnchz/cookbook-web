import Toolbar from '../components/feed/Toolbar';
import Navbar from '../components/misc/Navbar';

function Feed() {
  return (
    <div
      className="min-h-screen bg-gray-400"
      style={{
        backgroundColor: 'gray',
      }}
    >
      <Navbar />
      <Toolbar />
    </div>
  );
}

export default Feed;
