import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Туры', href: '/tours' },
  { name: 'Контакты', href: '/contact' }
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 via-orange-500 to-purple-600 flex items-center justify-center transition-transform group-hover:scale-110">
              <Icon name="Plane" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600 bg-clip-text text-transparent">
              TravelDream
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant="ghost"
                    className={`relative transition-all duration-300 ${
                      isActive 
                        ? 'text-primary font-semibold' 
                        : 'hover:text-primary'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600 hover:opacity-90 transition-opacity">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (800) 123-45-67
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant={isActive ? 'default' : 'ghost'}
                        className="w-full justify-start text-lg"
                      >
                        {item.name}
                      </Button>
                    </Link>
                  );
                })}
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;