import React from 'react'

function NavbarCenterBtns({user}) {
  return (
    <div>
      {user ? (
        <div class="hidden md:flex items-center gap-6 ml-7">
          <a href="/posts" class="relative overflow-hidden h-6 group">
            <span class="block group-hover:-translate-y-full transition-transform duration-300">
              Posts
            </span>
            <span class="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-slate-400">
              Posts
            </span>
          </a>

          <a href="/create-post" class="relative overflow-hidden h-6 group">
            <span class="block group-hover:-translate-y-full transition-transform duration-300">
              Create Posts
            </span>
            <span class="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-slate-400">
              Create Posts
            </span>
          </a>

          <a href="/contact" class="relative overflow-hidden h-6 group">
            <span class="block group-hover:-translate-y-full transition-transform duration-300">
              Contact
            </span>
            <span class="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-slate-400">
              Contact
            </span>
          </a>

          <a href="/docs" class="relative overflow-hidden h-6 group">
            <span class="block group-hover:-translate-y-full transition-transform duration-300">
              Docs
            </span>
            <span class="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-slate-400">
              Docs
            </span>
          </a>
        </div>
      ) : (
        <div class="hidden md:flex items-center gap-6 ml-7">
            <a href="/posts" class="relative overflow-hidden h-6 group">
            <span class="block group-hover:-translate-y-full transition-transform duration-300">
              Posts
            </span>
            <span class="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-slate-400">
              Posts
            </span>
          </a>
          <a href="/contact" class="relative overflow-hidden h-6 group">
            <span class="block group-hover:-translate-y-full transition-transform duration-300">
              Contact
            </span>
            <span class="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-slate-400">
              Contact
            </span>
          </a>

          <a href="/docs" class="relative overflow-hidden h-6 group">
            <span class="block group-hover:-translate-y-full transition-transform duration-300">
              Docs
            </span>
            <span class="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-slate-400">
              Docs
            </span>
          </a>
        </div>
      )}
    </div>
  )
}

export default NavbarCenterBtns
