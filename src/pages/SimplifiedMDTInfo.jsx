import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const SimplifiedMDTInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-bold mb-12 text-center">Nature's Healing Helpers: Maggot Therapy</h1>
      
      <section className="mb-12 bg-blue-50 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-6">What is Maggot Therapy?</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-4">
            <p className="text-2xl leading-relaxed mb-4">
              Maggot therapy is a gentle, natural way to help stubborn wounds heal faster. 
              It's like having tiny helpers clean your wound, just like how fish clean a pond.
              Doctors use very clean, special maggots (baby flies) to help wounds that aren't 
              getting better on their own.
            </p>
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
      </section>

      <section className="mb-12 bg-green-50 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-6">How Does It Work?</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-4">
            <ul className="text-2xl leading-relaxed list-disc list-inside space-y-4">
              <li>The doctor gently places special maggots on your wound.</li>
              <li>These tiny helpers only eat the bad, dead skin - never the healthy parts.</li>
              <li>They naturally clean the wound and help fight off harmful germs.</li>
              <li>This allows your body to focus on healing, making recovery faster and easier.</li>
            </ul>
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
      </section>

      <section className="mb-12 bg-yellow-50 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-6">Is It Safe and Comfortable?</h2>
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
      </section>

      <section className="mb-12 bg-purple-50 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-6">Why Consider This Treatment?</h2>
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
      </section>

      <section className="mb-12 bg-red-50 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-6">Where Can I Get This Treatment?</h2>
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
      </section>

      <section className="bg-blue-50 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-6">Ready to Take the Next Step?</h2>
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
      </section>
    </div>
  );
};

export default SimplifiedMDTInfo;
