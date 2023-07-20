import React from 'react';
import { Header } from './components';
import { Cart, Home } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios'
/* import { createStore } from 'redux' */
/* import { useSelector, useDispatch } from 'react-redux'; */
/* import { setPizzas } from './redux/actions/pizzas'; */

function App() {

  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">

        <Route path='/' render={() => <Home items={pizzas} />} exact />
        <Route path='/cart' component={Cart} exact />

      </div>
    </div>
  );
}

/*   fetch('http://localhost:3000/db.json').then((resp) =>
    resp.json()).then(json => {
      setPizzas(json.pizzas)
    });
}, []) 

*/
/* /* class App extends React.Component { */
/*

  (state) => {
    return {
      items: state.pizzas.items,
      filters: state.filters,
    }
  },
  (dispatch) => {
    return {
      setPizzas: (items) => dispatch(setPizzas(items))
    }
  }
export default connect()(App) */
export default App;
