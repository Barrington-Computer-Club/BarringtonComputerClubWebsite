import type { Presentation } from "@/content/config";
import { useState } from "react";
import {Dialog, DialogTrigger} from "@/components/ui/dialog"
import { DialogContent } from "./ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";


export default function (props: {presentation: Presentation, slug: string}) {
  const {presentation, slug} = props

  const [showPopup, setShow] = useState(false)

  return <>
    <Dialog>
      <DialogTrigger>
        <div className="bg-primary-foreground p-5 shadow-sm border-[1px] rounded-lg flex flex-row gap-7 md:hover:scale-[101%] transition-all group">
          <img src={presentation.image} className="md:w-32 w-16 inset-0"/>
          <div className="flex flex-col items-start">
            <h3>{presentation.title}</h3>
            <p className="md:text-2xl mb-1">{presentation.presentationDate?.toDateString()}</p>
            <p className="md:text-lg text-xs text-start"><i>{presentation.description}</i></p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <h2>{presentation.title}</h2>
        <Badge variant="outline" className="w-32">{presentation.presentationDate?.toDateString()}</Badge>
        <p>{presentation.description}</p>
        {presentation.background && <><h3>Background</h3>
        <p>{presentation.background}</p></>
        }

        (more info coming soon)
      </DialogContent>
    </Dialog>
  </>
}
