import { generatePageMetadata } from '@/lib/utils/seo';

export const metadata = generatePageMetadata('experience');

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
