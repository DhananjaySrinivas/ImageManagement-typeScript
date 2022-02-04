import { useState } from 'react';
import Media from './components/UI/Gallery';
import Header from './components/Layout/Header';
import ActionBar from './components/Layout/ActionBar'
import ImageWindow from './components/Image/ImageWindow';

 const App:React.FC=()=> {
  const [showImageWindow, setShowImageWindow] = useState(false);
  
  const showImageHandler = () => {
    setShowImageWindow(true);
  }

  const hideImageHandler = () => {
    setShowImageWindow(false);
  }

  return (
    <section>
      <Header showAddImage={showImageHandler}/>
      <ActionBar />
      <Media/>
      {showImageWindow && <ImageWindow onClose={hideImageHandler}/>} 
    </section>
  );
}

export default App;
