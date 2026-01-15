import Image from 'next/image';
import { profile, contactInfo } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-portrait');

  return (
    <section id="hero" className="py-20 md:py-32 bg-secondary">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2 space-y-6">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {profile.title}
          </p>
          <p className="text-base md:text-lg max-w-2xl">
            {profile.bio}
          </p>
          <div className="flex gap-4 pt-4">
             <Button asChild variant="default" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={contactInfo.find(c => c.name === 'Email')?.href}>Contact Me</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#experience">My Experience</a>
            </Button>
          </div>
        </div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={profile.name}
              width={600}
              height={600}
              priority
              className="rounded-full object-cover shadow-lg border-4 border-background"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
