import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from '../components/City/City';
import { cities } from './cz-cities';



document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
       <h1>ČESKÁ MĚSTA</h1>
    </header>
    <main>
     { cities.map((item) => (
      <City 
        key={item.name} 
        name={item.name} 
        population={item.population} 
        area={item.area}
        district={item.district}
        photo={item.photo}
      />
      ))
      }
    </main>
  
  </div>
);

