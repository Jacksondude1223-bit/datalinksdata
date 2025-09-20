import React, { useState } from "react";

export const Button = ({ children, variant = "solid", ...props }) => {
  const base = "px-4 py-2 rounded-lg font-medium transition";
  const styles =
    variant === "outline"
      ? "border border-gray-400 text-gray-700 hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";
  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
};

export const Card = ({ children }) => (
  <div className="rounded-xl border bg-white shadow p-4">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="mb-2 font-semibold">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-lg font-bold">{children}</h3>
);

export const CardContent = ({ children }) => <div>{children}</div>;

export const Input = (props) => (
  <input
    {...props}
    className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export const Textarea = (props) => (
  <textarea
    {...props}
    className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export const Badge = ({ children }) => (
  <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
    {children}
  </span>
);

export const Accordion = ({ children }) => (
  <div className="divide-y border rounded-lg">{children}</div>
);

export const AccordionItem = ({ children }) => (
  <div className="p-2">{children}</div>
);

export const AccordionTrigger = ({ children, onClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer font-medium text-blue-600"
    >
      {children}
      {open && (
        <div className="mt-2 text-sm text-gray-600">
          (Click again to close)
        </div>
      )}
    </div>
  );
};

export const AccordionContent = ({ children }) => (
  <div className="mt-2 text-sm text-gray-600">{children}</div>
);
