import logo from './logo.svg';
import './App.css';
import jokesdata from './jokesdata';
import Joke from './jokes';

function App(){
  const jokeElements = jokesdata.map(joke => {
    return (
        <Joke 
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
    )
})
return (
    <div>
        {jokeElements}
    </div>
)
}

export default App;
