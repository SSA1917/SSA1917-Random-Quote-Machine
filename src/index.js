/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * se usan generalmente funciones solo en casos especificos se usan clases
 * handleClick(){
        let indice = this.state.index;
        getPosts()
            .then(response => response.json())
            .then(json => {
                let post = json[indice];
                this.setState({
                    posts: post.body,
                    index: indice+=1
                })
            });
    }
 */

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App.js';
import rootReducer from './redux/reducers.js';


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

function Container(){
    return(
        <div>
            <App />
        </div>    
    );
}

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
    );




