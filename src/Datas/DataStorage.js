//This is all images and Icons that listed and used for the list based datas

import imgh1 from "../Attachments/Images/Home/list/one.png";
import imgh2 from "../Attachments/Images/Home/list/two.png";
import imgh3 from "../Attachments/Images/Home/list/three.png";
import imgh4 from "../Attachments/Images/Home/list/four.png";

import cardh1 from "../Attachments/Images/Home/card/Card1.png";
import cardh2 from "../Attachments/Images/Home/card/Card2.png";
import cardh3 from "../Attachments/Images/Home/card/Card3.png";

import icon1 from "../Attachments/Images/CardIcons/Icon-1.svg";
import icon2 from "../Attachments/Images/CardIcons/Icon-2.svg";
import icon3 from "../Attachments/Images/CardIcons/Icon-3.svg";
import icon4 from "../Attachments/Images/CardIcons/Icon-4.svg";
import icon5 from "../Attachments/Images/CardIcons/Icon-5.svg";
import icon6 from "../Attachments/Images/CardIcons/Icon-6.svg";

import person1 from "../Attachments/Images/Home/personList/person1.jpg";
import person2 from "../Attachments/Images/Home/personList/person2.jpg";
import person3 from "../Attachments/Images/Home/personList/person3.jpg";

import blogCard1 from "../Attachments/Images/Home/blogCard/card1.png";
import blogCard2 from "../Attachments/Images/Home/blogCard/card2.png";
import blogCard3 from "../Attachments/Images/Home/blogCard/card3.png";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import StepbarVector from "../Attachments/Images/StepBar.svg";

import Logo1 from "../Attachments/Images/Logo/Logo1.png";
import Logo2 from "../Attachments/Images/Logo/Logo2.png";
import Logo3 from "../Attachments/Images/Logo/Logo3.png";
import Logo4 from "../Attachments/Images/Logo/Logo4.png";
import Logo5 from "../Attachments/Images/Logo/Logo5.png";

import team1 from "../Attachments/Images/About/team/team1.png";
import team2 from "../Attachments/Images/About/team/team2.png";
import team3 from "../Attachments/Images/About/team/team3.png";
import team4 from "../Attachments/Images/About/team/team4.png";

import activePointer from "../Attachments/Images/Pricing/Pointer.svg";
import unactivePointer from "../Attachments/Images/Pricing/PointerGrey.svg";

import FeatureI1 from "../Attachments/Images/Features/FeatureI1.png";
import FeatureI2 from "../Attachments/Images/Features/FeatureI2.png";
import FeatureI3 from "../Attachments/Images/Features/FeatureI3.png";
import FeatureI4 from "../Attachments/Images/Features/FeatureI4.png";

import Desktop from '../Attachments/Images/MobileWarning/Desktop.svg';
import Mobile from "../Attachments/Images/MobileWarning/Mobile.svg";

import BlogI1 from '../Attachments/Images/Blog/gridImages/img1.svg';
import BlogI2 from "../Attachments/Images/Blog/gridImages/img2.svg";
import BlogI3 from "../Attachments/Images/Blog/gridImages/img3.svg";
import BlogI4 from "../Attachments/Images/Blog/gridImages/img4.svg";
import BlogI5 from "../Attachments/Images/Blog/gridImages/img5.svg";
import BlogI6 from "../Attachments/Images/Blog/gridImages/img6.svg";

import BlogCase from "../Attachments/Images/Blog/blogCase.svg";

import PortImg1 from "../Attachments/Images/Work/portfolioCards/PortImg1.svg";
import PortImg2 from "../Attachments/Images/Work/portfolioCards/PortImg2.svg";
import PortImg3 from "../Attachments/Images/Work/portfolioCards/PortImg3.svg";
import PortImg4 from "../Attachments/Images/Work/portfolioCards/PortImg4.svg";
import PortImg5 from "../Attachments/Images/Work/portfolioCards/PortImg5.svg";
import PortImg6 from "../Attachments/Images/Work/portfolioCards/PortImg6.svg";

