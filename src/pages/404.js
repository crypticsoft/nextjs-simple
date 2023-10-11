import React from 'react';
import { Builder, BuilderComponent } from '@builder.io/react';
import NotFoundCover from '../views/NotFoundCover';

export function NotFoundPage() {
  if (Builder.isPreviewing || Builder.isEditing) {
     return <BuilderComponent model="page" />
  }

  return <NotFoundCover />
}