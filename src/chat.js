import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App-chat">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="Lembre-se de anotar mensagens importantes."
          subtitle="Essa conversa será perdida assim que o atendimento for encerrado."
        />
      </div>
    );
  } 
}

export default App;
