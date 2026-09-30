export default function DestinationCard({ city, country, flag, tag, detail }) {
  return (
    <article>
      <h3>{flag} {city}, {country}</h3>
      <p>{tag} · {detail}</p>
    </article>
  );
}
