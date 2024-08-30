import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const SimplifiedMDTInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-bold mb-12 text-center">Maggot Therapy for Wound Healing</h1>
      
      <section className="mb-12 bg-blue-50 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-6">What is Maggot Therapy?</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-4">
            <p className="text-2xl leading-relaxed mb-4">
              Maggot therapy is a special way to help wounds heal faster. 
              The doctor uses very clean, tiny maggots (baby flies) to clean 
              wounds that are having trouble getting better on their own.
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
              <li>The doctor puts special maggots on your wound.</li>
              <li>These maggots eat only the bad, dead skin.</li>
              <li>They help kill germs in the wound.</li>
              <li>This helps your wound heal faster.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/placeholder.svg" 
              alt="Infographic of maggot therapy stages"
              className="rounded-lg shadow-md mx-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-12 bg-yellow-50 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-6">Is It Safe?</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-4">
            <p className="text-2xl leading-relaxed">
              Yes, it's very safe. The maggots are specially grown in a clean 
              place for medical use. They can't hurt you or lay eggs.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/placeholder.svg" 
              alt="Medical professional demonstrating maggot therapy safety"
              className="rounded-lg shadow-md mx-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-12 bg-purple-50 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-6">Where Can I Get This Treatment?</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-4">
            <p className="text-2xl leading-relaxed mb-4">
              In Australia, maggot therapy is typically available at:
            </p>
            <ul className="text-2xl leading-relaxed list-disc list-inside space-y-4">
              <li>Major hospitals</li>
              <li>Wound care centers</li>
              <li>Clinics specializing in chronic wound treatment</li>
            </ul>
            <p className="text-2xl leading-relaxed mt-4">
              Ask your healthcare provider for a referral to a wound care specialist who can arrange this treatment.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/placeholder.svg" 
              alt="Illustration of a hospital or wound care clinic"
              className="rounded-lg shadow-md mx-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-red-50 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-6">Want to Know More?</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-4">
            <p className="text-2xl leading-relaxed">
              Talk to your doctor or call the hospital for more information. 
              They're here to help you understand and feel comfortable with the treatment.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/placeholder.svg" 
              alt="Doctor consulting with a patient about maggot therapy"
              className="rounded-lg shadow-md mx-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimplifiedMDTInfo;
