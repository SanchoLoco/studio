
"use client";

import React from 'react';
import { navigationLinks, profile } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      {navigationLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
        >
          {link.name}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : ''
      }`}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-auto">
          <a href="#" className="font-headline text-lg font-bold">
            {profile.name}
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
