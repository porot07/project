import s from './index.module.css';
import classnames from 'classnames';

const Footer = () => {
  return (
    <footer>
      <div className={classnames(s.wrapper)}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  );
}

export default Footer;