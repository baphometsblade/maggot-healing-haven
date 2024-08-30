import React from 'react';

const SimplifiedMDTInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Wound Healing with Maggot Therapy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Maggot Therapy?</h2>
        <p className="text-lg mb-4">Maggot therapy is a special way to help wounds heal faster. It uses very clean, tiny maggots (baby flies) to clean wounds that are having trouble getting better on their own.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How Does It Work?</h2>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>The doctor puts special maggots on your wound.</li>
          <li>These maggots eat only the bad, dead skin.</li>
          <li>They help kill germs in the wound.</li>
          <li>This helps your wound heal faster.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Is It Safe?</h2>
        <p className="text-lg mb-4">Yes, it's very safe. The maggots are specially grown in a clean place for medical use. They can't hurt you or lay eggs.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Where Can I Get This Treatment?</h2>
        <p className="text-lg mb-4">You can get this treatment at the Royal Brisbane and Women's Hospital. Here's how:</p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Ask your regular doctor for a referral.</li>
          <li>The hospital is open Monday to Friday, 8 AM to 3 PM.</li>
          <li>Call (07) 3497 3588 to make an appointment.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Want to Know More?</h2>
        <p className="text-lg">Talk to your doctor or call the hospital for more information. They're here to help you understand and feel comfortable with the treatment.</p>
      </section>
    </div>
  );
};

export default SimplifiedMDTInfo;