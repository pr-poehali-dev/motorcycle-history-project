import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Восход</h1>
          <div className="flex gap-6">
            {['Главная', 'История', 'Технические', 'Галерея', 'Контакты'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(['home', 'history', 'specs', 'gallery', 'contacts'][idx])}
                className="text-sm hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-6xl font-bold leading-tight">
                Мотоцикл<br />
                <span className="text-primary">Восход</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Легенда советского мотостроения. История надежности и мощности на двух колесах.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('history')} size="lg" className="bg-primary hover:bg-primary/90">
                  Узнать историю
                </Button>
                <Button onClick={() => scrollToSection('specs')} variant="outline" size="lg">
                  Характеристики
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://cdn.poehali.dev/projects/7befe363-3683-49bb-a8ec-24011c68d02a/files/20495708-a2ad-42f8-abe0-867403ae71f9.jpg"
                alt="Мотоцикл Восход"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="min-h-screen py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">История создания</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">1965</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Начало производства</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ковровский завод начал выпуск мотоциклов марки "Восход" на базе предшественника К-175. 
                      Новая модель отличалась улучшенной надежностью и современным дизайном.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">1973</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Золотая эра</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Выход модели "Восход-3М" ознаменовал пик популярности. Мотоцикл стал символом свободы 
                      и надежности для миллионов советских граждан.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">1990</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Наследие</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Несмотря на завершение массового производства, "Восход" остается культовым мотоциклом. 
                      Тысячи энтузиастов продолжают восстанавливать и эксплуатировать эти легендарные машины.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12">
              <img 
                src="https://cdn.poehali.dev/projects/7befe363-3683-49bb-a8ec-24011c68d02a/files/0898bc02-d4b8-47d5-938a-5ac89ad902fa.jpg"
                alt="Завод Восход"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">Технические характеристики</h2>
          <Tabs defaultValue="model1" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="model1">Восход-2М</TabsTrigger>
              <TabsTrigger value="model2">Восход-3М</TabsTrigger>
              <TabsTrigger value="model3">Восход-ЗМ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="model1" className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Gauge" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Двигатель</h4>
                        <p className="text-muted-foreground">Двухтактный, одноцилиндровый, 175 см³</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Zap" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Мощность</h4>
                        <p className="text-muted-foreground">14 л.с. при 5500 об/мин</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Fuel" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Расход топлива</h4>
                        <p className="text-muted-foreground">3,5 л на 100 км</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Weight" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Вес</h4>
                        <p className="text-muted-foreground">138 кг</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Gauge" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Максимальная скорость</h4>
                        <p className="text-muted-foreground">105 км/ч</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Wrench" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Коробка передач</h4>
                        <p className="text-muted-foreground">4-ступенчатая</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <img 
                src="https://cdn.poehali.dev/projects/7befe363-3683-49bb-a8ec-24011c68d02a/files/db1d3903-b020-4233-8752-c06d47e5ae58.jpg"
                alt="Двигатель Восход"
                className="rounded-lg shadow-xl w-full"
              />
            </TabsContent>

            <TabsContent value="model2" className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Gauge" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Двигатель</h4>
                        <p className="text-muted-foreground">Двухтактный, одноцилиндровый, 175 см³</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Zap" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Мощность</h4>
                        <p className="text-muted-foreground">16 л.с. при 5750 об/мин</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Fuel" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Расход топлива</h4>
                        <p className="text-muted-foreground">3,2 л на 100 км</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Weight" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Вес</h4>
                        <p className="text-muted-foreground">142 кг</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Gauge" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Максимальная скорость</h4>
                        <p className="text-muted-foreground">110 км/ч</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Wrench" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Коробка передач</h4>
                        <p className="text-muted-foreground">4-ступенчатая</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="model3" className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Gauge" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Двигатель</h4>
                        <p className="text-muted-foreground">Двухтактный, одноцилиндровый, 175 см³</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Zap" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Мощность</h4>
                        <p className="text-muted-foreground">17 л.с. при 6000 об/мин</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Fuel" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Расход топлива</h4>
                        <p className="text-muted-foreground">3,0 л на 100 км</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Weight" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Вес</h4>
                        <p className="text-muted-foreground">145 кг</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Gauge" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Максимальная скорость</h4>
                        <p className="text-muted-foreground">115 км/ч</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Wrench" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Коробка передач</h4>
                        <p className="text-muted-foreground">4-ступенчатая с ножным переключением</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="min-h-screen py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/7befe363-3683-49bb-a8ec-24011c68d02a/files/20495708-a2ad-42f8-abe0-867403ae71f9.jpg"
                alt="Восход 1"
                className="w-full h-64 object-cover"
              />
            </Card>
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/7befe363-3683-49bb-a8ec-24011c68d02a/files/db1d3903-b020-4233-8752-c06d47e5ae58.jpg"
                alt="Восход 2"
                className="w-full h-64 object-cover"
              />
            </Card>
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/7befe363-3683-49bb-a8ec-24011c68d02a/files/0898bc02-d4b8-47d5-938a-5ac89ad902fa.jpg"
                alt="Восход 3"
                className="w-full h-64 object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen py-20 flex items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">Контакты</h2>
          <Card className="max-w-2xl mx-auto bg-card border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-muted-foreground">info@voskhod-moto.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Адрес</h4>
                    <p className="text-muted-foreground">г. Ковров, ул. Заводская, д. 1</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Восход. Легенда советского мотостроения</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
