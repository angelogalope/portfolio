import './App.css';
import bg from "./assets/images/bg.png";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Landing } from './components/Landing';

function App() {
  return (
    <>
      <div 
        style={{backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        }}
        className='flex flex-col jusify-center items-center py-6 px-10'
      >
        <Navbar />
        <div className='flex flex-col items-center justify-center h-screen'>
          <Landing />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
