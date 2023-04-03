
import './App.scss';
import Notification from './Notification';
import data from './data.json';


function App() {

  return (
    <div className='feed'>
      <header className='feed__header'>
        <div className="feed__left">
          <h1 className='feed__title'>Notifications</h1>
          <div className="feed__number">3</div>
        </div>
        <button className="feed__right feed__button">Mark all as read</button>
      </header>
      <main>
        <ul className='feed__list'>
          {data.map((item) => (
            <Notification 
            avatar={item.avatar}
            username={item.username}
            action={item.action}
            subject={item.subject}
            message={item.message}
            img={item.img}
            time={item.time}
            type={item.type}
            status={item.status}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
