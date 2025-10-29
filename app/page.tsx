'use client';

import Link from 'next/link';
import { exercises } from './data/exercises';
import { ClipboardCheck, ArrowRight, LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [assignedExercise, setAssignedExercise] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      // Redirect admin to admin dashboard, others to their test details
      if (parsedUser.isAdmin) {
        router.push('/admin');
      } else {
        router.push(`/details/${parsedUser.testId}`);
      }
    }
  }, [router]);

  return null; // This page now just redirects
}

