import Link, { LinkProps } from 'next/link';

interface NextLinkProps extends  LinkProps{
    active: boolean;
    children: JSX.Element | string;
}    

const NavLink = ({ active = false, children, ...props }: NextLinkProps) => (
    <Link
        {...props}
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'border-indigo-400 text-gray-900 dark:text-gray-50 focus:border-indigo-700'
                : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
        }`}>
        {children}
    </Link>
)

export default NavLink
