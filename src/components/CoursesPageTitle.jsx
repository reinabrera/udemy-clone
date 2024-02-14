export default function CoursesPageTitle({ title }) {
  return (
    <div className="courses-page-title px-6 2xl:container mx-auto text-primary">
      <div className="section-title py-6 md:py-9">
        <h1 className="text-2xl md:text-4xl font-display font-extrabold">{title}</h1>
      </div>
      <hr />
    </div>
  );
}
