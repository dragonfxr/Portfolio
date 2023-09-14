import { SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP__SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (sourse) => builder.image(sourse)