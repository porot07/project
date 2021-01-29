import s from './index.module.css';
import classnames from 'classnames';

const Layout = ({ id = 0, title = '', descr = '', urlBg = false, colorBg = '#FFFFFF' }) => {
  const background = urlBg ? { backgroundImage: `url(${urlBg})` } : { backgroundColor: colorBg };
  return (
    <section className={classnames(s.root)} id={id} style={background}>
      <div className={classnames(s.wrapper)}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={classnames(s.separator)}></span>
          </div>
          <div className={classnames(s.desc, s.full)}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
