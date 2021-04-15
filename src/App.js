import './App.css';
import {useRef} from 'react';

function App() {
    const containerRef = useRef()
    const insideContainerRef = useRef();
    const images = [
      {title: 'First Block', images: [
        'https://www.assignmentexpert.com/blog/wp-content/uploads/2019/10/hardest-programming-language.png',
        'https://miro.medium.com/max/6300/1*tVC8Q6YxHAikk8rZeL_J0A.png',
        'https://gbksoft.com/blog/wp-content/uploads/2020/01/Best-Programming-Languages-984x555.png',
        'https://miro.medium.com/max/1000/1*unmVsOH7qujPeBwFN5Y2Zw.png'
      ]},
      {
        title: 'Second Block',
        images: [
          'https://cdn.educba.com/academy/wp-content/uploads/2020/01/types-of-computer-language.jpg',
          'https://news.codecademy.com/content/images/2020/08/what-programming-language-should-i-learn-first.png',
           'https://i.ytimg.com/vi/KAwCbcn19YU/maxresdefault.jpg',
           'https://www.mindinventory.com/blog/wp-content/uploads/2019/06/reactjs-benefits.jpg'

        ]
      }
    ];


   const onChangeSlide = (params) => {
     let value = insideContainerRef.current.offsetWidth
     params === 'next' ? containerRef.current.scrollBy({ left: value, behavior: 'smooth' }) : containerRef.current.scrollBy({ left: -value, behavior: 'smooth' })
   }


    

  return (
    <div className="App">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="button-arrow left"  onClick={() => onChangeSlide('prev')}>
            <ion-icon name="arrow-back-outline" size="large"></ion-icon>
          </div>
          <div  className="container" ref={containerRef}> 
         {images.map((item, key) => (
              <div key={key} ref={insideContainerRef} className="inside-container">
                 {item.images.map((data, index) => (
                   <div key={index} className="image-container">
                     <img src={data} alt={item.title} style={{height: '100%', width: '100%'}}/>
                   </div>
                 ))}
                 <div className="title">{item.title}</div> 
              </div>
            ))}
            </div>
          <div className="button-arrow right" onClick={() => onChangeSlide('next')}>
            <ion-icon name="arrow-forward-outline" size="large"></ion-icon>
          </div>
        </div>
    </div>
  );

 
}

export default App;
