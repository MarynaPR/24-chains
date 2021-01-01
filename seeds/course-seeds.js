const { Course } = require('../models');
const sequelize = require('../config/connection');

const coursedata = [
    {
        course_name: 'Abendschein Park',
        holes: 18,
        par: 57,
        established: 2006,
        city: 'Oak Creek',
        state: 'WI',
        zipcode: 53154
    },
    {
        course_name: 'Adelaide Park',
        holes: 18,
        par: 58,
        established: 2001,
        city: 'Fond du Lac',
        state: 'WI',
        zipcode: 54935
    },
    {
        course_name: 'Almon Park',
        holes: 18,
        par: 56,
        established: 2010,
        city: 'Rhinelander',
        state: 'WI',
        zipcode: 54501
    },
    {
        course_name: 'Amundson Park',
        holes: 18,
        par: 54,
        established: 2013,
        city: 'Sparta',
        state: 'WI',
        zipcode: 54656
    },
    {
        course_name: 'Axldog Acres',
        holes: 21,
        par: 64,
        established: 2003,
        city: 'Boyceville',
        state: 'WI',
        zipcode: 54725
    },
    {
        course_name: 'Badger Park',
        holes: 18,
        par: 27,
        established: 2007,
        city: 'Peshtigo',
        state: 'WI',
        zipcode: 54157
    },
    {
        course_name: 'Baraboo Lions',
        holes: 18,
        par: 55,
        established: 1996,
        city: 'Baraboo',
        state: 'WI',
        zipcode: 53913
    },
    {
        course_name: 'Big Eau Pleine County Park',
        holes: 18,
        par: 58,
        established: 2007,
        city: 'Mosinee',
        state: 'WI',
        zipcode: 54455
    },
    {
        course_name: "Bird's Ruins",
        holes: 28,
        par: 84,
        established: 2011,
        city: 'Marshall',
        state: 'WI',
        zipcode: 53559
    },
    {
        course_name: 'Braem Park',
        holes: 18,
        par: 69,
        established: 2004,
        city: 'Marshfield',
        state: 'WI',
        zipcode: 54449
    },
    {
        course_name: 'Brandy Lake',
        holes: 18,
        par: 59,
        established: 2011,
        city: 'Woodruff',
        state: 'WI',
        zipcode: 54568
    },
    {
        course_name: 'Brown Deer',
        holes: 21,
        par: 65,
        established: 2006,
        city: 'Milwaukee',
        state: 'WI',
        zipcode: 53209
    },
    {
        course_name: 'Capital Springs',
        holes: 18,
        par: 54,
        established: 2013,
        city: 'Madison',
        state: 'WI',
        zipcode: 53711
    },
    {
        course_name: 'Carlin Weld County Park',
        holes: 18,
        par: 54,
        established: 2015,
        city: 'Palmyra',
        state: 'WI',
        zipcode: 53156
    },
    {
        course_name: 'Chetek Bulldog',
        holes: 18,
        par: 54,
        established: 2012,
        city: 'Chetek',
        state: 'WI',
        zipcode: 54728
    },
    {
        course_name: 'City of Antigo',
        holes: 18,
        par: 57,
        established: 2011,
        city: 'Antigo',
        state: 'WI',
        zipcode: 54409
    },
    {
        course_name: 'Community Campus',
        holes: 18,
        par: 54,
        established: 2017,
        city: 'Green Bay',
        state: 'WI',
        zipcode: 54313
    },
    {
        course_name: 'Crystal Lake Park',
        holes: 18,
        par: 64,
        established: 1994,
        city: 'Beaver Dam',
        state: 'WI',
        zipcode: 53916
    },
    {
        course_name: 'Curiousfarmer',
        holes: 22,
        par: 70,
        established: 2018,
        city: 'Darlington',
        state: 'WI',
        zipcode: 53530
    },
    {
        course_name: 'Dawgwood Ditch',
        holes: 21,
        par: 63,
        established: 2012,
        city: 'Kewaskum',
        state: 'WI',
        zipcode: 53040
    },
    {
        course_name: 'Delong Middle School',
        holes: 18,
        par: 54,
        established: null,
        city: 'Eau Claire',
        state: 'WI',
        zipcode: 54703
    },
    {
        course_name: 'Dineen Park',
        holes: 18,
        par: 55,
        established: 2006,
        city: 'Milwaukee',
        state: 'WI',
        zipcode: 53216
    },
    {
        course_name: 'Dretzka Park',
        holes: 27,
        par: 81,
        established: 1993,
        city: 'Milwaukee',
        state: 'WI',
        zipcode: 53224
    },{
        course_name: 'Eagle Pines',
        holes: 20,
        par: 60,
        established: 2020,
        city: 'Almond',
        state: 'WI',
        zipcode: 54909
    },
    {
        course_name: 'Eagle Run',
        holes: 18,
        par: 54,
        established: 2015,
        city: 'Esofea',
        state: 'WI',
        zipcode: 54667
    },
    {
        course_name: 'Elver Park',
        holes: 18,
        par: 54,
        established: 1992,
        city: 'Madison',
        state: 'WI',
        zipcode: 53719
    },
    {
        course_name: 'Estabrook Park',
        holes: 20,
        par: 60,
        established: 2010,
        city: 'Milwaukee',
        state: 'WI',
        zipcode: 53217
    },
    {
        course_name: 'Falcon Ridge',
        holes: 18,
        par: 54,
        established: 2018,
        city: 'Sheboygan Falls',
        state: 'WI',
        zipcode: 53085
    },
    {
        course_name: "Fiddler's Creek Golf Center",
        holes: 23,
        par: 78,
        established: 1999,
        city: 'Hayward',
        state: 'WI',
        zipcode: 54843
    },
    {
        course_name: 'Florence',
        holes: 18,
        par: 63,
        established: 2004,
        city: 'Florence',
        state: 'WI',
        zipcode: 54121
    },
    {
        course_name: 'Fox River Park',
        holes: 18,
        par: 56,
        established: 2010,
        city: 'Silver Lake',
        state: 'WI',
        zipcode: 53170
    },
    {
        course_name: 'Grand Geneva Resort & Spa',
        holes: 18,
        par: 54,
        established: 2015,
        city: 'Lake Geneva',
        state: 'WI',
        zipcode: 53147
    },
    {
        course_name: 'Grignon Park',
        holes: 18,
        par: 54,
        established: 2000,
        city: 'Kaukauna',
        state: 'WI',
        zipcode: 54130
    },
    {
        course_name: 'H.A. Nature Park',
        holes: 18,
        par: 54,
        established: 2005,
        city: 'Plymouth',
        state: 'WI',
        zipcode: 53073
    },
    {
        course_name: 'Half-Moon Lagoon',
        holes: 18,
        par: 54,
        established: 2017,
        city: 'Reedsburg',
        state: 'WI',
        zipcode: 53959
    },
    {
        course_name: 'Hatten Stadium Park',
        holes: 18,
        par: 54,
        established: 2003,
        city: 'New London',
        state: 'WI',
        zipcode: 54961
    },
    {
        course_name: 'Heartwood',
        holes: 24,
        par: 80,
        established: 2011,
        city: 'Trego',
        state: 'WI',
        zipcode: 54888
    },
    {
        course_name: 'Heritage Trails County Park',
        holes: 18,
        par: 58,
        established: 2015,
        city: 'Slinger',
        state: 'WI',
        zipcode: 53086
    },
    {
        course_name: 'Hiestand Park',
        holes: 18,
        par: 54,
        established: 1998,
        city: 'Madison',
        state: 'WI',
        zipcode: 53714
    },
    {
        course_name: 'Highbridge Hills - Blueberry Hill',
        holes: 18,
        par: 62,
        established: 2004,
        city: 'Highbridge',
        state: 'WI',
        zipcode: 54846
    },
    {
        course_name: 'Highbridge Hills - Granite Ridge',
        holes: 18,
        par: 62,
        established: 2004,
        city: 'Highbridge',
        state: 'WI',
        zipcode: 54846
    },
    {
        course_name: 'Highbridge Hills - Highbridge Gold',
        holes: 18,
        par: 65,
        established: 2004,
        city: 'Highbridge',
        state: 'WI',
        zipcode: 54846
    },
    {
        course_name: 'Highbridge Hills - The Bear',
        holes: 18,
        par: 71,
        established: 2006,
        city: 'Highbridge',
        state: 'WI',
        zipcode: 54846
    },
    {
        course_name: 'Highbridge Hills - Woodland Greens',
        holes: 18,
        par: 58,
        established: 2005,
        city: 'Highbridge',
        state: 'WI',
        zipcode: 54846
    },
    {
        course_name: 'Highzer Fields',
        holes: 18,
        par: 54,
        established: 2002,
        city: 'Ixonia',
        state: 'WI',
        zipcode: 53036
    },
    {
        course_name: 'Horicon Phoenix',
        holes: 18,
        par: 59,
        established: 2011,
        city: 'Horicon',
        state: 'WI',
        zipcode: 53032
    },
    {
        course_name: 'Indian Creek Park',
        holes: 18,
        par: 63,
        established: 2007,
        city: 'Manitowoc',
        state: 'WI',
        zipcode: 54220
    },
    {
        course_name: 'Jack Lake',
        holes: 22,
        par: 67,
        established: 2008,
        city: 'Deerbrook',
        state: 'WI',
        zipcode: 54424
    },
    {
        course_name: 'Jaycee Park Quarry',
        holes: 20,
        par: 60,
        established: 1992,
        city: 'Sheboygan',
        state: 'WI',
        zipcode: 53083
    },
    {
        course_name: 'Johnson Park',
        holes: 20,
        par: 60,
        established: 2016,
        city: 'Racine',
        state: 'WI',
        zipcode: 53406
    },
    {
        course_name: 'Justin Trails - Big Brother',
        holes: 18,
        par: 54,
        established: 2007,
        city: 'Sparta',
        state: 'WI',
        zipcode: 54656
    },
    {
        course_name: 'Justin Trails - Classic',
        holes: 18,
        par: 54,
        established: 1998,
        city: 'Sparta',
        state: 'WI',
        zipcode: 54656
    },
    {
        course_name: 'Keyes Peak',
        holes: 18,
        par: 50,
        established: 2014,
        city: 'Florence',
        state: 'WI',
        zipcode: 54121
    },
    {
        course_name: 'Kiekhaefer Park',
        holes: 18,
        par: 55,
        established: 2018,
        city: 'Fond du Lac',
        state: 'WI',
        zipcode: 54937
    },
    {
        course_name: 'Kiwanis',
        holes: 18,
        par: 56,
        established: 2010,
        city: 'Monroe',
        state: 'WI',
        zipcode: 53566
    },
    {
        course_name: 'Krouskop Park',
        holes: 18,
        par: 55,
        established: 2003,
        city: 'Richland Center',
        state: 'WI',
        zipcode: 53581
    },
    {
        course_name: 'Lincoln Park',
        holes: 18,
        par: 54,
        established: 2015,
        city: 'Kenosha',
        state: 'WI',
        zipcode: 53143
    },
    {
        course_name: 'Lower Cato Falls County Park',
        holes: 18,
        par: 54,
        established: 2010,
        city: 'Reedsville',
        state: 'WI',
        zipcode: 54230
    },
    {
        course_name: 'LTC Cleveland',
        holes: 18,
        par: 54,
        established: 2006,
        city: 'Cleveland',
        state: 'WI',
        zipcode: 53015
    },
    {
        course_name: 'Lustig Park',
        holes: 18,
        par: 54,
        established: 2002,
        city: 'Janesville',
        state: 'WI',
        zipcode: 53546
    },
    {
        course_name: "Madman's",
        holes: 18,
        par: 54,
        established: 2011,
        city: 'Owen',
        state: 'WI',
        zipcode: 54460
    },
    {
        course_name: "Mahr's Meadow",
        holes: 18,
        par: 60,
        established: 2007,
        city: 'Stanley',
        state: 'WI',
        zipcode: 54768
    },
    {
        course_name: 'Marinette City Park',
        holes: 19,
        par: 58,
        established: 2008,
        city: 'Marinette',
        state: 'WI',
        zipcode: 54143
    },
    {
        course_name: 'Marshall Middle School',
        holes: 18,
        par: 54,
        established: 2015,
        city: 'Marshall',
        state: 'WI',
        zipcode: 53559
    },
    {
        course_name: 'Mayo Clinic Health System',
        holes: 18,
        par: 54,
        established: 2007,
        city: 'Menomonie',
        state: 'WI',
        zipcode: 54751
    },
    {
        course_name: 'Miniwaukan Park',
        holes: 18,
        par: 54,
        established: 2005,
        city: 'Mukwonago',
        state: 'WI',
        zipcode: 53149
    },
    {
        course_name: "Mont du Lac - Eagle's Peak",
        holes: 24,
        par: 70,
        established: 2009,
        city: 'Superior',
        state: 'WI',
        zipcode: 54880
    },
    {
        course_name: 'Mont du Lac - Hidden Meadows',
        holes: 18,
        par: 59,
        established: 2018,
        city: 'Superior',
        state: 'WI',
        zipcode: 54880
    },
    {
        course_name: 'Mon du Lac - White Cedar',
        holes: 18,
        par: 54,
        established: 2010,
        city: 'Superior',
        state: 'WI',
        zipcode: 54880
    },
    {
        course_name: 'Nokomis Community Park',
        holes: 18,
        par: 36,
        established: null,
        city: 'Nokomis',
        state: 'WI',
        zipcode: 54487
    },
    {
        course_name: 'North Park of Wood County',
        holes: 20,
        par: 78,
        established: 1993,
        city: 'Marshfield',
        state: 'WI',
        zipcode: 54449
    },
    {
        course_name: 'Northland Pines',
        holes: 18,
        par: 59,
        established: 2012,
        city: 'Eagle River',
        state: 'WI',
        zipcode: 54521
    },
    {
        course_name: "O'Hauser Park",
        holes: 18,
        par: 56,
        established: 1992,
        city: 'Menasha',
        state: 'WI',
        zipcode: 54956
    },
    {
        course_name: 'Oaklawn Academy',
        holes: 18,
        par: 54,
        established: 2019,
        city: 'Edgerton',
        state: 'WI',
        zipcode: 53534
    },
    {
        course_name: 'Oakwood Nature Park',
        holes: 18,
        par: 54,
        established: 2013,
        city: 'Fennimore',
        state: 'WI',
        zipcode: 53809
    },
    {
        course_name: 'Omro',
        holes: 18,
        par: 68,
        established: 2011,
        city: 'Omro',
        state: 'WI',
        zipcode: 54963
    },
    {
        course_name: 'Pamperin Park',
        holes: 18,
        par: 54,
        established: 2019,
        city: 'Howard',
        state: 'WI',
        zipcode: 54303
    },
    {
        course_name: 'Parkside Elementary',
        holes: 18,
        par: 54,
        established: 2011,
        city: 'Wautoma',
        state: 'WI',
        zipcode: 54982
    },
    {
        course_name: 'Perkins Park',
        holes: 18,
        par: 54,
        established: 2010,
        city: 'Green Bay',
        state: 'WI',
        zipcode: 54303
    },
    {
        course_name: 'Pettibone Park',
        holes: 27,
        par: 82,
        established: 2013,
        city: 'La Crosse',
        state: 'WI',
        zipcode: 54601
    },
    {
        course_name: 'Phantom Lake YMCA Camp',
        holes: 18,
        par: 54,
        established: 2010,
        city: 'Mukwonago',
        state: 'WI',
        zipcode: 53149
    },
    {
        course_name: 'Pinecrest Park',
        holes: 18,
        par: 54,
        established: 2003,
        city: 'Howard',
        state: 'WI',
        zipcode: 54303
    },
    {
        course_name: 'Plamann Apple Creek',
        holes: 18,
        par: 54,
        established: 1989,
        city: 'Appleton',
        state: 'WI',
        zipcode: 54913
    },
    {
        course_name: 'Pulaski Community Park',
        holes: 18,
        par: 54,
        established: 2012,
        city: 'Pulaski',
        state: 'WI',
        zipcode: 54162
    },
    {
        course_name: 'Red Arrow Park',
        holes: 18,
        par: 54,
        established: 2003,
        city: 'Oshkosh',
        state: 'WI',
        zipcode: 54901
    },
    {
        course_name: 'Riggs Park',
        holes: 18,
        par: 58,
        established: 2009,
        city: 'Ripon',
        state: 'WI',
        zipcode: 54971
    },
    {
        course_name: 'Riverside Park',
        holes: 18,
        par: 54,
        established: 2016,
        city: 'Janesville',
        state: 'WI',
        zipcode: 53548
    },
    {
        course_name: 'Riverside Park',
        holes: 18,
        par: 54,
        established: 2011,
        city: 'West Bend',
        state: 'WI',
        zipcode: 53095
    },
    {
        course_name: 'Road America',
        holes: 18,
        par: 54,
        established: 2017,
        city: 'Elkhart Lake',
        state: 'WI',
        zipcode: 53073
    },
    {
        course_name: 'Rock River',
        holes: 21,
        par: 63,
        established: 2005,
        city: 'Watertown',
        state: 'WI',
        zipcode: 53098
    },
    {
        course_name: "Rohr's Wilderness Tours",
        holes: 18,
        par: 62,
        established: 2016,
        city: 'Conover',
        state: 'WI',
        zipcode: 54519
    },
    {
        course_name: 'Rollin Ridge',
        holes: 18,
        par: 58,
        established: 2011,
        city: 'Reedsville',
        state: 'WI',
        zipcode: 54230
    },
    {
        course_name: 'Rookery Run',
        holes: 18,
        par: 59,
        established: 2018,
        city: 'Rhinelander',
        state: 'WI',
        zipcode: 54501
    },
    {
        course_name: 'Root River Parkway',
        holes: 18,
        par: 54,
        established: 2013,
        city: 'Greendale',
        state: 'WI',
        zipcode: 53129
    },
    {
        course_name: 'Rotary Club',
        holes: 18,
        par: 54,
        established: 2013,
        city: 'Prairie du Chien',
        state: 'WI',
        zipcode: 53821
    },
    {
        course_name: 'Sandy Knoll',
        holes: 18,
        par: 51,
        established: 2017,
        city: 'West Bend',
        state: 'WI',
        zipcode: 53090
    },
    {
        course_name: 'Sandy Point Resort DG Ranch',
        holes: 29,
        par: 87,
        established: 1994,
        city: 'Lac Du Flambeau',
        state: 'WI',
        zipcode: 54538
    },
    {
        course_name: 'Sheboygan County Marsh Park',
        holes: 18,
        par: 54,
        established: 2016,
        city: 'Elkhart Lake',
        state: 'WI',
        zipcode: 53020
    },
    {
        course_name: 'Silver Creek Park',
        holes: 36,
        par: 108,
        established: 2000,
        city: 'Manitowoc',
        state: 'WI',
        zipcode: 54220
    },
    {
        course_name: 'Silver Fox',
        holes: 18,
        par: 60,
        established: 2014,
        city: 'Silver Lake',
        state: 'WI',
        zipcode: 53170
    },
    {
        course_name: 'Somerset',
        holes: 18,
        par: 54,
        established: 2010,
        city: 'Somerset',
        state: 'WI',
        zipcode: 54025
    },
    {
        course_name: 'Standing Rocks',
        holes: 33,
        par: 101,
        established: 2000,
        city: 'Stevens Point',
        state: 'WI',
        zipcode: 54481
    },
    {
        course_name: 'Stoney Creek',
        holes: 18,
        par: 56,
        established: 2011,
        city: 'Fredonia',
        state: 'WI',
        zipcode: 53021
    },
    {
        course_name: 'Sugar Camp',
        holes: 18,
        par: 56,
        established: 2006,
        city: 'Sugar Camp',
        state: 'WI',
        zipcode: 54501
    },
    {
        course_name: 'Sugar Creek County Park',
        holes: 18,
        par: 54,
        established: 2012,
        city: 'Gardner',
        state: 'WI',
        zipcode: 54204
    },
    {
        course_name: 'Superior Municipal Forest',
        holes: 18,
        par: 61,
        established: 2019,
        city: 'Superior',
        state: 'WI',
        zipcode: 54880
    },
    {
        course_name: 'Telemark Resort',
        holes: 24,
        par: 76,
        established: 2006,
        city: 'Cable',
        state: 'WI',
        zipcode: 54821
    },
    {
        course_name: 'Tendick Nature Park',
        holes: 18,
        par: 54,
        established: 2002,
        city: 'Saukville',
        state: 'WI',
        zipcode: 53080
    },
    {
        course_name: 'The Pines',
        holes: 21,
        par: 64,
        established: 2019,
        city: 'Washburn',
        state: 'WI',
        zipcode: 54891
    },
    {
        course_name: 'Timberwolf Run',
        holes: 18,
        par: 54,
        established: null,
        city: 'Wausau',
        state: 'WI',
        zipcode: 54401
    },
    {
        course_name: 'Tjader Acres',
        holes: 20,
        par: 60,
        established: 2015,
        city: 'Siren',
        state: 'WI',
        zipcode: 54872
    },
    {
        course_name: 'Tower Ridge Park - I',
        holes: 18,
        par: 54,
        established: 1996,
        city: 'Eau Claire',
        state: 'WI',
        zipcode: 54703
    },
    {
        course_name: 'Tower Ridge Park - II',
        holes: 18,
        par: 54,
        established: 2008,
        city: 'Eau Claire',
        state: 'WI',
        zipcode: 54703
    },
    {
        course_name: 'Triangle Sports Area',
        holes: 18,
        par: 54,
        established: 1997,
        city: 'Green Bay',
        state: 'WI',
        zipcode: 54301
    },
    {
        course_name: 'Tyrol Basin',
        holes: 18,
        par: 56,
        established: 2019,
        city: 'Mt. Horeb',
        state: 'WI',
        zipcode: 53572
    },
    {
        course_name: 'UW Campus - Parkside',
        holes: 18,
        par: 54,
        established: 1999,
        city: 'Kenosha',
        state: 'WI',
        zipcode: 53144
    },
    {
        course_name: 'UW Campus - The Orchid',
        holes: 2009,
        par: 21,
        established: 63,
        city: 'Kenosha',
        state: 'WI',
        zipcode: 53144
    },
    {
        course_name: 'UW Campus - Platteville',
        holes: 18,
        par: 69,
        established: 1989,
        city: 'Platteville',
        state: 'WI',
        zipcode: 53818
    },
    {
        course_name: 'UW Whitewater - Hoffman Field',
        holes: 18,
        par: 54,
        established: 2004,
        city: 'Whitewater',
        state: 'WI',
        zipcode: 53190
    },
    {
        course_name: 'UW-BC Campus Greens',
        holes: 18,
        par: 68,
        established: 2007,
        city: 'Rice Lake',
        state: 'WI',
        zipcode: 54868
    },
    {
        course_name: 'Vallarte-Ast',
        holes: 27,
        par: 81,
        established: 2001,
        city: 'Deforest',
        state: 'WI',
        zipcode: 53532
    },
    {
        course_name: 'Valley View Park',
        holes: 18,
        par: 54,
        established: 1996,
        city: 'New Berlin',
        state: 'WI',
        zipcode: 53151
    },
    {
        course_name: 'Veteran Hills',
        holes: 18,
        par: 56,
        established: 2015,
        city: 'Viroqua',
        state: 'WI',
        zipcode: 54665
    },
    {
        course_name: 'Village Park',
        holes: 18,
        par: 54,
        established: 2003,
        city: 'Sussex',
        state: 'WI',
        zipcode: 53089
    },
    {
        course_name: 'Vollrath Park',
        holes: 18,
        par: 54,
        established: 1980,
        city: 'Sheboygan',
        state: 'WI',
        zipcode: 53081
    },
    {
        course_name: 'Wakanda Park',
        holes: 18,
        par: 66,
        established: 1999,
        city: 'Menomonie',
        state: 'WI',
        zipcode: 54751
    },
    {
        course_name: 'Wales Community Park',
        holes: 18,
        par: 56,
        established: 2006,
        city: 'Wales',
        state: 'WI',
        zipcode: 53183
    },
    {
        course_name: 'Westfield High School',
        holes: 18,
        par: 54,
        established: 2009,
        city: 'Westfield',
        state: 'WI',
        zipcode: 53964
    },
    {
        course_name: 'White Pine Camp',
        holes: 18,
        par: 63,
        established: 2007,
        city: 'Birchwood',
        state: 'WI',
        zipcode: 54817
    },
    {
        course_name: 'White River',
        holes: 18,
        par: 54,
        established: 2014,
        city: 'Lake Geneva',
        state: 'WI',
        zipcode: 53147
    },
    {
        course_name: 'Wildapple Disc Golf',
        holes: 27,
        par: 86,
        established: 2001,
        city: 'Osseo',
        state: 'WI',
        zipcode: 54758
    },
    {
        course_name: 'Wilderness',
        holes: 18,
        par: 56,
        established: 2017,
        city: 'Montello',
        state: 'WI',
        zipcode: 53949
    },
    {
        course_name: 'Winnebago County Park - Green',
        holes: 18,
        par: 54,
        established: 2007,
        city: 'Oshkosh',
        state: 'WI',
        zipcode: 54901
    },
    {
        course_name: 'Winnebago County Park - Yellow',
        holes: 18,
        par: 56,
        established: 2007,
        city: 'Oshkosh',
        state: 'WI',
        zipcode: 54901
    },
    {
        course_name: 'Winter Park',
        holes: 27,
        par: 81,
        established: 2004,
        city: 'Kewaunee',
        state: 'WI',
        zipcode: 54216
    },
    {
        course_name: 'Yahara Hills',
        holes: 18,
        par: 55,
        established: 2016,
        city: 'Madison',
        state: 'WI',
        zipcode: 53718
    },
    {
        course_name: 'Yulga Park',
        holes: 18,
        par: 54,
        established: 2000,
        city: 'Stevens Point',
        state: 'WI',
        zipcode: 54481
    },
    {
        course_name: 'Zobel Park',
        holes: 18,
        par: 57,
        established: 2010,
        city: 'Green Lake',
        state: 'WI',
        zipcode: 54941
    }
];

const seedCourses = () => Course.bulkCreate(coursedata);

module.exports = seedCourses;
