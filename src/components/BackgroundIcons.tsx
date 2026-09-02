import React from 'react';
import { Globe, Truck, Package, Ship, Box, ShoppingCart, Plane, Anchor, Warehouse, ClipboardList, ShieldCheck } from 'lucide-react';

interface IconConfig {
  icon: React.ReactNode;
  className: string;
}

interface BackgroundIconsProps {
  icons: IconConfig[];
}

export const BackgroundIcons: React.FC<BackgroundIconsProps> = ({ icons }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, i) => (
        <div key={i} className={`absolute text-light-text dark:text-dark-text ${item.className}`}>
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export const heroIcons: IconConfig[] = [
  { icon: <Globe className="w-16 h-16" />, className: 'top-[15%] left-[5%] opacity-[0.06] rotate-12' },
  { icon: <Truck className="w-12 h-12" />, className: 'top-[25%] right-[8%] opacity-[0.05] -rotate-6' },
  { icon: <Package className="w-20 h-20" />, className: 'bottom-[20%] left-[10%] opacity-[0.04] rotate-45' },
  { icon: <Ship className="w-14 h-14" />, className: 'bottom-[30%] right-[5%] opacity-[0.06] rotate-12' },
  { icon: <Box className="w-10 h-10" />, className: 'top-[60%] left-[20%] opacity-[0.05] -rotate-12' },
];

export const productsIcons: IconConfig[] = [
  { icon: <Package className="w-16 h-16" />, className: 'top-[10%] right-[10%] opacity-[0.05] rotate-12' },
  { icon: <Box className="w-14 h-14" />, className: 'top-[40%] left-[3%] opacity-[0.04] -rotate-6' },
  { icon: <ShoppingCart className="w-12 h-12" />, className: 'bottom-[15%] right-[8%] opacity-[0.06] rotate-45' },
  { icon: <Warehouse className="w-18 h-18" />, className: 'bottom-[25%] left-[15%] opacity-[0.04] rotate-12' },
];

export const aboutIcons: IconConfig[] = [
  { icon: <Globe className="w-20 h-20" />, className: 'top-[8%] right-[5%] opacity-[0.05] -rotate-12' },
  { icon: <Truck className="w-14 h-14" />, className: 'bottom-[15%] left-[8%] opacity-[0.06] rotate-12' },
  { icon: <Ship className="w-12 h-12" />, className: 'top-[50%] right-[12%] opacity-[0.04] rotate-45' },
  { icon: <Plane className="w-10 h-10" />, className: 'bottom-[30%] right-[20%] opacity-[0.05] -rotate-6' },
];

export const processIcons: IconConfig[] = [
  { icon: <ClipboardList className="w-16 h-16" />, className: 'top-[10%] left-[5%] opacity-[0.05] rotate-12' },
  { icon: <Truck className="w-14 h-14" />, className: 'top-[30%] right-[8%] opacity-[0.06] -rotate-12' },
  { icon: <Package className="w-12 h-12" />, className: 'bottom-[20%] left-[10%] opacity-[0.04] rotate-45' },
  { icon: <Globe className="w-10 h-10" />, className: 'bottom-[10%] right-[15%] opacity-[0.05] rotate-12' },
];

export const contactIcons: IconConfig[] = [
  { icon: <Globe className="w-18 h-18" />, className: 'top-[5%] left-[8%] opacity-[0.04] rotate-12' },
  { icon: <Truck className="w-12 h-12" />, className: 'top-[45%] right-[5%] opacity-[0.06] -rotate-6' },
  { icon: <Anchor className="w-14 h-14" />, className: 'bottom-[10%] left-[15%] opacity-[0.05] rotate-45' },
  { icon: <Ship className="w-10 h-10" />, className: 'bottom-[35%] right-[12%] opacity-[0.04] rotate-12' },
];

export const whyChooseIcons: IconConfig[] = [
  { icon: <ShieldCheck className="w-14 h-14" />, className: 'top-[10%] left-[3%] opacity-[0.05] rotate-12' },
  { icon: <Package className="w-12 h-12" />, className: 'top-[20%] right-[5%] opacity-[0.04] -rotate-12' },
  { icon: <Globe className="w-16 h-16" />, className: 'bottom-[15%] left-[8%] opacity-[0.06] rotate-45' },
  { icon: <Truck className="w-10 h-10" />, className: 'bottom-[25%] right-[10%] opacity-[0.05] rotate-12' },
];
