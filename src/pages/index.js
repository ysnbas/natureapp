import React from "react";
import LandingPage from "./landingPage";
import HeadLayout from "@/layouts/headLayout";

export default function Index() {
  return (
    <HeadLayout
      title="Homepage"
    >
      <LandingPage />
    </HeadLayout>
  );
}
