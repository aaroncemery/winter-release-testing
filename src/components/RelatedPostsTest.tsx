'use client';

import Link from 'next/link';
import { createDataAttribute } from 'next-sanity';
import { POST_QUERYResult } from '../../sanity.types';
import { client } from '@/sanity/lib/client';

const { projectId, dataset, stega } = client.config();
export const createDataAttributeConfig = {
  projectId,
  dataset,
  baseUrl: typeof stega.studioUrl === 'string' ? stega.studioUrl : '',
};

export function RelatedPostsTest({
  relatedPosts,
  documentId,
  documentType,
}: {
  relatedPosts: NonNullable<POST_QUERYResult>['relatedPosts'];
  documentId: string;
  documentType: string;
}) {
  const posts = relatedPosts;
  if (!posts) {
    return null;
  }
  return (
    <aside className='border-t'>
      <h2>Related Posts</h2>
      <div className='not-prose text-balance'>
        <ul
          className='flex flex-col sm:flex-row gap-0.5'
          data-sanity={createDataAttribute({
            ...createDataAttributeConfig,
            id: documentId,
            type: documentType,
            path: 'relatedPosts',
          }).toString()}
        >
          {posts.map((post) => (
            <li
              key={post._key}
              className='p-4 bg-blue-50 sm:w-1/3 flex-shrink-0'
              data-sanity={createDataAttribute({
                ...createDataAttributeConfig,
                id: documentId,
                type: documentType,
                path: `relatedPosts[_key=="${post._key}"]`,
              }).toString()}
            >
              <Link href={`/post/${post?.slug?.current}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
