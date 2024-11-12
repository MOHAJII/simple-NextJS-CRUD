import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ahadith = [
  {
    "arrawi": "عن عائشة رضي اللَّه عنها قالَتْ",
    "alhadith": "قالَ رسولُ اللَّهِ ﷺ: الَّذِي يَقْرَأُ القُرْآنَ وَهُو ماهِرٌ بِهِ معَ السَّفَرةِ الكِرَامِ البَرَرَةِ، وَالَّذِي يقرَأُ القُرْآنَ ويَتَتَعْتَعُ فِيهِ وَهُو عليهِ شَاقٌّ لَهُ أَجْران",
    "assiha": "متفقٌ عَلَيْهِ"
  },
  {
    "arrawi": "عَنْ أَبي الدَّرْداءِ، ، قَال: سمِعْتُ رَسُول اللَّهِ ﷺ، يقولُ",
    "alhadith": "",
    "assiha": "متفقٌ عَلَيْهِ"
  },
  
]


export function DisplayAhadith() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-[600px]"
    >
      <CarouselContent className="-mt-1 h-[250px] ">
        {ahadith.map((hadith, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2 text-lg">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-lg text-red-950"> <span className="font-semibold text-slate-800">{hadith.arrawi}:</span > "{hadith.alhadith} "<span className="text-sm font-bold text-slate-800"> {hadith.assiha}</span></span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}