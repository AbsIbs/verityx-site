"use client";
import { Input, Textarea } from "@nextui-org/react";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-20">
      {/* 1st Row */}
      <div className="flex gap-12">
        <Input
          style={{ color: "white" }}
          classNames={{ inputWrapper: ["group-data-[focus=true]:after:w-0"] }}
          type="text"
          variant={"underlined"}
          label="First Name"
          isRequired
        />
        <Input
          style={{ color: "white" }}
          classNames={{ inputWrapper: ["group-data-[focus=true]:after:w-0"] }}
          type="text"
          variant={"underlined"}
          label="Last Name"
          isRequired
        />
      </div>
      {/* 2nd Row */}
      <div className="flex gap-12">
        <Input
          style={{ color: "white" }}
          classNames={{ inputWrapper: ["group-data-[focus=true]:after:w-0"] }}
          type="email"
          variant={"underlined"}
          label="Email"
          isRequired
        />
        <Input
          style={{ color: "white" }}
          classNames={{ inputWrapper: ["group-data-[focus=true]:after:w-0"] }}
          type="text"
          variant={"underlined"}
          label="Company"
        />
      </div>
      {/* 3rd Row */}
      <Input
        style={{ color: "white" }}
        classNames={{ inputWrapper: ["group-data-[focus=true]:after:w-0"] }}
        type="text"
        variant={"underlined"}
        label="Subject"
      />
      {/* 4th Row */}
      <Textarea
        style={{ color: "white" }}
        classNames={{
          inputWrapper: ["group-data-[focus=true]:after:w-0 p-0 m-0"],
        }}
        variant={"underlined"}
        placeholder="What would you like to discuss?"
      />
      {/* Submit button */}
      <button className="py-3 px-6 text-on-bg bg-primary rounded w-fit self-end">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
