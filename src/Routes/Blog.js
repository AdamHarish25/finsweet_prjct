/* eslint-disable */

import BlogP_1 from "./Blog/Page-1";
import BlogP_2 from "./Blog/Page-2";

const Blog = () => {

    const className = {
        container: "w-screen h-auto pt-36 pb-20 px-28 font-Poppins space-y-20"
    }

    return (
        <div className={className.container}>
            <BlogP_1 />
            <BlogP_2/>
        </div>
    )
};

export default Blog;
