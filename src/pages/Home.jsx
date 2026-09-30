import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import DestinationCard from '../components/DestinationCard.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

const destinations = [
  {
    city: 'Lisboa', country: 'Portugal', flag: '🇵🇹', tag: 'Queridinho', detail: 'A partir de 4 semanas',
  },
  {
    city: 'Vancouver', country: 'Canadá', flag: '🇨🇦', tag: 'Natureza & cidade', detail: 'A partir de 2 semanas',
  },
  {
    city: 'Barcelona', country: 'Espanha', flag: '🇪🇸', tag: 'Cultura em cada rua', detail: 'A partir de 3 semanas',
  },
];

const steps = [
  { number: '01', title: 'Conte seus planos', text: 'A gente entende seus objetivos, seu momento e o que você sonha viver.' },
  { number: '02', title: 'Encontre seu lugar', text: 'Compare destinos, cursos e durações com orientação feita para você.' },
  { number: '03', title: 'Prepare as malas', text: 'Organize cada detalhe com apoio antes, durante e depois da viagem.' },
];

export default function Home() {
  const savedUser = sessionStorage.getItem('rota-mundo-user');
  const firstName = savedUser ? JSON.parse(savedUser).name : null;

  return (
    <>
      <Header />
      <main>
        <section>
          <h1>{firstName ? `Oi, ${firstName}.` : 'O mundo é grande.'}<br />Seu próximo passo também.</h1>
          <p>Um intercâmbio muda o jeito de ver o mundo. Encontre o destino, o curso e a experiência que têm a sua cara.</p>
          <Button to="/login">Comece a planejar</Button>
        </section>

        <section id="destinos">
          <h2>Destinos para começar</h2>
          <p>Um lugar novo pode abrir um mundo de possibilidades.</p>
          {destinations.map((destination) => <DestinationCard key={destination.city} {...destination} />)}
          <Link to="/login">Encontre seu destino</Link>
        </section>

        <section id="como-funciona">
          <h2>Do planejamento à viagem</h2>
          <ol>
            {steps.map((step) => <li key={step.number}><h3>{step.title}</h3><p>{step.text}</p></li>)}
          </ol>
          <Button to="/login">Dê o primeiro passo</Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
