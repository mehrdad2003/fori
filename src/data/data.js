import{FaFacebook,FaBehance,FaLinkedin,FaTwitter} from 'react-icons/fa'
import React  from 'react';
import mag1 from '../images/mag1.jpg'
import mag2 from '../images/mag2.jpg'
import h1 from '../images/h1.jpg'
import h2 from '../images/h2.jpg'
import h3 from '../images/h3.jpg'
import h4 from '../images/h4.jpg'
import h5 from '../images/h5.jpg'
import h6 from '../images/h6.jpg'
import v1 from '../images/v1.jpg'
import v2 from '../images/v2.jpg'
import v3 from '../images/v3.jpg'
import v4 from '../images/v4.jpg'
import v5 from '../images/v5.jpg'
import v6 from '../images/v6.jpg'
import v7 from '../images/v7.jpg'
import v8 from '../images/v8.jpg'
import v9 from '../images/v9.jpg'
import v10 from '../images/v10.jpg'
import v11 from '../images/v11.jpg'
import v12 from '../images/v12.jpg'
import icon0 from '../images/icon0.PNG'
import icon1 from '../images/icon1.PNG'
import icon2 from '../images/icon2.PNG'
import icon3 from '../images/icon3.PNG'
import icon4 from '../images/icon4.PNG'
import f1 from '../images/f1.jpg'
import f2 from '../images/f2.jpg'
import f3 from '../images/f3.jpg'
import f4 from '../images/f4.jpg'
import cs1 from '../images/cs1.jpg'
import cs2 from '../images/cs2.jpg'
import cs3 from '../images/cs3.jpg'
import cs4 from '../images/cs4.jpg'
import cs5 from '../images/cs5.jpg'
import cs6 from '../images/cs6.jpg'
import maz1 from '../images/mag1.PNG'
import maz2 from '../images/mag2.PNG'
import maz3 from '../images/mag3.PNG'
import maz4 from '../images/mag4.PNG'
import maz5 from '../images/mag5.PNG'
import maz6 from '../images/mag6.PNG'
export const nav1=[
    {
        id:1,
        name:'سامانه فوری ثبت',
        url:'/'
    },
    {
        id:2,
        name:'ثبت انواع آگهی',
        url:'#',
        links:[{
          title:'آگهی مفقودی',
          url:'#'
        },{
          title:'افراد گمشده',
          url:'#'
        },{
          title:'ثبت وتغییرات شرکت ها',
          url:'#'
        },{
          title:'ابلاغ رای',
          url:'#'
        },{
          title:'مجمع شرکت ها',
          url:'#'
        },{
          title:'حصروراث',
          url:'#'
        },{
          title:'آگهی مفقودی',
          url:'#'
        },{
          title:'مناسبتی',
          url:'#'
        },{
          title:'مناقصه',
          url:'#'
        },
    {
          title:'مزایده',
          url:'#'
        }]
    },
    {
        id:3,
        name:'آگهی های شما',
        url:'#',
        links:[
            {
                title:'آخرین وضعیت آگهی مفقودی',
                url:'#'
            },
             {
                title:'آخرین وضعیت آگهی مفقودی',
                url:'#'
            },
             {
                title:'آخرین وضعیت آگهی مفقودی',
                url:'#'
            },
        ]
    }
    ,
    {
        id:4,
        name:'تسویه آنلاین',
        url:'#'
    },
    {
        id:5,
        name:'سوالات متداول',
        url:'#'
    },
    {
        id:6,
        name:'درباره ما',
        url:'#'
    },
    {
        id:7,
        name:'مقالات تخصصی',
        url:'#'
    },
    {
        id:8,
        name:'ورود نمایندگی',
        url:'#'
    },
    {
        id:9,
        name:'پذیرش نمایندگی',
        url:'#'
    }
]
export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.behance.com',
    icon: <FaBehance />,
  },
];

