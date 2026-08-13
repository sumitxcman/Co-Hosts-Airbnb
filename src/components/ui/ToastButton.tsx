"use client";

import React from "react";
import toast from "react-hot-toast";

interface ToastButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  message: string;
  as?: React.ElementType;
  href?: string;
  children: React.ReactNode;
}

export default function ToastButton({ 
  message, 
  as: Component = "button", 
  children, 
  onClick,
  ...props 
}: ToastButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
        // @ts-expect-error - Event type mismatch from forwarding
        onClick(e);
    }
    toast(message, {
      icon: "✨",
      style: {
        borderRadius: '10px',
        background: '#2A3430', // charcoal
        color: '#F4F2EC', // ivory
        border: '1px solid #D4AF37', // gold
      },
    });
  };

  return (
    <Component onClick={handleClick} {...props}>
      {children}
    </Component>
  );
}
