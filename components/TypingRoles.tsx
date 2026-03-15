'use client';

import { useEffect, useMemo, useState } from 'react';

const roles = ['AI Researcher', 'ML Engineer', 'NLP Practitioner', 'Computer Vision Builder'];

export default function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentRole = useMemo(() => roles[roleIndex], [roleIndex]);

  useEffect(() => {
    const isComplete = charIndex === currentRole.length;
    const isEmpty = charIndex === 0;

    const timeout = setTimeout(
      () => {
        if (!deleting && isComplete) {
          setDeleting(true);
          return;
        }

        if (deleting && isEmpty) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }

        setCharIndex((prev) => prev + (deleting ? -1 : 1));
      },
      isComplete && !deleting ? 1000 : deleting ? 50 : 90
    );

    return () => clearTimeout(timeout);
  }, [charIndex, currentRole, deleting]);

  return (
    <p className="typewriter" aria-live="polite">
      {currentRole.slice(0, charIndex)}
      <span aria-hidden="true">|</span>
    </p>
  );
}
