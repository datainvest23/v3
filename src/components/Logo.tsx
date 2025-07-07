import Link from 'next/link';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("font-headline text-2xl font-bold text-primary", className)}>
      SYM
    </Link>
  );
};

export default Logo;
