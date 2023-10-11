// pages/edit-symbol.js
import { builder, BuilderComponent } from '@builder.io/react'

import "../builder-registry";

builder.init('b9bc03cb3cbe476891d19cb9d6daaa74')

export const getStaticProps = async (context) => {
  // Dynamically fetch latest content from Builder.io API
  const content = await builder.get('section', { url: context.resolvedUrl });
  return { props: { content } }
}

// View full integration and docs: https://builder.io/c/docs/developers
export default function EditSymbol(props) {
  return <BuilderComponent content={props.content} model="section" />
}