import WorkCase from "../Attachments/Images/Work/portfolioCards/Port1/img1.png";

const DataStorage = {
  //You can change all the datas here (exception "non"list data)

  //Tips: use Ctrl+F to search everylisting Data here

  //listing

  navbar: {
    menus: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About Us",
        link: "/About",
      },
      {
        title: "Features",
        link: "/Features",
      },
      {
        title: "Pricing",
        link: "/Pricing",
      },
      {
        title: "Works",
        link: "/Work",
      },
      {
        title: "Blog",
        link: "/Blog",
      },
    ],
  },

  footer: {
    socmedLinks: [
      {
        icon: <FaFacebook />,
        link: "https://facebook.com",
      },
      {
        icon: <FaTwitter />,
        link: "https://Twitter.com",
      },
      {
        icon: <FaInstagram />,
        link: "https://Instagram.com",
      },
      {
        icon: <FaLinkedin />,
        link: "https://Linkedin.com",
      },
    ],
  },

  bottomBar: {
    menus: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About Us",
        link: "/About",
      },
      {
        title: "Features",
        link: "/Features",
      },
      {
        title: "Pricing",
        link: "/Pricing",
      },
      {
        title: "Works",
        link: "/Work",
      },
      {
        title: "Blog",
        link: "/Blog",
      },
    ],
  },

  home: {
    page2List: [
      {
        image: imgh1,
        title: "Strategy",
        description:
          "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
      },
      {
        image: imgh2,
        title: "Wireframing",
        description:
          "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
      },
      {
        image: imgh3,
        title: "Design",
        description:
          "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
      },
      {
        image: imgh4,
        title: "Development",
        description:
          "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
      },
    ],
    page3Cards: {
      card1: {
        img: cardh1,
        title: (
          <>
            Workhub office Webflow <br />
            Webflow Design
          </>
        ),
        subtitle: (
          <>
            Euismod faucibus turpis eu gravida <br />
            mi. Pellentesque et velit aliquam
          </>
        ),
      },
      card2: {
        img: cardh2,
        title: (
          <>
            Unisaas Website <br /> Design
          </>
        ),
      },
      card3: cardh3,
    },

    page4Cards: [
      {
        icon: icon1,
        title: "Uses Client First",
        description:
          "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
      },
      {
        icon: icon2,
        title: "Two Free Revision Round",
        description:
          "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
      },
      {
        icon: icon3,
        title: "Template Customization",
        description:
          "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
      },
      {
        icon: icon4,
        title: "24/7 Support",
        description:
          "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
      },
      {
        icon: icon5,
        title: "Quick Delivery",
        description:
          "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
      },
      {
        icon: icon6,
        title: "Hands-on approach",
        description:
          "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
      },
    ],
    page5Slider: [
      {
        feedback:
          '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
        client: "Jenny Wilson",
        photo: person1,
        position: "Vice President",
      },
      {
        feedback:
          '"I’ve been through much agencies and this one yet is the best for me!"',
        client: "Sammy Smith",
        photo: person2,
        position: "Head of Secretary",
      },
      {
        feedback: `"Well I guess I cannot judge anything by it's cover, because this agency is really nice in the results!"`,
        client: "Tara Youth",
        photo: person3,
        position: "Finance Manager",
      },
    ],

    page6Accordion: [
      {
        question: "How much time does it take?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "What is your class naming convention?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "How do you communicate?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "I have a bigger project. Can you handle it?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "What is your class naming convention?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],

    page7CardList: [
      {
        title:
          "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        subtitle:
          "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        link: "/Blog/page1",
        image: blogCard1,
        datePosted: "21 Jan 2019",
      },
      {
        title:
          "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        subtitle:
          "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        link: "/Blog/page2",
        image: blogCard2,
        datePosted: "19 Sep 2021",
      },
      {
        title:
          "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        subtitle:
          "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        link: "/Blog/page3",
        image: blogCard3,
        datePosted: "23 Mar 2023",
      },
    ],
  },
  about: {
    page3Stepbar: [
      {
        title: "Planning",
        subtitle: (
          <>
            Lorem ipsum dolor sit amet,
            <br /> consetetur sadipscing elitr.
          </>
        ),
        img: StepbarVector,
      },
      {
        title: "Conception",
        subtitle: (
          <>
            Lorem ipsum dolor sit amet,
            <br /> consetetur sadipscing elitr.
          </>
        ),
        img: StepbarVector,
      },
      {
        title: "Design",
        subtitle: (
          <>
            Lorem ipsum dolor sit amet,
            <br /> consetetur sadipscing elitr.
          </>
        ),
        img: StepbarVector,
      },
      {
        title: "Development",
        subtitle: (
          <>
            Lorem ipsum dolor sit amet,
            <br /> consetetur sadipscing elitr.
          </>
        ),
        img: StepbarVector,
      },
    ],
    page5Cards: [
      {
        icon: icon6,
        title: "Customize with ease",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
      },
      {
        icon: icon3,
        title: "Perfectly Responsive",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
      },
      {
        icon: icon1,
        title: "Friendly Support",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
      },
    ],
    page5Logos: [
      {
        img: Logo1,
        alt: "Logo 1",
      },
      {
        img: Logo2,
        alt: "Logo 2",
      },
      {
        img: Logo3,
        alt: "Logo 3",
      },
      {
        img: Logo4,
        alt: "Logo 4",
      },
      {
        img: Logo5,
        alt: "Logo 5",
      },
    ],

    page6Teams: [
      {
        name: "John Smith",
        position: "CEO",
        img: team1,
      },
      {
        name: "Simon Adams",
        position: "CTO",
        img: team2,
      },
      {
        name: "Paul Jones",
        position: "Design Lead",
        img: team3,
      },
      {
        name: "Sara Hardin",
        position: "Project Manager",
        img: team4,
      },
    ],
  },

  pricing: {
    page1Cards: [
      {
        title: "Landing Page",
        textColor: "",
        subtitle: "When you’re ready to go beyond prototyping in Figma, ",
        price: "$299",
        background: "bg-pearl-gray",
        type: "Per Design",
        typeColor: "text-royal-blue",
        buttonText: "Get started",
        buttonColor: "bg-dark-blue text-white",
        buttonLink: "/Work",
        benefits: [
          {
            title: "All limited links",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Own analytics platform",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Chat support",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Optimize hashtags",
            icon: unactivePointer,
            visibility: "opacity-70",
          },
          {
            title: "Unlimited users",
            icon: unactivePointer,
            visibility: "opacity-70",
          },
        ],
      },
      {
        title: "Website Page",
        textColor: "text-white",
        subtitle:
          "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
        price: "$399",
        background: "bg-solid-dark-blue",
        type: "Multi Design",
        typeColor: "text-bright-creamy",
        buttonText: "Get started",
        buttonColor: "bg-bright-creamy text-dark-blue",
        buttonLink: "/Work",
        benefits: [
          {
            title: "All limited links",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Own analytics platform",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Chat support",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Optimize hashtags",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Unlimited users",
            icon: activePointer,
            visibility: "",
          },
        ],
      },
      {
        title: "Complex Project",
        textColor: "",
        subtitle: "When you’re ready to go beyond prototyping in Figma, ",
        price: "$499+",
        background: "bg-pearl-gray",
        type: "Per Design",
        typeColor: "text-royal-blue",
        buttonText: "Contact Us",
        buttonColor: "bg-dark-blue text-white",
        buttonLink: "/Contact",
        benefits: [
          {
            title: "All limited links",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Own analytics platform",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Chat support",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Optimize hashtags",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Unlimited users",
            icon: activePointer,
            visibility: "",
          },
          {
            title: "Assist and Help",
            icon: activePointer,
            visibility: "",
          },
        ],
      },
    ],

    page2Accordion: [
      {
        question: "How much time does it take?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "What is your class naming convention?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "How do you communicate?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "I have a bigger project. Can you handle it?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "What is your class naming convention?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },

  feature: {
    page2Logos: [
      {
        img: Logo1,
        alt: "Logo 1",
      },
      {
        img: Logo2,
        alt: "Logo 2",
      },
      {
        img: Logo3,
        alt: "Logo 3",
      },
      {
        img: Logo4,
        alt: "Logo 4",
      },
      {
        img: Logo5,
        alt: "Logo 5",
      },
    ],

    page2Cards: [
      {
        icon: icon6,
        title: "Customize with ease",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
      },
      {
        icon: icon3,
        title: "Perfectly Responsive",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
      },
      {
        icon: icon1,
        title: "Friendly Support",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
      },
    ],

    page3Paragraphs: [
      {
        header1: "Use Client-first",
        title1:
          "Top agencies and freelancers around the world use Client-first",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        img1: FeatureI1,

        header2: "Free Revision Rounds",
        title2: "Get free Revisions and one week of free maintenance",
        subtitle2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        img2: FeatureI2,
        bgColor2: "bg-pale-blue",
      },
      {
        header1: "24/7 Support",
        title1: "Working with us, you will be getting 24/7 priority support",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        img1: FeatureI3,

        header2: "Quick Delivery",
        title2: "Guranteed 1 week delivery for standard five pager website",
        subtitle2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        img2: FeatureI4,
        bgColor2: "bg-pale-creamy",
      },
    ],

    page4Accordion: [
      {
        question: "How much time does it take?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "What is your class naming convention?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "How do you communicate?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "I have a bigger project. Can you handle it?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "What is your class naming convention?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },

  work: {
    socmedLinks: [
      {
        icon: <FaFacebook />,
        link: "https://facebook.com",
      },
      {
        icon: <FaTwitter />,
        link: "https://Twitter.com",
      },
      {
        icon: <FaInstagram />,
        link: "https://Instagram.com",
      },
      {
        icon: <FaLinkedin />,
        link: "https://Linkedin.com",
      },
    ],
    page2filterList: [
      {
        title: "All",
        filter: "",
      },
      {
        title: "UI Design",
        filter: "#UI",
      },
      {
        title: "Webflow Design",
        filter: "#Webflow",
      },
      {
        title: "Figma Design",
        filter: "#Figma",
      },
    ],

    page2PortfolioCards: [
      {
        title: "Template 1",
        id: 1,
        img: PortImg1,
        subtitle:
          "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        buttonText: "View Portfolio",
        tag: "#Webflow",
      },

      {
        title: "Template 2",
        id: 2,
        img: PortImg2,
        subtitle:
          "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        buttonText: "View Portfolio",
        tag: "#Webflow",
      },

      {
        title: "Template 3",
        id: 3,
        img: PortImg3,
        subtitle:
          "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        buttonText: "Read Case Study",
        tag: "#UI",
      },

      {
        title: "Template 4",
        id: 4,
        img: PortImg4,
        subtitle:
          "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        buttonText: "Read Case Study",
        tag: "#UI",
      },

      {
        title: "Template 5",
        id: 5,
        img: PortImg5,
        subtitle:
          "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        buttonText: "Read Case Study",
        tag: "#Figma",
      },

      {
        title: "Template 6",
        id: 6,
        img: PortImg6,
        subtitle:
          "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        buttonText: "Read Case Study",
        tag: "#Figma",
      },
    ],
  },

  blog: [
    {
      date: "27 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      img: BlogI1,
      subtitle:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
      id: "1",
    },
    {
      date: "27 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      img: BlogI2,
      subtitle:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
      id: "2",
    },
    {
      date: "27 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      img: BlogI3,
      subtitle:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
      id: "3",
    },
    {
      date: "27 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      img: BlogI4,
      subtitle:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
      id: "4",
    },
    {
      date: "27 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      img: BlogI5,
      subtitle:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
      id: "5",
    },
    {
      date: "27 Jan 2021",
      title:
        "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      img: BlogI6,
      subtitle:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
      id: "6",
    },
  ],

  mobileWarning: [
    {
      title: "Supported Devices",
      img: Desktop,
    },
    {
      title: "Unsupported Devices",
      img: Mobile,
    },
  ],

  //Tips: use Ctrl+F to search every case Data here

  //casing: WorkCase & BlogCase

  workCase: [
    {
      case: {
        headerSect: "Web design and development",
        headerTitle: "Finsweet Design case studies",
        headerSubtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        img1: PortImg1,

        clientName: "facebook.com",
        clientServiceChoice: "Product Design",
        clientDelivery: "UI Screens, UX Flow & Prototype",

        title1: "About the project",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list1: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        img2: WorkCase,

        title2: "How we do it",
        subtitle2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list2: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        keywordList: [
          {
            keyword: "Design",
          },
          {
            keyword: "UI/UX",
          },
          {
            keyword: "Wireframing",
          },
          {
            keyword: "Branding",
          },
          {
            keyword: "Development",
          },
          {
            keyword: "Webflow",
          },
        ],
      },
    },
    {
      case: {
        headerSect: "Web design and development",
        headerTitle: "Finsweet Design case studies",
        headerSubtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        img1: PortImg2,

        clientName: "facebook.com",
        clientServiceChoice: "Product Design",
        clientDelivery: "UI Screens, UX Flow & Prototype",

        title1: "About the project",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list1: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        img2: WorkCase,

        title2: "How we do it",
        subtitle2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list2: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        keywordList: [
          {
            keyword: "Design",
          },
          {
            keyword: "UI/UX",
          },
          {
            keyword: "Wireframing",
          },
          {
            keyword: "Branding",
          },
          {
            keyword: "Development",
          },
          {
            keyword: "Webflow",
          },
        ],
      },
    },
    {
      case: {
        headerSect: "Web design and development",
        headerTitle: "Finsweet Design case studies",
        headerSubtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        img1: PortImg3,

        clientName: "facebook.com",
        clientServiceChoice: "Product Design",
        clientDelivery: "UI Screens, UX Flow & Prototype",

        title1: "About the project",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list1: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        img2: WorkCase,

        title2: "How we do it",
        subtitle2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list2: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        keywordList: [
          {
            keyword: "Design",
          },
          {
            keyword: "UI/UX",
          },
          {
            keyword: "Wireframing",
          },
          {
            keyword: "Branding",
          },
          {
            keyword: "Development",
          },
          {
            keyword: "Webflow",
          },
        ],
      },
    },
    {
      case: {
        headerSect: "Web design and development",
        headerTitle: "Finsweet Design case studies",
        headerSubtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        img1: PortImg4,

        clientName: "facebook.com",
        clientServiceChoice: "Product Design",
        clientDelivery: "UI Screens, UX Flow & Prototype",

        title1: "About the project",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list1: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        img2: WorkCase,

        title2: "How we do it",
        subtitle2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list2: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        keywordList: [
          {
            keyword: "Design",
          },
          {
            keyword: "UI/UX",
          },
          {
            keyword: "Wireframing",
          },
          {
            keyword: "Branding",
          },
          {
            keyword: "Development",
          },
          {
            keyword: "Webflow",
          },
        ],
      },
    },
    {
      case: {
        headerSect: "Web design and development",
        headerTitle: "Finsweet Design case studies",
        headerSubtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        img1: PortImg5,

        clientName: "facebook.com",
        clientServiceChoice: "Product Design",
        clientDelivery: "UI Screens, UX Flow & Prototype",

        title1: "About the project",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list1: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        img2: WorkCase,

        title2: "How we do it",
        subtitle2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list2: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        keywordList: [
          {
            keyword: "Design",
          },
          {
            keyword: "UI/UX",
          },
          {
            keyword: "Wireframing",
          },
          {
            keyword: "Branding",
          },
          {
            keyword: "Development",
          },
          {
            keyword: "Webflow",
          },
        ],
      },
    },
    {
      case: {
        headerSect: "Web design and development",
        headerTitle: "Finsweet Design case studies",
        headerSubtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        img1: PortImg6,

        clientName: "facebook.com",
        clientServiceChoice: "Product Design",
        clientDelivery: "UI Screens, UX Flow & Prototype",

        title1: "About the project",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list1: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        img2: WorkCase,

        title2: "How we do it",
        subtitle2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list2: [
          {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            content:
              "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          },
          {
            content:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse",
          },
          {
            content:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          },
        ],
        keywordList: [
          {
            keyword: "Design",
          },
          {
            keyword: "UI/UX",
          },
          {
            keyword: "Wireframing",
          },
          {
            keyword: "Branding",
          },
          {
            keyword: "Development",
          },
          {
            keyword: "Webflow",
          },
        ],
      },
    },
  ],

  blogCase: [
    {
      case: {
        headerTitle:
          "A UX Case Study on Creating a Studious Environment for Students",
        DateAndWriter: `Andrew Jonson posted on 27th January 2021`,
        img1: BlogI1,
        title1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        title2: "Ut enim ad minim veniam, quis nostrud.",
        subtitle2_1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list: [
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
        ],
        subtitle2_2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        img2: BlogCase,
        title3: "Ut enim ad minim veniam, quis nostrud.",
        subtitle3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },

    {
      case: {
        headerTitle:
          "A UX Case Study on Creating a Studious Environment for Students",
        DateAndWriter: `Andrew Jonson posted on 27th January 2021`,
        img1: BlogI2,
        title1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        title2: "Ut enim ad minim veniam, quis nostrud.",
        subtitle2_1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list: [
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
        ],
        subtitle2_2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        img2: BlogCase,
        title3: "Ut enim ad minim veniam, quis nostrud.",
        subtitle3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },

    {
      case: {
        headerTitle:
          "A UX Case Study on Creating a Studious Environment for Students",
        DateAndWriter: `Andrew Jonson posted on 27th January 2021`,
        img1: BlogI3,
        title1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        title2: "Ut enim ad minim veniam, quis nostrud.",
        subtitle2_1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list: [
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
        ],
        subtitle2_2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        img2: BlogCase,
        title3: "Ut enim ad minim veniam, quis nostrud.",
        subtitle3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },

    {
      case: {
        headerTitle:
          "A UX Case Study on Creating a Studious Environment for Students",
        DateAndWriter: `Andrew Jonson posted on 27th January 2021`,
        img1: BlogI4,
        title1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        title2: "Ut enim ad minim veniam, quis nostrud.",
        subtitle2_1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list: [
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
        ],
        subtitle2_2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        img2: BlogCase,
        title3: "Ut enim ad minim veniam, quis nostrud.",
        subtitle3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },

    {
      case: {
        headerTitle:
          "A UX Case Study on Creating a Studious Environment for Students",
        DateAndWriter: `Andrew Jonson posted on 27th January 2021`,
        img1: BlogI5,
        title1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        title2: "Ut enim ad minim veniam, quis nostrud.",
        subtitle2_1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list: [
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
        ],
        subtitle2_2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        img2: BlogCase,
        title3: "Ut enim ad minim veniam, quis nostrud.",
        subtitle3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },

    {
      case: {
        headerTitle:
          "A UX Case Study on Creating a Studious Environment for Students",
        DateAndWriter: `Andrew Jonson posted on 27th January 2021`,
        img1: BlogI6,
        title1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subtitle1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        title2: "Ut enim ad minim veniam, quis nostrud.",
        subtitle2_1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list: [
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
          {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
          },
        ],
        subtitle2_2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        img2: BlogCase,
        title3: "Ut enim ad minim veniam, quis nostrud.",
        subtitle3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
  ],
};

export { DataStorage };