export const banerImage=[
  {
    id:1,
    name:'روزنامه',
    image:mag1,
    big:'ثبت آنلاین انواع آگهی در روزنامه های کشور',
    small:'ثبت هوشمند آگهی های قانونی تجاری وشخصی',
    btn:'ثبت آگهی'
  },
  {
    id:2,
    name:'مفقودی',
    image:mag2,
    big:'آیا مدارکتان به سرقت رفته وگم کرده اید؟',
    small:'راهکارهای قانونی ثبت انواع آگهی',
    btn:'مشاهده مقالات تخصصی'
  }

]
export const khadamat1Data=[
  {
    id:1,
    title:'آگهی مفقودی مدارک هویتی',
    image:h1,
    text:'شــناســـنامه، کــارت ملــی هــــــوشــمند ، گـــــــذرنامه، مـــــــدارک شـــناسایی و …',
    price:'هر کادر 55000تومان'
  },
   {
    id:2,
    title:'آگهی مفقودی مدارک خودرو',
    image:h2,
    text:'شــناســـنامه، کــارت ملــی هــــــوشــمند ، گـــــــذرنامه، مـــــــدارک شـــناسایی و …',
    price:'هر کادر 55000تومان'
  },
   {
    id:3,
    title:'آگهی مفقودی مدارک تحصیلی',
    image:h3,
    text:'شــناســـنامه، کــارت ملــی هــــــوشــمند ، گـــــــذرنامه، مـــــــدارک شـــناسایی و …',
    price:'هر کادر 55000تومان'
  },
   {
    id:4,
    title:'آگهی های دادگستری',
    image:h4,
    text:'شــناســـنامه، کــارت ملــی هــــــوشــمند ، گـــــــذرنامه، مـــــــدارک شـــناسایی و …',
    price:'هر کادر 55000تومان'
  },
   {
    id:5,
    title:'آگهی های ثبتی',
    image:h5,
    text:'شــناســـنامه، کــارت ملــی هــــــوشــمند ، گـــــــذرنامه، مـــــــدارک شـــناسایی و …',
    price:'هر کادر 55000تومان'
  },
  {
    id:6,
    title:'پیشنهاد طلایی',
    image:h6,
    text:'شــناســـنامه، کــارت ملــی هــــــوشــمند ، گـــــــذرنامه، مـــــــدارک شـــناسایی و …',
    price:'هر کادر 80000هزارتومان'
  }
]
export const maghData=[
  {
    id:1,
    text:'گم شدن کارت ملی',
    image:v1
  },
   {
    id:2,
    text:'گم شدن کارت ملی',
    image:v2
  },
   {
    id:3,
    text:'گم شدن کارت ملی',
    image:v3
  },
   {
    id:4,
    text:'گم شدن کارت ملی',
    image:v4
  },
   {
    id:5,
    text:'گم شدن کارت ملی',
    image:v5
  },
   {
    id:6,
    text:'گم شدن کارت ملی',
    image:v6
  },
   {
    id:7,
    text:'گم شدن کارت ملی',
    image:v7
  },
   {
    id:8,
    text:'گم شدن کارت ملی',
    image:v8
  },
   {
    id:9,
    text:'گم شدن کارت ملی',
    image:v9
  },
   {
    id:10,
    text:'گم شدن کارت ملی',
    image:v10
  },
   {
    id:11,
    text:'گم شدن کارت ملی',
    image:v11
  },
   {
    id:12,
    text:'گم شدن کارت ملی',
    image:v12
  },
]
export const kolData=[
  {
    id:1,
    image:icon0,
    text:'وضعیت سفارش',
    header:'1رهگیری روزنامه های ارسال شده برای مشتریان',
    matn:'از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین وضعیت مرسوله حاوی روزنامه آگهی مفقودی، مطلع شوید.',
    btn:'ورود به بخش رهگیری مرسولات'
  },
   {
    id:2,
    image:icon1,
    text:'مدارک پیدا شده',
    header:'2رهگیری روزنامه های ارسال شده برای مشتریان',
    matn:'نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین وضعیت    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و   سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگا پس عزیز به صورت رایگان ارسال می   شوید.',
      btn:'ورود به بخش رهگیری مرسولات'
  },
  {
    id:3,
    image:icon2,
    text:'مدارک پیدا شده',
    header:'3رهگیری روزنامه های ارسال شده برای مشتریان',
    matn:'نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین وضعیت    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و   سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگا پس عزیز به صورت رایگان ارسال می   شوید.',
      btn:'ورود به بخش رهگیری مرسولات'
  },
  {
    id:4,
    image:icon3,
    text:'مدارک پیدا شده',
    header:'4رهگیری روزنامه های ارسال شده برای مشتریان',
    matn:'نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین وضعیت    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و   سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگان ارسال می گردد. شما می توانید با جستجوی کد رهگیری مرسوله خود، آن را کپی و با ورود به سامانه رهگیری مرسولات پستی از آخرین و    سپس آگهی نموده و از آتگهاس خود مشاهده نمایید در این مرجله می توانید نسخ روزنامه پس از چاپ آگهی­ های مفقودی از طریق سرویس پیشتاز شرکت ملی پست برای مشتریان عزیز به صورت رایگا پس عزیز به صورت رایگان ارسال می   شوید.',
      btn:'ورود به بخش رهگیری مرسولات'
  },
  {
    id:5,
    image:icon4,
    text:'سوالات متداول',
    data:[
      {id:1,
      title:'صدور المثنی مدارک مفقودی خودرو چه مراحلی دارد؟ ومدارک مورد نیاز مربوطه چگونه است؟',
      ans:' گذاشتن برای خرید موارد متعددی از سو استفاده از مدارک واسناد رخ داده است در زیر برخی ذکر کی شود: گرو'
      },
       {id:2,
      title:'صدور المثنی مدارک مفقودی خودرو چه مراحلی دارد؟ ومدارک مورد نیاز مربوطه چگونه است؟',
      ans:' گذاشتن برای خرید موارد متعددی از سو استفاده از مدارک واسناد رخ داده است در زیر برخی ذکر کی شود: گرو'
      },
       {id:3,
      title:'صدور المثنی مدارک مفقودی خودرو چه مراحلی دارد؟ ومدارک مورد نیاز مربوطه چگونه است؟',
      ans:' گذاشتن برای خرید موارد متعددی از سو استفاده از مدارک واسناد رخ داده است در زیر برخی ذکر کی شود: گرو'
      },
       {id:4,
      title:'صدور المثنی مدارک مفقودی خودرو چه مراحلی دارد؟ ومدارک مورد نیاز مربوطه چگونه است؟',
      ans:' گذاشتن برای خرید موارد متعددی از سو استفاده از مدارک واسناد رخ داده است در زیر برخی ذکر کی شود: گرو'
      },
       {id:5,
      title:'صدور المثنی مدارک مفقودی خودرو چه مراحلی دارد؟ ومدارک مورد نیاز مربوطه چگونه است؟',
      ans:' گذاشتن برای خرید موارد متعددی از سو استفاده از مدارک واسناد رخ داده است در زیر برخی ذکر کی شود: گرو'
      },
       {id:6,
      title:'صدور المثنی مدارک مفقودی خودرو چه مراحلی دارد؟ ومدارک مورد نیاز مربوطه چگونه است؟',
      ans:' گذاشتن برای خرید موارد متعددی از سو استفاده از مدارک واسناد رخ داده است در زیر برخی ذکر کی شود: گرو'
      },
       {id:7,
      title:'صدور المثنی مدارک مفقودی خودرو چه مراحلی دارد؟ ومدارک مورد نیاز مربوطه چگونه است؟',
      ans:' گذاشتن برای خرید موارد متعددی از سو استفاده از مدارک واسناد رخ داده است در زیر برخی ذکر کی شود: گرو'
      },
       {id:8,
      title:'صدور المثنی مدارک مفقودی خودرو چه مراحلی دارد؟ ومدارک مورد نیاز مربوطه چگونه است؟',
      ans:' گذاشتن برای خرید موارد متعددی از سو استفاده از مدارک واسناد رخ داده است در زیر برخی ذکر کی شود: گرو'
      },
       {id:9,
      title:'صدور المثنی مدارک مفقودی خودرو چه مراحلی دارد؟ ومدارک مورد نیاز مربوطه چگونه است؟',
      ans:' گذاشتن برای خرید موارد متعددی از سو استفاده از مدارک واسناد رخ داده است در زیر برخی ذکر کی شود: گرو'
      },
    ]
  },
]
export const foundData=[
  {
    id:1,
    title:'مدرکی را پیدا کردم',
    image:f1
  },
   {
    id:2,
    title:'افراد گمشده',
    image:f2
  },
   {
    id:3,
    title:'پست یافته',
    image:f3
  },
   {
    id:4,
    title:'مدارک پیدا شده',
    image:f4
  },
]
export const nemoneData=[
  {id:1,
  image:cs1,
  text:'نمونه'
  },
  {id:2,
  image:cs2,
  text:'نمونه'
  },
  {id:3,
  image:cs3,
  text:'نمونه'
  },
  {id:4,
  image:cs4,
  text:'نمونه'
  },
  {id:5,
  image:cs5,
  text:'نمونه'
  },
  {id:6,
  image:cs6,
  text:'نمونه'
  },

]
export const magazine=[
  {
    id:1,
    image:maz1
  },
   {
    id:2,
    image:maz2
  },
   {
    id:3,
    image:maz3
  },
   {
    id:4,
    image:maz4
  },
   {
    id:5,
    image:maz5
  },
   {
    id:6,
    image:maz6
  },
]
export const sarii=[
  {id:1,
 title:'1آدرس :',
  },
   {id:2,
 title:'2آدرس :',
  },
   {id:3,
 title:'3آدرس :',
  },
   {id:4,
 title:'4آدرس :',
  },
]
export const pay=[
  {
    id:1,
    title:'> پیگیری چاپ'
  },
   {
    id:2,
    title:'> پیگیری چاپ'
  },
   {
    id:3,
    title:'> پیگیری چاپ'
  },
   {
    id:4,
    title:'> پیگیری چاپ'
  },
]
