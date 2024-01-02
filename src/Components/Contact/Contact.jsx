import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-center text-3xl font-bold ">Contact with Us</h2>
        <div className="flex flex-col md:flex-row border justify-center gap-48 px-6 py-4 my-8 rounded-md">
          <div className="">
            <h2 className="text-2xl font-bold">Car Medix.Ltd</h2>
            <p>
              <strong>Mail :</strong> Car@Medix.com
            </p>
            <p>
              <strong>Phone : </strong>+8801xxxxxxxx
            </p>
            <p>
              <strong>Address : </strong>Dhanmondi, Dhaka.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium my-2">
              Leave your message here..
            </h2>
            <input
              type="text"
              className="border outline-none px-4 py-3 rounded-lg"
              placeholder="Your message"
            />
            <button className="btn btn-neutral ml-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
