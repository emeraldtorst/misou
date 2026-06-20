import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'book-a-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        id?: string;
        lang?: string;
        languages?: string;
        header?: string;
        'primary-color'?: string;
        'render-method'?: string;
        'button-label'?: string;
        'button-size'?: string;
        'button-color'?: string;
        'z-index'?: string;
        'button-position'?: string;
      }, HTMLElement>;
    }
  }
}
