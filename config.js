// =================================================================
// SMART WEBSITE CONFIGURATION
// =================================================================
// This is the only file you need to edit to customize your website.
// Fill in the details below for any new company.
// =================================================================

const config = {
    // -----------------------------------------------------------------
    // COMPANY DETAILS
    // -----------------------------------------------------------------
    company: {
        name: "The AI Depot",
        subtitle: "Your AI Solutions Partner",
        slogan: "Building the Future with Intelligence.",
        logo: "https://placehold.co/100x100/3b82f6/ffffff?text=AI",
        favicon: "https://placehold.co/32x32/3b82f6/ffffff?text=AI"
    },

    // -----------------------------------------------------------------
    // CONTACT INFORMATION
    // -----------------------------------------------------------------
    contact: {
        phone: "555-555-5555",
        email: "contact@theaidepot.com"
    },

    // -----------------------------------------------------------------
    // LEGAL & FOOTER
    // -----------------------------------------------------------------
    legal: {
        copyrightYear: "2025",
    },
    
    // -----------------------------------------------------------------
    // SOCIAL MEDIA LINKS
    // -----------------------------------------------------------------
    socialLinks: [
        { name: "YouTube", url: "https://www.youtube.com/@TheAIDepotChannel", icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path></svg>` },
        { name: "X", url: "https://x.com/TheAIDepot_3690", icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>` },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/the-ai-depot-241109360/", icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-7 14v-5h-2v5h2zm-4 0v-5H6v5h2zm8-6c0-1.66-1.34-3-3-3s-3 1.34-3 3v1h2v-1c0-.55.45-1 1-1s1 .45 1 1v4h2v-4z"></path></svg>` },
        { name: "TikTok", url: "https://www.tiktok.com/@theaidepot8", icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.8-1.71-1.75-2.61-4.23-2.5-6.65.02-1.22.32-2.41.86-3.52.51-1.05 1.25-2.01 2.17-2.85.92-.85 2.01-1.52 3.2-1.96.01-.01.01-.01.02-.01.01-2.56.01-5.12.01-7.68 0-.41.13-.8.38-1.15.25-.35.6-.62 1-.78l.01-.01.01-.01c.01 0 .01 0 .01-.01.38-.17.8-.22 1.2-.12.42.1.8.33 1.1.61.22.21.39.46.52.73.13.27.21.57.26.88.09 1.08.1 2.15.1 3.23z"></path></svg>` },
        { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61576271914774", icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z"></path></svg>` },
        { name: "Instagram", url: "https://www.instagram.com/", icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.626c-3.272 0-3.648.015-4.922.072-2.755.126-3.922 1.292-4.048 4.048-.058 1.274-.072 1.648-.072 4.922s.014 3.648.072 4.922c.126 2.755 1.292 3.922 4.048 4.048 1.274.058 1.65.072 4.922.072s3.648-.014 4.922-.072c2.755-.126 3.922-1.292 4.048-4.048.058-1.274.072-1.648.072-4.922s-.014-3.648-.072-4.922c-.126-2.755-1.292-3.922-4.048-4.048-1.274-.058-1.65-.072-4.922-.072zm0 4.611c-2.403 0-4.35 1.947-4.35 4.35s1.947 4.35 4.35 4.35 4.35-1.947 4.35-4.35-1.947-4.35-4.35-4.35zm0 7.078c-1.506 0-2.728-1.222-2.728-2.728s1.222-2.728 2.728-2.728 2.728 1.222 2.728 2.728-1.222 2.728-2.728 2.728zm6.344-8.338c-.781 0-1.414.633-1.414 1.414s.633 1.414 1.414 1.414 1.414-.633 1.414-1.414-.633-1.414-1.414-1.414z"></path></svg>` }
            ],
            content: {
                home: { title: "The AI Depot - Custom AI Solutions", headline: "Custom AI Solutions for <span class=\"text-blue-600\">Your Business</span>", subheadline: "Leverage the Power of Artificial Intelligence.", description: "We design and implement custom AI strategies to boost efficiency, drive growth, and unlock new opportunities for your company.", ctaButton: "Get a Free Consultation" },
                features: [ { title: "AI Strategy", description: "We analyze your business and develop a roadmap for AI integration." }, { title: "Model Development", description: "Custom machine learning models tailored to your specific data and goals." }, { title: "System Integration", description: "Seamlessly integrate AI-powered tools into your existing workflow and software." } ],
                videos: { main: { title: "The Future of AI in Business", poster: "https://placehold.co/600x400/9ca3af/ffffff?text=AI+Video", src: "" }, side1: { caption: "Case Study: Retail", image: "https://placehold.co/600x400/9ca3af/ffffff?text=Case+Study" }, side2: { caption: "Exploring LLMs", image: "https://placehold.co/600x400/9ca3af/ffffff?text=Tech+Talk" } },
                howItWorks: { steps: [ { title: "Step One: Discovery", description: "We meet with you to understand your challenges, goals, and available data." }, { title: "Step Two: Development & Testing", description: "Our team builds and rigorously tests a proof-of-concept model." }, { title: "Step Three: Deployment & Support", description: "We deploy the final solution and provide ongoing support and maintenance." } ] }
            }
        };
