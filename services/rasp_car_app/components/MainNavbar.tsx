// component/MainNavbar.tsx
import Link from "next/link";

export default function MainNavbar() {

    return (
        <nav>
            <div className="flex flex-row items-center p-2 gap-2 \
            bg-[--navColor] border-[0.5px] boder-[#DCDCDC] shadow-[4px_4px_4px_rgba(0,0,0,0.3)] rounded-[8px]">
                {/* Logo Container */}
                <div className="flex flex-row items-center justify-center p-0 gap-8">

                    <svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.4135 14.9415C23.2017 8.21125 23.5417 6.48751 23.7104 6.79504C22.0321 13.1673 21.9626 14.9755 23.0554 15.1887" stroke="#4BA228"/>
                        <path d="M15.5865 14.9415C11.7983 8.21125 11.4583 6.48751 11.2896 6.79504C12.9679 13.1673 13.0374 14.9755 11.9446 15.1887" stroke="#4BA228"/>
                        <path d="M15.1353 23.2591C15.1353 21.8134 16.2482 20.6459 17.6157 20.6459C18.9833 20.6459 20.0962 21.8134 20.0962 23.2591C20.0962 24.7048 18.9833 25.8724 17.6157 25.8724C16.2482 25.8724 15.1353 24.7048 15.1353 23.2591Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M15.1353 10.4754C15.1353 9.02972 16.2482 7.86216 17.6157 7.86216C18.9833 7.86216 20.0962 9.02972 20.0962 10.4754C20.0962 11.9211 18.9833 13.0887 17.6157 13.0887C16.2482 13.0887 15.1353 11.9211 15.1353 10.4754Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M18.1718 12.606C18.1718 11.1603 19.2847 9.99278 20.6523 9.99278C22.0198 9.99278 23.1327 11.1603 23.1327 12.606C23.1327 14.0517 22.0198 15.2193 20.6523 15.2193C19.2847 15.2193 18.1718 14.0517 18.1718 12.606Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M12.0988 12.606C12.0988 11.1603 13.2117 9.99278 14.5792 9.99278C15.9468 9.99278 17.0597 11.1603 17.0597 12.606C17.0597 14.0517 15.9468 15.2193 14.5792 15.2193C13.2117 15.2193 12.0988 14.0517 12.0988 12.606Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M15.1353 13.6712C15.1353 12.2255 16.2482 11.058 17.6157 11.058C18.9833 11.058 20.0962 12.2255 20.0962 13.6712C20.0962 15.1169 18.9833 16.2845 17.6157 16.2845C16.2482 16.2845 15.1353 15.1169 15.1353 13.6712Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M13.1109 21.1285C13.1109 19.6828 14.2238 18.5152 15.5914 18.5152C16.9589 18.5152 18.0718 19.6828 18.0718 21.1285C18.0718 22.5742 16.9589 23.7417 15.5914 23.7417C14.2238 23.7417 13.1109 22.5742 13.1109 21.1285Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M17.1596 21.1285C17.1596 19.6828 18.2725 18.5152 19.6401 18.5152C21.0076 18.5152 22.1205 19.6828 22.1205 21.1285C22.1205 22.5742 21.0076 23.7417 19.6401 23.7417C18.2725 23.7417 17.1596 22.5742 17.1596 21.1285Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M11.0866 17.9324C11.0866 16.4867 12.1995 15.3192 13.567 15.3192C14.9346 15.3192 16.0475 16.4867 16.0475 17.9324C16.0475 19.3781 14.9346 20.5457 13.567 20.5457C12.1995 20.5457 11.0866 19.3781 11.0866 17.9324Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M15.1353 17.9324C15.1353 16.4867 16.2482 15.3192 17.6157 15.3192C18.9833 15.3192 20.0962 16.4867 20.0962 17.9324C20.0962 19.3781 18.9833 20.5457 17.6157 20.5457C16.2482 20.5457 15.1353 19.3781 15.1353 17.9324Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M19.184 17.9324C19.184 16.4867 20.297 15.3192 21.6645 15.3192C23.032 15.3192 24.1449 16.4867 24.1449 17.9324C24.1449 19.3781 23.032 20.5457 21.6645 20.5457C20.297 20.5457 19.184 19.3781 19.184 17.9324Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M9.06221 14.7366C9.06221 13.2909 10.1751 12.1234 11.5427 12.1234C12.9102 12.1234 14.0231 13.2909 14.0231 14.7366C14.0231 16.1823 12.9102 17.3499 11.5427 17.3499C10.1751 17.3499 9.06221 16.1823 9.06221 14.7366Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M12.0988 15.8018C12.0988 14.3561 13.2117 13.1886 14.5792 13.1886C15.9468 13.1886 17.0597 14.3561 17.0597 15.8018C17.0597 17.2475 15.9468 18.4151 14.5792 18.4151C13.2117 18.4151 12.0988 17.2475 12.0988 15.8018Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M18.1718 15.8018C18.1718 14.3561 19.2847 13.1886 20.6523 13.1886C22.0198 13.1886 23.1327 14.3561 23.1327 15.8018C23.1327 17.2475 22.0198 18.4151 20.6523 18.4151C19.2847 18.4151 18.1718 17.2475 18.1718 15.8018Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M21.2084 14.7366C21.2084 13.2909 22.3213 12.1234 23.6888 12.1234C25.0564 12.1234 26.1693 13.2909 26.1693 14.7366C26.1693 16.1823 25.0564 17.3499 23.6888 17.3499C22.3213 17.3499 21.2084 16.1823 21.2084 14.7366Z" fill="#B83636" stroke="white" strokeWidth="0.1"/>
                        <path d="M16.0975 6.74685C16.6036 5.85909 17.9194 4.61624 19.134 6.74685M14.0731 5.68148C15.0853 4.08353 17.9194 1.8464 21.1584 5.68148M12.0488 4.61623C13.7357 2.13053 18.3243 -1.34946 23.1828 4.61623" stroke="white"/>
                        <path d="M0 27.1223H35" stroke="white"/>
                        <path d="M7 32.3762C7 32.9285 6.55228 33.3762 6 33.3762C5.44772 33.3762 5 32.9285 5 32.3762C5 31.8239 5.44772 31.3762 6 31.3762C6.55228 31.3762 7 31.8239 7 32.3762Z" fill="white"/>
                        <circle cx="6" cy="32.3762" r="4.5" stroke="white"/>
                        <path d="M30 32.3762C30 32.9285 29.5523 33.3762 29 33.3762C28.4477 33.3762 28 32.9285 28 32.3762C28 31.8239 28.4477 31.3762 29 31.3762C29.5523 31.3762 30 31.8239 30 32.3762Z" fill="white"/>
                        <circle cx="29" cy="32.3762" r="4.5" stroke="white"/>
                    </svg>

                    {/* Links Container */}
                    <div className="ml-auto flex gap-4">
                        <Link href="/" className="text-white">
                            Rasp-Car
                        </Link>
                        <Link href="/dashboard" className="text-white">
                            Dashboard
                        </Link>
                        <Link href="/dashboard" className="text-white">
                            Acelerometer
                        </Link>
                        <Link href="/dashboard" className="text-white">
                            Temperature
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}
