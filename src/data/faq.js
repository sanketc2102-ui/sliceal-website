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
          "Yes, SliceAL operates under applicable UAE financial and real estate regulations. We are committed to full regulatory compliance to ensure the safety and transparency of your investments..",
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
        question: "Who can invest on Sliceal?",
        answer:
          "SliceAL is open to UAE residents and international investors who meet our KYC requirements. You must be at least 18 years old and have a valid government-issued ID to register and invest.",
      },
      {
        question: "Can I cancel an investment after placing an order?",
        answer:
          "Orders can be cancelled within a short window after placement, before the funding period closes. Once a property is fully funded, cancellations are no longer possible. Check the order status page for available actions.",
      },
      {
        question: "How do I get started?",
        answer:
          "Sign up with your email, complete KYC verification by uploading a valid ID, deposit funds into your wallet, and browse the Marketplace to make your first investment. The entire process takes as little as 15 minutes.",
      },
    ],
  },
  {
    id: "account-kyc",
    label: "Account & KYC",
    questions: [
      {
        question: "Why is KYC required?",
        answer:
          "KYC (Know Your Customer) is a regulatory requirement that verifies your identity to prevent fraud and money laundering. We are required by law to verify all investors before they can deposit funds or invest.",
      },
      {
        question: "What documents are needed for KYC?",
        answer:
          "You will need a valid government-issued photo ID (Emirates ID, passport, or national ID) and a proof of address issued within the last 3 months such as a utility bill, bank statement, or tenancy contract.",
      },
      {
        question: "My KYC is rejected, what do I do?",
        answer:
          "If your KYC is rejected, you will receive an email explaining the reason. Common reasons include blurry documents, expired IDs, or mismatched information. Resubmit with clear, valid documents that match your registration details.",
      },
      {
        question: "How long does KYC approval take?",
        answer:
          "KYC verification is usually completed within 1â€“2 business days. During peak periods it may take slightly longer. You will receive an email notification as soon as your account is verified.",
      },
    ],
  },
  {
    id: "investments",
    label: "Investments",
    questions: [
      {
        question: "What is fractional ownership?",
        answer:
          "Fractional ownership lets you purchase a share of a property rather than the entire asset. You receive proportional rental income and capital appreciation based on your ownership percentage, making real estate investment accessible with smaller capital.",
      },
      {
        question: "What is the minimum investment?",
        answer:
          "You can start investing from as little as AED 500 per property. Each property listing displays the minimum ticket size clearly on its detail page.",
      },
      {
        question: "How do I invest in a property?",
        answer:
          "Browse the Marketplace, select a property, review the investment details, and tap 'Invest'. Choose your investment amount, confirm the transaction, and the funds will be deducted from your wallet instantly.",
      },
      {
        question: "Can I cancel an investment after placing an order?",
        answer:
          "Orders can be cancelled within a short window after placement, before the funding period closes. Once a property is fully funded, cancellations are no longer possible.",
      },
    ],
  },
  {
    id: "wallet-payments",
    label: "Wallet & Payments",
    questions: [
      {
        question: "What is the Platform Wallet?",
        answer:
          "Your SliceAL wallet is a digital balance that holds your funds on the platform. You deposit money into it before investing, and all rental income distributions and refunds are credited directly to it.",
      },
      {
        question: "How do I add funds to my wallet?",
        answer:
          "Go to Wallet â†’ Deposit, enter the amount, and follow the payment instructions. We support bank transfers and select debit/credit cards. Bank transfers settle within 1â€“2 business days.",
      },
      {
        question: "How do I link a bank account?",
        answer:
          "Go to Profile â†’ Bank Accounts and tap 'Add Bank Account'. Enter your IBAN and account details. Your bank account is required for withdrawals and will be verified before your first withdrawal.",
      },
      {
        question: "Why is my wallet activation failing?",
        answer:
          "Wallet activation requires a completed KYC verification. If your KYC is pending or rejected, you will not be able to activate your wallet. Complete your KYC first, then try activating your wallet again.",
      },
    ],
  },
  {
    id: "orders-transactions",
    label: "Orders & Transactions",
    questions: [
      {
        question: "What does 'Pending Funding' mean?",
        answer:
          "'Pending Funding' means your order has been placed and your funds are reserved, but the property has not yet reached its full funding target. Once the target is met, your investment is confirmed and tokens are issued.",
      },
      {
        question: "When will I receive my tokens?",
        answer:
          "Tokens representing your ownership share are issued once the property reaches its full funding target and the legal transfer is completed. You will receive a notification when your tokens appear in your portfolio.",
      },
      {
        question: "Where can I see my transaction history?",
        answer:
          "Go to Wallet â†’ Transaction History to view all deposits, withdrawals, investments, and income distributions with full details and timestamps.",
      },
    ],
  },
  {
    id: "tokens-ownership",
    label: "Tokens & Ownership",
    questions: [
      {
        question: "What does a token represent?",
        answer:
          "Each token represents a fractional ownership share in a specific property held within a Special Purpose Vehicle (SPV). Tokens give you the right to proportional rental income and proceeds from property sale.",
      },
      {
        question: "What does a token represent?",
        answer:
          "Each token represents a fractional ownership share in a specific property held within a Special Purpose Vehicle (SPV). Tokens give you the right to proportional rental income and proceeds from property sale.",
      },
      {
        question: "When will I receive my tokens?",
        answer:
          "Tokens are issued once the property reaches its full funding target and the legal transfer to the SPV is finalised. You will be notified when tokens appear in your portfolio.",
      },
    ],
  },
];
