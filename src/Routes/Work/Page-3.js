

const WorkP_3 = () => {

    const className = {
      container:
        "w-full p-20 flex flex-col justify-center items-center gap-7 text-dark-blue text-center",
      title: "font-semibold text-4xl",
      button: "px-10 py-4 text-bluish-black bg-bright-creamy rounded-full hover:font-semibold hover:py-6 hover:px-12 transition-all duration-300",
      subtitle: "opacity-70 text-sm",
    };


    return (
      <div className={className.container}>
        <h1 className={className.title}>
          Let's build something great <br />
          together
        </h1>
        <p className={className.subtitle}>
          Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
          ultricies <br/>nec dolor sit amet, scelerisque cursus purus.
        </p>
        <button className={className.button}>
            Contact Us
        </button>
      </div>
    );

}

export default WorkP_3;