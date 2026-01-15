import { profile, contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-8 text-center text-secondary-foreground">
        <div className="flex justify-center gap-2 mb-4">
            {contactInfo.map((contact) => (
                <Button key={contact.name} variant="ghost" size="icon" asChild>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer" aria-label={contact.name}>
                        <contact.icon className="h-5 w-5" />
                    </a>
                </Button>
            ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
