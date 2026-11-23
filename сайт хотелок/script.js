
const wishes = [
  {
    id: 1,
    name: "Безворсовые салфетки",
    photo: "хотелка1.jpg",              
    rating: 3,              // от 1 до 5
    sku: "АРТ-1836982059",
    link: "https://ozon.ru/t/WcPk0lr"               // ссылка на товар
  },
  {
    id: 2,
    name: "Пенка для маникюра",
    photo: "хотелка2.jpg",
    rating: 3,
    sku: "АРТ-5629319762",
    link: "https://ozon.ru/t/7Gn4XMC"
  },
  {
    id: 3,
    name: "Палитра",
    photo: "хотелка3.jpg",
    rating: 3,
    sku: "АРТ-1654761545",
    link: "https://ozon.ru/t/J5vftY5"
  },
  {
    id: 4,
    name: "Гель",
    photo: "4.jpg",
    rating: 4,
    sku: "АРТ-5328383302",
    link: "https://ozon.ru/t/J5vEJzi"
  },
   {id: 5,
    name: "Гель",
    photo: "5.jpg",
    rating: 4,
    sku: "АРТ-4860520625",
    link: "https://ozon.ru/t/j7MDQDR"
  },
   {id: 6,
    name: "кружево на ногти",
    photo: "6.jpg",
    rating: 3,
    sku: "АРТ-4853266557",
    link: "https://ozon.ru/t/Axljz5E"
  },
  {id: 7,
    name: "клей для кружева",
    photo: "7.jpg",
    rating: 3,
    sku: "АРТ-5539385678",
    link: "https://ozon.ru/t/yeJbC27"
  },
  {id: 8,
    name: "шипы на ногти",
    photo: "8.jpg",
    rating: 3,
    sku: "АРТ-2036249887",
    link: "https://ozon.ru/t/ZaGipvD"
  },
  {id: 9,
    name: "флакон",
    photo: "9.jpg",
    rating: 5,
    sku: "АРТ-5687706181",
    link: "https://ozon.ru/t/CrmaCCp"
  },
  {id: 10,
    name: "жемчуг на ногти",
    photo: "10.jpg",
    rating: 3,
    sku: "АРТ",
    link: "https://ozon.ru/t/Ns3rOrj"
  },
   {id: 11,
    name: "бантики на ногти",
    photo: "11.jpg",
    rating: 3,
    sku: "АРТ-431575272",
    link: "https://ozon.ru/t/Ns3rULu"
  },
   {id: 12,
    name: "бафики",
    photo: "12.jpg",
    rating: 4,
    sku: "АРТ-300478986",
    link: "https://ozon.ru/t/GA6KJNK"
  },
   {id: 13,
    name: "щёточки",
    photo: "13.jpg",
    rating: 4,
    sku: "АРТ-4506322114",
    link: "https://ozon.ru/t/n6TacOK"
  },
    {id: 14,
    name: "стразики",
    photo: "14.jpg",
    rating: 3,
    sku: "АРТ-2160882317",
    link: "https://ozon.ru/t/cFd3ZZx"
  },
  {id: 15,
    name: "масло",
    photo: "15.jpg",
    rating: 4,
    sku: "АРТ-4839693893",
    link: "https://ozon.ru/t/V2EWu5e"
  },
  {id: 16,
    name: "гель",
    photo: "16.jpg",
    rating:4 ,
    sku: "АРТ-1865912903",
    link: "https://ozon.ru/t/IY7EYJc"
  },
  {id: 17,
    name: "звёздочки",
    photo: "17.jpg",
    rating:3 ,
    sku: "АРТ-4831263581",
    link: "https://ozon.ru/t/WcPkzfn"
  },
   {id: 18,
    name: "оптимакс",
    photo: "18.jpg",
    rating:5 ,
    sku: "АРТ-255498187",
    link: "https://www.wildberries.ru/catalog/255498187/detail.aspx?size=398267522"
  },
  {id: 19,
    name: "Антисептик для ногтей",
    photo: "19.jpg",
    rating:5 ,
    sku: "АРТ-846467016",
    link: "https://www.wildberries.ru/catalog/846467016/detail.aspx?size=1272465277"
  },
   {id: 20,
    name: "кроссовки",
    photo: "20.jpg",
    rating:5 ,
    sku: "АРТ-439776312",
    link: "https://www.wildberries.ru/catalog/439776312/detail.aspx?size=623254552"
  },
   {id: 21,
    name: "наклейки на ногти",
    photo: "21.jpg",
    rating:3 ,
    sku: "АРТ-588140262",
    link: "https://www.wildberries.ru/catalog/588140262/detail.aspx?size=803392490"
  },
  {id: 22,
    name: "золотое яблоко",
    photo: "22.jpg",
    rating:5 ,
    sku: "Небольшой намек — я бы хотела обновить свою косметичку!",
    link: "https://goldapple.ru/cards?reasonId=cosmetics#gift-cards?step=0&from=share"
  },
  {id: 23,
    name: "гель",
    photo: "23.jpg",
    rating:5 ,
    sku: "АРТ-1988032885",
    link: "https://ozon.ru/t/mUxbFDR"
  },
   {id: 24,
    name: "гель",
    photo: "24.jpg",
    rating:5 ,
    sku: "АРТ-3584275428",
    link: "https://ozon.ru/t/J5IYb65"
  },
   {id: 26,
    name: "гель лак",
    photo: "26.jpg",
    rating:5 ,
    sku: "АРТ-1759171449 ",
    link: "https://ozon.ru/t/N0IOWVX"
  },
   {id: 27,
    name: "Акригель",
    photo: "27.jpg",
    rating:5 ,
    sku: "АРТ-1865912903 ",
    link: "https://ozon.ru/t/LetG5og"
  },
  {id: 28,
    name: "сумочка",
    photo: "28.jpg",
    rating:5 ,
    sku: "АРТ-4574051880 ",
    link: "https://ozon.ru/t/p8mRsXs"
  },
];

