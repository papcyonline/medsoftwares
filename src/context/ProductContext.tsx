'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ProductType = 'pharmapos' | 'hospitalos';

interface ProductContextType {
  activeProduct: ProductType;
  setActiveProduct: (product: ProductType) => void;
  primaryColor: string;
  primaryColorLight: string;
  primaryColorDark: string;
  primaryColorBg: string;
  primaryColorBgLight: string;
  primaryColorBorder: string;
  primaryGradientFrom: string;
  primaryGradientTo: string;
  productName: string;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [activeProduct, setActiveProduct] = useState<ProductType>('pharmapos');

  const isPharmaPOS = activeProduct === 'pharmapos';

  const value: ProductContextType = {
    activeProduct,
    setActiveProduct,
    primaryColor: isPharmaPOS ? '#166534' : '#1e40af',
    primaryColorLight: isPharmaPOS ? '#15803d' : '#3b82f6',
    primaryColorDark: isPharmaPOS ? '#14532d' : '#1e3a8a',
    primaryColorBg: isPharmaPOS ? '#dcfce7' : '#dbeafe', // green-100 / blue-100
    primaryColorBgLight: isPharmaPOS ? '#f0fdf4' : '#eff6ff', // green-50 / blue-50
    primaryColorBorder: isPharmaPOS ? '#bbf7d0' : '#bfdbfe', // green-200 / blue-200
    primaryGradientFrom: isPharmaPOS ? '#166534' : '#1e40af',
    primaryGradientTo: isPharmaPOS ? '#15803d' : '#2563eb', // green-700 / blue-600
    productName: isPharmaPOS ? 'PharmaPOS' : 'HospitalOS',
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
}
