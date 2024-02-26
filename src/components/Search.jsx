import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="search" placeholder='Search'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userChatInfo"><span>Tyler</span></div>
      </div>
    </div>
  )
}

export default Search