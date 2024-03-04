"use client";
import React, { useState, useRef, createRef } from "react";
import { Field, Formik, Form } from "formik";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoAdd, IoPencil, IoCloseOutline } from "react-icons/io5";
import { toast } from "sonner";
import { cn, createCasinoSchema } from "@/lib";
import { geo, languages, products } from "@/data";
import { useAddData } from "@/hooks";
import { CustomSelect, Button } from "@/components/ui";
import { mutate } from "swr";

const CasinoForm = ({ setShow }) => {
  const [isEditing, setIsEditing] = useState(false);
  const refs = useRef([...Array(4)].map(() => createRef()));

  const addCasino = useAddData("/api/casino");

  const defaultValues = {
    allowedIPs: ["", "", "", ""],
    amount: "",
    companyName: "",
    deals: "",
    domainName: "",
    language: "",
    license: "",
    listOfIPs: "",
    geo: [],
    products: [],
  };

  const onSubmit = async (values) => {
    try {
      const allowedIPsArray = values.listOfIPs
        .split(",")
        .map((ip) => ip.trim());

      const data = {
        name: values.companyName,
        domain: values.domainName,
        // license: values.license,
        // deal: values.deals,
        // blockedGEOs: values.geo,
        // allowedIPs: allowedIPsArray,
        // products: values.products,
      };

      mutate("/api/casino");
      await addCasino(data);
      toast.success("Casino has been created");
      setShow(false);
    } catch (error) {
      toast.error(error);
      console.error("Error adding casino:", error);
    }
  };

  const handleAddIP = (values, setValues) => {
    const updatedListOfIPs = values.allowedIPs
      .filter((ip) => ip.trim() !== "")
      .join(".");
    const appendedListOfIPs = values.listOfIPs
      ? `${values.listOfIPs}, ${updatedListOfIPs}`
      : updatedListOfIPs;
    setValues({
      ...values,
      allowedIPs: ["", "", "", ""],
      listOfIPs: appendedListOfIPs,
    });

    if (refs.current[0].current) {
      refs.current[0].current.focus();
    }
  };

  const areAllowedIPsEmpty = (values) => {
    return values.allowedIPs.every((ip) => ip.trim() === "");
  };

  const handleInput = (e, index) => {
    const { value } = e.target;
    const newValue = value.replace(/[^0-9]/g, "");
    refs.current[index].current.value = newValue;
    if (newValue.length === 3 && index < 3 && refs.current[index + 1].current) {
      refs.current[index + 1].current.focus();
    }
  };

  return (
    <div className="relative flex gap-12 bg-primary bg-opacity-20 px-6 py-3 text-xs text-black dark:bg-lightGray dark:text-white">
      <span
        className="absolute right-1 top-0 cursor-pointer"
        onClick={() => setShow(false)}
      >
        <button className="mt-1 flex items-center rounded-md bg-red px-1 py-0.5 text-white">
          <IoCloseOutline size={15} />
        </button>
      </span>

      <Formik
        initialValues={defaultValues}
        validationSchema={createCasinoSchema}
        onSubmit={onSubmit}
      >
        {({ values, setValues, errors, touched }) => (
          <Form className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="companyName">Company Name</label>
              <Field
                id="companyName"
                name="companyName"
                className={cn(
                  "rounded-md bg-primary px-2 py-2.5 text-white outline-none dark:bg-stroke",
                  errors.companyName && "outline outline-1 outline-red",
                )}
              />
              {errors.companyName && touched.companyName && (
                <span className="text-red">{errors.companyName}</span>
              )}
              <label htmlFor="domainName">Domain Name</label>
              <Field
                id="domainName"
                name="domainName"
                className={cn(
                  "rounded-md bg-primary px-2 py-2.5 text-white outline-none dark:bg-stroke",
                  errors.domainName && "outline outline-1 outline-red",
                )}
              />
              {errors.domainName && touched.domainName && (
                <span className="text-red">{errors.domainName}</span>
              )}
              <label htmlFor="license">License</label>
              <Field
                id="license"
                name="license"
                className={cn(
                  "rounded-md bg-primary px-2 py-2.5 text-white outline-none dark:bg-stroke",
                  errors.license && "outline outline-1 outline-red",
                )}
              />
              {errors.license && touched.license && (
                <span className="text-red">{errors.license}</span>
              )}
            </div>
            <div className="flex flex-col gap-3 text-white ">
              <div
                className={cn(
                  "flex flex-col gap-3 rounded-md bg-primary p-2 dark:bg-stroke",
                  (errors.deals || errors.amount) &&
                    "outline outline-1 outline-red",
                )}
              >
                <span>Deals</span>
                <div
                  role="group"
                  aria-labelledby="my-radio-group"
                  className="grid grid-cols-2 gap-2"
                >
                  <label className="relative cursor-pointer">
                    <Field
                      type="radio"
                      name="deals"
                      value="Flat"
                      className="peer sr-only"
                    />
                    <span className="flex rounded-md p-2 outline outline-1 peer-checked:dark:bg-primary">
                      Flat
                    </span>
                    <span className="absolute right-1 top-1 z-10 opacity-0 transition-all peer-checked:opacity-100">
                      <IoCheckmarkCircleOutline size={22} />
                    </span>
                  </label>
                  <label className="relative cursor-pointer">
                    <Field
                      type="radio"
                      name="deals"
                      value="Rev. Share"
                      className="peer sr-only"
                    />
                    <span className="flex rounded-md p-2 outline outline-1 peer-checked:dark:bg-primary">
                      Rev. Share
                    </span>
                    <span className="absolute right-1 top-1 z-10 opacity-0 transition-all peer-checked:opacity-100">
                      <IoCheckmarkCircleOutline size={22} />
                    </span>
                  </label>
                  {errors.deals && touched.deals && (
                    <span className="text-red">{errors.deals}</span>
                  )}
                </div>
                <Field
                  name="amount"
                  placeholder="Amount..."
                  className="rounded-md bg-secondary px-2 py-2.5 text-white outline-none placeholder:text-white dark:bg-dark"
                />
                {errors.amount && touched.amount && (
                  <span className="text-red">{errors.amount}</span>
                )}
              </div>
              <label className="text-black dark:text-white">Languages</label>
              <Field
                className={
                  errors.language && "rounded-md outline outline-1 outline-red"
                }
                name="language"
                options={languages}
                component={CustomSelect}
                placeholder="Select a language..."
                isMulti={false}
              />
              {errors.language && touched.language && (
                <span className="text-red">{errors.language}</span>
              )}
              <label className="text-black dark:text-white">
                Blocked GEO(s)
              </label>
              <Field
                className={
                  errors.geo && "rounded-md outline outline-1 outline-red"
                }
                name="geo"
                options={geo}
                component={CustomSelect}
                placeholder="Select a country..."
                isMulti={true}
              />
              {errors.geo && touched.geo && (
                <span className="text-red">{errors.geo}</span>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <div className="item flex flex-col gap-1">
                <span>Allowed IPS</span>
                <div className="flex gap-2">
                  {values.allowedIPs.map((ip, index) => (
                    <Field
                      key={index}
                      name={`allowedIPs[${index}]`}
                      type="text"
                      maxLength={3}
                      onInput={(e) => handleInput(e, index)}
                      innerRef={refs.current[index]}
                      className="w-15 rounded-md bg-primary p-3 text-white outline-none dark:bg-stroke"
                    />
                  ))}
                  <div className="flex items-center">
                    <span
                      className={cn(
                        "flex cursor-pointer items-center rounded-full bg-primary p-1 text-white",
                        areAllowedIPsEmpty(values) ? "opacity-50" : "",
                      )}
                      onClick={() => {
                        if (!areAllowedIPsEmpty(values)) {
                          handleAddIP(values, setValues);
                        }
                      }}
                    >
                      <IoAdd size={25} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span>List of IPS</span>
                <div className="flex items-center gap-2">
                  <Field
                    as="textarea"
                    name="listOfIPs"
                    value={values.listOfIPs}
                    readOnly={!isEditing}
                    className={cn(
                      `h-40 w-full resize-none rounded-md border border-primary bg-transparent p-2 text-lg text-black outline-none dark:border-stroke dark:text-white`,
                      isEditing ? "" : "cursor-not-allowed",
                      errors.listOfIPs && "outline outline-1 outline-red",
                    )}
                  />
                  <span
                    className="flex cursor-pointer items-center justify-center rounded-md bg-primary p-2 text-white"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <IoPencil size={15} />
                  </span>
                </div>
                {errors.listOfIPs && touched.listOfIPs && (
                  <span className="text-red">{errors.listOfIPs}</span>
                )}
              </div>
            </div>
            <div className="flex w-full flex-col gap-1">
              <span>Products</span>
              <div
                className={cn(
                  "mb-5 flex flex-col gap-2 rounded-md bg-primary px-4 py-2 text-white dark:bg-stroke",
                  errors.products && "outline outline-1 outline-red",
                )}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-md border-none bg-secondary p-3 placeholder:text-white focus:border-none focus:outline-none dark:bg-dark"
                />

                <div
                  role="group"
                  aria-labelledby="my-radio-group"
                  className="grid grid-cols-3 flex-wrap gap-2"
                >
                  {products.map((product, index) => (
                    <label className="relative cursor-pointer" key={index}>
                      <Field
                        type="checkbox"
                        name="products"
                        value={product.value}
                        className="peer sr-only"
                      />
                      <span className="flex rounded-md p-2 outline outline-1 peer-checked:bg-secondary peer-checked:dark:bg-primary">
                        {product.value}
                      </span>
                      {/* <span className="absolute right-1 top-1 z-10 opacity-0 transition-all peer-checked:opacity-100">
                        <IoCheckmarkCircleOutline size={22} />
                      </span> */}
                    </label>
                  ))}
                </div>
                {errors.products && touched.products && (
                  <span className="text-red">{errors.products}</span>
                )}
              </div>
              <Button label="Submit" className="justify-center" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CasinoForm;