// ============================================
// Логика
// ============================================
const wishlistEl = document.getElementById('wishlist');
const doneListEl = document.getElementById('done-list');
const doneEmptyEl = document.getElementById('done-empty');
const pages = document.querySelectorAll('.page');
const navBtns = document.querySelectorAll('.nav-btn');

function stars(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function renderList(items, container, isDone = false) {
  container.innerHTML = '';
  items.forEach(w => {
    const card = document.createElement('div');
    card.className = 'wish-card';
    card.innerHTML = `
      <div class="wish-thumb">${w.photo ? `<img src="${w.photo}" alt="${w.name}">` : 'Фото'}</div>
      <div class="wish-name">${w.name}</div>
      <div class="wish-stars">${stars(w.rating)}</div>
    `;
    card.addEventListener('click', () => openDetail(w));
    container.appendChild(card);
  });
}

function openDetail(w) {
  document.getElementById('d-photo').innerHTML = w.photo
    ? `<img src="${w.photo}" alt="${w.name}">`
    : 'Фото';
  document.getElementById('d-rating').textContent = stars(w.rating);
  document.getElementById('d-title').textContent = w.name;
  document.getElementById('d-sku').textContent = 'Артикул: ' + w.sku;
  const link = document.getElementById('d-link');
  link.href = w.link || '#';
  link.textContent = w.link ? 'Ссылка на товар' : 'Ссылка не указана';

  showPage('detail');
}

function showPage(name) {
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(name + '-page').classList.add('active');
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.page === name));
}

// Инициализация
renderList(wishes, wishlistEl);
renderList([], doneListEl, true);
doneEmptyEl.classList.remove('hidden'); // пока исполненных нет — надпись видна

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.page === 'done') {
      showPage('done');
    } else {
      showPage('home');
    }
  });
});

document.getElementById('back-btn').addEventListener('click', () => showPage('home'));