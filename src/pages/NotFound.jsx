const NotFound = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-white px-4">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-sm text-slate-500">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center rounded-full bg-sky-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-800"
        >
          Back to home
        </a>
      </div>
    </main>
  )
}

export default NotFound

