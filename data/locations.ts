import { TouristLocation } from '../types';

export const touristLocations: TouristLocation[] = [
  {
    id: 'imperial-palace',
    name: 'Museu Imperial',
    description: 'Antiga residência de verão de Dom Pedro II, hoje um museu que preserva a história do Brasil Imperial.',
    image: '/images/imperial-palace.jpg',
    facts: [
      'Construído entre 1845 e 1862',
      'Possui mais de 40 mil peças em seu acervo',
      'A cerimônia do beija-mão acontecia no Salão do Trono'
    ]
  },
  {
    id: 'cathedral',
    name: 'Catedral de São Pedro de Alcântara',
    description: 'Catedral neogótica que abriga os restos mortais de D. Pedro II e sua família.',
    image: '/images/cathedral.jpg',
    facts: [
      'Construída entre 1884 e 1969',
      'Estilo neogótico francês',
      'Guarda os restos mortais da Família Imperial'
    ]
  },
  {
    id: 'santos-dumont',
    name: 'Casa de Santos Dumont',
    description: 'A Encantada, residência de verão do Pai da Aviação, com design único e inovador.',
    image: '/images/santos-dumont.jpg',
    facts: [
      'Construída em 1918',
      'Possui escadas únicas com design especial',
      'Mobiliário original preservado'
    ]
  },
  {
    id: 'crystal-palace',
    name: 'Palácio de Cristal',
    description: 'Estrutura de ferro e vidro importada da França, palco de eventos importantes da cidade.',
    image: '/images/crystal-palace.jpg',
    facts: [
      'Inaugurado em 1884',
      'Fabricado na França e montado em Petrópolis',
      'Foi presente da Princesa Isabel à cidade'
    ]
  },
  {
    id: 'quitandinha',
    name: 'Palácio Quitandinha',
    description: 'Antigo cassino-hotel, é o maior prédio em estilo Art Déco da América Latina.',
    image: '/images/quitandinha.jpg',
    facts: [
      'Inaugurado em 1944',
      'Já foi o maior cassino da América do Sul',
      'Seu lago artificial tem formato do mapa do Brasil'
    ]
  }
]; 