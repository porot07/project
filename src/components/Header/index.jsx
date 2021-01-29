import s from './index.module.css';
import classnames from 'classnames';

const Header = ({ title = '', descr = '' }) => {
  return (
    <header className={classnames(s.root)}>
      <div className={classnames(s.forest)}></div>
      <div className={classnames(s.container)}>
        <h1>{title}</h1>
        <p>{descr}</p>
      </div>
    </header>
  );
}

export default Header;