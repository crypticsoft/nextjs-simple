// builder-registry.ts
import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic';

Builder.registerComponent(
    dynamic(() => import('./components/FormLoader/FormLoader')),
    {
      name: 'Kwesform Loader',
      inputs: [
        // 'name' is the name of your prop
        { name: 'id', type: 'text', defaultValue: 'QHHS9iMgIo7ujv9t89x6' },
        { name: 'data', type: 'text', defaultValue: '/api/get-contact-form' },
        { name: 'action', type: 'text' },
        { name: 'method', type: 'text' },
      ],
    },
);
