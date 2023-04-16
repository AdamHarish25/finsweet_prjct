import FaqAccordion from '../../Components/Accordion/FaqAccordion';
import { DataStorage }
    from '../../Datas/DataStorage';

const HomeP_6 = () => {
    const className = {
        container: "w-screen h-auto p-20 flex items-center justify-between gap-10",
        header: "space-y-5 text-start w-[300px] 2xl:w-[500px]",
        accordionBox: "px-10"
    }

    var Data = DataStorage.home.page6Accordion

    return (
        <div className={className.container}>
            <div className={className.header}>
                <h1 className="text-3xl 2xl:text-5xl font-semibold">
                    Frequently <br/>asked questions
                </h1>
                <p className="text-[#2405F2] text-lg font-medium">
                    Contact us for more info
                </p>
            </div>
            <div className={ className.accordionBox }>
                <FaqAccordion faqs={ Data } />
            </div>
        </div>
    )
};

export default HomeP_6