import type { Metadata } from "next";
import type { ReactNode } from "react";

// Change these four before you publish
const APP_NAME = "AI Companion";
const DEVELOPER = "Enudeme Chukwuka";
const CONTACT_EMAIL = "support@example.com";
const LAST_UPDATED = "November 11, 2026";

export const metadata: Metadata = {
  title: `${APP_NAME} - Privacy Policy and Terms`,
  description: `Privacy Policy and Terms of Use for the ${APP_NAME} app.`,
};

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 mb-3 text-xl font-semibold text-white">{children}</h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-3">{children}</p>;
}

function UL({ children }: { children: ReactNode }) {
  return <ul className="mb-3 list-disc space-y-1 pl-6">{children}</ul>;
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-300">
      <div className="mx-auto max-w-2xl px-5 py-12 leading-relaxed">
        <h1 className="text-3xl font-bold text-white">
          {APP_NAME} Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Last updated: {LAST_UPDATED}
        </p>

        <p className="mt-6">
          This page explains what information the {APP_NAME} app collects, how
          it is used, and the choices you have. The Terms of Use are further
          down on this same page. By using the app you agree to both.
        </p>

        <H2>1. Who we are</H2>
        <P>
          The app is provided by {DEVELOPER}. You can reach us at{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </P>

        <H2>2. What we collect</H2>
        <UL>
          <li>
            <strong className="text-white">Account details:</strong> your name
            and email. If you sign in with Google, we also receive your Google
            name, email and profile photo. Passwords are handled by Firebase
            Authentication. We never see or store your password in readable
            form.
          </li>
          <li>
            <strong className="text-white">Your companion:</strong> the choices
            you make when creating her, such as her look, name, personality,
            what you are looking for, your age range, and any description you
            write.
          </li>
          <li>
            <strong className="text-white">Chats and voice notes:</strong> your
            messages and her voice notes are saved on your phone. When you send
            a message, it is also sent to our server and to Google Gemini AI so
            that she can reply and speak. We do not store your conversations on
            our own servers.
          </li>
          <li>
            <strong className="text-white">Diamonds and purchases:</strong> your
            diamond balance, how many free messages you used today, and purchase
            records. Payments are handled by Google Play. We never see your card
            details. We only receive the product you bought, a purchase token
            and an order number.
          </li>
          <li>
            <strong className="text-white">Technical data:</strong> the Google
            services we use may process technical data such as your IP address
            and device information, as described in their own policies.
          </li>
        </UL>
        <P>The app does not show ads, and we do not sell your information.</P>

        <H2>3. How we use it</H2>
        <UL>
          <li>To create and run your account and your companion.</li>
          <li>To generate her replies and voice notes.</li>
          <li>To give, track and spend diamonds, and to verify purchases.</li>
          <li>To prevent abuse and keep the app safe.</li>
          <li>To answer your support messages.</li>
        </UL>

        <H2>4. Who we share it with</H2>
        <P>
          We use Google services to run the app: Firebase Authentication, Cloud
          Firestore, Cloud Functions, the Gemini API and Google Play. They
          process your information for us under the Google terms and privacy
          policy. We do not share your information with anyone else, except if
          the law requires it.
        </P>

        <H2>5. How long we keep it</H2>
        <UL>
          <li>
            Account and companion data is kept until you delete your account.
          </li>
          <li>
            Chats and voice notes stay on your phone until you clear them,
            delete your account, or uninstall the app.
          </li>
          <li>
            We may keep minimal purchase records for accounting and fraud
            prevention.
          </li>
        </UL>

        <H2>6. Your choices</H2>
        <UL>
          <li>
            Delete your account in the app: Settings, Account, Delete account.
            This removes your account, profile and companion, and clears your
            chat from your phone.
          </li>
          <li>
            Clear your chats anytime: Settings, Your companion, Clear chat
            history.
          </li>
          <li>
            Ask us about your data or request deletion by email at{" "}
            <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </li>
        </UL>

        <H2>7. Age</H2>
        <P>
          The app is for people aged 18 and over. We do not knowingly collect
          information from anyone under 18. If you think a child is using the
          app, contact us and we will delete the account.
        </P>

        <H2>8. Security</H2>
        <P>
          We take reasonable steps to protect your information, such as using
          Google secure services and keeping our server keys private. No system
          is completely secure, so we cannot promise absolute security.
        </P>

        <H2>9. Changes</H2>
        <P>
          We may update this page. The date at the top shows the latest version.
          If a change is important, we will tell you in the app.
        </P>

        <hr className="my-12 border-neutral-800" />

        <h1 id="terms" className="text-3xl font-bold text-white">
          {APP_NAME} Terms of Use
        </h1>

        <H2>1. Using the app</H2>
        <P>
          You must be at least 18 years old. You are responsible for your
          account and for keeping your login safe.
        </P>

        <H2>2. Your companion is an AI</H2>
        <P>
          Your companion is not a real person. Her replies and voice notes are
          made by artificial intelligence and can be wrong, strange or
          inappropriate. She is not a doctor, therapist, lawyer or financial
          adviser, so do not rely on her for that kind of advice. If you are in
          crisis or feel unsafe, please contact your local emergency services or
          someone you trust.
        </P>

        <H2>3. What you must not do</H2>
        <UL>
          <li>Use the app for anything illegal.</li>
          <li>Try to produce content that harms or sexualizes minors.</li>
          <li>Harass, threaten or abuse others using the app.</li>
          <li>
            Try to break, overload or reverse engineer the app, or to bypass
            message limits, diamonds or payments.
          </li>
        </UL>

        <H2>4. Diamonds and purchases</H2>
        <UL>
          <li>
            Diamonds are virtual items. They have no cash value and cannot be
            transferred.
          </li>
          <li>
            Diamonds are bought through Google Play. Refunds follow the Google
            Play refund policy.
          </li>
          <li>
            The number of free messages, the price of diamonds and what they are
            spent on may change over time.
          </li>
        </UL>

        <H2>5. Your content</H2>
        <P>
          You own what you write. You allow us and our service providers to
          process it only to run the app, for example to generate her replies.
        </P>

        <H2>6. Ending your use</H2>
        <P>
          You can delete your account at any time in the app. We may suspend or
          close accounts that break these terms.
        </P>

        <H2>7. No guarantees</H2>
        <P>
          The app is provided as available, without promises that it will always
          work or be free of errors. To the extent the law allows, we are not
          responsible for indirect or accidental losses from using it.
        </P>

        <H2>8. Changes and contact</H2>
        <P>
          We may update these terms, and the date at the top shows the latest
          version. Questions can be sent to{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </P>
      </div>
    </main>
  );
}
