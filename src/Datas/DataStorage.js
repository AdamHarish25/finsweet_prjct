import imgh1 from '../Attachments/Images/list/one.png';
import imgh2 from '../Attachments/Images/list/two.png';
import imgh3 from '../Attachments/Images/list/three.png';
import imgh4 from '../Attachments/Images/list/four.png';
import cardh1 from '../Attachments/Images/Card1.png'
import cardh2 from '../Attachments/Images/Card2.png'
import cardh3 from '../Attachments/Images/Card3.png'

import icon1 from '../Attachments/Images/CardIcons/Icon-1.svg';
import icon2 from '../Attachments/Images/CardIcons/Icon-2.svg';
import icon3 from '../Attachments/Images/CardIcons/Icon-3.svg';
import icon4 from '../Attachments/Images/CardIcons/Icon-4.svg';
import icon5 from '../Attachments/Images/CardIcons/Icon-5.svg';
import icon6 from '../Attachments/Images/CardIcons/Icon-6.svg';

import person1 from '../Attachments/Images/person1.jpg';
import person2 from '../Attachments/Images/person2.jpg';
import person3 from '../Attachments/Images/person3.jpg';

import blogCard1 from '../Attachments/Images/blogCard/card1.png';
import blogCard2 from "../Attachments/Images/blogCard/card2.png";
import blogCard3 from "../Attachments/Images/blogCard/card3.png";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const DataStorage = {
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
        title: "FAQ",
        link: "/Faq",
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
        link: "/post1",
        image: blogCard1,
        datePosted: "21 Jan 2019",
      },
      {
        title:
          "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        subtitle:
          "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        link: "/post2",
        image: blogCard2,
        datePosted: "19 Sep 2021",
      },
      {
        title:
          "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        subtitle:
          "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        link: "/post3",
        image: blogCard3,
        datePosted: "23 Mar 2023",
      },
    ],
  },
};

export { DataStorage };