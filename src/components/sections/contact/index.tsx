"use client";

import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";

import IconInstagram from "@/components/icons/icon-instagram";
import IconPhone from "@/components/icons/icon-phone";
import IconMail from "@/components/icons/icon-mail";
import Title from "@/components/ui/title";

import SocialItem from "./social-item";
import Form from "./form";
import React from "react";

const socialItems = [
  {
    id: 1,
    description: "+549-3413626491",
    icon: IconPhone,
  },
  {
    id: 2,
    description: "Lorem impsum dolor sit",
    icon: IconMail,
  },
  {
    id: 3,
    description: "@atenea.incubadora",
    icon: IconInstagram,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="overflow-x-hideen relative flex  items-center justify-center overflow-hidden bg-grayish-light bg-contact-background bg-cover   bg-no-repeat px-2 pb-6 pt-32 lg:min-h-screen lg:px-28 lg:pb-0 lg:pt-[6.125rem]"
    >
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2  lg:gap-0">
        <section className="flex flex-1 flex-col gap-y-12 ">
          <motion.div
            {...configMotion}
            variants={{
              hidden: { opacity: 0, x: -25 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center gap-y-2 lg:items-start"
          >
            <Title className="bg-primary/60 text-4xl">CONTANOS TU IDEA</Title>
          </motion.div>

          <motion.div
            {...configMotion}
            variants={{
              hidden: { opacity: 0, x: -25 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-80 w-auto overflow-y-scroll rounded-xl  lg:w-[28rem] lg:pr-2 "
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/matias-d-/reunion-de-30-minutos-clon?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "600px" }}
            ></div>
          </motion.div>
        </section>

        <section className="flex flex-1 flex-col gap-y-4 lg:items-end ">
          <motion.section
            {...configMotion}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full"
          >
            <Form />
          </motion.section>

          <section className="flex flex-col items-end gap-y-3 ">
            {socialItems.map((social) => (
              <SocialItem key={social.id} id={social.id}>
                <p className="text-sm text-white">{social.description}</p>
                {React.createElement(social.icon)}
              </SocialItem>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
}
