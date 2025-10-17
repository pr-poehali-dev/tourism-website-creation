import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Icon name="Plane" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">TravelDream</span>
            </div>
            <p className="text-slate-300 mb-4">
              Создаём незабываемые путешествия с 2009 года
            </p>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                <Icon name="Instagram" size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                <Icon name="Facebook" size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                <Icon name="Send" size={20} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/tours" className="text-slate-300 hover:text-primary transition-colors">Туры</Link></li>
              <li><Link to="/gallery" className="text-slate-300 hover:text-primary transition-colors">Галерея</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-primary transition-colors">О нас</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/reviews" className="text-slate-300 hover:text-primary transition-colors">Отзывы</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-primary transition-colors">Контакты</Link></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition-colors">Условия использования</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-300">
                <Icon name="Phone" size={18} className="text-primary" />
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Icon name="Mail" size={18} className="text-secondary" />
                <span>info@travel.com</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <Icon name="MapPin" size={18} className="text-accent mt-1" />
                <span>г. Москва, ул. Тверская, д. 10</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} TravelDream. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
