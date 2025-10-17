import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const tours = [
  {
    id: 1,
    title: 'Горные вершины Алтая',
    location: 'Алтай, Россия',
    duration: '7 дней',
    price: '45 000 ₽',
    difficulty: 'Средняя',
    image: '/placeholder.svg',
    tags: ['Горы', 'Активный отдых', 'Природа']
  },
  {
    id: 2,
    title: 'Тропический рай Бали',
    location: 'Бали, Индонезия',
    duration: '10 дней',
    price: '85 000 ₽',
    difficulty: 'Легкая',
    image: '/placeholder.svg',
    tags: ['Пляж', 'Культура', 'Релакс']
  },
  {
    id: 3,
    title: 'Сафари в Африке',
    location: 'Кения',
    duration: '12 дней',
    price: '120 000 ₽',
    difficulty: 'Средняя',
    image: '/placeholder.svg',
    tags: ['Сафари', 'Приключения', 'Дикая природа']
  },
  {
    id: 4,
    title: 'Северное сияние',
    location: 'Норвегия',
    duration: '5 дней',
    price: '95 000 ₽',
    difficulty: 'Легкая',
    image: '/placeholder.svg',
    tags: ['Север', 'Природа', 'Фото']
  },
  {
    id: 5,
    title: 'Древние храмы Азии',
    location: 'Таиланд, Камбоджа',
    duration: '14 дней',
    price: '75 000 ₽',
    difficulty: 'Легкая',
    image: '/placeholder.svg',
    tags: ['Культура', 'История', 'Храмы']
  },
  {
    id: 6,
    title: 'Патагония и ледники',
    location: 'Аргентина, Чили',
    duration: '15 дней',
    price: '150 000 ₽',
    difficulty: 'Сложная',
    image: '/placeholder.svg',
    tags: ['Горы', 'Треккинг', 'Ледники']
  }
];

const Tours = () => {
  const [filter, setFilter] = useState('Все');
  const filters = ['Все', 'Горы', 'Пляж', 'Культура', 'Природа', 'Приключения'];

  const filteredTours = filter === 'Все' 
    ? tours 
    : tours.filter(tour => tour.tags.includes(filter));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Наши туры
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите идеальное приключение для себя
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'default' : 'outline'}
              onClick={() => setFilter(f)}
              className="transition-all duration-300 hover:scale-105"
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour, index) => (
            <Card 
              key={tour.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {tour.difficulty}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {tour.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-base">
                  <Icon name="MapPin" size={16} />
                  {tour.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={18} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {tour.price}
                  </div>
                </div>
                
                <Button className="w-full group/btn">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
