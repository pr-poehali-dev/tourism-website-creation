import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const tours = [
  {
    id: 1,
    name: 'Тропический рай на Мальдивах',
    category: 'beach',
    price: 89000,
    duration: '7 дней',
    image: 'https://cdn.poehali.dev/projects/1fc59c6b-d5c3-49a1-9bba-81f837cf5a8b/files/19b95802-130c-40e9-9301-710cb59cbde2.jpg',
    description: 'Роскошный отдых на белоснежных пляжах Мальдив',
    includes: ['Перелёт', 'Отель 5*', 'Питание']
  },
  {
    id: 2,
    name: 'Восхождение на Эльбрус',
    category: 'mountain',
    price: 45000,
    duration: '10 дней',
    image: 'https://cdn.poehali.dev/projects/1fc59c6b-d5c3-49a1-9bba-81f837cf5a8b/files/93bdd2a5-2749-40ec-a5b7-3b7ff3cdfac1.jpg',
    description: 'Покорите высочайшую вершину Европы',
    includes: ['Гид', 'Снаряжение', 'Питание']
  },
  {
    id: 3,
    name: 'Европейское путешествие',
    category: 'excursion',
    price: 65000,
    duration: '14 дней',
    image: 'https://cdn.poehali.dev/projects/1fc59c6b-d5c3-49a1-9bba-81f837cf5a8b/files/d9d372f1-ed60-4595-873c-49d3964d9546.jpg',
    description: 'Исторические города и культурные памятники Европы',
    includes: ['Перелёт', 'Отели', 'Экскурсии']
  },
  {
    id: 4,
    name: 'Бали - остров богов',
    category: 'beach',
    price: 75000,
    duration: '10 дней',
    image: 'https://cdn.poehali.dev/projects/1fc59c6b-d5c3-49a1-9bba-81f837cf5a8b/files/19b95802-130c-40e9-9301-710cb59cbde2.jpg',
    description: 'Экзотика и духовность Индонезии',
    includes: ['Перелёт', 'Отель', 'Экскурсии']
  },
  {
    id: 5,
    name: 'Треккинг в Непале',
    category: 'mountain',
    price: 55000,
    duration: '12 дней',
    image: 'https://cdn.poehali.dev/projects/1fc59c6b-d5c3-49a1-9bba-81f837cf5a8b/files/93bdd2a5-2749-40ec-a5b7-3b7ff3cdfac1.jpg',
    description: 'Гималайские тропы и базовый лагерь Эвереста',
    includes: ['Гид', 'Проживание', 'Питание']
  },
  {
    id: 6,
    name: 'Золотое кольцо России',
    category: 'excursion',
    price: 25000,
    duration: '5 дней',
    image: 'https://cdn.poehali.dev/projects/1fc59c6b-d5c3-49a1-9bba-81f837cf5a8b/files/d9d372f1-ed60-4595-873c-49d3964d9546.jpg',
    description: 'Древние города и православные святыни',
    includes: ['Автобус', 'Отели', 'Экскурсии']
  }
];

const categories = [
  { id: 'all', name: 'Все туры', icon: 'Globe' },
  { id: 'beach', name: 'Пляжный отдых', icon: 'Palmtree' },
  { id: 'mountain', name: 'Горные туры', icon: 'Mountain' },
  { id: 'excursion', name: 'Экскурсии', icon: 'Map' }
];

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTours = activeCategory === 'all' 
    ? tours 
    : tours.filter(tour => tour.category === activeCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600 bg-clip-text text-transparent">
            Наши туры
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите идеальное путешествие из нашей коллекции незабываемых туров
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={`transition-all ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600' 
                  : 'hover:scale-105'
              }`}
            >
              <Icon name={category.icon as any} size={18} className="mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <Card 
              key={tour.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden h-56 group">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-black backdrop-blur-sm">
                    {tour.duration}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{tour.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.includes.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs">
                      <Icon name="Check" size={12} className="mr-1" />
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-sm text-muted-foreground">от</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {tour.price.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600 hover:opacity-90">
                      Забронировать
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Туры в этой категории скоро появятся
            </p>
          </div>
        )}

        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-br from-blue-600/10 via-orange-500/10 to-purple-600/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Не нашли подходящий тур?</h2>
            <p className="text-muted-foreground mb-6">
              Мы создадим индивидуальный маршрут специально для вас
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600">
                <Icon name="Mail" size={20} className="mr-2" />
                Оставить заявку
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
