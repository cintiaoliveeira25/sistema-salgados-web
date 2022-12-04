/* eslint-disable no-unused-vars */
import produce from 'immer';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { Product } from './../pages/Home/components/ProductCard/types';

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addProductToCart: (product: CartItem) => void;
  changeCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const PRODUCT_ITEMS_STORAGE_KEY = 'salgadou:cartItems';

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(PRODUCT_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.uniPrice * cartItem.quantity;
  }, 0);

  const addProductToCart = (product: CartItem) => {
    const productAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id,
    );

    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyExistsInCart < 0) {
        draft.push(product);
      } else {
        draft[productAlreadyExistsInCart].quantity += product.quantity;
      }
    });

    setCartItems(newCart);
  };

  const changeCartItemQuantity = (cartItemId: number, type: 'increase' | 'decrease') => {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);

      if (productExistsInCart >= 0) {
        const item = draft[productExistsInCart];
        draft[productExistsInCart].quantity =
          type === 'increase' ? item.quantity + 5 : item.quantity - 5;
      }
    });

    setCartItems(newCart);
  };

  const removeCartItem = (cartItemId: number) => {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);

      if (productExistsInCart >= 0) {
        draft.splice(productExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  };

  const cleanCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem(PRODUCT_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        changeCartItemQuantity,
        addProductToCart,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
