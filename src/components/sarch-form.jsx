import React from "react";
import { Script } from "gatsby";

const SearchForm = () => {
  return (
    <>
      <Script strategy="idle" src="https://cse.google.com/cse.js?cx=339ed3c3548d74069" />
      <div className="gcse-search" />
    </>
  )
}

export default SearchForm