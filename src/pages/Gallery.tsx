import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const photos = [
  { id: 1, src: '/placeholder.svg', title: 'Горный пейзаж', location: 'Алтай' },
  { id: 2, src: '/placeholder.svg', title: 'Тропический пляж', location: 'Бали' },
  { id: 3, src: '/placeholder.svg', title: 'Северное сияние', location: 'Норвегия' },
  { id: 4, src: '/placeholder.svg', title: 'Африканская саванна', location: 'Кения' },
  { id: 5, src: '/placeholder.svg', title: 'Древний храм', location: 'Камбоджа' },
  { id: 6, src: '/placeholder.svg', title: 'Ледник Перито Морено', location: 'Аргентина' },
  { id: 7, src: '/placeholder.svg', title: 'Закат на океане', location: 'Мальдивы' },
  { id: 8, src: '/placeholder.svg', title: 'Горная река', location: 'Швейцария' },
  { id: 9, src: '/placeholder.svg', title: 'Пустыня Сахара', location: 'Марокко' }
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Галерея путешествий
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Моменты, которые вдохновляют на новые приключения
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-scale-in aspect-square"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.title}
                </h3>
                <p className="text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          {selectedPhoto && (
            <div>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4">
                <h2 className="text-2xl font-bold">{selectedPhoto.title}</h2>
                <p className="text-muted-foreground">{selectedPhoto.location}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
