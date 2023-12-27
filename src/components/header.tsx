import Link from 'next/link'

export function Header() {
  return (
    <header className="mt-24 mx-24">
      <div className="grid grid-cols-2  bg-zinc-900 p-8 py-6 rounded-full max-w-[1400px] w-full mx-auto">
        <h1>GYMNASTIC</h1>

        <nav>
          <ul className="flex justify-between">
            <li>
              <Link href={'/'}>Home</Link>
            </li>

            <li>
              <Link href={'/'}>Class</Link>
            </li>

            <li>
              <Link href={'/'}>Membership</Link>
            </li>

            <li>
              <Link href={'/'}>Trainers</Link>
            </li>

            <li>
              <Link href={'/'}>Trainers</Link>
            </li>

            <li>
              <Link href={'/'}>Trainers</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
