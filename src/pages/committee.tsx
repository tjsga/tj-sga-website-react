import React, { useState } from 'react';
import Hero from '../components/Hero';
import MemberRow from '../components/MemberRow';
import useQuery from '../hooks/useQuery';

const COMMITTEES = [
  { key: 'activities',     label: 'Activities',     role: 'Activities Specialist' },
  { key: 'communications', label: 'Communications', role: 'Communications Specialist' },
  { key: 'policy',         label: 'Policy',         role: 'Policy Specialist' },
  { key: 'tech',           label: 'Tech',           role: 'Technology Specialist' },
] as const;

type CommitteeKey = typeof COMMITTEES[number]['key'];

function CommitteeSection({ role, label }: { role: string; label: string }) {
  const [open, setOpen] = useState(false);

  const members =
    useQuery<SGA.MemberDocument[]>(
      `*[_type == 'member' && role == '${role}'] | order(year)`
    ) ?? [];

  return (
    <section style={{ borderBottom: '1px solid #e5e5e5' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 2rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.1rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: '#1a1a1a',
        }}
      >
        {label}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '1.5rem',
            height: '1.5rem',
            borderRadius: '50%',
            background: '#2a9d9d',
            color: '#fff',
            flexShrink: 0,
            transition: 'transform 0.2s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          aria-hidden='true'
        >
          <svg width="10" height="10" viewBox="0 0 10 6" fill="none">
            <path d="M1 1l4 4 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? '2000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {members.length === 0 ? (
          <p style={{ padding: '1rem 2rem', color: '#888' }}>Loading members...</p>
        ) : (
          members.map((member) => (
            <MemberRow limitPhotoHeight key={member._id} member={member} />
          ))
        )}
      </div>
    </section>
  );
}

export default function Committee() {
  return (
    <>
      <Hero
        heading='Executive Committee'
        imageURL='/images/who-we-are/excomm.jpg'
      />
      <main>
        <div
          style={{
            maxWidth: '900px',
            margin: '2rem auto',
            borderTop: '1px solid #e5e5e5',
          }}
        >
          {COMMITTEES.map(({ key, label, role }) => (
            <CommitteeSection key={key} role={role} label={label} />
          ))}
        </div>
      </main>
    </>
  );
}