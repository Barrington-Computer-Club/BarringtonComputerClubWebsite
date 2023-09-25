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
          <NavigationMenuContent className="">
            <div className="p-6 grid grid-cols-[1fr_2fr] gap-4 w-[400px]">
              <div className="flex flex-col gap-2">
                <p className="text-xs">The upcoming events held during Computer Club meetings</p>
                <NavigationMenuLink><a rel="prefetch" href="/events"><Button variant="outline">View All</Button></a></NavigationMenuLink>
              </div>
              <div className="flex flex-col gap-2">
                <NavigationMenuLink><NavigationLink title="AI" description="Learn the basics of AI" /></NavigationMenuLink>
                <NavigationMenuLink><NavigationLink title="Databases" description="Learn how apps use databases and the basics of SQL" /></NavigationMenuLink>
                <NavigationMenuLink><NavigationLink title="Functional Programming" description="Learn the basics of functional programming in Rust" /></NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Content</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <div className="p-6 w-[450px]">
              <p className="mb-3">Content Created by Members of Computer Club</p>
              <div className="flex flex-col gap-2">
                <NavigationMenuLink><NavigationLink title="Archived Presentations" description="Content corresponding to presentations given during club meetings" href="/presentations" /></NavigationMenuLink>
                <NavigationMenuLink><NavigationLink title="Projects" description="Exhibition of projects created by club members" href='/projects' /></NavigationMenuLink>
                <NavigationMenuLink><NavigationLink title="Blog Posts" description="Blog posts created by club members" href='/posts' /></NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>



      </NavigationMenuList>



    </NavigationMenu>


    <div className="ml-auto">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger><a rel="prefetch" href="https://github.com/Feel-ix-343/BarringtonComputerClubWebsite"><img width="50" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github" /></a></TooltipTrigger>
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
