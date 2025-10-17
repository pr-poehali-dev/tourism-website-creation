import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const stats = [
  { label: 'Довольных туристов', value: '5000+', icon: 'Users' },
  { label: 'Стран в программе', value: '50+', icon: 'Globe' },
  { label: 'Лет опыта', value: '15', icon: 'Award' },
  { label: 'Туров в год', value: '200+', icon: 'TrendingUp' }
];

const team = [
  {
    name: 'Анна Петрова',
    role: 'Основатель и CEO',
    description: 'Профессиональный гид с 20-летним стажем'
  },
  {
    name: 'Дмитрий Соколов',
    role: 'Директор по туризму',
    description: 'Эксперт по экзотическим направлениям'
  },
  {
    name: 'Елена Волкова',
    role: 'Менеджер по работе с клиентами',
    description: 'Поможет подобрать идеальный тур'
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            О нас
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы создаём незабываемые путешествия с 2009 года
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-4">
                Наша компания специализируется на организации авторских туров по самым живописным уголкам планеты. 
                Мы верим, что путешествие — это не просто смена места, а возможность открыть новые горизонты, 
                познакомиться с удивительными культурами и создать воспоминания на всю жизнь.
              </p>
              <p className="text-lg leading-relaxed">
                Каждый наш маршрут тщательно продуман и проверен лично нашими экспертами. 
                Мы работаем только с проверенными партнёрами и гарантируем высочайший уровень сервиса.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                  <Icon name={stat.icon as any} size={32} className="text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="border-none shadow-xl bg-gradient-to-br from-secondary/10 to-primary/10 animate-fade-in">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Делать мир ближе, открывая людям красоту нашей планеты через качественные 
              и безопасные путешествия. Мы стремимся создавать такие впечатления, 
              которые меняют жизнь к лучшему.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
