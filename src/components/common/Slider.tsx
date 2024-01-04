import { NextIntlClientProvider, useMessages } from "next-intl";

import { Slide } from "@/layouts/Home";
import SliderClient from "@/components/common/SliderClient";

type SliderProps = {
  slides: Slide[];
};

export default function Slider({ slides }: SliderProps) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SliderClient slides={slides} />
    </NextIntlClientProvider>
  );
}
