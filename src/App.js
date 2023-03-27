
import './App.scss';
import Notification from './Notification';

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
          <Notification />
        </ul>
      </main>
    </div>
  );
}

export default App;
