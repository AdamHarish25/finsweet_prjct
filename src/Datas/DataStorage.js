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


const DataStorage = {
    navbar: {
        menus: [
            {
                title: "Home",
                link: "/"
            },
            {
                title: "About Us",
                link: "/About"
            },
            {
                title: "Features",
                link: "/Features"
            },
            {
                title: "Pricing",
                link: "/Pricing"
            },
            {
                title: "FAQ",
                link: "/Faq"
            },
            {
                title: "Blog",
                link: "/Blog"
            }
        ]
    },

    home: {
        page2List: [
            {
                image: imgh1,
                title: "Strategy",
                description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
            },
            {
                image: imgh2,
                title: "Wireframing",
                description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
            },
            {
                image: imgh3,
                title: "Design",
                description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
            },
            {
                image: imgh4,
                title: "Development",
                description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
            },
        ],
        page3Cards: {
            card1: {
                img: cardh1,
                title: <>
                    Workhub office Webflow <br/>Webflow Design
                </>,
                subtitle: <>
                    Euismod faucibus turpis eu gravida <br/>mi. Pellentesque et velit aliquam
                </>,
                
            },
            card2: {
                img: cardh2,
                title: <>
                    Unisaas Website <br/> Design
                </>
            },
            card3: cardh3
        },
        
        page4Cards: [
            {
                icon: icon1,
                title: "Uses Client First",
                description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
            },
            {
                icon: icon2,
                title: "Two Free Revision Round",
                description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
            },
            {
                icon: icon3,
                title: "Template Customization",
                description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
            },
            {
                icon:  icon4,
                title: "24/7 Support",
                description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
            },
            {
                icon: icon5,
                title: "Quick Delivery",
                description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
            },
            {
                icon: icon6,
                title: "Hands-on approach",
                description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
            }
        ],
        page5Slider: [
            {
                feedback: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
                client: "Jenny Wilson",
                position: "Vice President"
            },
        ]
    },
}

export { DataStorage };