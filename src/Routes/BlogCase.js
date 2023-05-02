

const BlogCase = ({data}) => {
    const className = {
      container: "w-screen h-auto pt-40 pb-20 px-28 space-y-20 text-dark-blue",
      header: "space-y-12",
      headerTitleBox: "space-y-4 text-center",
      headerTitle: "text-4xl font-semibold",
      headerSubtitle: "font-medium",
      img: "w-full",
      content: "space-y-10 w-full px-10",
      paragraph: "space-y-8 ",
      title: "font-semibold text-4xl",
      subtitle: "opacity-70",
      list: "list-disc opacity-70 space-y-4 px-5"
    };

    return (
      <div className={className.container}>
        <div className={className.header}>
          <div className={className.headerTitleBox}>
            <h1 className={className.headerTitle}>
                {data.headerTitle}
            </h1>
            <p className={className.headerSubtitle}>
              {data.DateAndWriter}  
            </p>
          </div>

          <img className={className.img} src={data.img1} alt="header img"/>
        </div>

        <div className={className.content}>
            <div className={className.paragraph}>
                <h1 className={className.title}>
                    {data.title1}
                </h1>

                <p className={className.subtitle}>
                    {data.subtitle1}
                </p>
            </div>

            <div className={className.paragraph}>
                <h1 className={className.title}>
                    {data.title2}
                </h1>

                <p className={className.subtitle}>
                    {data.subtitle2_1}
                </p>

                <ul className={className.list}>
                    {data.list.map((data2, index) => (
                        <li key={index}>
                            {data2.content}
                        </li>
                    ))}
                </ul>

                <p className={className.subtitle}>
                    {data.subtitle2_2}
                </p>

                <img src={data.img2} alt="content img" className={className.img}/>
            </div>

            <div className={className.paragraph}>
                <h1 className={className.title}>
                    {data.title3}
                </h1>

                <p className={className.subtitle}>
                    {data.subtitle3}
                </p>
            </div>
        </div>
      </div>
    );
}

export default BlogCase;