const Contact = () => {
  const className = {
    container:
      "w-screen h-auto px-20 py-40 flex flex-col gap-7 justify-center items-center font-Poppins",
    paragraphBox: "text-dark-blue space-y-4 text-center",
    form: "space-y-6 p-10 bg-[#F4F6FC] w-full rounded-xl",
    inputsBox: "w-full grid grid-cols-2 gap-7",
    formInput:
      "w-full outline-none border-[#0000001F] border-2 rounded-lg py-4 px-8 placeholder-black focus:border-blue-300 bg-[#F4F6FC]",
    inputBox: "space-y-2 ",
    inputName: "font-medium",
    formButton: "px-10 py-5 bg-dark-blue text-white rounded-full hover:shadow-lg hover:font-semibold transform duration-100",
  };

  return (
    <div className={className.container}>
      <div className={className.paragraphBox}>
        <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <form className={className.form}>
        <div className={className.inputsBox}>
          <div className={className.inputBox}>
            <h1 className={className.inputName}>Name</h1>
            <input
              type="text"
              placeholder="Enter your name"
              className={className.formInput}
            />
          </div>

          <div className={className.inputBox}>
            <h1 className={className.inputName}>Email</h1>
            <input
              type="email"
              placeholder="Enter your email"
              className={className.formInput}
            />
          </div>
        </div>

        <div className={className.inputsBox}>
          <div className={className.inputBox}>
            <h1 className={className.inputName}>Object</h1>
            <input
              type="text"
              placeholder="Provide context"
              className={className.formInput}
            />
          </div>

          <div className={className.inputBox}>
            <h1 className={className.inputName}>Subject</h1>
            <input
              type="text"
              placeholder="Select Subject"
              className={className.formInput}
            />
          </div>
        </div>

        <div className={className.inputBox}>
          <h1 className={className.inputName}>Message</h1>
          <textarea
            className={`${className.formInput} h-[150px] resize-none`}
            placeholder="Write your question here"
          ></textarea>
        </div>

        <button type="submit" className={className.formButton}>
            Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
