import type { Profile } from '../types';

type ProfileFeatureProps = {
  profile: Profile;
};

export default function ProfileFeature({ profile }: ProfileFeatureProps) {
  return (
    <section className="profile-feature" aria-labelledby="profile-heading">
      <div className="profile-kicker">
        <span><span className="red-square" aria-hidden="true" /> The profile</span>
        <span>No. 001</span>
      </div>
      <div className="profile-intro">
        <p className="eyebrow">Meet the person in the middle.</p>
        <h2 id="profile-heading">{profile.name}</h2>
        <p className="profile-deck">{profile.major} <span aria-hidden="true">/</span> {profile.year}</p>
      </div>
      <figure className="profile-illustration">
        <img src="/images/workbench.svg" width="760" height="360" alt="A pixel illustration of a computer, a small server, and a coffee cup on a desk." />
        <figcaption>Fig. 01 — A place for ideas to take shape.</figcaption>
      </figure>
      <div className="profile-details">
        <p className="profile-summary">A {profile.major} {profile.year.toLowerCase()} from {profile.hometown}, with interests in {profile.interests.join(', ')}.</p>
        <dl className="profile-facts">
          <div><dt>Year</dt><dd>{profile.year}</dd></div>
          <div><dt>Major</dt><dd>{profile.major}</dd></div>
          <div><dt>Hometown</dt><dd>{profile.hometown}</dd></div>
        </dl>
        <div className="profile-minors">
          <h3 className="eyebrow">Also on the syllabus</h3>
          <p className="minor-label">Minors</p>
          <ul>
            {profile.minors.map((minor) => <li key={minor}>{minor}</li>)}
          </ul>
        </div>
        <div className="profile-interests">
          <h3 className="eyebrow">Currently curious about</h3>
          <ul>
            {profile.interests.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
        </div>
      </div>
      <div className="profile-signoff"><span aria-hidden="true">▦</span> End of profile. Beginning of the story.</div>
    </section>
  );
}
