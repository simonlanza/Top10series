import Link from 'next/link'

const Nav = () => {
    return (
        <nav class="bg-blue-300">
            <div class="flex justify-center h-12 ">
                        <button class="px-3 border-solid border-grey-500 border-2 rounded-3xl bg-blue-500 hover:underline"> 
                            <Link href='/'>Home</Link>
                        </button>
            </div>
        </nav>
    )
}

export default Nav