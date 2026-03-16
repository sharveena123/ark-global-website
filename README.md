# ARKGlobal - Cryogenic Shipping Solutions

A modern, responsive website for ARKGlobal, Southeast Asia's leading specialist in cryogenic shipping for IVF samples, embryos, and stem cells with complete cold chain integrity.

## 🌟 Features

-**Responsive Design** - Fully optimized for desktop, tablet, and mobile devices

-**Modern UI/UX** - Clean, professional design with smooth animations

-**Contact Forms** - Integrated EmailJS for quote requests and inquiries

-**WhatsApp Integration** - Direct messaging and floating WhatsApp button

-**Interactive Elements** - Animated statistics, rotating orbit displays, and smooth scrolling

-**Real-time Analytics** - Live visitor counter with Firebase integration

-**Accessibility** - WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

-**Frontend**: React 18, TypeScript

-**Styling**: Tailwind CSS

-**Animations**: Framer Motion

-**UI Components**: shadcn/ui

-**Icons**: Lucide React

-**Forms**: EmailJS

-**Database**: Firebase Realtime Database

-**Build Tool**: Vite

-**Deployment**: Ready for Vercel/Netlify

## 🚀 Quick Start

1.**Clone the repository**

```bash

git clone https://github.com/yourusername/ark-global-website.git

cd ark-global-website

```

2.**Install dependencies**

```bash

npm install

```

3.**Set up environment variables**

Create a `.env` file in the root directory:

```env

   VITE_EMAILJS_SERVICE_ID=your_service_id

   VITE_EMAILJS_TEMPLATE_ID=your_template_id

   VITE_EMAILJS_PUBLIC_KEY=your_public_key

   VITE_FIREBASE_API_KEY=your_firebase_api_key

   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com

   VITE_FIREBASE_DATABASE_URL=https://your-project.firebaseio.com

   VITE_FIREBASE_PROJECT_ID=your_project_id

```

4.**Start development server**

```bash

npm run dev

```

5.**Open in browser**

Navigate to `http://localhost:5173`

## 📁 Project Structure

```

src/

├── components/

│   ├── animata/          # Custom animated components

│   ├── ui/               # shadcn/ui components

│   ├── About.tsx         # Company information section

│   ├── Contact.tsx       # Contact form with EmailJS

│   ├── Footer.tsx        # Site footer with navigation

│   ├── Hero.tsx          # Landing section

│   ├── Navigation.tsx    # Header navigation

│   ├── Services.tsx      # Service offerings

│   ├── Stats.tsx         # Animated statistics

│   ├── Testimonials.tsx  # Customer reviews

│   ├── WhyUs.tsx         # Features and benefits

│   └── WhatsappButton.tsx # Floating WhatsApp widget

├── lib/

│   └── utils.ts          # Utility functions

├── pages/

│   └── Index.tsx         # Main page layout

└── styles/

    └── globals.css       # Global styles and animations

```

## 🎨 Design System

-**Primary Color**: Blue (#3B82F6)

-**Typography**: Poppins (headings), Inter (body text)

-**Shadows**: Custom soft and elegant shadow system

-**Gradients**: Subtle background gradients throughout

-**Animation**: Smooth transitions and micro-interactions

## 📧 Contact Form Setup

The contact form uses EmailJS for email delivery. To set up:

1. Create an EmailJS account at [emailjs.com](https://emailjs.com)
2. Create a service and template
3. Add your credentials to the `.env` file
4. Update the template variables in `Contact.tsx` if needed

## 🔥 Firebase Analytics Setup

For the visitor counter feature:

1. Create a Firebase project
2. Enable Realtime Database
3. Set up database rules for read/write access
4. Add your Firebase config to `.env`

## 📱 WhatsApp Integration

The website includes two WhatsApp integrations:

-**Floating Button**: `react-floating-whatsapp` component

-**Contact Form**: Direct WhatsApp sharing with pre-filled message

Update the phone number in both components as needed.

## 🎯 Key Sections

1.**Hero** - Landing section with call-to-action

2.**Services** - Core shipping services offered

3.**Stats** - Animated performance metrics

4.**About** - Company information with rotating values

5.**Testimonials** - Customer reviews and feedback

6.**Why Us** - Key differentiators and benefits

7.**Contact** - Quote request form and contact info

## 📦 Build & Deployment

```bash

# Build for production

npmrunbuild


# Preview production build

npmrunpreview


# Lint code

npmrunlint

```

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is proprietary software owned by ARKGlobal. All rights reserved.

## 🤝 Contributing

This is a private project. For internal development:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions:

- Email: operations@arkglobalasia.com
- Phone: +60 12-219 6896
- WhatsApp: Available through website widget

---

**ARKGlobal** - Your Trusted Cryo Shipper for Assisted Reproduction
