"use client";

import React, { useCallback, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { usePriceStore } from "@/store/usePriceStore";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import Script from "next/script";
import { useRouter } from "next/navigation";
import IntegrationsShowcase from "@/components/Integrations/Integration";
import AIAgentProfile from "@/components/Agents/AgentPage";

const SarahPage = () => {
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
    <>
      <AIAgentProfile />
    </>
  );
};

export default SarahPage;
