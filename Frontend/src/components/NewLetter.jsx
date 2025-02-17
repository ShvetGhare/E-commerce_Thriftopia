import React from "react";

const NewLetter = () => {
  const onSubmit = (event) => {
    event.preventdefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Register now & get a chance to get your product 20% off
      </p>
      <p className="text-gray-400 mt-3">bla bla bla</p>
      <form
        action=""
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full flex-1 outline-none"
          type="email"
          placeholder="Enter your Email"
          required
        />
        <button
          type="submit"
          onSubmit={onSubmit}
          className="bg-black text-white text-xs px-10 py-4"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default NewLetter;
