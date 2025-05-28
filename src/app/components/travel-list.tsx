export default function TravelList({ name }: { name: string }) {
  return (
  <div className="flex gap-2 py-0.5">
    <input type="checkbox" id="name"/>
    <label htmlFor="name">{name}</label>
    </div>
  );
}