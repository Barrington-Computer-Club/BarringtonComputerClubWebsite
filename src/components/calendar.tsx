import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Button } from "./ui/button";
import {AiOutlineCaretLeft, AiOutlineCaretRight} from 'react-icons/ai'
import { getCollection, getEntry } from 'astro:content';

const posts = await getCollection('presentations')

export default function() {

  const date = new Date()
  const [month, setMonth] = useState(date.getMonth())
  date.setMonth(month)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const today = new Date()

  const dates = []
  for (let i = 0; i < 7*5; i++) {
    const tmpDate = new Date(date)
    tmpDate.setDate(1)
    tmpDate.setDate( -tmpDate.getDay() + 3 + i ) // Set the first iteration to the first a monday

    const isNotDate = tmpDate.getDate() !== i + 1
    dates.push(<div key={i} className={ (tmpDate.toLocaleDateString() === today.toLocaleDateString() ? "border-secondary-foreground rounded-md " : "") + "border-[1px] p-4" }>
      {i <= 7 ? <p className="text-xs -mt-2">{days.at(tmpDate.getDay() - 1)}</p> : null}
      {<p className={isNotDate ?  "text-gray-400" : ""}> {tmpDate.getDate()}</p>}
      <div className="flex flex-col gap-1">
        {posts
          .filter(p => p.data.presentationDate && p.data.presentationDate?.toLocaleDateString() === tmpDate.toLocaleDateString())
          .map(p => <Event key={i} title={p.data.title} description={p.data.description} />)
        }
      </div>
    </div>)
  }

  return <div className="w-8/12 mx-auto">
    <div className="flex rounded-lg border-secondary border-[1px] flex-row w-min px-3 mb-3 gap-2 items-center">
      <AiOutlineCaretLeft onClick={() => setMonth(month-1)} />
      <h4 className="w-24 text-center">{months[date.getMonth()]}</h4>
      <AiOutlineCaretRight onClick={() => setMonth(month+1)} />
    </div>

    <div className="bg-secondary rounded-2xl h-[680px] overflow-hidden shadow-md">
      <div className="grid grid-cols-7 grid-rows-5 h-[103%] w-[101%] -ml-[.2%] -mt-[0.5%]">
        {dates}
      </div>
    </div>

  </div>
}

function Event(props: {title: string, description?: string}) {
  return <div className="bg-white p-1 rounded-lg shadow-sm">
    <h4 className="text-sm">{props.title}</h4>
    <p className="text-xs">{props.description}</p>
  </div>
}
