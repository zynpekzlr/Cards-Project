import 'bulma/css/bulma.css';
import './App.css';
import  Course from './Course';
import Angular from './images/angular.jpg'
import Bootstrap from './images/boostrap.png'
import Csharp from './images/ccsharp.png'
import KompleWeb from './images/kompleweb.jpg'

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Kurslarım
    </p>
    
  </div>
</section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course 
      image={Angular}
      title="Angular" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tincidunt orci, at iaculis justo. Vivamus vulputate erat ac mi facilisis, nec faucibus velit lacinia. Aenean elementum fringilla elit, eu vestibulum dui pellentesque a. 
" />
          </div>
          <div className='column'>
          <Course  
      image={Bootstrap}
        title="Bootstrap 5" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tincidunt orci, at iaculis justo. Vivamus vulputate erat ac mi facilisis, nec faucibus velit lacinia. Aenean elementum fringilla elit, eu vestibulum dui pellentesque a. 
"  />
          </div>
          <div className='column'>
          <Course 
      image={Csharp}
      title="Komple Web" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tincidunt orci, at iaculis justo. Vivamus vulputate erat ac mi facilisis, nec faucibus velit lacinia. Aenean elementum fringilla elit, eu vestibulum dui pellentesque a. 
" />
          </div>
          <div className='column'>
          <Course 
      image={KompleWeb}
      title="Frontend" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tincidunt orci, at iaculis justo. Vivamus vulputate erat ac mi facilisis, nec faucibus velit lacinia. Aenean elementum fringilla elit, eu vestibulum dui pellentesque a. 
" />
          </div>
        </div>
        </section>
       
      </div>
    </div>
  );
}

export default App;
