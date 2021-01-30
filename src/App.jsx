import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

import POKEMONS from './assest/data/pokemons';
import bg3 from './assest/img/bg3.jpg';
import bg2 from './assest/img/bg2.jpg';
import './index.css';
import PokemonCard from './components/PokemonCard';

function App() {
  console.log(POKEMONS);
  return (
    <>
      <Header title={'Pokemon game'} />
      <Layout id="rules" title={'Rules'} urlBg={bg3}>
        <p>
          In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
        </p>
        <p>
          To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where
          the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be
          captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the
          player's color instead.
        </p>
      </Layout>
      <Layout id="cards" title={'Card'} colorBg="#ff09">
        <div className="flex">
          {POKEMONS.map(({ id, name, img, type, values }) => (
            <PokemonCard key={id} name={name} img={img} id={id} type={type} values={values} />
          ))}
        </div>
      </Layout>
      <Layout id="about" title={'About game'} urlBg={bg2}>
        <p>
          In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
        </p>
        <p>
          To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where
          the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be
          captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the
          player's color instead.
        </p>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
