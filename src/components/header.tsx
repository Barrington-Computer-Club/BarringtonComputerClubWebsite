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

export default function Header() {
  return <nav className="absolute top-0 right-0 left-0 flex flex-row gap-2 px-20 h-20 items-center">

    <a rel="prefetch" href="/"><h3>Barrington Computer Club &nbsp;</h3></a>

    <NavigationMenu>

      <NavigationMenuList>
      {/* Such great web dev */}
      &nbsp;
      &nbsp;
      &nbsp;
        <NavigationMenuLink><NavigationLink title="Upcoming Events" href="/events" /></NavigationMenuLink>
        <NavigationMenuLink><NavigationLink title="Community Blog Posts" href="/posts" /></NavigationMenuLink>
        <NavigationMenuLink><NavigationLink title="Archived Presentations" href="/presentations" /></NavigationMenuLink>
        <NavigationMenuLink><NavigationLink title="CS Project Gallery" href="/projects" /></NavigationMenuLink>


      </NavigationMenuList>


      
    </NavigationMenu>
    

    <div className="ml-auto">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger><a rel="prefetch" href="https://github.com/Feel-ix-343/BarringtonComputerClubWebsite"><img width="70" src="public/icons8-github-128.png" alt="github" /></a></TooltipTrigger>
          <TooltipContent>
            <p>View Source Code</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
    </div>

  
  </nav>
}

function NavigationLink(props: {title: string, description?: string, href?: string}) {
  return <a rel="prefetch" href={props.href} className="flex flex-col hover:bg-secondary transition-all px-3 py-1 rounded-lg">
    <h4>{props.title}</h4>
    <p className="text-xs">{props.description}</p>
  </a>
}

