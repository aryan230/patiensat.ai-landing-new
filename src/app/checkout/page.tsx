"use client";

import React, { useCallback, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { usePriceStore } from "@/store/usePriceStore";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import Script from "next/script";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const { price, plan: mainPlan } = usePriceStore();
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

  const onSuccess = (response: any) => {
    router.push("/checkout/success");
  };

  const onError = (error: any) => {
    console.error("Payment error:", error);
    // Handle error appropriately - you might want to show an error message to the user
  };

  const handlePayment = useCallback(async () => {
    try {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: price * 100,
        currency: "USD",
        name: "Patientsat.ai",
        description: `${mainPlan} Plan Subscription`,
        handler: async function (response: any) {
          const docRef = await addDoc(collection(db, "orders"), formData);
          try {
            await setDoc(
              doc(db, "orders", docRef.id),
              {
                user: formData.email,
                amount: price,
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
  }, [price, formData, onSuccess, onError]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white p-6 pt-32">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setIsReady(true)}
      />
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:space-x-16">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-[#032c4c] mb-3">
              Checkout
            </h1>
            {/* <p className="text-gray-500 mb-8">
              A checkout is a counter where you pay for things you are buying
            </p> */}

            <div className="space-y- pt-10">
              <div>
                <h2 className="text-sm font-medium text-[#032c4c] mb-6">
                  1. Contact information
                </h2>
                <div className="space-y-6">
                  {/* Name fields in a grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-500">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#345e7b] focus:ring-1 focus:ring-[#345e7b] outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-500">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#345e7b] focus:ring-1 focus:ring-[#345e7b] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email field full width */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#345e7b] focus:ring-1 focus:ring-[#345e7b] outline-none transition-all"
                    />
                  </div>

                  {/* Phone field full width */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#345e7b] focus:ring-1 focus:ring-[#345e7b] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:w-[400px] mt-8 lg:mt-0">
            <div className="bg-gray-50 rounded-lg p-6">
              {/* <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-[#032c4c]">
                  36 items
                </h2>
              </div> */}

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    ${Math.floor(price / 0.25)}.00
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium text-red-500">
                    -${Math.floor(price / 0.25) - price} (75%)
                  </span>
                </div>

                <div className="pt-4 border-t flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#032c4c]">
                    Total
                  </span>
                  <span className="text-2xl font-semibold text-[#032c4c]">
                    ${price}.00
                  </span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={!isReady}
                className="w-full bg-[#032c4c] hover:bg-[#345e7b] text-white py-4 rounded-lg mt-6 transition-colors duration-200"
              >
                Pay →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
