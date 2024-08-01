export default function PlacePage({ params }: { params: { id: string } }) {
  return <p>Current: {params.id}</p>;
}
