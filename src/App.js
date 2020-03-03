import React from 'react';
import Participant from './Participant';
import Stage from './Stage';
import Chat from './Chat';
import './App.css';

class App extends React.Component {
    static defaultProps = {
        store: {
          participants: [],
          chatEvents: []
        }
      };

    
    render () {
        const { store } = this.props;
        const onStage = store.participants.filter(list => list.onStage === true);

        return (
            <main className='App'>
                <div className="Chat-Box"> 
                    <div className="Buttons">
                        <input type="submit" name="toggle" value="Toggle"></input>
                    </div>
                    <div className="Chat-Box-Container">
                        <div className="Participants Right">
                            {store.participants.map(list => 
                                <Participant 
                                    key={list.id} 
                                    name={list.name} 
                                    avatar={list.avatar}
                                    inSession={list.inSession}
                                    />
                            )}
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
                </div>
                <div className="Stage">
                    {onStage.map(list => (
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