import React from 'react';

const SimplifiedMDTInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Maggot Therapy for Wound Healing</h1>
      
      <section className="mb-10 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">What is Maggot Therapy?</h2>
        <p className="text-xl leading-relaxed">
          Maggot therapy is a special way to help wounds heal faster. 
          The doctor uses very clean, tiny maggots (baby flies) to clean 
          wounds that are having trouble getting better on their own.
        </p>
      </section>

      <section className="mb-10 bg-green-50 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">How Does It Work?</h2>
        <ul className="text-xl leading-relaxed list-disc list-inside space-y-2">
          <li>The doctor puts special maggots on your wound.</li>
          <li>These maggots eat only the bad, dead skin.</li>
          <li>They help kill germs in the wound.</li>
          <li>This helps your wound heal faster.</li>
        </ul>
      </section>

      <section className="mb-10 bg-yellow-50 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Is It Safe?</h2>
        <p className="text-xl leading-relaxed">
          Yes, it's very safe. The maggots are specially grown in a clean 
          place for medical use. They can't hurt you or lay eggs.
        </p>
      </section>

      <section className="mb-10 bg-purple-50 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Where Can I Get This Treatment?</h2>
        <p className="text-xl leading-relaxed mb-4">
          You can get this treatment at the Royal Brisbane and Women's Hospital. Here's how:
        </p>
        <ul className="text-xl leading-relaxed list-disc list-inside space-y-2">
          <li>Ask your regular doctor for a referral.</li>
          <li>The hospital is open Monday to Friday, 8 AM to 3 PM.</li>
          <li>Call (07) 3497 3588 to make an appointment.</li>
        </ul>
      </section>

      <section className="bg-red-50 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Want to Know More?</h2>
        <p className="text-xl leading-relaxed">
          Talk to your doctor or call the hospital for more information. 
          They're here to help you understand and feel comfortable with the treatment.
        </p>
      </section>
    </div>
  );
};

export default SimplifiedMDTInfo;
