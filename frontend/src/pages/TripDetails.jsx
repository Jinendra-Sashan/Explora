import PreviousButton from "../components/PreviousButton/PreviousButton";

const TripDetails = () => {
  return (
    <div className=" fixed left-0 top-0 z-0 h-screen w-screen bg-white bg-cover bg-center dark:bg-black">
      <PreviousButton></PreviousButton>
      <img
        src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Trip Image"
        className="h-screen w-full object-cover"
      />
      <h1 className=" heading-animate absolute top-45 left-7 py-10 px-3 bottom-16 text-white font-primary font-semibold text-9xl">Bali, Indonesia</h1>
      <h2 className=" subheading-animate absolute top-45 left-9 py-10 px-3 bottom-2 font-primary text-gray-100 font-semibold text-4xl">Started On February 2024</h2>
    </div>
  );
};

export default TripDetails;
