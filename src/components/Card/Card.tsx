import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  cardWidth?: string;
  customCss?: string;
}

//
// This card has a default width of 100%
// If you want to change the width, you can pass a custom width OR keep the width 100% and wrap a container around it
// The customCss prop is for any additional CSS you want to add to the card
//

/**
 * Card component that renders a styled div with optional custom CSS and width.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the card.
 * @param {string} customCss - Additional custom CSS classes to apply to the card.
 * @param {string} [cardWidth="w-full"] - The width of the card, default is "w-full".
 * @returns {JSX.Element} The rendered card component.
 */
export default function Card({
  children,
  customCss,
  cardWidth = "w-full",
}: CardProps): JSX.Element {
  return (
    <div
      className={`border border-solid rounded-md p-4 ${cardWidth} ${customCss}`}
    >
      {children}
    </div>
  );
}
