"use client";
import { cn } from "@/functions";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import JSConfetti from "js-confetti";
import Script from "next/script";

type LoadingState = {
  text: string;
};

const PaymentSection = ({
  loadingStates,
  value = 0,
}: {
  loadingStates: LoadingState[];
  value?: number;
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    payment: false,
    status: "pending",
    tags: [],
    createdAt: new Date().toISOString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSuccess = (response: any) => {
    console.log(response);
  };

  const onError = (error: any) => {
    console.log(error);
    // Handle error appropriately - you might want to show an error message to the user
  };

  const handlePayment = useCallback(async () => {
    try {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: parseInt(loadingStates[0].amount) * 100,
        currency: "USD",
        name: "Patientsat.ai",
        description: `Plan Subscription`,
        handler: async function (response: any) {
          const docRef = await addDoc(collection(db, "orders"), formData);
          try {
            await setDoc(
              doc(db, "orders", docRef.id),
              {
                user: formData.email,
                amount: loadingStates[0].amount,
                paymentId: response.razorpay_payment_id,
                status: "completed",
                createdAt: new Date().toISOString(),
                payment: true,
              },
              { merge: true }
            );

            onSuccess(response);
          } catch (error) {
            console.error("Payment recording error:", error);
            onError(error);
          }
        },
        prefill: {
          name: formData.firstName,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          user: formData.firstName || "",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation error:", error);
      onError(error);
    }
  }, [formData, onSuccess, onError]);

  return (
    <div className="flex relative justify-start max-w-xl mx-auto flex-col">
      {" "}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setIsReady(true)}
      />
      {loadingStates.map((loadingState, index) => {
        return (
          <motion.div className={cn("text-left flex gap-2 mb-4")}>
            <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
              {showSuccess ? (
                <>
                  <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-700  text-center font-black">
                    Thanks for contacting Patientsat.ai
                  </h1>
                  <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Our team will get back to you within 24 hours.
                  </p>
                </>
              ) : (
                <div>
                  <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Welcome to Patientsat.ai
                  </h2>
                  <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Empower your healthcare journey with PatientSat.ai—where
                    seamless patient feedback meets actionable insights for
                    better care. 🚀
                  </p>

                  <form
                    className="my-8 z-[9999999999]"
                    onSubmit={handlePayment}
                  >
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mb-4"
                      required
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mb-4"
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mb-4"
                      required
                    />
                    <Input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mb-4"
                      required
                    />
                    {/* <Input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="mb-4"
                      required
                    /> */}
                    <button
                      className="bg-gradient-to-br mt-10 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                      type="submit"
                      disabled={!isReady}
                    >
                      Submit &rarr;
                    </button>
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const LoaderCore = ({
  loadingStates,
  value = 0,
}: {
  loadingStates: LoadingState[];
  value?: number;
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "forms"), {
        ...formData,
        timestamp: new Date(),
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
      });

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="flex relative justify-start max-w-xl mx-auto flex-col">
      {loadingStates.map((loadingState, index) => {
        return (
          <motion.div className={cn("text-left flex gap-2 mb-4")} key={index}>
            {loadingState.text === "payment" ? (
              <PaymentSection value={0} loadingStates={loadingStates} />
            ) : (
              <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                {showSuccess ? (
                  <>
                    <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-700  text-center font-black">
                      Thanks for contacting Patientsat.ai
                    </h1>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                      Our team will get back to you within 24 hours.
                    </p>
                  </>
                ) : (
                  <div>
                    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                      Welcome to Patientsat.ai
                    </h2>
                    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                      Empower your healthcare journey with PatientSat.ai—where
                      seamless patient feedback meets actionable insights for
                      better care. 🚀
                    </p>

                    <form
                      className="my-8 z-[9999999999]"
                      onSubmit={handleSubmit}
                    >
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mb-4"
                        required
                      />
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mb-4"
                        required
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mb-4"
                        required
                      />
                      <Input
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="mb-4"
                        required
                      />
                      <Input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="mb-4"
                        required
                      />
                      <button
                        className="bg-gradient-to-br mt-10 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                      >
                        Submit &rarr;
                      </button>
                      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    </form>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 2000,
  loop = true,
}: {
  loadingStates: LoadingState[];
  loading?: boolean;
  duration?: number;
  loop?: boolean;
}) => {
  const [currentState, setCurrentState] = useState(0);
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl z-[9999999]"
        >
          <div className="relative">
            <LoaderCore value={currentState} loadingStates={loadingStates} />
          </div>

          {/* <div className="bg-gradient-to-t inset-x-0 -z-1 bottom-0 bg-white dark:bg-black h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]" /> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
