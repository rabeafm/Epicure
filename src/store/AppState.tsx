export class AppState {
  public chef: any = null;
  public restaurant: any = null;
  public chefsArray: any = [];
  public dishesArray: any = [];
  public restaurantsArrays: any = { All: [], New: [], Popular: [], Open: [] };
}
//   public chef: any = {
//     _id: 1,
//     name: 'Yossi Shitrit',
//     image: 'assets/chefs/shitrit.png',
//     description: `Chef Yossi Shitrit has been living and breathing his culinary dreams for
//       more than two decades, including running the kitchen in his first
//       restaurant, the fondly-remembered Violet, located in Moshav Udim.
//       Shitrit's creativity and culinary acumen born of long experience are
//       expressed in the every detail of each and every dish.`,
//     restaurants: [
//       {
//         _id: '2',
//         name: 'Kab Kem',
//         chef: 'Yariv Malili',
//         opens: '13:00',
//         closes: '22:00',
//         dateOpened: new Date('August 19, 2020, 23:10:20'),
//         thumb: 'assets/restaurants/kab-kem.png',
//         image: 'assets/restaurants/claroBig.png',
//         dishes: [''],
//       },
//       {
//         _id: '3',
//         name: 'Messa',
//         chef: 'Aviv Moshe',
//         opens: '08:00',
//         closes: '13:00',
//         dateOpened: new Date('April 4, 2020, 23:10:20'),
//         thumb: 'assets/restaurants/messa.png',
//         image: 'assets/restaurants/claroBig.png',
//         dishes: [''],
//       },
//       {
//         _id: '4',
//         name: 'Lumina',
//         chef: 'Meir Adoni',
//         opens: '12:00',
//         closes: '16:00',
//         dateOpened: 'April 4, 2018, 23:10:20',
//         thumb: 'assets/restaurants/lumina.png',
//         image: 'assets/restaurants/claroBig.png',
//         dishes: [''],
//       },
//       {
//         _id: '5',
//         name: 'Ya Pan',
//         chef: 'Yuval Ben Neriah',
//         opens: '16:00',
//         closes: '22:00',
//         dateOpened: 'April 4, 2021, 23:10:20',
//         thumb: 'assets/restaurants/ya-pan.png',
//         image: 'assets/restaurants/claroBig.png',
//         dishes: [''],
//       },
//     ],
//   };
//   public dish: any = {
//     _id: 1,
//     name: 'Pad Ki Mao',
//     restaurant: 'Tiger Lilly',
//     ingredients:
//       'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
//     image: 'assets/dishes/pad-ki-mao.png',
//     icon: 'assets/spicy-icon.png',
//     price: 88,
//     type: 'dinner',
//   };
//   public restaurant: any = {
//     _id: '1',
//     name: 'Claro',
//     chef: 'Ran Shmueli',
//     opens: '10:00',
//     closes: '22:00',
//     dateOpened: new Date('March 12, 2020, 23:10:20'),
//     thumb: 'assets/restaurants/claro.png',
//     image: 'assets/restaurants/claroBig.png',
//     dishes: [
//       {
//         _id: 5,
//         name: 'Seafood Paella',
//         restaurant: 'Kab Kem',
//         ingredients:
//           'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//         image: 'assets/dishes/seafood-paella.png',
//         icon: 'assets/vegan-icon.png',
//         price: 98,
//         type: 'lunch',
//       },
//       {
//         _id: 12,
//         name: 'Seafood Paella',
//         restaurant: 'Kab Kem',
//         ingredients:
//           'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//         image: 'assets/dishes/seafood-paella.png',
//         icon: 'assets/vegan-icon.png',
//         price: 98,
//         type: 'lunch',
//       },
//       {
//         _id: 14,
//         name: 'Seafood Paella',
//         restaurant: 'Kab Kem',
//         ingredients:
//           'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//         image: 'assets/dishes/seafood-paella.png',
//         icon: '',
//         price: 98,
//         type: 'lunch',
//       },
//       {
//         _id: 21,
//         name: 'Seafood Paella',
//         restaurant: 'Kab Kem',
//         ingredients:
//           'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//         image: 'assets/dishes/seafood-paella.png',
//         icon: '',
//         price: 98,
//         type: 'lunch',
//       },
//       {
//         _id: 6,
//         name: 'Potato Chips',
//         restaurant: 'Kab Kem',
//         ingredients:
//           'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//         image: 'assets/dishes/potato-chips.png',
//         icon: 'assets/vegan-icon.png',
//         price: 98,
//         type: 'dinner',
//       },
//       {
//         _id: 7,
//         name: 'Red Farm',
//         restaurant: 'Popina',
//         ingredients: 'Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori',
//         image: 'assets/dishes/RedFarm.png',
//         icon: 'assets/vegiterian-icon.png',
//         price: 98,
//         type: 'dinner',
//       },
//       {
//         _id: 8,
//         name: 'Ta Ma-La-Ko',
//         restaurant: 'Popina',
//         ingredients:
//           'Green Papaya, Mango, Chukka, Chili, Mint, Kaffir, Lime, Cashew, Akaya, Cham',
//         image: 'assets/dishes/ta-Ma-La-Ko.png',
//         icon: 'assets/spicy-icon.png',
//         price: 98,
//         type: 'lunch',
//       },
//       {
//         _id: 22,
//         name: 'Garbanzo Frito',
//         restaurant: 'Kab Kem',
//         ingredients:
//           'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//         image: 'assets/dishes/garbanzo-frito.png',
//         icon: 'assets/vegan-icon.png',
//         price: 98,
//         type: 'breakfast',
//       },
//       {
//         _id: 2,
//         name: 'Garbanzo Frito',
//         restaurant: 'Kab Kem',
//         ingredients:
//           'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//         image: 'assets/dishes/garbanzo-frito.png',
//         icon: 'assets/vegan-icon.png',
//         price: 98,
//         type: 'breakfast',
//       },
//     ],
//   };
//   public chefsArray: any[] = [
//     {
//       _id: 1,
//       name: 'Yossi Shitrit',
//       image: 'assets/chefs/shitrit.png',
//       description: `Chef Yossi Shitrit has been living and breathing his culinary dreams for
//       more than two decades, including running the kitchen in his first
//       restaurant, the fondly-remembered Violet, located in Moshav Udim.
//       Shitrit's creativity and culinary acumen born of long experience are
//       expressed in the every detail of each and every dish.`,
//     },
//   ];
//   public dishesArray: any[] = [
//     {
//       _id: 1,
//       name: 'Pad Ki Mao',
//       restaurant: 'Tiger Lilly',
//       ingredients:
//         'Shrimps, Glass Noodles, Kemiri Nuts, Shallots,Lemon Grass, Magic Chili Brown Coconut',
//       image: 'assets/dishes/pad-ki-mao.png',
//       icon: 'assets/spicy-icon.png',
//       price: 88,
//       type: 'dinner',
//       chef: 'Yanir Green',
//     },
//     {
//       _id: 2,
//       name: 'Garbanzo Frito',
//       restaurant: 'Kab Kem',
//       ingredients:
//         'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//       image: 'assets/dishes/garbanzo-frito.png',
//       icon: 'assets/vegan-icon.png',
//       price: 98,
//       type: 'breakfast',
//     },
//     {
//       _id: 3,
//       name: 'Smoked Pizza',
//       restaurant: 'Popina',
//       ingredients: "Basil dough, cashew 'butter', demi-glace, bison & radish",
//       image: 'assets/dishes/smoked-pizza.png',
//       icon: 'assets/vegiterian-icon.png',
//       price: 65,
//       type: 'dinner',
//     },
//     {
//       _id: 4,
//       name: 'Masala Dosa',
//       restaurant: 'Kab Kem',
//       ingredients:
//         'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//       image: 'assets/dishes/masala-dosa.png',
//       icon: 'assets/vegan-icon.png',
//       price: 98,
//       type: 'lunch',
//     },
//     {
//       _id: 5,
//       name: 'Seafood Paella',
//       restaurant: 'Kab Kem',
//       ingredients:
//         'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//       image: 'assets/dishes/seafood-paella.png',
//       icon: 'assets/vegan-icon.png',
//       price: 98,
//       type: 'lunch',
//     },
//     {
//       _id: 6,
//       name: 'Potato Chips',
//       restaurant: 'Kab Kem',
//       ingredients:
//         'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//       image: 'assets/dishes/potato-chips.png',
//       icon: 'assets/vegan-icon.png',
//       price: 98,
//       type: 'dinner',
//     },
//     {
//       _id: 7,
//       name: 'Red Farm',
//       restaurant: 'Popina',
//       ingredients: 'Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori',
//       image: 'assets/dishes/RedFarm.png',
//       icon: 'assets/vegiterian-icon.png',
//       price: 98,
//       type: 'dinner',
//     },
//     {
//       _id: 8,
//       name: 'Ta Ma-La-Ko',
//       restaurant: 'Popina',
//       ingredients:
//         'Green Papaya, Mango, Chukka, Chili, Mint, Kaffir, Lime, Cashew, Akaya, Cham',
//       image: 'assets/dishes/ta-Ma-La-Ko.png',
//       icon: 'assets/spicy-icon.png',
//       price: 98,
//       type: 'lunch',
//     },
//   ];
//   public restaurantsArray: any[] = [
//     {
//       _id: '1',
//       name: 'Claro',
//       chef: 'Ran Shmueli',
//       opens: '10:00',
//       closes: '22:00',
//       dateOpened: new Date('March 12, 2020, 23:10:20'),
//       thumb: 'assets/restaurants/claro.png',
//       image: 'assets/restaurants/claroBig.png',
//       dishes: [''],
//     },
//     {
//       _id: '2',
//       name: 'Kab Kem',
//       chef: 'Yariv Malili',
//       opens: '13:00',
//       closes: '22:00',
//       dateOpened: new Date('August 19, 2020, 23:10:20'),
//       thumb: 'assets/restaurants/kab-kem.png',
//       image: 'assets/restaurants/claroBig.png',
//       dishes: [''],
//     },
//     {
//       _id: '3',
//       name: 'Messa',
//       chef: 'Aviv Moshe',
//       opens: '08:00',
//       closes: '13:00',
//       dateOpened: new Date('April 4, 2020, 23:10:20'),
//       thumb: 'assets/restaurants/messa.png',
//       image: 'assets/restaurants/claroBig.png',
//       dishes: [''],
//     },
//     {
//       _id: '4',
//       name: 'Lumina',
//       chef: 'Meir Adoni',
//       opens: '12:00',
//       closes: '16:00',
//       dateOpened: 'April 4, 2018, 23:10:20',
//       thumb: 'assets/restaurants/lumina.png',
//       image: 'assets/restaurants/claroBig.png',
//       dishes: [''],
//     },
//     {
//       _id: '5',
//       name: 'Ya Pan',
//       chef: 'Yuval Ben Neriah',
//       opens: '16:00',
//       closes: '22:00',
//       dateOpened: 'April 4, 2021, 23:10:20',
//       thumb: 'assets/restaurants/ya-pan.png',
//       image: 'assets/restaurants/claroBig.png',
//       dishes: [''],
//     },
//     {
//       _id: '6',
//       name: 'Tiger Lilly',
//       chef: 'Yanir Green',
//       opens: '20:00',
//       closes: '24:00',
//       dateOpened: 'May 12, 2016, 23:10:20',
//       thumb: 'assets/restaurants/tiger-lilly.png',
//       image: 'assets/restaurants/claroBig.png',
//       dishes: [''],
//     },
//     {
//       _id: '7',
//       name: 'Nithan Thai',
//       chef: 'Shahaf Shabtay',
//       opens: '07:00',
//       closes: '15:00',
//       dateOpened: 'June 22, 2016, 23:10:20',
//       thumb: 'assets/restaurants/nithan-thai.png',
//       image: 'assets/restaurants/claroBig.png',
//       dishes: [''],
//     },
//   ];
// }
