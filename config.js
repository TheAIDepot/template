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
        name: "Dipper Flippers",
        subtitle: "Powered by Nine Seven Builders LLC",
        slogan: "Flip Fast. Flip Smart. Flip with Dipper.",
        // Your logo.png and favicon.ico must be in the /assets/ folder
        logo: "/assets/logo.png",
        favicon: "/assets/favicon.ico"
    },

    // -----------------------------------------------------------------
    // CONTACT INFORMATION
    // -----------------------------------------------------------------
    contact: {
        phone: "803-372-7986",
        email: "contact@dipperflippers.com"
    },

    // -----------------------------------------------------------------
    // LEGAL & FOOTER
    // -----------------------------------------------------------------
    legal: {
        copyrightYear: "2025",
    },

    // -----------------------------------------------------------------
    // PAGE CONTENT
    // -----------------------------------------------------------------
    content: {
        // --- Home Page ---
        home: {
            title: "Dipper Flippers - Renovate Now, Pay Later",
            headline: "Need Renovations <span class=\"text-orange-500\">Before You Sell?</span>",
            subheadline: "We Renovate Now, You Pay Later!",
            description: "Maximize your home's value without the upfront costs. We handle the renovations, you reap the rewards at closing.",
            ctaButton: "Get a Same-Day Inspection"
        },
        
        // --- Features Section ---
        features: [
            {
                title: "Licensed & Insured",
                description: "Peace of mind knowing you're working with qualified professionals. We are fully licensed and insured for all renovation work."
            },
            {
                title: "Fast Turnaround",
                description: "We get your home market-ready quickly. Our efficient process ensures renovations are completed on time, every time."
            },
            {
                title: "Financing Available",
                description: "No upfront costs. We cover the renovation expenses, and you simply pay us back from the proceeds when your home sells."
            }
        ],

        // --- Video Section ---
        videos: {
            main: {
                title: "Roof Inspection Tips",
                poster: "/assets/baby_const_podcst.png",
                src: "/assets/roof_baby.mp4"
            },
            side1: {
                caption: "Podcast Banter",
                image: "/assets/baby_const_podcst2.png"
            },
            side2: {
                caption: "Special Guest Appearance",
                image: "/assets/donald_trump_baby_podcast.png"
            }
        },

        // --- How It Works Section ---
        howItWorks: {
            steps: [
                {
                    title: "Step One: Same-Day Inspection",
                    description: "Contact us to schedule a free, no-obligation inspection. We'll assess your property and identify the key renovations that will deliver the highest return on investment."
                },
                {
                    title: "Step Two: We Renovate",
                    description: "Our licensed team gets to work. We manage the entire project from start to finish, using quality materials and efficient timelines to get your home ready for the market, fast."
                },
                {
                    title: "Step Three: You Pay at Closing",
                    description: "List your home and sell it for top dollar. You pay for the renovations only after the sale is complete, directly from the proceeds. No out-of-pocket expenses, no risk."
                }
            ]
        }
    }
};
