import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// can import { urlFor, client } from '../../client';

// **changed sanityClient to createClient
export const client = createClient({ // have to use new: 在JavaScript ES6（ECMAScript 2015）及之后的版本中，类必须使用 new 关键字进行实例化。
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});


const builder = imageUrlBuilder(client); 
export const urlFor = (source) => builder.image(source);