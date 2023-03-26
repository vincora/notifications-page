
import './App.scss';

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
          <li className='feed__list-item'>
            <article className='notification'>
              <img src="" alt="" className='notification__avatar'/>
              <div className="notification__text">
                <div className="notification__info">
                  <div className="notification__username"></div>
                  <div className="notification__action"></div>
                  <div className="notification__subject"></div>
                  <div className="notification__flag"></div>
                </div>
                <div className="notification__time"></div>
              </div>
            </article>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
