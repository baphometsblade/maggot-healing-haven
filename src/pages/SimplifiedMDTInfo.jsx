import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BugIcon, CheckCircleIcon, HelpCircleIcon, MapPinIcon, ArrowRightIcon, ThumbsUpIcon, StarIcon, MoonIcon, SunIcon, MenuIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTheme } from 'next-themes';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const SimplifiedMDTInfo = () => {
  const [comfortLevel, setComfortLevel] = useState(50);
  const { theme, setTheme } = useTheme();

  const testimonials = [
    { name: "John, 72", text: "I was skeptical at first, but maggot therapy healed my foot ulcer when nothing else worked." },
    { name: "Mary, 68", text: "The treatment was much more comfortable than I expected. My wound is healing beautifully now." },
    { name: "Robert, 75", text: "I avoided amputation thanks to this treatment. It's truly remarkable." }
  ];

  const faqItems = [
    { question: "Is maggot therapy painful?", answer: "Most patients report little to no pain during the treatment. In fact, many experience pain relief as the maggots clean the wound." },
    { question: "How long does the treatment take?", answer: "A typical treatment cycle lasts 2-3 days, but the number of cycles needed varies depending on the wound." },
    { question: "Are the maggots visible during treatment?", answer: "The maggots are contained within a special dressing, so you won't see them directly on your wound." },
    { question: "Can I go home during the treatment?", answer: "In many cases, yes. Your doctor will provide instructions for home care if appropriate for your situation." }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <nav className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Maggot Therapy Info</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-6xl font-bold mb-12 text-center text-primary">Nature's Healing Helpers: Maggot Therapy</h1>
      
      <Card className="mb-12 bg-blue-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold flex items-center">
            <BugIcon className="mr-2 h-8 w-8" />
            What is Maggot Therapy?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-4">
              <p className="text-2xl leading-relaxed mb-4">
                Maggot therapy is a gentle, natural way to help stubborn wounds heal faster. 
                It's like having tiny helpers clean your wound, just like how fish clean a pond.
                Doctors use very clean, special maggots (baby flies) to help wounds that aren't 
                getting better on their own.
              </p>
              <Button className="mt-4 text-xl" onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
                Learn How It Works
              </Button>
            </div>
            <div className="md:w-1/2">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Illustration of maggot therapy process"
                  className={cn("rounded-lg shadow-md mx-auto object-cover", "h-full w-full")}
                />
              </AspectRatio>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card id="how-it-works" className="mb-12 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold flex items-center">
            <CheckCircleIcon className="mr-2 h-8 w-8" />
            How Does It Work?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-2xl">Step 1: Placement</AccordionTrigger>
                  <AccordionContent className="text-xl">
                    The doctor gently places special maggots on your wound.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-2xl">Step 2: Cleaning</AccordionTrigger>
                  <AccordionContent className="text-xl">
                    These tiny helpers only eat the bad, dead skin - never the healthy parts.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-2xl">Step 3: Healing</AccordionTrigger>
                  <AccordionContent className="text-xl">
                    They naturally clean the wound and help fight off harmful germs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-2xl">Step 4: Recovery</AccordionTrigger>
                  <AccordionContent className="text-xl">
                    This allows your body to focus on healing, making recovery faster and easier.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="md:w-1/2">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Infographic of maggot therapy stages"
                  className={cn("rounded-lg shadow-md mx-auto object-cover", "h-full w-full")}
                />
              </AspectRatio>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-12 bg-yellow-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold flex items-center">
            <HelpCircleIcon className="mr-2 h-8 w-8" />
            Is It Safe and Comfortable?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-4">
              <p className="text-2xl leading-relaxed mb-4">
                Yes, it's very safe and usually quite comfortable. The maggots are:
              </p>
              <ul className="text-2xl leading-relaxed list-disc list-inside space-y-4">
                <li>Specially grown in a clean medical environment</li>
                <li>Too small to be felt on your skin</li>
                <li>Unable to burrow or lay eggs</li>
                <li>Contained in a special dressing, like a tea bag</li>
              </ul>
              <p className="text-2xl leading-relaxed mt-4">
                Many patients report feeling better and having less pain after treatment starts.
              </p>
              <div className="mt-6">
                <p className="text-xl mb-2">How comfortable do you think this treatment would be?</p>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setComfortLevel(value[0])}
                />
                <p className="text-lg mt-2">Your comfort level: {comfortLevel}%</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Medical professional demonstrating maggot therapy safety"
                  className={cn("rounded-lg shadow-md mx-auto object-cover", "h-full w-full")}
                />
              </AspectRatio>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-12 bg-purple-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold flex items-center">
            <ThumbsUpIcon className="mr-2 h-8 w-8" />
            Why Consider This Treatment?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-4">
              <ul className="text-2xl leading-relaxed list-disc list-inside space-y-4">
                <li>It's a time-tested method, used for centuries and approved by modern medicine.</li>
                <li>Often works when other treatments haven't helped.</li>
                <li>Can help avoid surgery in some cases.</li>
                <li>Reduces the need for antibiotics, which can be hard on your body.</li>
                <li>Speeds up healing, helping you get back to your normal life sooner.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Before and after images of wound healing"
                  className={cn("rounded-lg shadow-md mx-auto object-cover", "h-full w-full")}
                />
              </AspectRatio>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-12 bg-red-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold flex items-center">
            <MapPinIcon className="mr-2 h-8 w-8" />
            Where Can I Get This Treatment?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-4">
              <p className="text-2xl leading-relaxed mb-4">
                In Australia, maggot therapy is available at:
              </p>
              <ul className="text-2xl leading-relaxed list-disc list-inside space-y-4">
                <li>Many major hospitals</li>
                <li>Specialized wound care centers</li>
                <li>Some community health clinics</li>
              </ul>
              <p className="text-2xl leading-relaxed mt-4">
                Your regular doctor can help you find the nearest place and give you a referral. 
                Don't hesitate to ask - they're there to help you get the best care possible.
              </p>
            </div>
            <div className="md:w-1/2">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Map showing treatment locations"
                  className={cn("rounded-lg shadow-md mx-auto object-cover", "h-full w-full")}
                />
              </AspectRatio>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-12 bg-orange-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold flex items-center">
            <StarIcon className="mr-2 h-8 w-8" />
            What Others Are Saying
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{testimonial.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>

      <Card className="mb-12 bg-purple-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold flex items-center">
            <HelpCircleIcon className="mr-2 h-8 w-8" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-2xl">{item.question}</AccordionTrigger>
                <AccordionContent className="text-xl">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="mb-12 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold flex items-center">
            <ArrowRightIcon className="mr-2 h-8 w-8" />
            Contact Us for More Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-xl">Name</Label>
              <Input id="name" className="text-xl" placeholder="Your Name" />
            </div>
            <div>
              <Label htmlFor="email" className="text-xl">Email</Label>
              <Input id="email" className="text-xl" type="email" placeholder="your.email@example.com" />
            </div>
            <div>
              <Label htmlFor="message" className="text-xl">Message</Label>
              <Textarea id="message" className="text-xl" placeholder="Your questions or concerns..." />
            </div>
            <Button className="text-xl py-6 px-8">Send Message</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold flex items-center">
            <ArrowRightIcon className="mr-2 h-8 w-8" />
            Ready to Take the Next Step?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-4">
              <p className="text-2xl leading-relaxed mb-4">
                It's natural to have questions or concerns. Here's what you can do:
              </p>
              <ul className="text-2xl leading-relaxed list-disc list-inside space-y-4">
                <li>Talk to your doctor about your specific situation.</li>
                <li>Ask to speak with someone who's had the treatment before.</li>
                <li>Request to see before-and-after photos of healed wounds.</li>
                <li>Take a family member with you to appointments for support.</li>
              </ul>
              <p className="text-2xl leading-relaxed mt-4">
                Remember, this treatment has helped many people just like you. 
                You deserve the chance to heal comfortably and get back to enjoying life.
              </p>
              <Button className="mt-6 text-xl py-6 px-8">
                Contact Your Doctor Today
              </Button>
            </div>
            <div className="md:w-1/2">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Smiling patient talking with a doctor"
                  className={cn("rounded-lg shadow-md mx-auto object-cover", "h-full w-full")}
                />
              </AspectRatio>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default SimplifiedMDTInfo;
