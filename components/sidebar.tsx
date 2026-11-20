import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader
} from '@/components/ui/sidebar';
import { LayoutDashboardIcon, UserExclamationPoint } from 'lucide-react';
import { LucideIcon } from 'lucide-react/types';

interface Page {
  name: string;
  url: string;
  icon: LucideIcon;
}

export function AppSidebar() {
  const pages: Page[] = [
    {
      name: 'dashboard',
      url: '/',
      icon: LayoutDashboardIcon
    },
    {
      name: 'violations',
      url: '/violations',
      icon: UserExclamationPoint
    }
  ];
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarMenu>
          {pages.map((page) => (
            <SidebarMenuItem key={page.name}>
              <SidebarMenuButton render={<a href={page.url} />}>
                <page.icon />
                <span>{page.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
