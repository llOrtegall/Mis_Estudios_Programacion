export default function Root() {
  return (
    <section className="w-auto">

      <h1 className="p-2 bg-blue-400 font-semibold">React Router Contacts</h1>

      <form id="search-form" role="search" className="bg-yellow-300 mb-4">
        <input id="q" aria-label="Search contacts"
          placeholder="Search" type="search" name="q" className="p-2 m-2 rounded-lg" />
        <div id="search-spinner" aria-hidden hidden={true} />
        <div className="sr-only" aria-live="polite"></div>
        <button type="submit" className="bg-green-500 px-6 py-2 rounded-lg">New</button>
      </form>

      <nav>
        <ul>
          <li>
            <a href={`/contacts/1`}>Your Name</a>
          </li>
          <li>
            <a href={`/contacts/2`}>Your Friend</a>
          </li>
        </ul>
      </nav>

      <div id="detail"></div>
    </section>
  );
}