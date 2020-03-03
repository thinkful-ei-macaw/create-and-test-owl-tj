import React from 'react';
import Participant from './Participant';
import Stage from './Stage';
import Chat from './Chat';

class App extends React.Component {
    static defaultProps = {
        store: {
          participants: [],
          chatEvents: []
        }
      };
    
    render () {
        const { store } = this.props;
        return (
            <main className='App'>
                <div className="Chat-Box"> 
                    <div className="Participants Right">
                        {store.participants.map(list => (
                                <Participant 
                                    key={list.id} 
                                    name={list.name} 
                                    avatar={list.avatar}/>
                        ))}
                    </div>
                    <div className="Chat Left">
                        {store.chatEvents.map(list => 
                        <Chat 
                          key={list.participantId} type={list.type} 
                          message={list.message}
                          time={list.time}
                          timestamp={list.timestamp}/>)}
                    </div>
                </div>
                <div className="Stage">
                    {store.participants.map(list => (
                            <Stage 
                            key={list.id} 
                            name={list.name} 
                            avatar={list.avatar}/>
                    ))}
                </div>
            </main>
        )
    }
}

export default App;