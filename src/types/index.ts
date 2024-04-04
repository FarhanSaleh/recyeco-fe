import { LucideIcon } from 'lucide-react';

export interface MainMenuType {
  id?: number;
  title?: string;
}

export interface FooterImgType {
  id: number;
  alt?: string;
  src?: string;
}

export interface SocialMediaType {
  id: number;
  src: LucideIcon;
}

export interface CategoryItem {
  id?: number;
  backgroundColor?: string;
  borderColor?: string;
  label?: string;
}

export interface CategoryColor {
  [key: string]: {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    label?: string;
  };
}

export interface IklanItem {
  id?: number;
  backgroundImage: string;
  title: string;
}

export interface ItemCardProps {
  title?: string;
  img?: string;
  price: number;
  category?: string;
  shopName?: string;
  className?: string;
}

export interface ItemsType {
  id: number;
  img?: string;
  title?: string;
  price: number;
  weight?: number;
  location?: string;
  category?: string;
  shopName?: string;
}

export interface TransactionStepType {
  id: number;
  title?: string;
  img?: string;
  desc?: any;
}
