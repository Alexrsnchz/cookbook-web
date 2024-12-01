import Toolbar from '../components/home/Toolbar';
import Navbar from '../components/misc/Navbar';

function Home() {
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

export default Home;
