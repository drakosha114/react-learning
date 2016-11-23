/**
 * Created by askrypai on 11/22/16.
 */

const CONTACTS = [
    {
        "_id": "58359910de4095697fd9fac0",
        "index": 0,
        "picture": "http://lorempixel.com/120/120/people/8",
        "age": 30,
        "eyeColor": "green",
        "name": "David Mercer",
        "phone": "+1 (864) 574-2622",
        "company": "PERKLE",
        "gender": "male",
        "address": "506 Senator Street, Bartonsville, California, 6190",
        "about": "Aute consectetur nostrud fugiat do irure adipisicing consequat aute qui in. Id sint qui nulla elit labore exercitation voluptate ipsum occaecat. Nulla deserunt ipsum enim do excepteur pariatur.\r\n"
    },
    {
        "_id": "583599103ecd420fbc0b967c",
        "index": 1,
        "picture": "http://lorempixel.com/120/120/people/5",
        "age": 33,
        "eyeColor": "blue",
        "name": "Dejesus Peck",
        "phone": "+1 (837) 437-3444",
        "company": "CONJURICA",
        "gender": "male",
        "address": "189 Varick Avenue, Hall, Oregon, 2001",
        "about": "Quis qui occaecat officia nostrud id est tempor incididunt et do est. Dolor nostrud ut fugiat anim id est amet velit excepteur magna. Laborum mollit eiusmod sunt laborum sit deserunt tempor. Sint cillum dolor enim ipsum commodo amet nostrud culpa occaecat aute ut. In nisi veniam commodo nisi culpa aute. Voluptate fugiat pariatur minim eiusmod non commodo exercitation excepteur aute veniam fugiat amet. Labore laborum ea ullamco proident duis minim velit elit officia id excepteur.\r\n"
    },
    {
        "_id": "58359910a1dfc13c73f37418",
        "index": 2,
        "picture": "http://lorempixel.com/120/120/people/7",
        "age": 29,
        "eyeColor": "brown",
        "name": "Wood Riley",
        "phone": "+1 (837) 455-2940",
        "company": "EARTHPURE",
        "gender": "male",
        "address": "381 Milford Street, Bancroft, New York, 3078",
        "about": "Aliqua anim nulla et enim esse. Irure culpa veniam et dolore veniam. Veniam veniam aliqua labore ipsum cupidatat occaecat exercitation elit esse. Consequat ad voluptate cillum duis culpa proident sunt ex voluptate ut.\r\n"
    },
    {
        "_id": "5835991020aa6dd780c24206",
        "index": 3,
        "picture": "http://lorempixel.com/120/120/people/3",
        "age": 36,
        "eyeColor": "green",
        "name": "Stone Lopez",
        "phone": "+1 (990) 551-2239",
        "company": "GEEKY",
        "gender": "male",
        "address": "804 Gallatin Place, Caspar, Connecticut, 4170",
        "about": "Laborum cillum ullamco culpa culpa commodo enim nostrud do magna magna Lorem anim adipisicing sit. Proident in duis consectetur in mollit excepteur laboris exercitation. Est culpa velit ipsum ipsum adipisicing deserunt elit in sunt commodo.\r\n"
    },
    {
        "_id": "5835991030623e3df7122abf",
        "index": 4,
        "picture": "http://lorempixel.com/120/120/people/7",
        "age": 26,
        "eyeColor": "green",
        "name": "Lillie Eaton",
        "phone": "+1 (935) 492-3587",
        "company": "IZZBY",
        "gender": "female",
        "address": "405 Berriman Street, Haena, Idaho, 3025",
        "about": "Et irure exercitation culpa ullamco Lorem cillum anim quis proident sit eu excepteur. Ipsum reprehenderit amet et proident elit nulla dolore minim occaecat amet aute magna ut. Magna fugiat dolore commodo consectetur. Lorem nulla sit deserunt eiusmod excepteur tempor pariatur dolor. Exercitation mollit esse non minim incididunt nostrud adipisicing tempor nulla id nostrud occaecat. Consequat ullamco ea in occaecat consectetur nostrud duis in tempor aliquip. Minim sit do eiusmod non sit id commodo nulla magna laboris pariatur.\r\n"
    },
    {
        "_id": "5835991055e6ad16747a6d61",
        "index": 5,
        "picture": "http://lorempixel.com/120/120/people/9",
        "age": 29,
        "eyeColor": "green",
        "name": "Francine Hayes",
        "phone": "+1 (922) 413-3532",
        "company": "EVENTEX",
        "gender": "female",
        "address": "918 Kansas Place, Duryea, Indiana, 2224",
        "about": "Amet veniam sint do deserunt magna velit aute labore consectetur. Adipisicing non est nostrud voluptate. Eiusmod mollit nisi laboris deserunt eu ea id dolore deserunt aliqua. Elit pariatur deserunt eu quis laborum sit duis esse cillum et et deserunt.\r\n"
    },
    {
        "_id": "583599107e8abc15add956b7",
        "index": 6,
        "picture": "http://lorempixel.com/120/120/people/4",
        "age": 31,
        "eyeColor": "green",
        "name": "Mcmillan Marks",
        "phone": "+1 (827) 475-2653",
        "company": "RAMEON",
        "gender": "male",
        "address": "285 Downing Street, Aberdeen, District Of Columbia, 9487",
        "about": "Culpa incididunt esse mollit anim deserunt. Labore qui ut duis labore duis aute. Enim enim dolor voluptate occaecat id consectetur ullamco reprehenderit nostrud. Amet consectetur dolore enim culpa fugiat aliqua. Nostrud fugiat elit est consectetur.\r\n"
    },
    {
        "_id": "58359910f291e7ea10ae3560",
        "index": 7,
        "picture": "http://lorempixel.com/120/120/people/1",
        "age": 38,
        "eyeColor": "blue",
        "name": "Kathryn Wooten",
        "phone": "+1 (856) 513-3385",
        "company": "DREAMIA",
        "gender": "female",
        "address": "944 Lawrence Avenue, Urie, Federated States Of Micronesia, 6954",
        "about": "Laborum ipsum eiusmod aliqua sit id amet Lorem amet veniam sunt sint aute Lorem. Ullamco mollit ad enim laboris voluptate laborum proident cillum amet qui pariatur culpa. Id non laboris ipsum velit ullamco nostrud ut labore nostrud est non officia enim velit. Proident excepteur anim mollit tempor reprehenderit aliquip sint. Veniam nisi veniam aliquip dolor tempor in ullamco eiusmod aliqua esse fugiat qui magna sit.\r\n"
    },
    {
        "_id": "58359910c1a9ca670df6f94f",
        "index": 8,
        "picture": "http://lorempixel.com/120/120/people/5",
        "age": 23,
        "eyeColor": "brown",
        "name": "Crystal Delaney",
        "phone": "+1 (811) 551-3752",
        "company": "GEEKUS",
        "gender": "female",
        "address": "696 Dodworth Street, Blodgett, Alaska, 9519",
        "about": "Elit fugiat pariatur proident ut eu eu fugiat quis Lorem nostrud. Enim commodo dolor reprehenderit irure do sit minim veniam sunt. Cillum tempor culpa duis ut fugiat est ea laborum. Pariatur do commodo nisi proident magna eiusmod dolor magna. Eu ex velit laborum aute proident ad ex minim mollit Lorem.\r\n"
    },
    {
        "_id": "58359910e992335fe269ec7c",
        "index": 9,
        "picture": "http://lorempixel.com/120/120/people/6",
        "age": 22,
        "eyeColor": "brown",
        "name": "Reynolds Dillon",
        "phone": "+1 (939) 408-4000",
        "company": "SNACKTION",
        "gender": "male",
        "address": "436 Ovington Avenue, Chumuckla, New Jersey, 6800",
        "about": "Cupidatat nisi ullamco nulla veniam qui cupidatat amet pariatur labore magna magna eiusmod. Ea Lorem ut sunt deserunt cupidatat aliqua eiusmod mollit. Laboris incididunt ut anim occaecat mollit nulla ad duis proident reprehenderit deserunt. Sint dolor nulla duis cillum veniam reprehenderit tempor in non aute reprehenderit velit. Non dolor nisi proident aliquip duis est sunt deserunt minim pariatur cupidatat enim enim commodo. Laborum minim tempor in anim laboris est aute dolore adipisicing commodo.\r\n"
    },
    {
        "_id": "583599100c12bf95498f0e32",
        "index": 10,
        "picture": "http://lorempixel.com/120/120/people/1",
        "age": 32,
        "eyeColor": "green",
        "name": "Cooper Carver",
        "phone": "+1 (977) 460-3454",
        "company": "ENTROPIX",
        "gender": "male",
        "address": "463 Applegate Court, Watrous, Virginia, 9923",
        "about": "Magna ex elit nostrud fugiat occaecat veniam in cupidatat. Velit dolore veniam ipsum id eiusmod. Excepteur excepteur commodo proident ea. Culpa ut exercitation duis nisi veniam proident in labore officia nulla incididunt.\r\n"
    },
    {
        "_id": "583599108bacb3605103e7d3",
        "index": 11,
        "picture": "http://lorempixel.com/120/120/people/8",
        "age": 40,
        "eyeColor": "green",
        "name": "Raymond Lawrence",
        "phone": "+1 (878) 511-3792",
        "company": "CIPROMOX",
        "gender": "male",
        "address": "914 Elizabeth Place, Orviston, South Dakota, 4847",
        "about": "Consequat irure dolore occaecat eu. Laborum ea deserunt ut amet. Officia deserunt fugiat duis ipsum sint. Ipsum in tempor fugiat officia non cupidatat non culpa quis labore.\r\n"
    },
    {
        "_id": "5835991086a7a739926ec150",
        "index": 12,
        "picture": "http://lorempixel.com/120/120/people/5",
        "age": 38,
        "eyeColor": "green",
        "name": "Payne Peterson",
        "phone": "+1 (905) 545-3500",
        "company": "SENTIA",
        "gender": "male",
        "address": "928 Cedar Street, Elbert, Mississippi, 5996",
        "about": "Et anim nisi veniam veniam Lorem amet incididunt irure et officia ad voluptate. Lorem sint exercitation non et dolore id dolor quis sunt fugiat. Eiusmod irure proident reprehenderit minim est ullamco velit tempor sunt in. Proident enim aute occaecat dolor proident dolore dolor anim. Eiusmod dolor labore ad aliqua minim officia eiusmod ut velit sunt excepteur ex aliquip ex. Mollit voluptate minim fugiat cillum sunt laborum sunt amet magna est ad irure amet. Labore exercitation eiusmod labore mollit laboris dolor.\r\n"
    },
    {
        "_id": "58359910765b9c435c6925d9",
        "index": 13,
        "picture": "http://lorempixel.com/120/120/people/5",
        "age": 25,
        "eyeColor": "brown",
        "name": "Misty Gould",
        "phone": "+1 (995) 464-2736",
        "company": "FLUM",
        "gender": "female",
        "address": "693 Jamaica Avenue, Sharon, Maine, 7535",
        "about": "Consectetur veniam et incididunt occaecat officia incididunt. Velit exercitation exercitation mollit do ipsum nostrud proident aliquip. Pariatur proident qui aute reprehenderit non reprehenderit deserunt. Irure laborum consectetur laborum amet ea est fugiat anim eiusmod eiusmod veniam cupidatat amet labore. Esse non proident eu enim aliquip in veniam cillum consectetur culpa do proident sint.\r\n"
    },
    {
        "_id": "58359910fcef4c51f2969c63",
        "index": 14,
        "picture": "http://lorempixel.com/120/120/people/3",
        "age": 28,
        "eyeColor": "brown",
        "name": "Sloan Stone",
        "phone": "+1 (851) 405-2375",
        "company": "MOMENTIA",
        "gender": "male",
        "address": "429 Bridge Street, Maury, Northern Mariana Islands, 6424",
        "about": "Occaecat cillum occaecat in incididunt mollit est nisi minim culpa dolor in. Incididunt laboris sit incididunt est fugiat quis sit qui ut voluptate deserunt voluptate. Et id elit non sint elit mollit officia dolore eiusmod.\r\n"
    },
    {
        "_id": "58359910846924069b85a5f6",
        "index": 15,
        "picture": "http://lorempixel.com/120/120/people/5",
        "age": 27,
        "eyeColor": "brown",
        "name": "Cruz Pugh",
        "phone": "+1 (994) 467-2966",
        "company": "MOTOVATE",
        "gender": "male",
        "address": "178 Evergreen Avenue, Starks, North Carolina, 9105",
        "about": "Veniam est id minim irure reprehenderit nisi minim cupidatat officia. Aute do eu sit occaecat mollit dolor dolor reprehenderit amet consequat eu tempor. Cillum officia est sint laborum aliquip culpa dolore irure. Enim amet est reprehenderit cupidatat velit cillum duis tempor.\r\n"
    },
    {
        "_id": "58359910f0fab1cc3b0fdf4d",
        "index": 16,
        "picture": "http://lorempixel.com/120/120/people/8",
        "age": 26,
        "eyeColor": "brown",
        "name": "Holland Burch",
        "phone": "+1 (976) 538-3905",
        "company": "TOYLETRY",
        "gender": "male",
        "address": "271 Commercial Street, Coventry, Montana, 1656",
        "about": "Eu elit tempor est esse dolor adipisicing laboris voluptate sint. Magna veniam sint ut occaecat. Non est do veniam dolore aute. Minim nostrud exercitation anim consectetur id est sint ex dolor ea. Aute officia id occaecat reprehenderit ullamco qui Lorem aliqua do consequat ex aliqua eu. Consequat duis quis aliqua culpa duis nulla ad ea reprehenderit duis duis.\r\n"
    },
    {
        "_id": "58359910ce83532192a207c1",
        "index": 17,
        "picture": "http://lorempixel.com/120/120/people/2",
        "age": 39,
        "eyeColor": "blue",
        "name": "Ladonna Clark",
        "phone": "+1 (894) 407-2738",
        "company": "PIGZART",
        "gender": "female",
        "address": "317 Lafayette Avenue, Marion, New Hampshire, 8610",
        "about": "Veniam sint irure labore aliqua enim laborum dolor. Voluptate voluptate duis id laborum consequat tempor fugiat consectetur amet. Do ullamco cillum deserunt irure amet officia aliqua tempor excepteur ex eu aliquip aliqua sint. Exercitation officia ad ex minim cupidatat reprehenderit voluptate. Cupidatat laboris tempor dolor nisi aliquip officia laborum aliqua ut ex sit ut. Anim excepteur officia do magna magna fugiat. Voluptate cillum aute id veniam commodo id magna velit ex.\r\n"
    },
    {
        "_id": "58359910cfa4303bb587a51b",
        "index": 18,
        "picture": "http://lorempixel.com/120/120/people/5",
        "age": 24,
        "eyeColor": "green",
        "name": "Glass Simon",
        "phone": "+1 (977) 489-2693",
        "company": "NETERIA",
        "gender": "male",
        "address": "120 Grafton Street, Wanship, Virgin Islands, 9567",
        "about": "Voluptate Lorem mollit magna laboris cupidatat duis nisi consectetur quis sint reprehenderit. Laborum cupidatat anim ipsum est et ipsum et veniam. Ut aliqua aliquip pariatur ut pariatur mollit cillum exercitation laboris labore.\r\n"
    },
    {
        "_id": "583599105c8d871d60959ba6",
        "index": 19,
        "picture": "http://lorempixel.com/120/120/people/6",
        "age": 35,
        "eyeColor": "blue",
        "name": "Jodie Morton",
        "phone": "+1 (818) 565-3873",
        "company": "ROCKYARD",
        "gender": "female",
        "address": "209 Cox Place, Castleton, Tennessee, 2269",
        "about": "Irure consectetur ipsum officia commodo dolor. Aliqua nulla cillum sunt exercitation ea nisi exercitation. Est fugiat esse ipsum sit labore irure quis qui non veniam labore exercitation est eu. Reprehenderit Lorem sint sint commodo laborum duis excepteur pariatur commodo nulla aliquip sit eiusmod in. Minim quis nostrud sunt commodo est enim quis elit aute aliquip aliquip do. Officia mollit eu et eu exercitation ea labore commodo voluptate sunt do.\r\n"
    },
    {
        "_id": "5835991011f8b08eff4aa1fe",
        "index": 20,
        "picture": "http://lorempixel.com/120/120/people/2",
        "age": 40,
        "eyeColor": "green",
        "name": "Alexander Ashley",
        "phone": "+1 (901) 582-3693",
        "company": "PANZENT",
        "gender": "male",
        "address": "192 Benson Avenue, Tuskahoma, Alabama, 5168",
        "about": "Ex consectetur non qui eiusmod labore laborum Lorem dolor aliquip. Consequat dolore enim excepteur occaecat amet ad incididunt ea fugiat duis adipisicing dolore in. Velit sunt esse non est laborum elit.\r\n"
    },
    {
        "_id": "58359910bb34dc675675f3a8",
        "index": 21,
        "picture": "http://lorempixel.com/120/120/people/6",
        "age": 38,
        "eyeColor": "blue",
        "name": "Daisy Duran",
        "phone": "+1 (981) 550-2765",
        "company": "VICON",
        "gender": "female",
        "address": "422 Eldert Lane, Wescosville, Palau, 6301",
        "about": "Consequat reprehenderit cupidatat sit et eu fugiat in nisi velit sint sunt ut officia. Ullamco officia laboris aliquip velit in aliquip tempor et excepteur dolor non nulla. Do nisi minim est veniam dolore. Laborum eu sint nulla nulla dolore nisi.\r\n"
    },
    {
        "_id": "583599100223bbb88dd88cf0",
        "index": 22,
        "picture": "http://lorempixel.com/120/120/people/7",
        "age": 24,
        "eyeColor": "brown",
        "name": "Gilmore Porter",
        "phone": "+1 (817) 524-3420",
        "company": "DIGINETIC",
        "gender": "male",
        "address": "904 Seeley Street, Chemung, Colorado, 6799",
        "about": "Officia ullamco ipsum nisi ad velit nostrud. Occaecat officia veniam deserunt sunt voluptate dolore ut. Esse ullamco aliquip eiusmod quis et Lorem veniam eiusmod consectetur nostrud in esse amet elit. Cupidatat magna id ullamco consectetur enim qui incididunt in mollit elit elit velit.\r\n"
    },
    {
        "_id": "583599109988769665173ef5",
        "index": 23,
        "picture": "http://lorempixel.com/120/120/people/3",
        "age": 36,
        "eyeColor": "brown",
        "name": "Barbara Copeland",
        "phone": "+1 (813) 526-2222",
        "company": "ARCHITAX",
        "gender": "female",
        "address": "894 Kimball Street, Dahlen, Minnesota, 1536",
        "about": "Proident qui non tempor exercitation. Nulla cupidatat Lorem duis duis dolore in. Enim cupidatat exercitation labore proident enim. Laboris cupidatat cillum deserunt dolor. Lorem adipisicing voluptate ullamco fugiat officia proident enim. Magna exercitation elit ipsum reprehenderit.\r\n"
    },
    {
        "_id": "58359910b4d01357765310d8",
        "index": 24,
        "picture": "http://lorempixel.com/120/120/people/9",
        "age": 33,
        "eyeColor": "brown",
        "name": "Tanisha Baldwin",
        "phone": "+1 (871) 438-2747",
        "company": "KIDGREASE",
        "gender": "female",
        "address": "967 Nichols Avenue, Cornfields, Guam, 4766",
        "about": "Velit id proident est ex labore qui ut nulla excepteur excepteur reprehenderit exercitation. Occaecat laborum pariatur sunt esse duis consectetur. Do tempor voluptate minim sint et cupidatat. Sit fugiat excepteur quis laboris excepteur sint. Sit nulla sit cillum adipisicing cupidatat occaecat elit cillum sunt adipisicing. Quis aliqua amet enim incididunt qui ad ea eu veniam ut sint. Aliquip officia enim reprehenderit minim velit quis ullamco laborum.\r\n"
    },
    {
        "_id": "58359910180858a660d6b5de",
        "index": 25,
        "picture": "http://lorempixel.com/120/120/people/4",
        "age": 37,
        "eyeColor": "brown",
        "name": "Hale Patterson",
        "phone": "+1 (947) 520-2976",
        "company": "NETBOOK",
        "gender": "male",
        "address": "159 Cooke Court, Catharine, Puerto Rico, 6413",
        "about": "Tempor aliquip incididunt occaecat veniam nulla in consequat incididunt ea nostrud non sunt. Dolore officia laboris quis pariatur est ad eu aliquip. Minim ad tempor velit eiusmod laboris fugiat labore ea eu exercitation id proident minim. Aliqua ad incididunt elit laborum exercitation.\r\n"
    },
    {
        "_id": "583599109273c100bf523b6b",
        "index": 26,
        "picture": "http://lorempixel.com/120/120/people/8",
        "age": 38,
        "eyeColor": "brown",
        "name": "Naomi Foreman",
        "phone": "+1 (998) 581-2117",
        "company": "EBIDCO",
        "gender": "female",
        "address": "819 Battery Avenue, Knowlton, Pennsylvania, 1189",
        "about": "Veniam non sit esse est nostrud pariatur. Labore occaecat laboris consectetur esse deserunt proident non exercitation magna adipisicing exercitation consectetur. Qui nulla quis ex quis commodo. Ullamco velit incididunt amet exercitation adipisicing elit laboris officia ullamco id ea commodo elit aliqua. Pariatur velit in culpa sint minim eiusmod do do enim ullamco consectetur esse mollit.\r\n"
    },
    {
        "_id": "583599106a31829de00c680f",
        "index": 27,
        "picture": "http://lorempixel.com/120/120/people/3",
        "age": 35,
        "eyeColor": "green",
        "name": "Roseann Pope",
        "phone": "+1 (847) 547-2145",
        "company": "GLASSTEP",
        "gender": "female",
        "address": "595 Division Avenue, Caln, Nevada, 1790",
        "about": "Exercitation esse nisi duis et proident irure anim ex eiusmod. Magna labore excepteur eiusmod culpa voluptate. Eiusmod est mollit eu consequat minim magna. Consectetur in Lorem minim sunt mollit laboris.\r\n"
    },
    {
        "_id": "58359910c0d25d6b433efd87",
        "index": 28,
        "picture": "http://lorempixel.com/120/120/people/4",
        "age": 27,
        "eyeColor": "green",
        "name": "Fletcher Kemp",
        "phone": "+1 (837) 439-2449",
        "company": "QIMONK",
        "gender": "male",
        "address": "403 Grant Avenue, Convent, Delaware, 5690",
        "about": "Cupidatat laborum nostrud magna cillum dolore ullamco tempor laborum esse quis reprehenderit. Elit amet dolor amet ipsum sit ea. Cillum quis sint aliqua velit Lorem do nulla eu veniam dolore et.\r\n"
    },
    {
        "_id": "5835991056272a7112923079",
        "index": 29,
        "picture": "http://lorempixel.com/120/120/people/3",
        "age": 26,
        "eyeColor": "brown",
        "name": "Janet Bullock",
        "phone": "+1 (854) 577-3536",
        "company": "EXOSWITCH",
        "gender": "female",
        "address": "148 Kermit Place, Rivera, Oklahoma, 7555",
        "about": "Dolore nulla sint et consequat aute proident. Cupidatat commodo Lorem esse do minim adipisicing consequat tempor cillum ullamco labore cillum amet. Officia proident elit commodo anim duis sit culpa sint nisi aliqua incididunt in pariatur cupidatat. Officia ut nisi dolor id amet anim laborum culpa amet ex. Reprehenderit commodo duis anim aute quis ipsum voluptate labore. Reprehenderit duis ullamco voluptate adipisicing sint sunt ut proident. Nisi proident minim amet laboris deserunt exercitation excepteur ut.\r\n"
    },
    {
        "_id": "583599104a0ac7f81eaeb160",
        "index": 30,
        "picture": "http://lorempixel.com/120/120/people/2",
        "age": 37,
        "eyeColor": "green",
        "name": "Elizabeth Barker",
        "phone": "+1 (877) 417-2610",
        "company": "EXTRAGEN",
        "gender": "female",
        "address": "630 Ralph Avenue, Shasta, Wyoming, 2028",
        "about": "Cupidatat id excepteur cillum qui ex. Incididunt id labore pariatur eiusmod. Esse occaecat pariatur excepteur nostrud sint aliqua exercitation dolor fugiat. Quis culpa occaecat veniam adipisicing dolor magna sit consequat amet aute laboris elit. Magna incididunt tempor adipisicing nisi sunt nulla voluptate voluptate.\r\n"
    },
    {
        "_id": "583599104754204d95eb8337",
        "index": 31,
        "picture": "http://lorempixel.com/120/120/people/4",
        "age": 36,
        "eyeColor": "brown",
        "name": "John Owens",
        "phone": "+1 (880) 595-2320",
        "company": "HYDROCOM",
        "gender": "female",
        "address": "861 Elliott Place, Drummond, Georgia, 6275",
        "about": "Labore ullamco aliquip et eiusmod sint sint consequat pariatur. Do quis aliquip ullamco est ex sint sit velit officia. Nostrud enim quis in ullamco non nulla cupidatat. Elit in ut aliqua reprehenderit fugiat excepteur et. Proident mollit commodo sunt amet cillum consequat culpa Lorem deserunt incididunt nostrud in proident.\r\n"
    },
    {
        "_id": "583599107176d961e0cd1d52",
        "index": 32,
        "picture": "http://lorempixel.com/120/120/people/1",
        "age": 24,
        "eyeColor": "green",
        "name": "Francesca Byers",
        "phone": "+1 (855) 578-2905",
        "company": "BIFLEX",
        "gender": "female",
        "address": "778 Madison Place, Woodburn, Rhode Island, 8750",
        "about": "Fugiat elit ad consequat ipsum commodo Lorem nulla commodo. Veniam dolor dolor veniam est reprehenderit incididunt occaecat deserunt id ea aliquip. Commodo aliqua commodo quis cupidatat consectetur nulla anim tempor cupidatat enim aliquip aliquip. Consectetur reprehenderit magna cillum quis dolore id ea officia.\r\n"
    },
    {
        "_id": "5835991023944c925ab2f2b0",
        "index": 33,
        "picture": "http://lorempixel.com/120/120/people/4",
        "age": 34,
        "eyeColor": "green",
        "name": "Laverne Vinson",
        "phone": "+1 (988) 489-2111",
        "company": "INCUBUS",
        "gender": "female",
        "address": "721 Montgomery Place, Gallina, American Samoa, 3404",
        "about": "Nulla eiusmod Lorem non reprehenderit cillum eu laborum amet adipisicing. Voluptate Lorem ipsum exercitation laborum eu sunt id Lorem ullamco esse. Amet pariatur minim reprehenderit consectetur fugiat. Exercitation nisi sunt ipsum aliquip do sit aute minim et ea est adipisicing et. Culpa ex aliquip pariatur deserunt in amet laboris nostrud. Ut duis adipisicing duis ex.\r\n"
    },
    {
        "_id": "583599105c509fb191bb5761",
        "index": 34,
        "picture": "http://lorempixel.com/120/120/people/9",
        "age": 38,
        "eyeColor": "green",
        "name": "Butler Hale",
        "phone": "+1 (953) 427-3857",
        "company": "KRAG",
        "gender": "male",
        "address": "774 Miami Court, Leland, Massachusetts, 7007",
        "about": "Sit amet mollit fugiat commodo minim do consequat et. Quis aliquip aliqua magna proident est adipisicing aliqua sunt Lorem nisi quis officia dolor nostrud. Est quis eiusmod non mollit elit commodo est velit incididunt. Eu minim mollit exercitation et do consectetur consectetur nulla commodo nulla reprehenderit anim. Occaecat duis officia excepteur Lorem. Qui nulla aliqua ex commodo in nostrud pariatur minim consectetur labore adipisicing voluptate elit esse. Elit ad ut qui pariatur in anim sint deserunt occaecat laboris id enim laborum qui.\r\n"
    },
    {
        "_id": "58359910ed4ba9c932520a34",
        "index": 35,
        "picture": "http://lorempixel.com/120/120/people/2",
        "age": 35,
        "eyeColor": "green",
        "name": "Wheeler Hensley",
        "phone": "+1 (943) 578-2670",
        "company": "COMBOGEN",
        "gender": "male",
        "address": "166 Bills Place, Cressey, Washington, 6271",
        "about": "Veniam fugiat in amet deserunt. Deserunt nostrud cupidatat id cillum. Commodo amet ut adipisicing quis nisi occaecat culpa velit reprehenderit. Cupidatat enim culpa dolore consectetur do consequat magna esse proident eu do. Veniam cupidatat deserunt ad ea sunt ea.\r\n"
    },
    {
        "_id": "583599103e705cdd14b8eeb8",
        "index": 36,
        "picture": "http://lorempixel.com/120/120/people/2",
        "age": 37,
        "eyeColor": "brown",
        "name": "Megan Alvarez",
        "phone": "+1 (981) 458-2512",
        "company": "LIQUICOM",
        "gender": "female",
        "address": "790 Juliana Place, Chaparrito, Kentucky, 7592",
        "about": "Anim sit consequat labore laborum velit irure laborum et cillum. Do dolore consectetur non eu minim eiusmod non ad dolore est. Labore voluptate ex est irure enim. Ut aliqua officia commodo esse velit do amet veniam aliqua voluptate eu voluptate. Ex do esse fugiat enim amet esse dolore minim do.\r\n"
    },
    {
        "_id": "5835991097901cbf5dafa9ef",
        "index": 37,
        "picture": "http://lorempixel.com/120/120/people/1",
        "age": 34,
        "eyeColor": "brown",
        "name": "Ayala Rodgers",
        "phone": "+1 (912) 525-2525",
        "company": "KOFFEE",
        "gender": "male",
        "address": "402 Farragut Place, Sehili, Maryland, 6480",
        "about": "Et velit id esse sint nisi aute elit incididunt. Ex incididunt magna incididunt laborum non ut adipisicing sit duis nostrud ad voluptate. Ipsum voluptate in ea pariatur. Id id nisi ea labore ipsum consectetur qui aliquip deserunt cillum ut. Nulla consectetur amet do eu in dolore sint dolore cillum do ipsum esse esse minim.\r\n"
    },
    {
        "_id": "5835991031dc2accfe2d5df0",
        "index": 38,
        "picture": "http://lorempixel.com/120/120/people/2",
        "age": 31,
        "eyeColor": "blue",
        "name": "Meyers Blanchard",
        "phone": "+1 (821) 563-2214",
        "company": "KEENGEN",
        "gender": "male",
        "address": "604 Bevy Court, Fairmount, Michigan, 5866",
        "about": "Occaecat in aute proident non do ex enim minim. Irure irure id ea aute irure ullamco. Voluptate occaecat incididunt ut laboris magna in et aliquip magna elit deserunt. Veniam velit reprehenderit commodo excepteur cupidatat in tempor. Do adipisicing in est minim et consectetur dolore ipsum ipsum sit duis incididunt fugiat.\r\n"
    }
];

