import { useParams, Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Check, ArrowLeft, Phone, Info, ArrowRight, Zap } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

interface PilesType {
  id: string;
  name: string;
  headline: string;
  description: string;
  symptoms: string[];
  causes: string[];
  prevention: string[];
  imagePath: string;
  treatments: {
    ayurvedic: string[];
    modern: string[];
    lifestyle: string[];
  };
}

const PilesDetail = () => {
  const { type } = useParams<{ type: string }>();
  const { toast } = useToast();
  
  // Define all piles types data
  const pilesData: Record<string, PilesType> = {
    "internal": {
      id: "internal",
      name: "Internal Piles",
      headline: "Understanding and Treating Internal Hemorrhoids",
      description: "Internal hemorrhoids are swollen veins inside the rectum that are not usually visible from outside the body. They occur in the inner lining of the rectum and are generally painless unless they become prolapsed or thrombosed.",
      symptoms: [
        "Painless bright red blood on toilet paper or in the toilet bowl",
        "Mucus discharge from the rectum",
        "Mild discomfort during bowel movements",
        "May protrude during straining and retract on their own",
        "Occasionally cause anal itching"
      ],
      causes: [
        "Straining during bowel movements",
        "Chronic constipation or diarrhea",
        "Sitting on the toilet for long periods",
        "Low-fiber diet",
        "Pregnancy and childbirth",
        "Aging and weakening of rectal tissues",
        "Family history and genetic predisposition",
        "Obesity or being overweight"
      ],
      prevention: [
        "Consume a high-fiber diet with plenty of fruits, vegetables, and whole grains",
        "Stay hydrated by drinking adequate water throughout the day",
        "Exercise regularly to improve bowel function",
        "Avoid straining during bowel movements",
        "Don't ignore the urge to have a bowel movement",
        "Maintain a healthy weight",
        "Use the bathroom as soon as you feel the urge"
      ],
      imagePath: "/lovable-uploads/c550f286-59e3-4a2c-a285-89de3aa3392c.jpg",
      treatments: {
        ayurvedic: [
          "Ksharsutra therapy - a specialized Ayurvedic thread treatment that gradually cuts and heals hemorrhoids",
          "Herbal medication to reduce inflammation and promote healing",
          "Specialized herbal pastes for local application",
          "Panchakarma procedures like Basti (medicated enema) for intestinal health",
          "Dietary adjustments based on individual constitution (Prakriti)"
        ],
        modern: [
          "Laser Hemorrhoidoplasty - a minimally invasive procedure that uses laser energy to shrink hemorrhoids",
          "Rubber band ligation for grade I and II internal hemorrhoids",
          "Sclerotherapy - injection of a chemical solution to shrink hemorrhoids",
          "Infrared coagulation - using infrared light to shrink hemorrhoids",
          "Medications to relieve symptoms and accelerate healing"
        ],
        lifestyle: [
          "Sitz baths to relieve discomfort",
          "Dietary modifications to prevent constipation",
          "Proper toilet habits, including avoiding straining",
          "Regular exercise to improve circulation",
          "Stress management techniques to reduce pressure on hemorrhoids"
        ]
      }
    },
    "external": {
      id: "external",
      name: "External Piles",
      headline: "Effective Management of External Hemorrhoids",
      description: "External hemorrhoids develop under the skin around the anus and can be felt as bulges or lumps. They are more likely to cause significant pain, especially if a blood clot forms inside (thrombosed external hemorrhoids).",
      symptoms: [
        "Pain or discomfort, especially during sitting or bowel movements",
        "Itching or irritation in the anal region",
        "Swelling around the anus",
        "A lump near the anus that may be sensitive or painful",
        "Bleeding from the hemorrhoid"
      ],
      causes: [
        "Excessive straining during bowel movements",
        "Chronic constipation or diarrhea",
        "Prolonged sitting on hard surfaces",
        "Heavy lifting or physical exertion",
        "Obesity and sedentary lifestyle",
        "Pregnancy and childbirth",
        "Aging and weakening of supportive tissues",
        "Anal intercourse"
      ],
      prevention: [
        "Include adequate fiber in your diet",
        "Exercise regularly to stimulate bowel function",
        "Avoid prolonged sitting or standing",
        "Maintain good bathroom habits - don't delay bowel movements",
        "Keep the anal area clean but avoid excessive wiping",
        "Stay hydrated throughout the day",
        "Avoid heavy lifting without proper technique"
      ],
      imagePath: "/lovable-uploads/c550f286-59e3-4a2c-a285-89de3aa3392c.jpg",
      treatments: {
        ayurvedic: [
          "Specialized herbal medications for reducing inflammation and pain",
          "Local application of medicated oils and pastes",
          "Tailored dietary recommendations based on your body constitution",
          "Ksharsutra therapy for advanced cases",
          "Traditional herbal baths to relieve pain and swelling"
        ],
        modern: [
          "Laser treatment which precisely targets hemorrhoids while preserving surrounding tissue",
          "Topical treatments to reduce pain and inflammation",
          "Minimally invasive surgical options for severe cases",
          "Cold therapy (cryotherapy) to shrink external hemorrhoids",
          "Pain management strategies for acute discomfort"
        ],
        lifestyle: [
          "Regular sitz baths with warm water",
          "Use of cushions while sitting to reduce pressure on hemorrhoids",
          "Regular but gentle physical activity",
          "Over-the-counter pain relievers as needed",
          "Proper hygiene practices to prevent infection"
        ]
      }
    },
    "bleeding": {
      id: "bleeding",
      name: "Bleeding Piles",
      headline: "Advanced Care for Bleeding Hemorrhoids",
      description: "Bleeding piles (hemorrhoids) occur when the swollen blood vessels in or around the anus and rectum rupture and bleed, typically during bowel movements. This is one of the most common symptoms of hemorrhoids and often the first sign that prompts individuals to seek medical attention.",
      symptoms: [
        "Bright red blood on toilet paper after bowel movements",
        "Blood in the stool or toilet bowl",
        "Pain or discomfort during bowel movements",
        "Anal itching and irritation",
        "Sensation of incomplete evacuation",
        "Anemia in severe cases of prolonged bleeding"
      ],
      causes: [
        "Straining during bowel movements",
        "Chronic constipation or diarrhea",
        "Low-fiber diet leading to hard stools",
        "Prolonged sitting on the toilet",
        "Increased pressure in the lower rectum due to pregnancy",
        "Obesity and lack of physical activity",
        "Aging and weakening of supporting tissues",
        "Chronic coughing or heavy lifting"
      ],
      prevention: [
        "Maintain a high-fiber diet to ensure soft, regular stools",
        "Drink plenty of water (at least 8 glasses daily)",
        "Exercise regularly to stimulate bowel function",
        "Avoid straining during bowel movements",
        "Go to the bathroom when you feel the urge",
        "Limit time spent sitting on the toilet",
        "Maintain a healthy weight"
      ],
      imagePath: "/lovable-uploads/ef820ee6-0995-42ae-b230-1ac35973505e.jpg",
      treatments: {
        ayurvedic: [
          "Specialized Ksharsutra therapy for bleeding hemorrhoids",
          "Herbal preparations specifically designed to stop bleeding and heal damaged tissues",
          "Rakta-stambhaka (hemostatic) herbs used both internally and externally",
          "Customized herbal decoctions to strengthen blood vessels",
          "Special dietary regimens based on your body type to prevent recurrence"
        ],
        modern: [
          "Laser treatment that precisely seals bleeding vessels with minimal discomfort",
          "Rubber band ligation to cut off blood supply to the hemorrhoid",
          "Sclerotherapy injections that shrink hemorrhoids",
          "Electrocoagulation to stop bleeding",
          "Medication to reduce inflammation and control bleeding"
        ],
        lifestyle: [
          "Sitz baths with warm water after bowel movements",
          "Application of cold compresses to reduce swelling",
          "Avoidance of spicy foods, alcohol, and caffeine that can irritate the digestive system",
          "Regular but gentle physical activity",
          "Stress management techniques as stress can exacerbate bleeding"
        ]
      }
    },
    "blind": {
      id: "blind",
      name: "Blind Piles",
      headline: "Effective Treatment for Non-Bleeding Hemorrhoids",
      description: "Blind piles, also known as non-bleeding hemorrhoids, are swollen blood vessels in the anal region that cause discomfort, pain, and other symptoms without visible bleeding. Despite the lack of bleeding, they can significantly impact quality of life and should be treated promptly to prevent complications.",
      symptoms: [
        "Pain and discomfort in the anal region",
        "Itching and irritation around the anus",
        "A hard lump or nodule near the anus that is painful to touch",
        "Difficulty sitting for extended periods",
        "Discomfort during bowel movements without visible bleeding",
        "Sensation of fullness in the rectal area even after bowel movements"
      ],
      causes: [
        "Chronic constipation leading to straining",
        "Prolonged sitting, especially on hard surfaces",
        "Sedentary lifestyle with little physical activity",
        "Obesity putting excess pressure on the pelvic and rectal areas",
        "Dietary factors like low fiber intake",
        "Genetic predisposition to weak vascular walls",
        "Pregnancy and childbirth",
        "Aging and natural weakening of supportive tissues"
      ],
      prevention: [
        "Maintain a diet high in fiber and low in processed foods",
        "Stay active with regular exercise to promote good circulation",
        "Drink plenty of water to keep stools soft",
        "Avoid prolonged sitting and take regular breaks",
        "Practice good toilet habits - don't strain or sit too long",
        "Maintain healthy weight to reduce pressure on rectal veins",
        "Address constipation promptly"
      ],
      imagePath: "/lovable-uploads/b5f2a75c-7c12-453a-906b-8956826eb268.jpg",
      treatments: {
        ayurvedic: [
          "Traditional Ksharsutra therapy with medicated thread",
          "Herbal preparations targeted at reducing inflammation and pain",
          "Specialized herbal oils for local application to reduce swelling",
          "Panchakarma procedures to detoxify and promote healing",
          "Personalized dietary recommendations based on your body constitution (Prakriti)"
        ],
        modern: [
          "Advanced laser therapy that targets hemorrhoids without damaging surrounding tissue",
          "Non-surgical pain management techniques",
          "Minimally invasive procedures for severe cases",
          "Topical medications to reduce pain and swelling",
          "Radiofrequency ablation for persistent blind piles"
        ],
        lifestyle: [
          "Regular warm sitz baths to relieve discomfort",
          "Specialized cushions to reduce pressure when sitting",
          "Gentle physical activities like walking and swimming",
          "Dietary adjustments to ensure regular bowel movements",
          "Stress reduction techniques as stress can worsen symptoms"
        ]
      }
    },
    "thrombosed": {
      id: "thrombosed",
      name: "Thrombosed Piles",
      headline: "Specialized Care for Thrombosed Hemorrhoids",
      description: "Thrombosed hemorrhoids occur when blood clots form inside a hemorrhoid, causing intense pain, swelling, and a hard lump near the anus. This condition often develops suddenly and requires prompt treatment to alleviate pain and prevent complications.",
      symptoms: [
        "Severe pain that begins suddenly",
        "A hard, painful lump near the anus",
        "Swelling and inflammation around the anus",
        "Itching and irritation in the affected area",
        "Discomfort while sitting or during bowel movements",
        "The lump may appear bluish or purple due to the blood clot"
      ],
      causes: [
        "Excessive straining during bowel movements",
        "Prolonged sitting or standing",
        "Heavy lifting that increases abdominal pressure",
        "Chronic constipation or diarrhea",
        "Pregnancy, especially in the third trimester",
        "Obesity and overweight conditions",
        "Physical activities that put pressure on the rectal area",
        "Family history of hemorrhoids"
      ],
      prevention: [
        "Avoid straining during bowel movements",
        "Don't delay using the bathroom when you feel the urge",
        "Eat a high-fiber diet to keep stools soft",
        "Stay adequately hydrated",
        "Exercise regularly but avoid heavy lifting",
        "Avoid prolonged sitting",
        "Maintain a healthy weight"
      ],
      imagePath: "/lovable-uploads/b271d8ad-58e1-4f03-9c05-dc0bb514a8d9.jpg",
      treatments: {
        ayurvedic: [
          "Specialized Ksharsutra therapy customized for thrombosed hemorrhoids",
          "Blood-thinning herbal preparations to help dissolve clots",
          "Anti-inflammatory herbal medicines to reduce swelling",
          "Local application of specialized medicated oils and pastes",
          "Therapeutic procedures to improve blood circulation in the affected area"
        ],
        modern: [
          "Modern laser treatment that can remove the clot while preserving surrounding tissue",
          "External thrombectomy for immediate relief in severe cases",
          "Specialized pain management techniques",
          "Anti-inflammatory medications",
          "Cold therapy to reduce swelling and pain"
        ],
        lifestyle: [
          "Frequent warm sitz baths (3-4 times daily)",
          "Application of cold compresses to reduce pain and swelling",
          "Special cushions to make sitting more comfortable",
          "Brief periods of rest to reduce pressure on the affected area",
          "Gentle physical activities that don't aggravate symptoms"
        ]
      }
    },
    "aggregate": {
      id: "aggregate",
      name: "Aggregate Piles",
      headline: "Comprehensive Treatment for Multiple Hemorrhoids",
      description: "Aggregate piles refer to a condition where multiple hemorrhoids develop simultaneously in different locations. This complex condition requires specialized treatment approaches to address all affected areas effectively and provide complete relief.",
      symptoms: [
        "Pain or discomfort in multiple areas around the anus",
        "Bleeding during bowel movements",
        "Multiple lumps or swellings around the anus",
        "Itching and irritation in the anal region",
        "Difficulty sitting comfortably for extended periods",
        "Sensation of incomplete evacuation after bowel movements"
      ],
      causes: [
        "Chronic constipation with repeated straining",
        "Long-term diarrhea causing irritation",
        "Genetic predisposition to weak blood vessels",
        "Aging and deterioration of the supporting tissues in the rectum",
        "Obesity and excess weight putting pressure on rectal veins",
        "Sedentary lifestyle with prolonged sitting",
        "Pregnancy and childbirth",
        "Chronic liver disease leading to portal hypertension"
      ],
      prevention: [
        "Follow a high-fiber diet to prevent constipation",
        "Stay adequately hydrated throughout the day",
        "Exercise regularly to improve circulation",
        "Avoid prolonged sitting or standing",
        "Maintain a healthy weight",
        "Practice proper toilet habits - avoid straining",
        "Respond promptly to the urge to have a bowel movement"
      ],
      imagePath: "/lovable-uploads/c550f286-59e3-4a2c-a285-89de3aa3392c.jpg",
      treatments: {
        ayurvedic: [
          "Comprehensive Ksharsutra therapy tailored to treat multiple hemorrhoids",
          "Multi-pronged herbal treatment approach",
          "Specialized Panchakarma procedures to address the root causes",
          "Customized herbal preparations based on individual constitution",
          "Sequential treatment of hemorrhoids in order of severity"
        ],
        modern: [
          "Advanced laser treatment that can address multiple hemorrhoids in a single session",
          "Staged treatment approach for complex cases",
          "Combination therapy utilizing different techniques for different hemorrhoids",
          "Comprehensive pain management during healing",
          "Preventive measures to avoid recurrence"
        ],
        lifestyle: [
          "Structured routine of warm sitz baths",
          "Comprehensive dietary modifications",
          "Specially designed exercise routines to improve circulation without aggravating symptoms",
          "Stress management techniques as stress can worsen all types of hemorrhoids",
          "Long-term maintenance plan to prevent recurrence"
        ]
      }
    },
    "end-bearing": {
      id: "end-bearing",
      name: "End Bearing Piles",
      headline: "Specialized Treatment for Terminal Hemorrhoids",
      description: "End bearing piles are hemorrhoids located at the terminal end of the anal canal, directly at the anal verge. Due to their location, they often cause significant discomfort, especially during bowel movements, and require specialized treatment approaches.",
      symptoms: [
        "Sharp pain during bowel movements",
        "Discomfort that increases when sitting",
        "Bright red bleeding during defecation",
        "Visible lump or swelling at the anal opening",
        "Itching and irritation around the anus",
        "Sensation of a blockage preventing complete bowel emptying"
      ],
      causes: [
        "Chronic constipation requiring excessive straining",
        "Frequent diarrhea causing irritation to the anal tissues",
        "Anatomical factors that put pressure on the anal veins",
        "Occupations requiring long periods of sitting",
        "Genetic weakness in the veins of the anorectal area",
        "Aging and natural weakening of supportive tissues",
        "Pregnancy and childbirth",
        "Certain sports activities that increase intra-abdominal pressure"
      ],
      prevention: [
        "Consume adequate dietary fiber (25-30 grams daily)",
        "Stay well-hydrated to keep stools soft",
        "Regular physical activity to promote healthy digestion",
        "Avoid prolonged sitting on hard surfaces",
        "Maintain good toilet habits - don't strain or sit too long",
        "Use of soft toilet paper and proper cleaning techniques",
        "Prompt treatment of diarrhea or constipation"
      ],
      imagePath: "/lovable-uploads/b5f2a75c-7c12-453a-906b-8956826eb268.jpg",
      treatments: {
        ayurvedic: [
          "Specialized Ksharsutra therapy for end bearing hemorrhoids",
          "Targeted herbal applications directly to the affected area",
          "Internal herbal medicines to strengthen blood vessels",
          "Therapeutic oil treatments (Sneha Karma)",
          "Customized dietary regimen based on individual digestive patterns"
        ],
        modern: [
          "Precise laser treatment targeting the hemorrhoid while preserving anal function",
          "Specialized surgical techniques for terminal hemorrhoids",
          "Advanced pain management during and after treatment",
          "Topical treatments to reduce inflammation and discomfort",
          "Follow-up care to ensure proper healing"
        ],
        lifestyle: [
          "Regular warm sitz baths with medicated solutions",
          "Specialized cushions for sitting",
          "Dietary modifications to ensure soft, regular bowel movements",
          "Gentle physical activities that don't put pressure on the anal area",
          "Stress management to reduce tension in the anal muscles"
        ]
      }
    },
    "steel": {
      id: "steel",
      name: "Steel Piles",
      headline: "Advanced Treatment for Hardened Hemorrhoids",
      description: "Steel piles is a colloquial term used to describe hemorrhoids that have become particularly firm, fibrotic, or hardened over time, often due to chronic inflammation or repeated episodes of thrombosis. These rigid hemorrhoids are typically more resistant to standard treatments and require specialized approaches.",
      symptoms: [
        "Hard, firm lump near the anal opening",
        "Persistent discomfort that doesn't respond to usual remedies",
        "Pain during bowel movements",
        "Difficulty cleaning the anal area properly",
        "Reduced elasticity of the anal tissues",
        "Sensation of a foreign body in the anal region"
      ],
      causes: [
        "Long-standing, untreated hemorrhoids",
        "Repeated episodes of thrombosis (blood clotting)",
        "Chronic inflammation leading to fibrosis",
        "Inadequate treatment of previous hemorrhoids",
        "Genetic factors affecting tissue elasticity",
        "Aging and deterioration of supporting tissues",
        "Chronic straining during bowel movements",
        "Prolonged sitting and pressure on the anal area"
      ],
      prevention: [
        "Prompt treatment of hemorrhoids before they become chronic",
        "Regular medical check-ups if you have a history of hemorrhoids",
        "High-fiber diet to prevent constipation",
        "Adequate water intake to keep stools soft",
        "Regular exercise to improve circulation",
        "Avoid prolonged sitting or standing",
        "Practice good bathroom habits"
      ],
      imagePath: "/lovable-uploads/ef820ee6-0995-42ae-b230-1ac35973505e.jpg",
      treatments: {
        ayurvedic: [
          "Enhanced Ksharsutra therapy specifically designed for fibrotic hemorrhoids",
          "Powerful herbal preparations to soften hardened tissues",
          "Special medicated oils for deep penetration into hardened tissues",
          "Multi-phase treatment approach for gradual resolution",
          "Specialized herbs to improve local circulation and tissue elasticity"
        ],
        modern: [
          "High-power laser treatment that can effectively address even hardened hemorrhoids",
          "Specialized surgical techniques for fibrotic hemorrhoids",
          "Advanced tissue softening treatments before main procedure",
          "Sequential therapy for complete resolution",
          "Comprehensive follow-up care to prevent recurrence"
        ],
        lifestyle: [
          "Intensive regimen of sitz baths with special additives",
          "Dedicated dietary plan to ensure optimal healing",
          "Specialized physical activities to improve local blood flow",
          "Enhanced hygiene practices to prevent complications",
          "Long-term maintenance plan to prevent recurrence"
        ]
      }
    },
    "friction": {
      id: "friction",
      name: "Friction Pile",
      headline: "Treatment for Activity-Related Hemorrhoids",
      description: "Friction piles are hemorrhoids that become irritated due to friction during movement or physical activity. They are particularly common in athletes, physically active individuals, or those whose occupations require significant movement. These hemorrhoids are characterized by increased irritation and discomfort during periods of activity.",
      symptoms: [
        "Pain or discomfort that worsens with physical activity",
        "Irritation and burning sensation after exercise or movement",
        "Swelling that increases throughout the day",
        "Itching that intensifies during or after activity",
        "Occasional bleeding after periods of high activity",
        "Discomfort that improves with rest"
      ],
      causes: [
        "High-impact sports and exercises",
        "Prolonged walking or running",
        "Occupations requiring continuous movement",
        "Tight-fitting clothing creating friction around the anal area",
        "Excessive sweating leading to moisture and chafing",
        "Pre-existing hemorrhoids aggravated by movement",
        "Inadequate hygiene during physical activities",
        "Dehydration during exercise leading to harder stools"
      ],
      prevention: [
        "Wear appropriate, loose-fitting clothing during physical activity",
        "Use moisture-wicking underwear during exercise",
        "Maintain proper hydration during physical activities",
        "Apply protective ointments before activities known to cause irritation",
        "Clean the anal area promptly after sweating",
        "Gradually increase intensity of physical activities",
        "Use padding or specialized cushions when appropriate"
      ],
      imagePath: "/lovable-uploads/b271d8ad-58e1-4f03-9c05-dc0bb514a8d9.jpg",
      treatments: {
        ayurvedic: [
          "Soothing herbal preparations specifically for friction-related irritation",
          "Cooling herbal pastes for local application",
          "Anti-inflammatory herbal medicines to reduce swelling",
          "Specialized oils that create a protective barrier during activity",
          "Herbal baths designed to reduce friction-related inflammation"
        ],
        modern: [
          "Advanced laser treatment with minimal downtime, allowing quicker return to activities",
          "Protective barrier treatments for active individuals",
          "Specialized topical treatments for activity-related symptoms",
          "Minimally invasive procedures for severe cases",
          "Custom treatment schedules designed around activity patterns"
        ],
        lifestyle: [
          "Activity modification during treatment period",
          "Specialized hygiene protocols for active individuals",
          "Use of protective products during physical activity",
          "Cooling treatments after exercise or activity",
          "Gradual return to activity protocol after treatment"
        ]
      }
    },
    "sheet": {
      id: "sheet",
      name: "Sheet Piles",
      headline: "Treatment for Widespread Hemorrhoidal Condition",
      description: "Sheet piles refer to a condition where hemorrhoids have spread in a sheet-like pattern around the anal area, affecting a broader area rather than forming discrete, individual hemorrhoids. This diffuse presentation requires specialized approaches for effective treatment.",
      symptoms: [
        "Widespread discomfort around the entire anal region",
        "Diffuse swelling rather than isolated lumps",
        "General sensitivity and tenderness of the anal area",
        "Pain during bowel movements across multiple locations",
        "Bleeding from various points around the anus",
        "Difficulty maintaining hygiene due to the extensive nature of the condition"
      ],
      causes: [
        "Chronic, long-standing hemorrhoidal disease",
        "Genetic predisposition to weak vascular structures",
        "Conditions causing generalized inflammation of the anorectal region",
        "Systemic conditions affecting blood vessels throughout the body",
        "Long-term constipation or straining",
        "Chronic diarrhea causing widespread irritation",
        "Anatomical factors affecting the entire anal circumference",
        "Aging and widespread deterioration of supporting tissues"
      ],
      prevention: [
        "Early treatment of initial hemorrhoid symptoms before spreading",
        "Comprehensive fiber-rich diet to prevent constipation",
        "Regular medical check-ups if you have a history of hemorrhoids",
        "Proper hydration to maintain soft stools",
        "Regular but gentle exercise to improve circulation",
        "Avoiding prolonged sitting that increases rectal pressure",
        "Prompt treatment of constipation or digestive conditions"
      ],
      imagePath: "/lovable-uploads/b5f2a75c-7c12-453a-906b-8956826eb268.jpg",
      treatments: {
        ayurvedic: [
          "Comprehensive Ksharsutra treatment plan addressing all affected areas",
          "Broad-spectrum herbal applications for diffuse conditions",
          "Specialized internal medicines to strengthen vascular walls throughout",
          "Sequential treatment approach for different sections",
          "Rejuvenative therapies for the entire anorectal region"
        ],
        modern: [
          "Advanced laser treatment that can effectively address diffuse hemorrhoidal tissue",
          "Zone-by-zone treatment approach for comprehensive coverage",
          "Combination therapy using multiple modalities",
          "Tissue-sparing techniques to preserve anal function",
          "Extended follow-up care to monitor healing across all areas"
        ],
        lifestyle: [
          "Comprehensive hygiene protocol for widespread affected areas",
          "Specialized dietary plan to support healing throughout treatment",
          "Modified physical activities to avoid exacerbating any area",
          "Use of specialized supportive products during healing",
          "Long-term maintenance program to prevent recurrence"
        ]
      }
    },
    "bored": {
      id: "bored",
      name: "Bored Piles",
      headline: "Treatment for Deep Tissue Hemorrhoids",
      description: "Bored piles is a term used to describe internal hemorrhoids that have created deeper tissue damage over time. These hemorrhoids extend further into the tissue and may involve deeper structures of the rectal wall, making them more complex to treat and potentially more uncomfortable for the patient.",
      symptoms: [
        "Deep, aching pain in the rectal area",
        "Sensation of pressure deep within the rectum",
        "Discomfort that persists even when not having bowel movements",
        "Bleeding that may be more significant than with typical hemorrhoids",
        "Feeling of incomplete evacuation after bowel movements",
        "Pain that radiates to surrounding areas"
      ],
      causes: [
        "Long-standing, untreated internal hemorrhoids",
        "Repeated trauma to the rectal tissues",
        "Chronic inflammation leading to deeper tissue involvement",
        "Anatomical factors affecting the structure of the rectum",
        "Conditions that increase pressure within the rectal veins",
        "Genetic factors affecting tissue integrity",
        "Aging and deterioration of supporting structures",
        "Occupations or activities that increase intra-abdominal pressure"
      ],
      prevention: [
        "Early intervention for hemorrhoid symptoms",
        "Regular screenings if you have a history of rectal issues",
        "High-fiber diet to prevent straining",
        "Adequate hydration to maintain soft stools",
        "Regular but gentle exercise to improve circulation",
        "Avoid prolonged sitting that increases rectal pressure",
        "Prompt treatment of constipation or diarrhea"
      ],
      imagePath: "/lovable-uploads/c550f286-59e3-4a2c-a285-89de3aa3392c.jpg",
      treatments: {
        ayurvedic: [
          "Deep-acting Ksharsutra therapy for profound tissue healing",
          "Specialized internal herbal medicines to reach deeper tissues",
          "Therapeutic procedures designed to access deeper hemorrhoids",
          "Multi-layered treatment approach addressing different tissue depths",
          "Rejuvenative therapies to restore tissue integrity"
        ],
        modern: [
          "Advanced laser treatment that can reach deeper tissues with precision",
          "Specialized surgical approaches for deep hemorrhoids",
          "Imaging-guided therapies for precise treatment",
          "Comprehensive pain management for deeper tissues",
          "Extended healing protocols for thorough recovery"
        ],
        lifestyle: [
          "Modified sitting and positioning techniques during healing",
          "Specialized dietary plan to support deep tissue healing",
          "Gentle physical therapy to restore normal function",
          "Extended recovery periods between treatment phases",
          "Comprehensive long-term care plan to prevent recurrence"
        ]
      }
    },
    "prolapsed": {
      id: "prolapsed",
      name: "Prolapsed Piles",
      headline: "Effective Treatment for Protruding Hemorrhoids",
      description: "Prolapsed hemorrhoids occur when internal hemorrhoids push through the anal opening due to straining, pressure, or weakened supporting tissues. They can cause significant discomfort and may require specialized treatment to address both the hemorrhoid itself and the structural weakness that led to prolapse.",
      symptoms: [
        "Tissue protrusion from the anus during or after bowel movements",
        "Mucus discharge from the protruding tissue",
        "Pain, discomfort, or itching around the anus",
        "Difficulty cleaning the anal area properly",
        "Feeling of incomplete evacuation after bowel movements",
        "Bleeding during bowel movements"
      ],
      causes: [
        "Chronic constipation with excessive straining",
        "Prolonged sitting on the toilet",
        "Weakening of the supporting tissues with age",
        "Pregnancy and childbirth",
        "Chronic diarrhea",
        "Obesity and excess weight",
        "Heavy lifting or activities that increase intra-abdominal pressure",
        "Genetic predisposition to weak connective tissue"
      ],
      prevention: [
        "Maintain a high-fiber diet to prevent constipation",
        "Stay well-hydrated throughout the day",
        "Avoid straining during bowel movements",
        "Don't sit on the toilet for prolonged periods",
        "Exercise regularly to improve muscle tone",
        "Maintain healthy weight",
        "Promptly treat coughing conditions to reduce straining"
      ],
      imagePath: "/lovable-uploads/b271d8ad-58e1-4f03-9c05-dc0bb514a8d9.jpg",
      treatments: {
        ayurvedic: [
          "Specialized Ksharsutra therapy for prolapsed hemorrhoids",
          "Astringent herbal applications to help tighten tissues",
          "Strengthening herbs taken internally to improve tissue tone",
          "Specialized sitting therapies (Asana Svedana) for prolapse",
          "Supportive herbal treatments to prevent future prolapse"
        ],
        modern: [
          "Laser treatment that addresses both the hemorrhoid and helps strengthen surrounding tissue",
          "Minimally invasive procedures to reduce and fix prolapsed tissue",
          "Techniques to strengthen the supporting tissues",
          "Specialized post-procedure care to prevent recurrence",
          "Combination approaches for complex prolapse"
        ],
        lifestyle: [
          "Specialized exercises to strengthen pelvic floor muscles",
          "Proper techniques for reducing prolapsed tissue when necessary",
          "Dietary modifications to ensure soft, regular bowel movements",
          "Posture improvements to reduce pressure on rectal area",
          "Long-term maintenance plan to prevent recurrence"
        ]
      }
    }
  };
  
  // Find the selected piles type
  const selectedPiles = pilesData[type || "internal"];
  
  useEffect(() => {
    if (!selectedPiles) {
      toast({
        title: "Type Not Found",
        description: "This type of piles information is not available. Redirecting to Services page.",
        variant: "destructive",
      });
      // Could add redirect here
    }
  }, [selectedPiles, toast]);

  if (!selectedPiles) return null;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ayush-100 to-herb-100 py-16">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-herb-700 hover:text-herb-900 mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </Link>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">{selectedPiles.name}</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              {selectedPiles.headline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding {selectedPiles.name}</h2>
                <div className="mb-8">
                  <img 
                    src={selectedPiles.imagePath} 
                    alt={`Medical illustration of ${selectedPiles.name}`} 
                    className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
                  />
                  <p className="text-gray-600 text-sm italic text-center">Medical illustration of {selectedPiles.name}</p>
                </div>
                <p className="text-gray-700">{selectedPiles.description}</p>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Common Symptoms</h3>
                <ul className="space-y-2">
                  {selectedPiles.symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-herb-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Causes</h3>
                <ul className="space-y-2">
                  {selectedPiles.causes.map((cause, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-ayush-100 text-ayush-700 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Alert className="bg-herb-50 border-herb-200 mb-10">
                <Info className="h-5 w-5 text-herb-600" />
                <AlertTitle className="text-herb-800">Did you know?</AlertTitle>
                <AlertDescription className="text-herb-700">
                  Nearly 50% of adults will experience hemorrhoid symptoms by age 50. Early treatment is key to preventing complications and chronic issues.
                </AlertDescription>
              </Alert>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Treatment Options</h3>
                <Tabs defaultValue="ayurvedic" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="ayurvedic">Ayurvedic Treatment</TabsTrigger>
                    <TabsTrigger value="modern">Modern Techniques</TabsTrigger>
                    <TabsTrigger value="lifestyle">Lifestyle Changes</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ayurvedic" className="pt-4">
                    <div className="bg-ayush-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-ayush-600 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Ksharsutra Therapy
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Our specialty Ksharsutra treatment is a time-tested Ayurvedic method that involves using a medicated thread to gradually cut through and heal the hemorrhoidal tissue. This technique has been refined over thousands of years and offers excellent results with minimal discomfort and faster recovery times.
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {selectedPiles.treatments.ayurvedic.map((treatment, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={18} className="text-herb-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{treatment}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="modern" className="pt-4">
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Zap size={20} className="text-blue-600 mr-2" />
                        Advanced Laser Treatment
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Our state-of-the-art laser hemorrhoid treatment offers precision targeting of hemorrhoids while preserving surrounding healthy tissue. This advanced technique allows for faster healing, minimal discomfort, and shorter recovery times compared to traditional surgical methods.
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {selectedPiles.treatments.modern.map((treatment, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{treatment}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="lifestyle" className="pt-4">
                    <p className="text-gray-700 mb-4">
                      Along with medical treatments, lifestyle changes play a crucial role in managing symptoms and preventing recurrence. Our doctors will provide personalized advice based on your specific condition and lifestyle.
                    </p>
                    <ul className="space-y-3">
                      {selectedPiles.treatments.lifestyle.map((change, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={18} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Prevention Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedPiles.prevention.map((tip, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg flex">
                      <div className="w-6 h-6 rounded-full bg-herb-100 text-herb-700 flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Consult Our Specialists</h3>
                <p className="text-gray-700 mb-4">
                  Our experienced doctors specialize in treating all types of piles with both traditional Ayurvedic methods and modern techniques.
                </p>
                <CTAButton to="/contact" variant="primary" icon={<Phone size={18} />} className="w-full">
                  Book Consultation
                </CTAButton>
              </div>
              
              <div className="bg-herb-50 p-6 rounded-xl shadow-sm mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us for {selectedPiles.name}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={18} className="text-herb-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Specialized expertise in all types of piles</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-herb-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Blend of traditional and modern treatments</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-herb-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Personalized treatment plans</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-herb-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Proven results with thousands of satisfied patients</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-herb-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Minimal discomfort and faster recovery</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Other Types of Piles</h3>
                <ul className="space-y-2">
                  {Object.keys(pilesData).map((pileType) => {
                    if (pileType !== type) {
                      return (
                        <li key={pileType}>
                          <Link 
                            to={`/piles/${pileType}`} 
                            className="text-herb-600 hover:text-herb-800 hover:underline flex items-center"
                          >
                            <ArrowRight size={14} className="mr-2" />
                            {pilesData[pileType].name}
                          </Link>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-ayush-600 to-herb-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Get Effective Treatment for {selectedPiles.name}
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Don't let hemorrhoids affect your quality of life. Our specialists offer personalized treatment plans combining Ayurvedic wisdom with modern techniques for complete relief.
          </p>
          <CTAButton to="/contact" variant="secondary" size="lg" icon={<Phone size={20} />} className="bg-white text-herb-700">
            Schedule Your Consultation Today
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default PilesDetail;
