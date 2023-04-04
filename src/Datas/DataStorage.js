import imgh1 from '../Attachments/Images/list/one.png';
import imgh2 from '../Attachments/Images/list/two.png';
import imgh3 from '../Attachments/Images/list/three.png';
import imgh4 from '../Attachments/Images/list/four.png';

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
        ]
    },
}

export { DataStorage };