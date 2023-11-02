import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header(props: {currentHref: string}) {
  console.log(props.currentHref)
  const [mobileOpen, setMobileOpen] = useState(false)
  return <>
    <nav className="absolute top-0 right-0 left-0 flex-row gap-2 px-20 h-20 items-center hidden md:flex">

    <a rel="prefetch" href="/"><h3>Barrington Computer Club &nbsp;</h3></a>

    <NavigationMenu>

      <NavigationMenuList>

        <NavigationLink title="Upcoming Events" href="/events" currentHref={props.currentHref} />
        <NavigationLink title="Community Blog Posts" href="/posts"  currentHref={props.currentHref}/>
        <NavigationLink title="Archived Presentations" href="/presentations" currentHref={props.currentHref} />
        <NavigationLink title="CS Project Gallery" href="/projects" currentHref={props.currentHref} />
        <NavigationLink title="About" href="/about" currentHref={props.currentHref} />


      </NavigationMenuList>


      
    </NavigationMenu>
    

    <div className="ml-auto">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger><a rel="prefetch" href="https://github.com/Feel-ix-343/BarringtonComputerClubWebsite"><img width="50" src="/icons8-github-128.png" alt="github" /></a></TooltipTrigger>
          <TooltipContent>
            <p>View Source Code</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
    </div>

  
  </nav>
    <nav className="fixed z-50 top-0 right-0 left-0 gap-2 px-20 h-20 items-center justify-center flex md:hidden">
      {!mobileOpen && <Menu className="bg-white w-10 h-10 p-2 rounded-full shadow-md border" onClick={() => setMobileOpen(true)} />}
    </nav>
    {mobileOpen && <div className="fixed z-50 top-0 right-0 left-0 animate-in slide-in-from-top-full px-5 py-5 bg-primary-foreground shadow-lg rounded-bl-lg rounded-br-lg">
      <a href="/"><h2>Computer Club Home</h2></a>
      <X className="absolute top-2 right-2" onClick={() => setMobileOpen(false)} />
      <div className="mt-1 flex flex-col gap-2">
        <NavigationLink title="Upcoming Events" href="/events" currentHref={props.currentHref} />
        <NavigationLink title="Community Blog Posts" href="/posts"  currentHref={props.currentHref}/>
        <NavigationLink title="Archived Presentations" href="/presentations" currentHref={props.currentHref} />
        <NavigationLink title="CS Project Gallery" href="/projects" currentHref={props.currentHref} />
      </div>
    </div>}
  </>
}

function NavigationLink(props: {title: string, description?: string, href?: string, currentHref: string}) {
  return <a rel="prefetch" href={props.href} className={ "flex flex-col hover:bg-secondary transition-all px-3 py-1 rounded-lg" + (props.currentHref === props.href ? " bg-secondary" : "") }>
    <h4 className="font-sans text-sm">{props.title}</h4>
    <p className="text-xs">{props.description}</p>
  </a>
}

