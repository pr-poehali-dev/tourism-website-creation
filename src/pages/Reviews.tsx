import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    id: 1,
    name: 'Мария Иванова',
    location: 'Москва',
    tour: 'Тропический рай Бали',
    rating: 5,
    text: 'Невероятное путешествие! Всё было организовано на высшем уровне. Гиды профессиональные, маршрут продуман до мелочей. Бали покорил своей красотой, а команда сделала этот отпуск незабываемым.',
    date: 'Октябрь 2024'
  },
  {
    id: 2,
    name: 'Алексей Смирнов',
    location: 'Санкт-Петербург',
    tour: 'Горные вершины Алтая',
    rating: 5,
    text: 'Отличная организация! Горы Алтая — это что-то невероятное. Треккинг был насыщенным, но безопасным. Спасибо за профессионализм и заботу.',
    date: 'Сентябрь 2024'
  },
  {
    id: 3,
    name: 'Екатерина Новикова',
    location: 'Казань',
    tour: 'Северное сияние',
    rating: 5,
    text: 'Мечта сбылась! Увидела северное сияние собственными глазами. Тур был идеально организован, всё учтено до мелочей. Рекомендую всем!',
    date: 'Март 2024'
  },
  {
    id: 4,
    name: 'Дмитрий Козлов',
    location: 'Екатеринбург',
    tour: 'Сафари в Африке',
    rating: 5,
    text: 'Африканское сафари превзошло все ожидания! Видели всю большую пятёрку. Организация на высоте, безопасность соблюдена. Незабываемые впечатления!',
    date: 'Июль 2024'
  },
  {
    id: 5,
    name: 'Ольга Петрова',
    location: 'Новосибирск',
    tour: 'Древние храмы Азии',
    rating: 5,
    text: 'Культурное погружение на 100%! Храмы Камбоджи и Таиланда просто завораживают. Гиды очень познавательно рассказывали об истории. Спасибо за организацию!',
    date: 'Ноябрь 2024'
  },
  {
    id: 6,
    name: 'Игорь Волков',
    location: 'Краснодар',
    tour: 'Патагония и ледники',
    rating: 5,
    text: 'Экстремальное приключение! Ледники Патагонии — это нечто фантастическое. Физически сложно, но эмоции того стоят. Команда профессионалов!',
    date: 'Декабрь 2024'
  }
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Отзывы путешественников
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Истории тех, кто уже открыл мир вместе с нами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-secondary text-secondary" />
                  ))}
                </div>

                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {review.tour}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {review.text}
                </p>

                <p className="text-sm text-muted-foreground">
                  {review.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
                <Icon name="Quote" size={40} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Поделитесь своими впечатлениями</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Ваш отзыв поможет другим путешественникам сделать правильный выбор
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span className="font-semibold">reviews@travel.com</span>
                </div>
                <div className="hidden sm:block text-muted-foreground">или</div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} className="text-secondary" />
                  <span className="font-semibold">+7 (800) 123-45-67</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
