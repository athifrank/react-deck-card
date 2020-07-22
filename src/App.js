import React from 'react';
import logo from './logo.svg';
import './App.css';

const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

class Card{
  constructor(suit,value){
    this.suit=suit;
    this.value=value;
  }
}

const deck=[]

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
       deck:[]
    }
  }

  createDeck=()=>{
    for (let suit in suits) {
      for (let value in values) {
        deck.push(new Card(suits[suit],values[value]))
        this.setState({deck})
      }
    }
  }

  shuffle=()=>{
    let deck = [...this.state.deck];
    let m = deck.length, i;
    while(m){
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    this.setState({deck:deck})
    //return deck;
  }

  componentDidMount(){
    this.createDeck()
    //console.log('deck ',this.shuffle())
  }

  deal=()=>{
    this.setState({deck:deck.pop()})
  }

  render(){
   const data=this.state.deck.length===0 ? [] : this.state.deck

   console.log('dta' ,data)
    return (
      <div >
        <button onClick={()=>this.shuffle()}>shuffle</button>
        <button onClick={()=>this.createDeck()}>reset</button>
        {
          this.state.deck.length===0? '' :
          <div className="divCard">
            {
              this.state.deck.map((res,inx)=>{
                return(
                  <div className="card">
                    {
                      res.suit 
                    }
                    {
                      res.value
                    }
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    );
  }
}

export default App;
