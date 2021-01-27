import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

import bg3 from './assest/img/bg3.jpg';
import bg2 from './assest/img/bg2.jpg';
import './index.css';

function App() {
  return (
    <>
      <Header title={'This is title'} descr={"This is Description!"} />
      <Layout urlBg={bg3} />
      <Layout colorBg="#ff09" />
      <Layout urlBg={bg2} />
      <Footer />
    </>
  );
}

export default App;
