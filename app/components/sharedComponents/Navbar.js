
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe, LogIn, UserPlus, ChevronDown } from 'lucide-react';

const Navbar = () => {
	// Mobile menu toggle state
	const [isOpen, setIsOpen] = useState(false);

	// Navigation menu items configuration
	const navItems = [
		{ name: 'AI Tools', href: '#ai-tools', hasDropdown: true },
		{ name: 'Our Guides', href: '#guides', hasDropdown: true },
		{ name: 'Discussions', href: '#discussions' },
		{ name: 'Journals', href: '#journals' },
		{ name: 'Books/PDFs', href: '#books' },
	];

	return (
		<nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					
					{/* Logo Section */}
					<div className="flex-shrink-0 flex items-center">
						<Link href="/" className="flex items-center">
							<Image 
								src="/Logo Icons/Literary Palace SVG-01.svg"
								alt="Literary Palace Logo"
								width={160}
								height={50}
								className="object-contain h-[50px] w-[160px]"
								priority
							/>
						</Link>
					</div>

					{/* Desktop Navigation Menu */}
					<div className="hidden lg:block">
						<div className="flex items-center space-x-8">
							{navItems.map((item) => (
								<div key={item.name} className="relative">
									<a
										href={item.href}
										className="text-[#001327] hover:text-[#b5d56a] px-3 py-2 text-sm font-medium transition-colors duration-150 flex items-center focus:outline-none"
										style={{ fontFamily: 'Raleway, sans-serif' }}
									>
										<span>{item.name}</span>
										{/* Dropdown indicator */}
										{item.hasDropdown && (
											<ChevronDown className="w-4 h-4 ml-1" />
										)}
									</a>
								</div>
							))}
						</div>
					</div>

					{/* Right Section - Action Buttons (Desktop) */}
					<div className="hidden lg:flex items-center space-x-4">
						
						{/* Language Selector */}
						<button className="p-2 text-[#001327] hover:text-[#b5d56a] rounded-lg focus:outline-none" title="Change Language">
							<Globe className="w-5 h-5" />
						</button>

						{/* Login Button */}
						<button className="text-[#001327] hover:text-[#b5d56a] hover:border-[#b5d56a] px-4 py-2 text-sm font-medium border border-[#07294e] rounded-md flex items-center space-x-2 focus:outline-none">
							<LogIn className="w-4 h-4 stroke-current" />
							<span>Login</span>
						</button>

						{/* Sign Up CTA Button */}
						<button className="bg-[#b5d56a] text-[#001327] px-4 py-2 text-sm font-medium rounded-md flex items-center space-x-2 focus:outline-none">
							<UserPlus className="w-4 h-4" />
							<span>Sign Up for A+</span>
						</button>
					</div>

					{/* Mobile Menu Toggle Button */}
					<div className="lg:hidden">
						<button 
							onClick={() => setIsOpen(!isOpen)} 
							className="text-[#001327] hover:text-[#b5d56a] p-2 rounded-lg focus:outline-none"
							aria-label="Toggle menu"
						>
							{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* --------------------------------------------------- */}
			{/* Mobile Navigation Menu (Smooth Slide In/Out) */}
			{/* --------------------------------------------------- */}
			<div
				className={`
					lg:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-lg mt-16
					transform transition-transform duration-500 ease-in-out
					${isOpen ? "translate-x-0" : "-translate-x-full"}
					z-40
				`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1">
					{/* Mobile Navigation Links */}
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-[#001327] hover:text-[#b5d56a] hover:bg-[#b5d56a]/5 
							block px-3 py-2 rounded-md text-base font-medium"
							style={{ fontFamily: 'Raleway, sans-serif' }}
							onClick={() => setIsOpen(false)}
						>
							{item.name}
						</a>
					))}

					{/* Mobile Action Buttons */}
					<div className="pt-4 border-t border-gray-200 space-y-2">
						
						{/* Mobile Login Button */}
						<button className="w-full text-left text-[#001327] hover:text-[#b5d56a] hover:bg-[#b5d56a]/5 px-3 py-2 text-base font-medium border border-gray-300 rounded-md flex items-center space-x-2">
							<LogIn className="w-4 h-4 stroke-current" />
							<span>Login</span>
						</button>

						{/* Mobile Sign Up Button */}
						<button className="w-full bg-[#b5d56a] text-[#001327] px-3 py-2 text-base font-medium rounded-md flex items-center space-x-2">
							<UserPlus className="w-4 h-4" />
							<span>Sign Up for A+</span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
