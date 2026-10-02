import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Maximize2, Minimize2, RotateCcw, Send, Calendar, MessageCircle, ShieldCheck, Languages } from 'lucide-react';
import { STUDIO_INFO } from '../data/detailingData.ts';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  action?: {
    type: 'book' | 'whatsapp' | 'packages';
    label: string;
    payload?: string;
  };
}

interface ChatbotWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  onBookPackage?: (packageName: string) => void;
}

type LangMode = 'hindi' | 'english';

const QUICK_PROMPTS_HI = [
  '💰 पैकेजेस और कीमतें (₹ INR)',
  '🛡️ सेरामिक कोटिंग के फायदे',
  '✨ स्क्रैच और स्विरल मार्क्स कैसे हटेंगे?',
  '📅 अपॉइंटमेंट कैसे बुक करें?',
  '⏳ काम में कितना समय लगता है?',
  '🛡️ Ceramic Coating vs PPF',
];

const QUICK_PROMPTS_EN = [
  '💰 Packages & Indian Pricing (₹)',
  '🛡️ Ceramic Coating Benefits',
  '✨ Scratch & Swirl Removal',
  '📅 How to book appointment?',
  '⏳ Detailing time & warranty',
  '🛡️ Ceramic vs PPF Difference',
];

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  isOpen,
  onToggle,
  onBookPackage,
}) => {
  const [language, setLanguage] = useState<LangMode>('hindi');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `नमस्ते! अपेक्स ग्लॉस स्टूडियो (Apex Gloss Studio) में आपका स्वागत है। मैं आपका पर्सनल ऑटोमोटिव सरफेस कंसल्टेंट हूँ।\n\nआप मुझसे हिंदी या इंग्लिश में किसी भी सर्विस, सेरामिक कोटिंग, पेंट करेक्शन या पैकेज की कीमतों (₹ INR) के बारे में पूछ सकते हैं।`,
      timestamp: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Intelligent Multi-lingual response generator
  const generateBotResponse = (
    rawInput: string,
    currentLang: LangMode
  ): { text: string; nextLang: LangMode; action?: ChatMessage['action'] } => {
    const q = rawInput.toLowerCase().trim();

    // 1. Language Switching command check
    const wantsHindi =
      q.includes('hindi') ||
      q.includes('हिंदी') ||
      q.includes('hindi me') ||
      q.includes('hindi mai') ||
      q.includes('hindi bolo') ||
      q.includes('hindi me bolo') ||
      q.includes('hindi please');

    const wantsEnglish =
      q.includes('english') ||
      q.includes('अंग्रेजी') ||
      q.includes('english me') ||
      q.includes('speak english') ||
      q.includes('talk in english');

    if (wantsHindi) {
      return {
        nextLang: 'hindi',
        text: `जी बिल्कुल! अब से मैं आपसे शुद्ध व सरल हिंदी में बात करूंगा।\n\nअपेक्स ग्लॉस स्टूडियो में आपका स्वागत है। आप बताइए—अपनी गाड़ी के लिए कौनसी सर्विस (सेरामिक कोटिंग, पेंट पॉलिशिंग, डीप वॉश या पीपीएफ) की जानकारी चाहिए?`,
        action: {
          type: 'packages',
          label: 'पैकेजेस और रेट्स देखें (₹)',
        },
      };
    }

    if (wantsEnglish) {
      return {
        nextLang: 'english',
        text: `Certainly! I will converse with you in English from now on.\n\nWelcome to Apex Gloss Studio. How can I assist you with your car detailing, 9H ceramic coating, or transparent INR pricing today?`,
        action: {
          type: 'packages',
          label: 'View Pricing & Tiers (₹)',
        },
      };
    }

    // Auto-detect Hindi/Hinglish in input words
    const isHindiInput =
      currentLang === 'hindi' ||
      /[\u0900-\u097F]/.test(q) ||
      /\b(kya|kaise|kitna|kitne|daam|bhai|gaadi|gadi|karna|hai|batao|kahan|karo|nahi|achha|accha|shuru|hota|chahiye|pata|kharcha|kharch)\b/i.test(
        q
      );

    const activeLang = isHindiInput ? 'hindi' : currentLang;

    // 2. Pricing / Rates / Packages / Kitne ka hai / Cost
    if (
      q.includes('price') ||
      q.includes('rate') ||
      q.includes('cost') ||
      q.includes('kitna') ||
      q.includes('kitne') ||
      q.includes('daam') ||
      q.includes('kharcha') ||
      q.includes('package') ||
      q.includes('कीमत') ||
      q.includes('रुपये') ||
      q.includes('charges') ||
      q.includes('fee') ||
      q.includes('budget')
    ) {
      if (activeLang === 'hindi') {
        return {
          nextLang: 'hindi',
          text: `अपेक्स ग्लॉस स्टूडियो के प्रमाणित पैकेजेस (भारतीय रुपये ₹):\n\n1. **Basic Wash & Gloss — ₹2,999**\n   • समय: 90 मिनट\n   • टू-बकेट pH-न्यूट्रल स्नो फोम वॉश\n   • अलॉय व्हील्स डीकंटैमिनेशन\n   • डीप इंटीरियर वैक्यूमिंग और UV टायर ड्रेसिंग\n\n2. **Premium Detailing — ₹9,999**\n   • समय: 4–5 घंटे\n   • क्ले बार से पूरी बॉडी की गहरी सफाई\n   • सिंगल-स्टेज मशीन ग्लॉस पॉलिश (हल्के स्क्रैच दूर)\n   • 6 महीने की SiO2 सेरामिक स्प्रे सीलेंट कोटिंग\n   • लेदर और इंटीरियर डीप कंडीशनिंग\n\n3. **Ceramic Pro 9H Studio — ₹24,999 (सर्वाधिक लोकप्रिय)**\n   • समय: 1–2 दिन (इन्फ्रारेड लैंप क्योरिंग)\n   • मल्टी-स्टेज पेंट करेक्शन (95%+ स्विरल मार्क्स व स्क्रैच खत्म)\n   • 9H डुअल लेयर नैनोटेक्नोलॉजी कोटिंग\n   • अलॉय और सभी ग्लासेस पर वाटर-रेपेलेंट शील्ड\n   • **3 साल की लिखित वारंटी सर्टिफिकेट**\n\n*(नोट: सेडान व एसयूवी के साइज के अनुसार मामूली फर्क होता है)*\n\nक्या आप अपनी गाड़ी के लिए स्लॉट बुक करना चाहते हैं?`,
          action: {
            type: 'book',
            label: '₹9,999 प्रीमियम पैकेज बुक करें',
            payload: 'Premium Detailing',
          },
        };
      } else {
        return {
          nextLang: 'english',
          text: `Here are our certified studio packages in Indian Rupees (INR):\n\n1. **Basic Wash & Gloss — ₹2,999**\n   • Duration: 90 Minutes\n   • Two-bucket pH-neutral snow foam wash, wheel decontam & interior vacuum\n\n2. **Premium Detailing — ₹9,999**\n   • Duration: 4–5 Hours\n   • Full clay bar decontamination, single-stage gloss polish & 6-month SiO2 seal\n\n3. **Ceramic Pro 9H Studio — ₹24,999 (Flagship)**\n   • Duration: 1–2 Days\n   • Multi-stage paint correction (95%+ defect removal), dual-layer 9H coating & **3-Year Written Warranty**\n\nWould you like to reserve a studio bay?`,
          action: {
            type: 'book',
            label: 'Reserve ₹9,999 Premium Detailing',
            payload: 'Premium Detailing',
          },
        };
      }
    }

    // 3. Ceramic Coating / 9H / 10H / Benefits
    if (
      q.includes('ceramic') ||
      q.includes('coating') ||
      q.includes('सिरेमिक') ||
      q.includes('कोटिंग') ||
      q.includes('9h') ||
      q.includes('10h') ||
      q.includes('shine') ||
      q.includes('chamak')
    ) {
      if (activeLang === 'hindi') {
        return {
          nextLang: 'hindi',
          text: `**Ceramic Pro 9H कोटिंग के फायदे और डिटेल्स**:\n\n• **गहरा शीशे जैसा ग्लॉस**: गाड़ी पर हमेशा नया जैसा हाई-ग्लॉस रिफ्लेक्शन रहता है।\n• **सुपर हाइड्रोफोबिक इफ़ेक्ट**: पानी की बूंदें और कीचड़ सतह पर टिक नहीं पाते और तुरंत फिसल जाते हैं।\n• **9H स्क्रैच रेसिस्टेंस**: रोजाना धोने से पड़ने वाले स्विरल मार्क्स और बारीक खरोंचों से सुरक्षा।\n• **यूवी और केमिकल डिफेंस**: तेज धूप से रंग उड़ने, एसिड रेन और चिड़ियों की बीट के एसिड से बचाव।\n• **कीमत**: केवल ₹24,999 (3 साल की वारंटी और अलॉय व्हील कोटिंग शामिल)।\n\nक्या आप अपनी गाड़ी का पेंट इंस्पेक्शन करवाना चाहते हैं?`,
          action: {
            type: 'book',
            label: 'सेरामिक कोटिंग स्लॉट बुक करें',
            payload: 'Ceramic Pro 9H Studio',
          },
        };
      } else {
        return {
          nextLang: 'english',
          text: `**Ceramic Pro 9H Studio (₹24,999)** delivers molecular nanotechnology protection:\n\n• Deep mirror-gloss optical clarity\n• Super-hydrophobic lotus-leaf water beading (110°+ contact angle)\n• 9H surface hardness against swirl marks and micro-marring\n• Defense against harsh UV rays, bird droppings, and acid rain\n• Includes alloy wheel faces, glass rain-shield, and **3-Year Warranty**.\n\nWould you like to reserve an inspection bay?`,
          action: {
            type: 'book',
            label: 'Book Ceramic Pro Inspection',
            payload: 'Ceramic Pro 9H Studio',
          },
        };
      }
    }

    // 4. Paint Correction / Swirls / Scratches / Daag / Khronch
    if (
      q.includes('scratch') ||
      q.includes('swirl') ||
      q.includes('marks') ||
      q.includes('kharonch') ||
      q.includes('khronch') ||
      q.includes('daag') ||
      q.includes('स्क्रैच') ||
      q.includes('polish') ||
      q.includes('rubbing') ||
      q.includes('buff')
    ) {
      if (activeLang === 'hindi') {
        return {
          nextLang: 'hindi',
          text: `**स्क्रैच और स्विरल मार्क्स कैसे हटते हैं?**\n\n1. **डिजिटल अल्ट्रासाउंड गेज**: सबसे पहले हम आपकी गाड़ी के क्लियर कोट की मोटाई डिजिटल रूप से मापते हैं ताकि पेंट सुरक्षित रहे।\n2. **स्टेज 1 पॉलिशिंग**: 60-70% हल्के खरोंच और धुंधलापन हटाकर डीप चमक लाती है।\n3. **मल्टी-स्टेज करेक्शन**: 90-95%+ गहरे स्विरल मार्क्स और वाशिंग स्क्रैच को पूरी तरह मिटा देती है।\n\n*अंगूठे का नियम*: यदि खरोंच में नाखून नहीं अटकता (सिर्फ क्लियर कोट पर है), तो वह 100% गायब हो जाएगी!\n\nआप हमारे स्टूडियो आकर गाड़ी का फ्री पेंट चेक करवा सकते हैं।`,
          action: {
            type: 'book',
            label: 'पेंट इंस्पेक्शन बुक करें',
            payload: 'Exterior Paint Correction',
          },
        };
      } else {
        return {
          nextLang: 'english',
          text: `**Paint Correction & Defect Elimination**:\n\n• We first measure your clear coat thickness with digital ultrasound gauges.\n• **Stage 1 Polish**: Removes 60-70% light swirls and restores high gloss.\n• **Multi-Stage Correction**: Removes 90-95%+ heavy swirl marks, wash scratches, and buffer holograms.\n\n*Rule of thumb*: If your fingernail does not catch on the scratch, it can be completely corrected!`,
          action: {
            type: 'book',
            label: 'Schedule Paint Assessment',
            payload: 'Exterior Paint Correction',
          },
        };
      }
    }

    // 5. PPF vs Ceramic Coating
    if (q.includes('ppf') || q.includes('film') || q.includes('लैम') || q.includes('wrap')) {
      if (activeLang === 'hindi') {
        return {
          nextLang: 'hindi',
          text: `**Ceramic Coating बनाम PPF (पेंट प्रोटेक्शन फिल्म)**:\n\n• **PPF (फिल्म)**: यह 8-mil मोटी थर्मोप्लास्टिक पारदर्शी रबर जैसी शीट होती है। यह सड़क के उड़ते पत्थरों (Stone Chips), हाईवे के कंकड़ और चाबी के स्क्रैच से बचाती है। इसमें सेल्फ-हीलिंग (धूप में खुद ठीक होने की) खूबी होती है।\n• **Ceramic Coating (₹24,999)**: यह लिक्विड शील्ड है जो अत्यधिक चमक (Gloss), पानी फिसलने की क्षमता और यूवी सुरक्षा देती है।\n\n**सर्वश्रेष्ठ सुझाव**: फ्रंट बंपर, बोनट और साइड मिरर्स पर PPF और बाकी गाड़ी पर 9H सेरामिक कोटिंग कराना सबसे बेहतरीन सुरक्षा देता है!`,
          action: {
            type: 'whatsapp',
            label: 'व्हाट्सएप पर PPF कोटेशन लें',
          },
        };
      } else {
        return {
          nextLang: 'english',
          text: `**Ceramic Coating vs PPF (Paint Protection Film)**:\n\n• **PPF**: An 8-mil self-healing polyurethane physical barrier engineered to withstand rock chips, gravel impact, and scratches.\n• **Ceramic Coating (₹24,999)**: Molecular liquid glass for intense mirror gloss, hydrophobic slickness, UV and chemical defense.\n\n*Pro Recommendation*: Full front PPF paired with Ceramic Coating on the rest delivers the ultimate defense.`,
          action: {
            type: 'whatsapp',
            label: 'Get PPF Quote via WhatsApp',
          },
        };
      }
    }

    // 6. Time / Duration / Kitna time
    if (
      q.includes('time') ||
      q.includes('duration') ||
      q.includes('ghante') ||
      q.includes('samay') ||
      q.includes('din') ||
      q.includes('समय') ||
      q.includes('दिन') ||
      q.includes('hours') ||
      q.includes('days')
    ) {
      if (activeLang === 'hindi') {
        return {
          nextLang: 'hindi',
          text: `**काम में लगने वाला समय (Timelines)**:\n\n• **Basic Wash & Gloss**: लगभग 90 मिनट\n• **Premium Detailing**: 4 से 5 घंटे\n• **Ceramic Pro 9H Studio**: 1 से 2 दिन (इसमें 24 घंटे की इन्फ्रारेड लैंप क्योरिंग प्रक्रिया शामिल है)\n\nहर गाड़ी को हमारे क्लाइमेट-कंट्रोल्ड डस्ट-फ्री बे में सुरक्षित रखा जाता है।`,
          action: {
            type: 'packages',
            label: 'सभी पैकेजेस देखें',
          },
        };
      } else {
        return {
          nextLang: 'english',
          text: `**Studio Execution Timelines**:\n\n• **Basic Wash & Gloss**: ~90 Minutes\n• **Premium Detailing**: 4 to 5 Hours\n• **Ceramic Pro 9H Coating**: 1 to 2 Days (includes 24-hr infrared curing protocol)\n\nEvery vehicle rests inside our dust-free, climate-controlled studio bay.`,
          action: {
            type: 'packages',
            label: 'View Detailed Packages',
          },
        };
      }
    }

    // 7. Booking / Appointment / Slots / Kaise kare
    if (
      q.includes('book') ||
      q.includes('appointment') ||
      q.includes('slot') ||
      q.includes('बुकिंग') ||
      q.includes('reserve') ||
      q.includes('milna') ||
      q.includes('aana')
    ) {
      if (activeLang === 'hindi') {
        return {
          nextLang: 'hindi',
          text: `अपॉइंटमेंट बुक करना बेहद आसान है:\n\n1. नीचे दिए गए **'अपॉइंटमेंट फॉर्म खोलें'** बटन पर क्लिक करें।\n2. अपनी गाड़ी का मॉडल और पसंदीदा तारीख चुनें।\n3. या हमारे स्टूडियो मास्टर से सीधे **व्हाट्सएप (+1 555-789-2739)** पर स्लॉट कन्फर्म करें।\n\nहमारे पास सीमित स्लॉट्स होते हैं ताकि हर गाड़ी पर पूरा ध्यान दिया जा सके।`,
          action: {
            type: 'book',
            label: 'अपॉइंटमेंट फॉर्म खोलें',
            payload: 'Ceramic Coating',
          },
        };
      } else {
        return {
          nextLang: 'english',
          text: `Booking an appointment is quick and simple:\n\n1. Click the **'Open Booking Portal'** button below.\n2. Select your vehicle platform and preferred studio date.\n3. Or connect directly with our Lead Detailer via **WhatsApp** for expedited slots.`,
          action: {
            type: 'book',
            label: 'Open Booking Portal',
            payload: 'Ceramic Coating',
          },
        };
      }
    }

    // 8. Contact / Address / Location / Phone / WhatsApp
    if (
      q.includes('contact') ||
      q.includes('phone') ||
      q.includes('call') ||
      q.includes('whatsapp') ||
      q.includes('address') ||
      q.includes('location') ||
      q.includes('pata') ||
      q.includes('कहाँ') ||
      q.includes('पता') ||
      q.includes('नंबर')
    ) {
      if (activeLang === 'hindi') {
        return {
          nextLang: 'hindi',
          text: `**अपेक्स ग्लॉस स्टूडियो संपर्क सूत्र**:\n\n📍 **पता**: ${STUDIO_INFO.address}\n📞 **फोन**: ${STUDIO_INFO.phone}\n💬 **व्हाट्सएप**: तुरंत रिप्लाई और फोटो एस्टीमेट के लिए\n⏰ **समय**: सोमवार – शनिवार: सुबह 8:00 से शाम 7:00 बजे तक\n\nक्या आप अभी व्हाट्सएप पर बात करना चाहते हैं?`,
          action: {
            type: 'whatsapp',
            label: 'व्हाट्सएप पर चैट करें',
          },
        };
      } else {
        return {
          nextLang: 'english',
          text: `**Apex Gloss Studio Contact Details**:\n\n📍 **Address**: ${STUDIO_INFO.address}\n📞 **Phone**: ${STUDIO_INFO.phone}\n💬 **WhatsApp**: Available for instant photo assessment\n⏰ **Hours**: Monday – Saturday: 8:00 AM – 7:00 PM\n\nWould you like to connect directly on WhatsApp?`,
          action: {
            type: 'whatsapp',
            label: 'Chat on WhatsApp',
          },
        };
      }
    }

    // 9. Wash & Maintenance Tips / Care after coating
    if (
      q.includes('wash') ||
      q.includes('care') ||
      q.includes('clean') ||
      q.includes('धुलाई') ||
      q.includes('धोना') ||
      q.includes('maintenance')
    ) {
      if (activeLang === 'hindi') {
        return {
          nextLang: 'hindi',
          text: `**सेरामिक कोटिंग के बाद धुलाई के नियम**:\n\n1. कोटिंग के शुरुआती 7 दिन गाड़ी को पानी या शैम्पू से बिल्कुल न धोएं ताकि कोटिंग पूरी तरह सख्त हो जाए।\n2. हमेशा **pH-न्यूट्रल शैम्पू** और **टू-बकेट मेथड** से धोएं।\n3. गंदे सूती कपड़े का इस्तेमाल कभी न करें, हमेशा 500+ GSM माइक्रोफाइबर टॉवल का उपयोग करें।\n4. सीधे धूप में गाड़ी को कभी न धोएं।`,
          action: {
            type: 'packages',
            label: 'बेसिक वॉश पैकेज देखें (₹2,999)',
          },
        };
      } else {
        return {
          nextLang: 'english',
          text: `**Post-Ceramic Maintenance Guidelines**:\n\n1. Allow 7 days of dry curing before the first wash.\n2. Always use a pH-neutral automotive shampoo and two-bucket wash technique.\n3. Dry exclusively with plush 500+ GSM microfiber towels to avoid micro-marring.\n4. Avoid washing under direct hot sunlight.`,
          action: {
            type: 'packages',
            label: 'View Wash Package (₹2,999)',
          },
        };
      }
    }

    // 10. Greetings (Hi / Hello / Namaste / Kaise ho)
    if (
      q.includes('hi') ||
      q.includes('hello') ||
      q.includes('namaste') ||
      q.includes('नमस्ते') ||
      q.includes('hey') ||
      q.includes('kaise') ||
      q.includes('haal') ||
      q.includes('suno')
    ) {
      if (activeLang === 'hindi') {
        return {
          nextLang: 'hindi',
          text: `नमस्ते! मैं बहुत बढ़िया हूँ। आप बताइए, आज आपकी गाड़ी के लिए क्या खास करना है?\n\nआप मुझसे सेरामिक कोटिंग, पेंट करेक्शन (स्क्रैच हटाना), इंटीरियर डीप क्लीनिंग या पैकेज की कीमतों (₹2,999 से शुरू) के बारे में कुछ भी पूछ सकते हैं।`,
          action: {
            type: 'packages',
            label: 'पैकेजेस और रेट्स (₹)',
          },
        };
      } else {
        return {
          nextLang: 'english',
          text: `Hello! I am doing great and ready to assist you. How can I help with your vehicle today?\n\nFeel free to ask about our 9H ceramic coatings, paint correction stages, interior restoration, or packages starting from ₹2,999.`,
          action: {
            type: 'packages',
            label: 'Explore Studio Tiers',
          },
        };
      }
    }

    // 11. Intelligent fallback matching active language
    if (activeLang === 'hindi') {
      return {
        nextLang: 'hindi',
        text: `अपेक्स ग्लॉस स्टूडियो में हम लक्जरी ऑटोमोटिव डीटेलिंग और नैनोटेक्नोलॉजी प्रिजर्वेशन के विशेषज्ञ हैं।\n\nहमारे 3 मुख्य पैकेजेस हैं:\n• **Basic Wash & Gloss**: ₹2,999\n• **Premium Detailing**: ₹9,999\n• **Ceramic Pro 9H Studio**: ₹24,999\n\nआप अपनी गाड़ी का नाम या समस्या (जैसे स्क्रैच, चमक की कमी, या सीट की सफाई) बताएं, मैं आपको सही समाधान बता दूंगा!`,
        action: {
          type: 'packages',
          label: 'पैकेजेस की पूरी लिस्ट देखें',
        },
      };
    } else {
      return {
        nextLang: 'english',
        text: `At Apex Gloss Studio, our master technicians specialize in bespoke automotive preservation, optical swirl removal, and 10H ceramic nanotechnology.\n\nOur certified tiers:\n• **Basic Wash & Gloss**: ₹2,999\n• **Premium Detailing**: ₹9,999\n• **Ceramic Pro 9H Studio**: ₹24,999\n\nTell me your vehicle model or requirement, and I will recommend the perfect solution!`,
        action: {
          type: 'packages',
          label: 'Explore Atelier Packages',
        },
      };
    }
  };

  const handleSend = (textToSend?: string) => {
    const content = textToSend || inputText;
    if (!content.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: content.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateBotResponse(content, language);
      if (response.nextLang !== language) {
        setLanguage(response.nextLang);
      }
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        timestamp: 'Just now',
        action: response.action,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleActionClick = (action: ChatMessage['action']) => {
    if (!action) return;
    if (action.type === 'book') {
      if (onBookPackage) {
        onBookPackage(action.payload || 'Ceramic Coating');
      } else {
        const bookingSection = document.getElementById('booking');
        bookingSection?.scrollIntoView({ behavior: 'smooth' });
      }
      onToggle(); // Close chat to view booking form
    } else if (action.type === 'whatsapp') {
      const defaultMessage = encodeURIComponent(
        'Hi Apex Gloss Concierge! I have a question regarding vehicle detailing and pricing.'
      );
      window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${defaultMessage}`, '_blank');
    } else if (action.type === 'packages') {
      const packagesSection = document.getElementById('packages');
      packagesSection?.scrollIntoView({ behavior: 'smooth' });
      onToggle();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text:
          language === 'hindi'
            ? `नमस्ते! बातचीत रीसेट हो गई है। आप अपनी गाड़ी के लिए किसी भी पैकेज, सेरामिक कोटिंग या स्क्रैच हटाने के बारे में पूछ सकते हैं।`
            : `Hello! Conversation reset. How can I assist you with automotive detailing and ceramic protection today?`,
        timestamp: 'Just now',
      },
    ]);
  };

  const toggleLanguage = () => {
    const next = language === 'hindi' ? 'english' : 'hindi';
    setLanguage(next);
    setMessages((prev) => [
      ...prev,
      {
        id: `lang-switch-${Date.now()}`,
        sender: 'bot',
        text:
          next === 'hindi'
            ? `भाषा हिंदी सेट कर दी गई है 🇮🇳। आप जो चाहें पूछ सकते हैं!`
            : `Language switched to English 🇬🇧. Ask me anything about our detailing services!`,
        timestamp: 'Just now',
      },
    ]);
  };

  const activePrompts = language === 'hindi' ? QUICK_PROMPTS_HI : QUICK_PROMPTS_EN;

  return (
    <>
      {/* Floating Chat Launcher Button (When closed) */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#101114] hover:bg-[#16181E] text-white border border-[#E5B54F]/70 shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(229,181,79,0.3)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer z-40"
          aria-label="Open Studio AI Chatbot"
        >
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#E5B54F] text-black">
            <Bot className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#101114]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold tracking-wide text-white group-hover:text-[#F6D686] transition-colors">
              Chat With AI
            </span>
            <span className="text-[10px] text-[#E5B54F] font-mono-num -mt-0.5">
              Online · हिंदी / English
            </span>
          </div>
        </button>
      )}

      {/* Floating Chatbot Window / Drawer */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col bg-[#0C0D10] border border-white/[0.14] shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(229,181,79,0.25)] overflow-hidden ${
            isExpanded
              ? 'inset-3 sm:inset-8 md:inset-12 rounded-xl'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[430px] h-[600px] max-h-[85vh] rounded-xl'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#12141A] border-b border-white/[0.08] select-none">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E5B54F] text-black flex items-center justify-center font-bold shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold font-display text-white tracking-wide">
                    Apex Studio AI Concierge
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9px] font-mono-num text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-1.5 py-0.2 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
                <span className="text-[10px] text-neutral-400 font-light">
                  Hindi & English Detailing Expert
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1.5 text-neutral-400">
              {/* Language Switch Button */}
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#1A1C24] hover:bg-[#252834] text-neutral-200 hover:text-white border border-white/[0.08] text-[10px] font-medium transition-colors cursor-pointer"
                title="Switch Language"
              >
                <Languages className="w-3 h-3 text-[#E5B54F]" />
                <span>{language === 'hindi' ? '🇮🇳 हिंदी' : '🇬🇧 EN'}</span>
              </button>

              <button
                onClick={handleReset}
                className="p-1.5 rounded hover:bg-white/[0.06] hover:text-white transition-colors cursor-pointer"
                title="Restart conversation"
                aria-label="Restart conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:inline-flex p-1.5 rounded hover:bg-white/[0.06] hover:text-white transition-colors cursor-pointer"
                title={isExpanded ? 'Restore window' : 'Expand window'}
                aria-label={isExpanded ? 'Restore window' : 'Expand window'}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={onToggle}
                className="p-1.5 rounded hover:bg-red-500/20 hover:text-red-400 transition-colors cursor-pointer ml-1"
                title="Close chat"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 bg-[#0E0F13] border-b border-white/[0.05] overflow-x-auto no-scrollbar flex items-center gap-2">
            {activePrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="shrink-0 text-[11px] px-2.5 py-1 rounded bg-[#171920] hover:bg-[#20232D] text-neutral-300 hover:text-[#F6D686] border border-white/[0.07] hover:border-[#E5B54F]/40 transition-colors cursor-pointer whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#08080A]/95 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-lg px-3.5 py-2.5 leading-relaxed text-xs sm:text-[13px] whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-[#E5B54F] text-black font-medium rounded-tr-none shadow-md'
                      : 'bg-[#14161D] text-neutral-200 border border-white/[0.07] rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}

                  {msg.action && (
                    <div className="mt-2.5 pt-2 border-t border-white/[0.1] flex flex-wrap gap-2">
                      <button
                        onClick={() => handleActionClick(msg.action)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#E5B54F] hover:bg-[#F6D686] text-black font-semibold text-xs transition-colors cursor-pointer"
                      >
                        {msg.action.type === 'book' && <Calendar className="w-3.5 h-3.5" />}
                        {msg.action.type === 'whatsapp' && <MessageCircle className="w-3.5 h-3.5" />}
                        {msg.action.type === 'packages' && <ShieldCheck className="w-3.5 h-3.5" />}
                        <span>{msg.action.label}</span>
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-neutral-500 mt-1 px-1 font-mono-num">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs py-1 px-2">
                <div className="w-2 h-2 rounded-full bg-[#E5B54F] animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-[#E5B54F] animate-bounce [animation-delay:0.15s]" />
                <div className="w-2 h-2 rounded-full bg-[#E5B54F] animate-bounce [animation-delay:0.3s]" />
                <span className="text-[11px] text-neutral-400 ml-1 font-mono-num">
                  {language === 'hindi' ? 'कंसल्टेंट लिख रहा है...' : 'Concierge typing...'}
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Bar */}
          <div className="p-3 bg-[#111318] border-t border-white/[0.08]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  language === 'hindi'
                    ? 'पूछें: सेरामिक कोटिंग, स्क्रैच कैसे हटेंगे, कीमतें...'
                    : 'Ask about 9H ceramic, swirls, prices in INR...'
                }
                className="flex-1 bg-[#181A22] text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-sm border border-white/[0.08] focus:border-[#E5B54F] focus:outline-none placeholder:text-neutral-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="px-3.5 py-2.5 rounded-sm bg-[#E5B54F] hover:bg-[#F6D686] disabled:opacity-40 text-black font-semibold transition-all cursor-pointer flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <div className="flex items-center justify-between mt-2 text-[10px] text-neutral-500 px-1 font-mono-num">
              <span>🇮🇳 हिंदी और English दोनों समर्थित</span>
              <span>Mon-Sat 8AM–7PM</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
