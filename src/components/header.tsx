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

    <a rel="prefetch" href="/"><h3>Barrington Computer Club</h3></a>

    <NavigationMenu>

      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Upcoming Events</NavigationMenuTrigger>
          <NavigationMenuContent className="p-6 flex flex-row gap-4">
            <div className="flex flex-col gap-2 w-52">
              <p className="">The upcoming events held during Computer Club meetings</p>
              <Button variant="outline">View All</Button>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Featured Events</h4>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Content</NavigationMenuTrigger>
          <NavigationMenuContent className="p-6 flex flex-row gap-4">
            <p className="w-60">Content Created by Members of Computer Club</p>
            <div className="flex flex-col gap-2">
              <NavigationMenuLink><NavigationLink title="Presentations" description="Content corresponding to presentations given during club meetings" href="/presentations" /></NavigationMenuLink>
              <NavigationMenuLink><NavigationLink title="Projects" description="Exhibition of projects created by club members" href='/projects' /></NavigationMenuLink>
              <NavigationMenuLink><NavigationLink title="Blog Posts" description="Blog posts created by club members" href='/posts' /></NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>



      </NavigationMenuList>



    </NavigationMenu>


    <div className="ml-auto">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger><a href="https://github.com/Feel-ix-343/BarringtonComputerClubWebsite"><img width="50" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github" /></a></TooltipTrigger>
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
