import React from 'react';

interface AccordionItemProps {
  headerId: string;
  collapseId: string;
  title: string;
  parentId: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  headerId,
  collapseId,
  title,
  parentId,
  children
}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headerId}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          {title}
        </button>
      </h2>
      <div
        id={collapseId}
        className="accordion-collapse collapse"
        aria-labelledby={headerId}
        data-bs-parent={`#${parentId}`}
      >
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
