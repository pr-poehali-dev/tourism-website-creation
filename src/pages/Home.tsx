import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const destinations = [
  { 
    name: 'Пляжный отдых', 
    description: 'Райские пляжи и тропические острова',
    tours: 15,
    image: 'https://cdn.poehali.dev/projects/1fc59c6b-d5c3-49a1-9bba-81f837cf5a8b/files/19b95802-130c-40e9-9301-710cb59cbde2.jpg'
  },
  { 
    name: 'Горные туры', 
    description: 'Приключения в горах и альпинизм',
    tours: 12,
    image: 'https://cdn.poehali.dev/projects/1fc59c6b-d5c3-49a1-9bba-81f837cf5a8b/files/93bdd2a5-2749-40ec-a5b7-3b7ff3cdfac1.jpg'
  },
  { 
    name: 'Экскурсии', 
    description: 'Культурные туры и достопримечательности',
    tours: 20,
    image: 'https://cdn.poehali.dev/projects/1fc59c6b-d5c3-49a1-9bba-81f837cf5a8b/files/d9d372f1-ed60-4595-873c-49d3964d9546.jpg'
  }
];

const features = [
  {
    icon: 'Shield',
    title: 'Безопасность',
    description: 'Полная страховка и проверенные маршруты'
  },
  {
    icon: 'Users',
    title: 'Опытные гиды',
    description: 'Профессионалы с многолетним стажем'
  },
  {
    icon: 'Star',
    title: 'Лучшие цены',
    description: 'Прямые договоры с партнёрами'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-orange-500/20 to-purple-600/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/1fc59c6b-d5c3-49a1-9bba-81f837cf5a8b/files/19b95802-130c-40e9-9301-710cb59cbde2.jpg')" }}
        />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600 bg-clip-text text-transparent">
            Откройте мир вместе с нами
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Незабываемые путешествия в самые живописные уголки планеты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600 hover:opacity-90 transition-all hover:scale-105">
                <Icon name="Compass" size={24} className="mr-2" />
                Выбрать тур
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-all">
                <Icon name="Phone" size={24} className="mr-2" />
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Популярные направления
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Card 
                key={dest.name}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                    <p className="text-sm opacity-90 mb-2">{dest.description}</p>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span className="text-sm">{dest.tours} туров</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/tours">
              <Button size="lg" variant="outline" className="hover:scale-105 transition-all">
                Смотреть все туры
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Более 15 лет создаём идеальные путешествия
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 via-orange-500 to-purple-600 mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600/10 via-orange-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы к приключению?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами, и мы поможем создать путешествие вашей мечты
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tours">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600 hover:opacity-90 transition-all hover:scale-105">
                  Подобрать тур
                </Button>
              </Link>
              <a href="tel:+78001234567">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-all">
                  <Icon name="Phone" size={24} className="mr-2" />
                  +7 (800) 123-45-67
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
