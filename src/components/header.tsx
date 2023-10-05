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

export default function Header(props: {currentHref: string}) {
  console.log(props.currentHref)
  return <nav className="absolute top-0 right-0 left-0 flex flex-row gap-2 px-20 h-20 items-center">

    <a rel="prefetch" href="/"><h3>Barrington Computer Club &nbsp;</h3></a>

    <NavigationMenu>

      <NavigationMenuList>

        <NavigationLink title="Upcoming Events" href="/events" currentHref={props.currentHref} />
        <NavigationLink title="Community Blog Posts" href="/posts"  currentHref={props.currentHref}/>
        <NavigationLink title="Archived Presentations" href="/presentations" currentHref={props.currentHref} />
        <NavigationLink title="CS Project Gallery" href="/projects" currentHref={props.currentHref} />


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
}

function NavigationLink(props: {title: string, description?: string, href?: string, currentHref: string}) {
  return <a rel="prefetch" href={props.href} className={ "flex flex-col hover:bg-secondary transition-all px-3 py-1 rounded-lg" + (props.currentHref === props.href ? " bg-secondary" : "") }>
    <h4 className="font-sans text-sm">{props.title}</h4>
    <p className="text-xs">{props.description}</p>
  </a>
}

