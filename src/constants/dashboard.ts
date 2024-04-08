import { DashProductType, DashboardMenuType, ProductDashType } from '@/types';
import { LayoutDashboard, Package } from 'lucide-react';

export const DashboardMenu: DashboardMenuType[] = [
  {
    id: 1,
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard',
    isChildren: false
  },
  {
    id: 2,
    title: 'Manajemen Produk',
    icon: Package,
    path: '/dashboard/product',
    isChildren: false
  }
];

export const DashProduct: ProductDashType[] = [
  {
    id: 1,
    title: 'No'
  },
  {
    id: 2,
    title: 'Nama Produk'
  },
  {
    id: 3,
    title: 'Pembeli'
  },
  {
    id: 4,
    title: 'Berat'
  },
  {
    id: 5,
    title: 'Harga'
  },
  {
    id: 6,
    title: 'Status'
  },
  {
    id: 7,
    title: 'Aksi'
  }
];

export const DashProductMain: DashProductType[] = [
  {
    id: 1,
    number: 1,
    description: 'Kertas Sampah',
    user: 'Andi',
    weight: '0.3 Kg',
    price: 'Rp. 8.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 2,
    number: 2,
    description: 'Pensil Bekas',
    user: 'Siti',
    weight: '0.1 Kg',
    price: 'Rp. 5.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 3,
    number: 3,
    description: 'Botol Plastik',
    user: 'Rudi',
    weight: '0.05 Kg',
    price: 'Rp. 3.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 4,
    number: 4,
    description: 'Kardus Bekas',
    user: 'Lina',
    weight: '0.4 Kg',
    price: 'Rp. 9.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 5,
    number: 5,
    description: 'Kertas Koran Lama',
    user: 'Budi',
    weight: '0.15 Kg',
    price: 'Rp. 4.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 6,
    number: 6,
    description: 'Botol Plastik Bekas',
    user: 'Wati',
    weight: '0.2 Kg',
    price: 'Rp. 6.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 7,
    number: 7,
    description: 'Kertas Majalah Lama',
    user: 'Joko',
    weight: '0.6 Kg',
    price: 'Rp. 12.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 8,
    number: 8,
    description: 'Kardus Bekas',
    user: 'Tuti',
    weight: '0.25 Kg',
    price: 'Rp. 7.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 9,
    number: 9,
    description: 'Botol Plastik Bekas',
    user: 'Doni',
    weight: '0.1 Kg',
    price: 'Rp. 2.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 10,
    number: 10,
    description: 'Kertas Karton',
    user: 'Ani',
    weight: '0.2 Kg',
    price: 'Rp. 5.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 11,
    number: 11,
    description: 'Kertas HVS Bekas',
    user: 'Rina',
    weight: '0.05 Kg',
    price: 'Rp. 3.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 12,
    number: 12,
    description: 'Kertas Buram',
    user: 'Roni',
    weight: '0.1 Kg',
    price: 'Rp. 4.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 13,
    number: 13,
    description: 'Kertas Majalah Lama',
    user: 'Lani',
    weight: '0.5 Kg',
    price: 'Rp. 10.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 14,
    number: 14,
    description: 'Botol Plastik Bekas',
    user: 'Yanti',
    weight: '0.3 Kg',
    price: 'Rp. 6.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  },
  {
    id: 15,
    number: 15,
    description: 'Kertas Bekas',
    user: 'Yoga',
    weight: '0.4 Kg',
    price: 'Rp. 15.000',
    status: 'Menunggu',
    action: ['Setujui', 'Batalkan']
  }
];

export type DashboardProductType = {
  id?: number;
  number: number;
  description: string;
  user: string;
  weight: string;
  price: string;
  status: string;
  action: ['Setujui', 'Batalkan'];
};
