import type { SectionType } from '../model/SectionType';

export const SectionDao = {
  getHomeSections(): SectionType[] {
    return [
      {
        id: "offers",
        title: 'Пропозиції брендів',
        items: [
          { id: 1, title: 'Rababne 1 Million', type: 'Туалетна вода', price: '2205 ₴', img: '/img/parfume1.jpg', label: 'DEAL' },
          { id: 2, title: 'Nina Ricci Nina', type: 'Туалетна вода', price: '1714 ₴', img: '/img/parfume2.jpg', label: 'DEAL' },
          { id: 3, title: 'Jean Paul Gaultier', type: 'Парфумована вода', price: '3556 ₴', oldPrice: '5048 ₴', img: '/img/parfume3.jpg', label: 'SALE' },
          { id: 4, title: 'Paco Rabanne Fame', type: 'Парфумована вода', price: '2899 ₴', img: '/img/parfume4.jpg', label: 'DEAL' },
          { id: 103, title: 'Сироватка для обличчя зволожувальна', type: 'Face Cream', price: '350 ₴', img: '/img/face5.jpg', label: 'DEAL' },
          { id: 104, title: 'Крем для обличчя зволожувальний', type: 'Face Cream', price: '350 ₴', img: '/img/face6.jpg', label: 'DEAL' },
          { id: 105, title: 'Зубна паста "Відновлення та захист"', type: 'Зубна паста', price: '120 ₴', img: '/img/health5.jpg', label: 'NEW' },
          { id: 106, title: 'Зубна паста без фтору', type: 'Зубна паста', price: '120 ₴', img: '/img/health6.jpg', label: 'NEW' },
        ],
      },
      {
        id: "new-arrivals",
        title: 'Новинки',
        items: [
          { id: 5, title: 'CeraVe', type: 'Зволожувальний крем', price: '835 ₴', img: '/img/new1.jpg', label: 'NEW' },
          { id: 6, title: 'La Roche-Posay', type: 'Комплексний набір сироваток', price: '678 ₴', img: '/img/new2.jpg', label: 'NEW' },
          { id: 7, title: 'CeraVe', type: 'Інтенсивно зволожувальний крем', price: '456 ₴', img: '/img/new3.jpg', label: 'NEW' },
          { id: 8, title: 'Ocean', type: 'Наповнюючий шампунь для волосся', price: '990 ₴', img: '/img/new4.jpg', label: 'NEW' },
        ],
      },
      {
        id: "parfumes",
        title: 'Парфумерія',
        items: [
          { id: 9, title: 'Rababne 1 Million Classic', type: 'Туалетна вода', price: '2205 ₴', img: '/img/parfume6.jpg', label: 'DEAL' },
          { id: 10, title: 'Nina Ricci Special', type: 'Туалетна вода', price: '1714 ₴', img: '/img/parfume2.jpg', label: 'DEAL' },
          { id: 11, title: 'Jean Paul Gaultier Luxe', type: 'Парфумована вода', price: '3556 ₴', oldPrice: '5048 ₴', img: '/img/parfume7.jpg', label: 'SALE' },
          { id: 12, title: 'Paco Rabanne Fame Night', type: 'Парфумована вода', price: '2899 ₴', img: '/img/parfume8.jpg', label: 'DEAL' },
          { id: 201, title: 'Carolina Hererra Pink', type: 'Парфумована вода', price: '1556 ₴', oldPrice: '1648 ₴', img: '/img/parfume10.jpg', label: 'SALE' },
          { id: 202, title: 'Rabanne Fame Gold', type: 'Парфумована вода', price: '3899 ₴', img: '/img/parfume11.jpg', label: 'DEAL' },
        ],
      },
      {
        id: "makeup",
        title: 'Макіяж',
        items: [
          { id: 13, title: 'Jovial Luxe Lip Butter', type: 'Бальзам-масло для губ', price: '20 ₴', img: '/img/makeup1.jpg', label: 'DEAL' },
          { id: 14, title: 'NYX Vivid Brights Liquid Liner', type: 'Матовий рідкий лайнер', price: '280 ₴', img: '/img/makeup2.jpg', label: 'DEAL' },
          { id: 15, title: 'Maybelline Lash Sensational Sky High', type: 'Туш для подовження вій', price: '310 ₴', img: '/img/makeup3.jpg', label: 'DEAL' },
          { id: 16, title: 'Chanel Ultra Le Teint Fluide', type: 'Стійкий тональний флюїд', price: '2899 ₴', img: '/img/makeup4.jpg', label: 'DEAL' },
        ],
      },
      {
        id: "face",
        title: 'Обличчя',
        items: [
          { id: 17, title: 'CeraVe Foaming Cleanser', type: 'Очищувальний гель', price: '210 ₴', img: '/img/face1.jpg', label: 'DEAL' },
          { id: 18, title: 'CeraVe Moisturising Lotion', type: 'Зволожувальне молочко', price: '280 ₴', img: '/img/face2.jpg', label: 'DEAL' },
          { id: 19, title: 'Too Cool For School Pumpkin', type: 'Нічна маска', price: '20 ₴', img: '/img/face3.jpg', label: 'DEAL' },
          { id: 20, title: 'Missha BB Cream', type: 'Стійкий тональний флюїд', price: '1987 ₴', img: '/img/face4.jpg', label: 'DEAL' },
          { id: 301, title: 'Сироватка для обличчя зволожувальна (Макдадамія)', type: 'Face Cream', price: '350 ₴', img: '/img/face5.jpg', label: 'DEAL' },
          { id: 302, title: 'Крем для обличчя зволожувальний (Гіалурон)', type: 'Face Cream', price: '350 ₴', img: '/img/face6.jpg', label: 'NEW' },
        ],
      },
      {
        id: "hair",
        title: 'Волосся',
        items: [
          { id: 21, title: 'L’Oréal Professionnel', type: 'Відновлювальна маска', price: '890 ₴', img: '/img/hair1.jpg', label: 'HIT' },
          { id: 22, title: 'Kerastase Elixir Ultime', type: 'Олія для волосся', price: '1450 ₴', img: '/img/hair2.jpg', label: 'DEAL' },
          { id: 23, title: 'DSD de Luxe', type: 'Шампунь проти випадіння', price: '1200 ₴', img: '/img/hair3.jpg', label: 'NEW' },
          { id: 24, title: 'Matrix Food For Soft', type: 'Зволожувальна сироватка', price: '640 ₴', img: '/img/hair4.jpg', label: 'DEAL' },
        ],
      },
      {
        id: "body",
        title: 'Тіло',
        items: [
          { id: 25, title: 'Rituals The Ritual of Sakura', type: 'Крем для тіла', price: '950 ₴', img: '/img/body1.jpg', label: 'HIT' },
          { id: 26, title: 'Sol de Janeiro', type: 'Парфумований спрей', price: '1300 ₴', img: '/img/body2.jpg', label: 'NEW' },
          { id: 27, title: 'Bioderma Atoderm', type: 'Олія для душу', price: '720 ₴', img: '/img/body3.jpg', label: 'DEAL' },
          { id: 28, title: 'Weleda Skin Food', type: 'Універсальний поживний крем', price: '480 ₴', img: '/img/body4.jpg', label: 'DEAL' },
        ],
      },
      {
        id: "health",
        title: "Здоров'я",
        items: [
          { id: 29, title: 'Orthomol Vital F', type: 'Вітамінний комплекс', price: '2400 ₴', img: '/img/health1.jpg', label: 'NEW' },
          { id: 30, title: 'Solgar Biotin 5000', type: 'Добавка для волосся', price: '620 ₴', img: '/img/health2.jpg', label: 'HIT' },
          { id: 31, title: 'Now Foods Vitamin D-3', type: 'Харчова добавка', price: '350 ₴', img: '/img/health3.jpg', label: 'DEAL' },
          { id: 32, title: 'Perla Helsa Collagen', type: 'Морський колаген', price: '1100 ₴', img: '/img/health4.jpg', label: 'NEW' },
          { id: 401, title: 'Зубна паста "Відновлення та захист. Відбілювальна"', type: 'Зубна паста', price: '120 ₴', img: '/img/health5.jpg', label: 'NEW' },
          { id: 402, title: 'Зубна паста без фтору"', type: 'Зубна паста', price: '120 ₴', img: '/img/health6.jpg', label: 'NEW' },
        ],
      },
      {
        id: "accessories",
        title: 'Аксесуари',
        items: [
          { id: 33, title: 'Tangle Teezer Original', type: 'Щітка для волосся', price: '450 ₴', img: '/img/acc1.jpg', label: 'HIT' },
          { id: 34, title: 'Beautyblender Original', type: 'Спонж для макіяжу', price: '780 ₴', img: '/img/acc2.jpg', label: 'DEAL' },
          { id: 35, title: 'Invisibobble Slim', type: 'Резинка-браслет', price: '190 ₴', img: '/img/acc3.jpg', label: 'DEAL' },
          { id: 36, title: 'Real Techniques Brushes', type: 'Набір пензлів', price: '1250 ₴', img: '/img/acc4.jpg', label: 'NEW' },
        ],
      },
      {
        id: "fashion",
        title: 'Fashion',
        items: [
          { id: 37, title: 'Victoria\'s Secret Tote', type: 'Сумка-шоппер', price: '1850 ₴', img: '/img/fashion1.jpg', label: 'NEW' },
          { id: 38, title: 'Guess Cardholder', type: 'Гаманець для карток', price: '1200 ₴', img: '/img/fashion2.jpg', label: 'HIT' },
          { id: 39, title: 'Calvin Klein Cap', type: 'Кепка', price: '950 ₴', img: '/img/fashion3.jpg', label: 'DEAL' },
          { id: 40, title: 'Ray-Ban Aviator', type: 'Сонцезахисні окуляри', price: '4600 ₴', img: '/img/fashion4.jpg', label: 'HIT' },
        ],
      },
      {
        id: "men",
        title: 'Чоловікам',
        items: [
          { id: 41, title: 'Dior Sauvage', type: 'Гель після гоління', price: '2100 ₴', img: '/img/men1.jpg', label: 'HIT' },
          { id: 42, title: 'Primal Element', type: 'Мило ручної роботи', price: '320 ₴', img: '/img/men2.jpg', label: 'DEAL' },
          { id: 43, title: 'American Crew Fiber', type: 'Паста для стилізації', price: '540 ₴', img: '/img/men3.jpg', label: 'NEW' },
          { id: 44, title: 'Gillette Labs Set', type: 'Подарунковий набір', price: '1650 ₴', img: '/img/men4.jpg', label: 'DEAL' },
          { id: 45, title: 'Шампунь для об’єму', type: 'Hair Care', price: '450 ₴', oldPrice: '600 ₴', img: '/img/hair4.jpg', label: 'SALE' }
        ],
      },
    ];
  },

  getSalesSection(): SectionType {
    const allProducts = this.getHomeSections().flatMap(section => section.items);
    // Використовуємо Set для видалення дублікатів за ID, якщо один товар у кількох секціях
    const uniqueSales = Array.from(new Map(
        allProducts
          .filter(p => p.oldPrice && p.oldPrice.length > 0)
          .map(p => [p.id, p])
    ).values());

    return {
      id: "sales",
      title: "Акційні пропозиції",
      items: uniqueSales
    };
  },

  getSectionById(id: string): SectionType | undefined {
    if (id === "sales") {
      return this.getSalesSection();
    }
    return this.getHomeSections().find(section => section.id === id);
  },

  getProductById(id: number | string) {
    const allProducts = this.getHomeSections().flatMap(section => section.items);
    return allProducts.find(product => product.id.toString() === id.toString());
  }
};