/*
var Hello = React.createClass({
    render: function () {
        return <li> Привет {this.props.name} {this.props.surname}</li>;
    }
});
 http://www.json-generator.com/api/json/get/cpbTLURGYy?indent=2
ReactDOM.render(
    <ul>
        <Hello name="Петр" surname="Александрович"/>
        <Hello name="Андрей" surname="Александрович"/>
        <Hello name="Иван" surname="Александрович"/>
    </ul>,
    document.getElementById('content')
);
*/
var Contact = React.createClass({
    render: function () {
        return (
            <li className="contacts__item">
                <img className="contacts__image" src={this.props.image} width="80" height="80"/>
                <h2 className="contacts__name">{this.props.name}</h2>
                <p className="contacts__phone">{this.props.phone}</p>
            </li>
        )
    }
});

var Contacts = React.createClass({
    getInitialState: function () {
        return {
            displayedContacts: CONTACTS
        }
    },
    onChangeHandler: function(e) {

        var searchQuery = e.target.value.toLowerCase();
        var filtredContacts;

        if (searchQuery.length === 0) {
            filtredContacts = CONTACTS;
        } else {
            filtredContacts = CONTACTS.filter(function (el) {

                return el.name.toLowerCase().indexOf(searchQuery) !== -1;
            });

        }

        this.setState({
            displayedContacts: filtredContacts
        });
    },
    render: function () {
        return (
            <div className="contacts">
                <div className="contacts__inputwrapper">
                    <input type="text" className="contacts__input" onChange={this.onChangeHandler}/>
                </div>
                <ul className="contacts__list">
                    {
                        this.state.displayedContacts.map(function(el) {
                          return <Contact key={el.index} name={el.name} image={el.picture} phone={el.phone}/>
                        })
                    }
                </ul>
            </div>
        );

    }
});


ReactDOM.render(
   <Contacts/>,
    document.getElementById('content')
);