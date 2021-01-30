import s from './index.module.css';
import classnames from 'classnames';

const Layout = ({ id, title, urlBg = false, colorBg = '#FFFFFF', children }) => {
  const background = urlBg ? { backgroundImage: `url(${urlBg})` } : { backgroundColor: colorBg };
  return (
    <section className={s.root} id={id} style={background}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={classnames(s.desc, s.full)}>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
