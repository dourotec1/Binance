import React from 'react';

interface SocialButtonsProps {
  onSocialLogin: () => void;
}

export function SocialButtons({ onSocialLogin }: SocialButtonsProps) {
  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={onSocialLogin}
        className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg bg-transparent text-sm font-medium text-gray-300 hover:bg-gray-800"
      >
        <svg className="h-5 w-5 mr-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.68 8.18177C15.68 7.6145 15.6291 7.06905 15.5345 6.54541H8V9.63996H12.3055C12.12 10.64 11.5564 11.4872 10.7091 12.0545V14.0618H13.2945C14.8073 12.669 15.68 10.6181 15.68 8.18177Z" fill="#4285F4"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.99992 16C10.1599 16 11.9708 15.2837 13.2945 14.0618L10.709 12.0546C9.99265 12.5346 9.07629 12.8182 7.99992 12.8182C5.91629 12.8182 4.15265 11.4109 3.52356 9.52002H0.85083V11.5927C2.16719 14.2073 4.87265 16 7.99992 16Z" fill="#34A853"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M3.52364 9.51995C3.36364 9.03995 3.27273 8.52723 3.27273 7.99995C3.27273 7.47268 3.36364 6.95995 3.52364 6.47995V4.40723H0.850909C0.309091 5.48723 0 6.70904 0 7.99995C0 9.29086 0.309091 10.5127 0.850909 11.5927L3.52364 9.51995Z" fill="#FBBC05"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.99992 3.18182C9.17447 3.18182 10.229 3.58545 11.0581 4.37818L13.3526 2.08364C11.9672 0.792727 10.1563 0 7.99992 0C4.87265 0 2.16719 1.79273 0.85083 4.40727L3.52356 6.48C4.15265 4.58909 5.91629 3.18182 7.99992 3.18182Z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>

      <button
        type="button"
        onClick={onSocialLogin}
        className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg bg-transparent text-sm font-medium text-gray-300 hover:bg-gray-800"
      >
        <svg className="h-5 w-5 mr-2" viewBox="0 0 14 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.4879 0C10.5996 0.96953 10.1968 1.92387 9.60713 2.62641C8.99235 3.31738 8.00749 3.84556 7.04923 3.77755C6.92385 2.84564 7.40944 1.85368 7.95278 1.24881C8.56756 0.561459 9.63448 0.035453 10.4879 0ZM13.5527 5.20694C13.4395 5.27152 11.6741 6.27909 11.6936 8.32883C11.7157 10.8105 13.9734 11.6303 14 11.639C13.9871 11.6969 13.6466 12.8227 12.8008 13.9658C12.0941 14.9723 11.3524 15.9563 10.1768 15.9736C9.61736 15.986 9.23962 15.8329 8.84599 15.6732C8.43549 15.5068 8.00771 15.3333 7.33854 15.3333C6.62905 15.3333 6.18224 15.5125 5.75142 15.6852C5.37887 15.8346 5.01827 15.9792 4.51011 15.999C3.38999 16.0388 2.53356 14.9245 1.80099 13.9275C0.337388 11.8915 -0.802493 8.18846 0.725707 5.66913C1.46663 4.43334 2.81701 3.63818 4.2601 3.61648C4.89566 3.60418 5.50537 3.83743 6.03985 4.0419C6.44862 4.19829 6.81339 4.33784 7.11208 4.33784C7.37475 4.33784 7.72947 4.20381 8.14285 4.04763C8.79383 3.80168 9.59027 3.50077 10.4018 3.58175C10.9565 3.59694 12.5372 3.79012 13.5554 5.20535L13.5527 5.20694Z"/>
        </svg>
        Continue with Apple
      </button>
    </div>
  );
}