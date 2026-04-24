import React from 'react'

function HeroImages() {
  return (
    <div className="flex items-center mt-32 mx-auto lg:mx-0">
        <div className="flex -space-x-3 pr-3">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
            alt="user3"
            className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]"
          />
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
            alt="user1"
            className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2"
          />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
            alt="user2"
            className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]"
          />
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
            alt="user3"
            className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]"
          />
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
            alt="user3"
            className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]"
          />
        </div>
      </div>
  )
}

export default HeroImages
