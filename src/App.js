import './App.css';
import Footer from './components/Footer';
import Main from './components/Main'
//import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <div className='w-full font-[Poppins]'>
    {/* <header className="relative flex h-screen overflow-hidden"> */}
    <Main/>
      {/* <video
        autoPlay
        loop
        muted
        className="w-full absolute object-cover top-0 right-0 buttom-0 left-0  -z-50 min-h-full h-48 md:w-full max-w-none"
      >
        <source
          src= {Myvideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
    {/* </header> */}
    <Footer/>
    </div>
  );
}

export default App;
