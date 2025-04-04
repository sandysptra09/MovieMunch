'use client'

import React, { useState } from 'react'
import Link from 'next/link';

// import component from heroui
import {
    Navbar as CustomNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    Input
} from "@heroui/react";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Tv Shows",
            href: "/tv-shows",
        },
        {
            title: "Movies",
            href: "/movies",
        },
        {
            title: "Upcoming",
            href: "/upcoming",
        }
    ];

    return (
        <CustomNavbar onMenuOpenChange={setIsMenuOpen} className='bg-black text-white sm:p-2'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="text-lg font-bold text-inherit">MovieMunch</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-10 text-white" justify="center">
                <NavbarItem>
                    <Link className='text-sm text-white' href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='text-sm text-white' href="/tv-shows">
                        Tv Shows
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='text-sm text-white' href="/movies">
                        Movies
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='text-sm text-white' href="/upcoming">
                        Upcoming
                    </Link>
                </NavbarItem>
            </NavbarContent>
            {/* <NavbarContent justify="end">
                <NavbarItem className="">
                    <Input placeholder="Search..." />
                </NavbarItem>
            </NavbarContent> */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-sm text-black"
                            href={item.href}
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </CustomNavbar>

    )
}
