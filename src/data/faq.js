/**
 * FAQ content, grouped by category.
 *
 * Single source of truth for every FAQ list on the site — the homepage
 * "Frequently asked" preview (FAQSection.astro) and the dedicated FAQs page
 * both render this via <FaqAccordion />. Edit the copy here; nothing else
 * needs to change.
 *
 * Only the "general" category holds real, confirmed copy (from Figma
 * node 28900-181416). Every other category is placeholder content in the
 * Sliceal voice — replace it with the real answers when they're ready.
 */
export const faqCategories = [
  {
    id: "general",
    label: "General",
    questions: [
      {
        question: "Is Sliceal regulated?",
        answer:
          "Yes, Sliceal operates under applicable UAE financial and real estate regulations. We are committed to full regulatory compliance to ensure the safety and transparency of your investments.",
      },
      {
        question: "How secure is my data?",
        answer:
          "Your data is stored securely using industry-standard encryption and processed in accordance with UAE data protection laws. We never sell your personal information to third parties.",
      },
      {
        question: "How do I raise a complaint?",
        answer:
          "You can raise a complaint by contacting our support team at support@sliceal.io or through the in-app chat. We aim to acknowledge all complaints within 24 hours and resolve them within 5 business days.",
      },
    ],
  },
  {
    id: "getting-started",
    label: "Getting Start",
    questions: [
      {
        question: "How do I create a Sliceal account?",
        answer:
          "Download the app or sign up on our website, verify your email and phone number, then complete a short KYC check to start investing.",
      },
      {
        question: "What documents do I need to sign up?",
        answer:
          "A valid Emirates ID or passport, plus a proof of address if it's requested during verification.",
      },
      {
        question: "How long does onboarding take?",
        answer:
          "Most people finish verification in under 10 minutes, and approval is typically confirmed within 24 hours.",
      },
    ],
  },
  {
    id: "account-kyc",
    label: "Account & KYC",
    questions: [
      {
        question: "Why do I need to complete KYC?",
        answer:
          "KYC verification is required under UAE regulations to confirm your identity and keep the platform secure for every investor.",
      },
      {
        question: "Can I invest without completing KYC?",
        answer:
          "No, KYC approval is required before you can fund your wallet or purchase any property tokens.",
      },
      {
        question: "How do I update my account details?",
        answer:
          "You can update your profile, contact details, and documents at any time from Settings → Account in the app.",
      },
    ],
  },
  {
    id: "investments",
    label: "Investments",
    questions: [
      {
        question: "What is the minimum investment amount?",
        answer:
          "You can start investing in Dubai real estate from as little as AED 2,000.",
      },
      {
        question: "How are properties selected for the platform?",
        answer:
          "Every property is vetted for location, yield potential, and legal standing before it's listed and DLD-registered.",
      },
      {
        question: "Can I sell my investment before the property is sold?",
        answer:
          "Yes, tokens can be traded at any time on our regulated secondary market, subject to buyer availability.",
      },
    ],
  },
  {
    id: "wallet-payments",
    label: "Wallet & Payments",
    questions: [
      {
        question: "What payment methods are supported?",
        answer:
          "We support bank transfer and major debit or credit cards for both deposits and withdrawals.",
      },
      {
        question: "How do I withdraw my rental income?",
        answer:
          "Rental income is distributed to your Sliceal wallet every month and can be withdrawn to your linked bank account at any time.",
      },
      {
        question: "Are there any fees for deposits or withdrawals?",
        answer:
          "Deposits are free. Any withdrawal fee is shown clearly before you confirm the transaction.",
      },
    ],
  },
  {
    id: "orders-transactions",
    label: "Orders & Transactions",
    questions: [
      {
        question: "How do I track my order status?",
        answer:
          "Every purchase or sale appears under Orders & Transactions with a real-time status update.",
      },
      {
        question: "What happens if my order isn't matched?",
        answer:
          "Unmatched buy or sell orders stay open on the secondary market until a match is found or you cancel them.",
      },
      {
        question: "Can I cancel a pending order?",
        answer:
          "Yes, pending orders can be cancelled any time before they're matched, from the order details screen.",
      },
    ],
  },
  {
    id: "tokens-ownership",
    label: "Tokens & Ownership",
    questions: [
      {
        question: "What does owning a token represent?",
        answer:
          "Each token represents a fractional, DLD-registered ownership stake in a specific property.",
      },
      {
        question: "Are my tokens legally recognized?",
        answer:
          "Yes. Ownership is recorded on-chain on the XRP Ledger and backed by DLD registration.",
      },
      {
        question: "Can I transfer my tokens to someone else?",
        answer:
          "Tokens can be moved through the secondary market, or in specific cases via a direct wallet-to-wallet transfer.",
      },
    ],
  },
];
